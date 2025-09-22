import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'
import path from 'path'

dotenv.config()

const app = express()
app.use(express.json())

const allowOrigin = process.env.ALLOW_ORIGIN || '*'
app.use(cors({ origin: allowOrigin === '*' ? true : allowOrigin }))

const botToken = process.env.TELEGRAM_BOT_TOKEN
const defaultChatId = process.env.TELEGRAM_CHAT_ID

console.log('--- Telegram Bot Configuration ---')
if (!botToken) {
  console.error('❌ ERROR: TELEGRAM_BOT_TOKEN is not set in your .env file.')
  console.log('Please add TELEGRAM_BOT_TOKEN="your_bot_token" to your .env file.')
} else {
  console.log('✅ TELEGRAM_BOT_TOKEN is loaded.')
}
if (!defaultChatId) {
  console.error('❌ ERROR: TELEGRAM_CHAT_ID is not set in your .env file.')
  console.log('Please add TELEGRAM_CHAT_ID="your_chat_id" to your .env file.')
} else {
  console.log('✅ TELEGRAM_CHAT_ID is loaded.')
}
console.log('------------------------------------')

app.post('/api/telegram/send', async (req, res) => {
  console.log('\n--- [POST /api/telegram/send] ---')
  console.log(`[${new Date().toISOString()}] Received a new request.`)
  try {
    const { message, chatId, parseMode } = req.body || {}

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      console.error('❌ Validation Error: Message is missing or empty.')
      return res.status(400).json({ ok: false, error: 'Message is required' })
    }

    const finalChatId = chatId || defaultChatId
    if (!botToken || !finalChatId) {
      console.error('❌ Server Configuration Error: Bot token or Chat ID is missing.')
      return res.status(500).json({ ok: false, error: 'Server is missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID' })
    }

    console.log('Attempting to send message to Telegram...')
    const tgResp = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: finalChatId,
        text: message,
        parse_mode: parseMode || 'HTML',
      }),
    })

    const tgJson = await tgResp.json()
    console.log('Received response from Telegram API:', JSON.stringify(tgJson, null, 2))

    if (!tgResp.ok || !tgJson.ok) {
      console.error('❌ Telegram API Error:', tgJson.description || 'Unknown error')
      return res.status(502).json({ ok: false, error: tgJson.description || 'Telegram API error', telegram: tgJson })
    }

    console.log('✅ Successfully sent message to Telegram.')
    return res.json({ ok: true, telegram: tgJson })
  } catch (err) {
    console.error('❌ Unexpected Server Error:', err)
    return res.status(500).json({ ok: false, error: err.message || 'Unexpected error' })
  }
})

const port = process.env.PORT || 5001
app.listen(port, () => {
  console.log(`\n🚀 Backend server is running and listening on http://localhost:${port}`)
  console.log(`Ensure your .env file is in the root directory: ${path.resolve(process.cwd())}`)
})
