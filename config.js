const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94784958473";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_09_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICA0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICA2MixcbiAgICAgICAgMjE3LFxuICAgICAgICA5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUwLFxuICAgICAgICA3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDc4LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInEyQnhxeGc1K1A4Q293eHd4K0JRL3lIeHFEL2NFWFBUd01IRStyb0JRT3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODQ5NTg0NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIwODZBMDhFMjhGMDBDOEYxMjNGM0FFRDhFQjIxQTBEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzM5ODU1OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg0OTU4NDczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMDhCNDhCQzQ0REZGRURBQUM5NEY1Q0I1QzY0MTJCRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTczOTg1NThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVzNSRW9Qb1RUTGV5VDhvNTVnV0VOZ1wiLFxuICBcInBob25lSWRcIjogXCIyNmEyMWFmMi01OTYzLTQ0OWUtODQwOC1jZTAwMGRjZmJiMWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMSxcbiAgICAgIDIxLFxuICAgICAgNzQsXG4gICAgICAxMSxcbiAgICAgIDEyNyxcbiAgICAgIDI0MyxcbiAgICAgIDgwLFxuICAgICAgODUsXG4gICAgICA4LFxuICAgICAgMjE3LFxuICAgICAgOCxcbiAgICAgIDgzLFxuICAgICAgODcsXG4gICAgICAxMTksXG4gICAgICAxNjcsXG4gICAgICA3MCxcbiAgICAgIDIxMSxcbiAgICAgIDEzMSxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDY5LFxuICAgICAgMTIxLFxuICAgICAgNDcsXG4gICAgICAxODEsXG4gICAgICAyMTMsXG4gICAgICAyNTEsXG4gICAgICA0OSxcbiAgICAgIDI0NixcbiAgICAgIDEyNSxcbiAgICAgIDIyNyxcbiAgICAgIDksXG4gICAgICAxOTYsXG4gICAgICAxMjYsXG4gICAgICAxMixcbiAgICAgIDIwMixcbiAgICAgIDQyLFxuICAgICAgNzgsXG4gICAgICA1LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRE1ZTUZBWjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg0OTU4NDczOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEZGRcIixcbiAgICBcImxpZFwiOiBcIjI0MDI3ODE4NzI4MjYzODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09tbWhjWUZFSlhZOWJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3hEeUh2YVZkTzFvLyt5U1hJbnpVZmhGQTQwc3pRM0FpUUZObytqdEpScz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2MVVON0VDd1dNSnJ4NHB1aGhqU0w5NmxaSWV6REkvR0ZVRlpVc2hMUTBaTFZnQm1QdGdKQTFZZVZGZVFhb0RQRmw5VWtlQkQwVnJwUTc2VmxLRkpDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvTzRBaThkTjNuT0I3SU5XcEFUd0pIK2pybkZrR0l5Wkc0aVAwWGtVTGlnZ05VdUVELytVNGZHUWE0Z2V6Y2RqblVHVUYrZ2xlNEJKbGxxTkJRS1JBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NDk1ODQ3MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzM5ODU1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQxR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDFHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYW5UMmFObHA0cytnUG5pTks0NXRoSEZTbHRLRlBGSjBUQXRDYklmKy82cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDg5MDY0ODA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTczOTg1NTY4NjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
