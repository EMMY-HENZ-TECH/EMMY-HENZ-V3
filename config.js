//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEcxb0d0cFN3cVJ4Wm1JS0JzNlpjY1VUNlIyNWZGRmxFdFJROUJOaWFFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3lrNk05Q1czYjIyemJnZko2TkNqMEIrUmdzc3FqMlVXKzdIZnVYeUduWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSFR5cUs4RnhDTU1iUWlWZlBsYWcxS1JnZWtuNXZMZFNZQjBqUnROZ1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6NHFRRFduR1JBR2hDMnFSQU9yRE9mTTBUSk9iRXdSYnRLeFZhaHpQK0FvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVIYTlPbzRjaVRLaGljbloxNzFlRFdROUl2ZHNqTFRjdmplcEVldzgyWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdKQmNNcHByTnRlOHR6Umhtd05JNEdtbU9jRjdqRkRNQm8wcXNudXdKVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJyVVRhUEVhejZjSGtuN1l4SFRiaXdiQWF4R3BnSlMrOEZkUHVFQ2prYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFFBSkVwekUzZ1FaSEtmVlRSblUvb3Uvc25hS1dkL2FuT1NwdmV2Wi9DQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InllSTArSE1YSHo1ZEJRejJKZ3Z4UHV1bFM0T05nby9hT2VNZWtYaEovMEM3MkdOcmJYdW5xWXY5RW1YbUVwYnVxdjc0NTY5N1IwY3JEV2tqQUZ3Z0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6Ikl6aEtJOVh1SmpPaUZlY0t5aDVVL3pQcENERmk3dUZZTnhsa0k2bDcvelU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJCSVNOOU1mVDVld1JVOTVfcWhZYkEiLCJwaG9uZUlkIjoiYWNjNzQzZGUtZDEyNi00NjYyLTg0MzItZTBiMjZkN2Q2ODBkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKbWpib0h1TnI3aWdyNXpDTnZYbVFvYTNYQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuTjViNHUra3dhT0JQMVJERUErVXRobE1iV3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTTlMN1g5MlciLCJtZSI6eyJpZCI6IjIzNDkxMjE3ODU2Mjc6NDNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGVyZWsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t2MzQ0UUVFSnEwK2JjR0dCSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNYR3Q1Y2hCc2JFT2EzMy9GcjAzdG1wQ0tvSXNOcStqV0RzQkxDVm11M1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9yNmZWaGdYc3cwZlI4WW1MUk1XdTJjV0I2ZDJCV0JmUExhQi9VUHNlbmdyMXdmVTNmY0xPRDljdFN3YVJNV3VqSmdzRzhqL29hc2Q2Y1l6WGx0L0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlRVF4OHdCNXZvTXY5TnUwRlBMTDVrZXhOVVFXOVlmWGhlYktjTjBhQWNUcFEzRi9QNmtPV1k4bTBmRzVDZE0zdkN5RUwvdmhISUE5ckoyREFRRkJDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjE3ODU2Mjc6NDNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWx4cmVYSVFiR3hEbXQ5L3hhOU43WnFRaXFDTERhdm8xZzdBU3dsWnJ0MCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzk0NTI1NX0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
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
