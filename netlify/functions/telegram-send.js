exports.handler = async function (event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ ok: false, error: "Method Not Allowed" })
    }
  }

  try {
    const body = JSON.parse(event.body || '{}')
    const { message, parseMode } = body

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ ok: false, error: "Message is required" })
      }
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    console.log('Environment check:', { 
      botToken: !!botToken, 
      chatId: !!chatId,
      messageLength: message.length 
    })

    if (!botToken || !chatId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          ok: false,
          error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID"
        })
      }
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: parseMode || 'HTML'
      })
    })

    const result = await response.json()
    console.log('Telegram API response:', result)

    if (!response.ok || !result.ok) {
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({
          ok: false,
          error: result.description || 'Telegram API error',
          details: result
        })
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, result })
    }

  } catch (error) {
    console.error('Function error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        ok: false, 
        error: error.message || 'Unexpected error' 
      })
    }
  }
}