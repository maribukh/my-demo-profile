export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { clientName, clientEmail, service, msg } = req.body;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ error: "Missing server configuration" });
  }

  const text = `
🚀 New Service Order!

👤 Client: ${clientName}
📧 Email: ${clientEmail}
🛠 Service: ${service}
📝 Message:
${msg}
  `;

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      }
    );

    const data = await telegramResponse.json();

    if (!telegramResponse.ok) {
      return res.status(400).json({ error: data });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
