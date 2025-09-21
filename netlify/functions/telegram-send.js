import fetch from 'node-fetch';

export const handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ ok: false, error: 'Method Not Allowed' }) };
  }

  try {
    // Parse the request body
    const body = JSON.parse(event.body);
    const { message, parseMode } = body || {};

    // Validate the message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'Message is required' }) };
    }

    // Get environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const defaultChatId = process.env.TELEGRAM_CHAT_ID;

    // Validate environment variables
    if (!botToken || !defaultChatId) {
      return { 
        statusCode: 500, 
        body: JSON.stringify({ 
          ok: false, 
          error: 'Server is missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID' 
        }) 
      };
    }

    // Send message to Telegram
    const tgResp = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: defaultChatId,
        text: message,
        parse_mode: parseMode || 'HTML',
      }),
    });

    const tgJson = await tgResp.json();

    if (!tgResp.ok || !tgJson.ok) {
      return { 
        statusCode: 502, 
        body: JSON.stringify({ 
          ok: false, 
          error: tgJson.description || 'Telegram API error', 
          telegram: tgJson 
        }) 
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, telegram: tgJson })
    };
  } catch (err) {
    console.error('[telegram] Error sending message:', err);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ 
        ok: false, 
        error: err.message || 'Unexpected error' 
      }) 
    };
  }
};