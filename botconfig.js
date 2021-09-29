module.exports = {
  Admins: ["470483866998669352", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-kz ", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODU0NTUxNjUzMDU4MjE1OTM2.YMllPg.bHiWrSvZ5FJ68YLdHxMXFVgjGaI", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "854551653058215936", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "sqo_04CNNT5NMjPMXaTCPch1xcGo20TJ", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "a87a72f864534922bd942dc530ac7c9d", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "5d81d59af5504ed0b1daebf62d4158b4", //Spotify Client Secret
  },
};
