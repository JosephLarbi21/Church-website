# Dream House Chapel International — React + Tailwind + AI Chat

## Run locally
```bash
npm install
npm run dev:full
```
- Frontend: http://localhost:5173
- Backend (AI): http://localhost:3001

If you prefer to run separately:
```bash
npm run server
npm run dev
```

## Enable real AI (optional)
1. Copy `.env.example` to `.env` and add your key:
```
OPENAI_API_KEY=sk-...
PORT=3001
```
2. In `server/index.js`, uncomment the OpenAI block.
3. Restart the server: `npm run server`

Without a key, the chatbot answers with helpful built‑in responses (service times, giving, directions, prayer).

## Build for production
```bash
npm run build
npm run preview
```
