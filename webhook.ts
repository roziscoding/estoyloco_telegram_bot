import { webhookCallback } from "grammy";
import "std/dotenv/load.ts";
import { bot } from "./bot.ts";

const TOKEN = Deno.env.get("TELEGRAM_TOKEN") ?? "";
export const secretToken = TOKEN.replaceAll(":", "_");

const handler = webhookCallback(bot, "std/http", { secretToken });
Deno.serve((req) => handler(req));
