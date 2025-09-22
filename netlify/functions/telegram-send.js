// netlify/functions/sendTelegram.js
exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ ok: false, error: 'Method Not Allowed' }) };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { message, parseMode } = body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'Message is required' }) };
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log('botToken exists:', !!botToken, 'chatId exists:', !!chatId);

    if (!botToken || !chatId) {
      return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID' }) };
    }

    const resp = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: parseMode || 'HTML'
      })
    });

    const json = await resp.json();
    console.log('Telegram API response:', json);

    if (!resp.ok || !json.ok) {
      return { statusCode: 502, body: JSON.stringify({ ok: false, error: json.description || 'Telegram API error', telegram: json }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, telegram: json }) };
  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: err.message || 'Unexpected error' }) };
  }
};