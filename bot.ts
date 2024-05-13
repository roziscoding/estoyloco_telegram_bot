import { Bot, InlineQueryResultBuilder } from "grammy";

const AUDIO = Deno.env.get("AUDIO_FILE_ID") ?? "";
const TOKEN = Deno.env.get("TELEGRAM_TOKEN") ?? "";

export const bot = new Bot(TOKEN, { client: { canUseWebhookReply: () => true } });

bot.use((ctx, next) => {
  const updateType = Object.keys(ctx.update).find((key) => key !== "update_id");
  console.log(`[${updateType}] from @${ctx.from?.username ?? ctx.from?.first_name}`);
  return next();
});

bot.on("inline_query", (ctx) => {
  ctx.answerInlineQuery([
    InlineQueryResultBuilder.voiceCached(
      "0",
      "estoy loco 🤪",
      AUDIO,
    ),
  ], { cache_time: 0 });
});

bot.chatType("private")
  .drop((ctx) => ctx.msg?.via_bot?.id === ctx.me.id)
  .on("message", (ctx) => ctx.reply("lalalala 🤪"));
