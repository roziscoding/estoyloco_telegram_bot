import "std/dotenv/load.ts";
import { bot } from "./bot.ts";

bot.start({ onStart: ({ username }) => console.log(`Listening as @${username}`) });
