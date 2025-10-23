// Simple Node.js bot to send WebApp button and receive web_app_data
// USAGE: npm i node-telegram-bot-api
const TelegramBot = require('node-telegram-bot-api');
// IMPORTANT: Do NOT commit your real token to public repos.
// Replace the placeholder below locally with your bot token.
const token = process.env.TG_BOT_TOKEN || '7991288164:AAEw_zu2SwZ4OqteNnlL7W1mOPJ-R6vWCWE';
if (token === 'REPLACE_WITH_YOUR_BOT_TOKEN') console.warn('Set 7991288164:AAEw_zu2SwZ4OqteNnlL7W1mOPJ-R6vWCWE env var or replace token in file before running.');
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.6854936117;
  const webAppUrl = 'https://kungfuya.github.io/telegram-miniapp/'; // <- replace with your GitHub Pages URL
  bot.sendMessage(chatId, '🚀 Open Aviator Hack Premium:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Open Mini App', web_app: { url: webAppUrl } }]
      ]
    }
  });
});

bot.on('message', (msg) => {
  if (msg.web_app_data) {
    console.log('Received web_app_data:', msg.web_app_data.data);
    bot.sendMessage(msg.chat.id, '✅ Action received from Mini App.');
  }
});
