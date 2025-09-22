import dotenv from 'dotenv'
import fetch from 'node-fetch'

// This loads environment variables from your Netlify UI settings.
dotenv.config()

const botToken = process.env.TELEGRAM_BOT_TOKEN
const defaultChatId = process.env.TELEGRAM_CHAT_ID

const headers = {
  'Access-Control-Allow-Origin': '*', // Allow requests from any origin
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
};

export async function handler(event) {
  // Handle CORS preflight requests for browsers
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ ok: false, error: 'Method Not Allowed' }),
    }
  }

  console.log('\n--- [Netlify Function: telegram-send] ---')
  console.log(`[${new Date().toISOString()}] Received a new request.`)

  try {
    // The request body from the frontend is in event.body
    const { message, chatId, parseMode } = JSON.parse(event.body || '{}')

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      console.error('❌ Validation Error: Message is missing or empty.')
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ ok: false, error: 'Message is required' }),
      }
    }

    const finalChatId = chatId || defaultChatId
    if (!botToken || !finalChatId) {
      console.error('❌ Server Configuration Error: Bot token or Chat ID is missing on Netlify.')
      if (!botToken) console.error('TELEGRAM_BOT_TOKEN is not set in Netlify environment variables.');
      if (!finalChatId) console.error('TELEGRAM_CHAT_ID is not set in Netlify environment variables.');
      
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ ok: false, error: 'Server is missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID' }),
      }
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
      return { statusCode: 502, headers, body: JSON.stringify({ ok: false, error: tgJson.description || 'Telegram API error' }) }
    }

    console.log('✅ Successfully sent message to Telegram.')
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, telegram: tgJson }),
    }
  } catch (err) {
    console.error('❌ Unexpected Function Error:', err)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, error: err.message || 'Unexpected error' }),
    }
  }
}