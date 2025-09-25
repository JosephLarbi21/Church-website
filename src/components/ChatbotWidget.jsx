import { useEffect, useRef, useState } from "react"

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm here to help you with service times, directions, giving, and prayer requests and more. How can I help?",
    },
  ])
  const [input, setInput] = useState("")
  const boxRef = useRef(null)

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight
    }
  }, [messages, open])

  async function sendMessage(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    const newMsgs = [...messages, { role: "user", content: text }]
    setMessages(newMsgs)
    setInput("")

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMsgs.slice(-10) }),
      })

      if (!res.ok) throw new Error("Network response was not ok")
      const data = await res.json()
      setMessages((m) => [...m, { role: "assistant", content: data.reply }])
    } catch (err) {
      console.error(err)
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "⚠️ Sorry, I could not reach the assistant right now.",
        },
      ])
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="w-80 md:w-96 h-96 bg-white border rounded-2xl shadow-xl flex flex-col overflow-hidden">
          {/* Header with close button */}
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <div className="font-semibold">Church Assistant</div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-gray-600 hover:text-red-600"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={boxRef} className="flex-1 overflow-auto p-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "text-right" : "text-left"}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-2xl ${
                    m.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-3 border-t flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-2"
              placeholder="Ask about service times, giving..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">
              Send
            </button>
          </form>
        </div>
      )}

      {/* Floating Chat Button (only opens) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-3 rounded-full shadow-lg bg-blue-600 text-white"
        >
          Chat bot
        </button>
      )}
    </div>
  )
}
