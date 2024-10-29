//#ENJOY
/**
**/
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "donhackerug@gmail.com";
global.location = "Uganda,Kampala.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "256704376077@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
global.github = process.env.GITHUB || "https://github.com/Noolayko/FI-BOT-UGANDA-";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ca3524b5910d72a0844b7.jpg";
global.devs = "256704376077";
global.sudo = process.env.SUDO || "971567660403";
global.owner = process.env.OWNER_NUMBER || "971567660403";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1BJYmx4NjJJZDcybmtuYUF4YXhZS1dwZlBaMFlDcmZCNjBreExjL0FIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnhPV3pldlNiZ2NvL3d2alY4QUFpcnRNYVJKTFFYWUVUM1RkZTQzc28wYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT2pGbXlIcjFLTUw1VDR2UEoxMHlPY3VkZFBhSHJXWWJtQmRRalpRaG5jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxbEVzK1lLSHZPWXVvQ1FXQ0l3WjNZUkMyRlk2Q21GRURwQmxPaUF2UDFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQbFFUQnBPQUVQbWpRcFg0NElSMnhCaytyWk5HSE44dzlSYWJyaThNVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjgzODQ0Y0VEZ0UrU0VqNFYybHZsNmtYWFVMRFFSam1jQ00yOStKd3ZLbWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk9iMVQvUEZ2RkthM21HbWJyVFlTUHQzK3NoSkVnZU83WTExV25CcEMxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHc1R0laVUlWaFZraElkb0lvVEw4bFA5UFJJSUJkZGp1T1Nsand1d3Qxcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkczS2JuNUFSRFBzdHM3TG5XTklOdlhFTEV1eC9OQkdvbVhsWTlTYnJRU1YrcFQ1MWhQSHZTekkzZ3E5bjBqNkVwT3c0UTIyOVdkV0JrZTFQTmthMUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiI0QW1oZ2RNc09raWY2QnRsQTU5VEJCMWdmQVpCdEtmN0NEUHA4VXpVcG5VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk3MTU2NzY2MDQwM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNzdCQjRENzNDOTczNzU4Rjc4QzUwOTkwNzcxMEU2RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwMjMxOTQzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NzE1Njc2NjA0MDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjIzMDc4MUQ1Mjg0M0Q0OTA2REI0NTEwQUIzOUNCRDUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDIzMTk0NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQWNLSnN1RUtSanVhMGsyZmhPcks2dyIsInBob25lSWQiOiI4MDdhNzA3Ni00MGZiLTRiYjEtYThjZS0wYTE0OGMzM2MwMjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHpGdUZsblpJZ2J1TzdaQmFBVkp6UEk2cWcwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJhbERMSURjMXdXM2N3eU01MndJV0tSRUM1OD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFTkJDRjQ0QyIsIm1lIjp7ImlkIjoiOTcxNTY3NjYwNDAzOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoidG9wbGVnZW5kNzczIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZmJsUGtGRVBmOGhMa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJURWU4eENqdEZOU2RuZnUwWXZ4Z04raVBJaTN3MTdaR0ZLTnhLRzdPNFJvPSIsImFjY291bnRTaWduYXR1cmUiOiJBQno1YzgvK1QwQ2g5OGZWQjAvTXpaTzduVGIrc0ZZOFpUREtZWVlDNWo4Ti9TbWl1VS9VRkRuYllWRXJjcm5oSVhsVlpEUVZPVlRGeExSQlF4VlZCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM1JxQWZjQmdHaW52MzNHUkMyblZIZUg5eCtEZUFaanAzN1FUZVo4WHA2MjByTnJGMzA0bGxlMFkzTmpjK3RpV2U3cWxpS1QySVM2dUczeEVLbHJiQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NzE1Njc2NjA0MDM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVeEh2TVFvN1JUVW5aMzd0R0w4WURmb2p5SXQ4TmUyUmhTamNTaHV6dUVhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwMjMxOTQwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU8vaCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝚰 𝚩𝚯𝚻 𝐔𝐆",
  author: process.env.PACK_AUTHER || "DON TECH",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐅𝚰 𝚩𝚯𝚻 𝐔𝐆",
  ownername: process.env.OWNER_NAME || "DON TECH INC",
  errorChat: process.env.ERROR_CHAT || "971567660403",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "𝐅𝚰 𝚩𝚯𝚻 𝐔𝐆").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
