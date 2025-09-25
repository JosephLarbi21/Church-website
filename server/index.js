import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch' // needed for AI calls
import { churchInfo } from './churchInfo.js'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001

// --- Simple fallback answers if AI not available ---
function mockAnswer(userText) {
  const t = userText.toLowerCase()
  if (t.includes('time') || t.includes('service'))
    return '⏰ Our main Sunday service starts at 9:00 AM. Midweek Bible Study is Wednesday at 6:30 PM.'
  if (t.includes('location') || t.includes('where'))
    return '📍 We are in Accra, Ghana. Check the Contact page map for directions.'
  if (t.includes('give') || t.includes('offering') || t.includes('tithe'))
    return '💳 You can give via Mobile Money or bank transfer on the Giving page.'
  if (t.includes('pastor') || t.includes('leadership'))
    return '👤 Our founder is Rev. Frederick Adjei-Boadi. Leadership info is on the About/Ministries pages.'
  if (t.includes('prayer'))
    return '🙏 We would be honored to pray with you. Please share your request here or on the Contact page.'
  return 'ℹ️ Thanks for asking! You can check our menus for Sermons, Events, and Giving — or ask me about service times, directions, giving, or prayer.'
}

// --- AI-powered answer using OpenAI ---
async function aiAnswer(messages, latest) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.warn("⚠️ No OPENAI_API_KEY found. Using mock answers only.")
    return mockAnswer(latest)
  }

  try {
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are Dream House Chapel’s helpful assistant. Use this context:\n${churchInfo}\nAnswer warmly, clearly, and kindly.`,
          },
          ...messages,
        ],
        max_tokens: 200,
      }),
    })

    if (!resp.ok) {
      console.error("❌ OpenAI API error:", resp.status, await resp.text())
      return mockAnswer(latest)
    }

    const data = await resp.json()
    return data.choices?.[0]?.message?.content?.trim() || mockAnswer(latest)
  } catch (err) {
    console.error("❌ Fetch error:", err)
    return mockAnswer(latest)
  }
}

// --- API route ---
app.post('/api/ai', async (req, res) => {
  const messages = req.body?.messages || []
  const latest = messages[messages.length - 1]?.content || ''
  const reply = await aiAnswer(messages, latest)
  res.json({ reply })
})

// --- Start server ---
app.listen(PORT, () => {
  console.log(`✅ AI server running on http://localhost:${PORT}`)
})
