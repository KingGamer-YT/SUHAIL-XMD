const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_28_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA3LFxuICAgICAgICAzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICA3MixcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExLFxuICAgICAgICA5MSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicEp1U3BocThKdkpGOFVOM092RnVmN2dQMWJvQnFZOXdvalZWMXd5Y1Fsbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY3NzI1OTg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NDJCMEMwRjVFNzQzMjYzRDFGQ0E0NDgzREJBNUY1QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc5NTg0NzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY3NzI1OTg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MTY0MkM2OTM2MjA0RTYwOTY4QjlBRDM2MUE4MTlGN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc5NTg0NzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUnVuWEhaM2pTZjZXWjZscVAyeW5md1wiLFxuICBcInBob25lSWRcIjogXCI1MzI2ZTAzNS02YWQ4LTRkOTctYjdmZC04NjZjNTUzMTNhMzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAzNyxcbiAgICAgIDY0LFxuICAgICAgMTk5LFxuICAgICAgNCxcbiAgICAgIDE4NyxcbiAgICAgIDE5MixcbiAgICAgIDM3LFxuICAgICAgMTEsXG4gICAgICAxNDcsXG4gICAgICAyMzMsXG4gICAgICAyNixcbiAgICAgIDE0MixcbiAgICAgIDI2LFxuICAgICAgMTI1LFxuICAgICAgMTk0LFxuICAgICAgMjU1LFxuICAgICAgMTY4LFxuICAgICAgNzcsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMjksXG4gICAgICAyMzEsXG4gICAgICAxNzUsXG4gICAgICA5NSxcbiAgICAgIDE4MyxcbiAgICAgIDI0NCxcbiAgICAgIDIyLFxuICAgICAgODcsXG4gICAgICAxNzAsXG4gICAgICAzNixcbiAgICAgIDEwNSxcbiAgICAgIDEwNCxcbiAgICAgIDE2NCxcbiAgICAgIDExNyxcbiAgICAgIDg0LFxuICAgICAgMTIwLFxuICAgICAgODMsXG4gICAgICA3OSxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1RMmFFQ0VNYWIrcmNHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiWWxYWGw5SlY2K21mMGhSN0JHZ1ZPR3BrbFQyNkQra1VGaFNPejEyS2dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZZWU02MGR5ck5GRFNOSmxzcTdoeElGMXVLU3p5bWVURmdWSGJnTmRUd0daVFBoVkhxcVdtdkorbEdWRTlsV1AxcnU1cWdkWFZTSi82NDFiSGJ6SUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhHdGI0a3YzeE95TEZtQ04yR1pyY2JlTkZCaVRQLysxMCtyL3hVVXlybjNhT2wvWmxEL3JjSFRQL3Y4OWxQQ1NDZHZKUFk1MzMvVGFuWlpCU3R4ZmlRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NzcyNTk4NzoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjczMzY5ODM4NTEwMjA6MjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiREAtSk9L4oKsUlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NzcyNTk4NzoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3OTU4NDczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWZlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNZlcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxTWgwMTBXNmJHYmxwQ2poalRmSzYyaGZxSkdrckVQb1pjNXVoa2YzeFFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYwNzUzNzE2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWZYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOUt1V1pUZnBYRXpibXd2REQrbkJjdXdTSG5EWUhBWWt4Vjk1WGd5NTNnWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDc1MzcxNjEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzI2OTUzMDQ2ODY0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWZZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiKzB0VE52NGNFZXF4QVNYVlZSOUhvNDcrS1RFL1VOY09kS09zZ0QvU2dGdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDc1MzcxNjEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWZaLmpzb24iOiAie1wia2V5RGF0YVwiOlwic1BiQjVUK1pLWmZ3Z0NNbDhXU3poNmVrUklyMm1wQkZpbWVOc1VmaStIbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDc1MzcxNjEsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWZhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT0Vmamh4T0dYUDFpOEV3VldTbjBDK3JJRkhIR1F3SEFuK1YyTDFOWW9Haz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDc1MzcxNjEsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNZmIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRQXR2WEVtaHAyOTVuaGxILzEyVklBcmVrd244djdpdUtmLzd2ZXRrdTdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYwNzUzNzE2MSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNZmMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5ZEJqSWNjbHUweHJHM0hHUmt5Smp1YVExTENKVnBxSk1pMnFjb3E2VjZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYwNzUzNzE2MSxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw3LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1mZC5qc29uIjogIntcImtleURhdGFcIjpcImtmYnVBYlE5TFV4REVZRFNTTWhJcnYvaUlXRFBia2dmM2o1d2xlNVdlb1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjA3NTM3MTYxLFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDddfSxcInRpbWVzdGFtcFwiOlwiMTcyNzk1ODQ1NzExOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1mZS5qc29uIjogIntcImtleURhdGFcIjpcIng3YzF1OTJJZjdSb3dkM285Zm82Q3FDRjk0NVg4UmxIbE41ZjBzZTlJc0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjA3NTM3MTYxLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw3LDExXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc5NTg0NzU0MDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
