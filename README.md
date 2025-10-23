# Aviator Hack Premium — Telegram Mini App (GitHub Pages)

This repo contains a ready-to-deploy Telegram Mini App (WebApp) named **Aviator Hack Premium**.

## What changed in v2
- Primary action button text set to **Play Signal**.
- Stronger gradient visual style applied (dark blue/orange accent).
- `bot.js` intentionally contains a placeholder token; DO NOT paste your real bot token into a public repo.

## Security note — IMPORTANT
You shared a bot token in chat. Bot tokens are **secrets**. If this token has been shared publicly or with anyone else, you **must** revoke it and generate a new one using BotFather:

1. Open Telegram → search `@BotFather`
2. Send `/token` or `/revoke` commands for your bot, or use `/mybots` → select bot → API Token → Revoke.
3. After revoking, generate a new token and keep it private.

## How to deploy
1. Create a new public GitHub repo (e.g. `telegram-miniapp`).
2. Upload `index.html` to the repository root and commit.
3. In repo **Settings → Pages**, choose branch `main` and folder `/ (root)`. Save.
4. After a minute GitHub Pages will publish at:
   ```
   https://<your-username>.github.io/<repo>/
   ```
5. Replace the `webAppUrl` in `bot.js` with your published URL.
6. Set your bot token locally as an environment variable before running:
   On Windows (PowerShell):
   ```
   $env:TG_BOT_TOKEN='your_new_bot_token_here'
   node bot.js
   ```
   On macOS/Linux:
   ```
   export TG_BOT_TOKEN='your_new_bot_token_here'
   node bot.js
   ```
   OR directly edit `bot.js` locally to paste the token (not recommended for public repos).

## Notes
- This Mini App does **not** include payment integration. Use the Deposit button to open your payment page.
- For security, verify `initData` on your backend before trusting user identity.
