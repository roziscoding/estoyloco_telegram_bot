import { Api } from "grammy";
import "std/dotenv/load.ts";
const [url] = Deno.args;

const TOKEN = Deno.env.get("TELEGRAM_TOKEN") ?? "";
export const secretToken = TOKEN.replaceAll(":", "_");

const api = new Api(TOKEN);
console.log(await api.setWebhook(url, { secret_token: secretToken }));
