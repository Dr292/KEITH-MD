/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61V2W6rSBD9l361c8O+WIo07MYEG+MtzmgeMDQYgwF3N2B85X8fYSdKpLtlpOGp1XRVnao6p+o7KMoUQwd2YPQdVChtAgL7I+kqCEZAreMYIjAEUUACMAILm94QpUVLi8ylmj+Q6TZxOlWy9hya76hDFOsOaq3SzcMncB2Cqt7lafgbh7Qr+m5FqFfjZIRHbcYSS5d9sdQx5CIHCx7erJPHxpvR9hO49h6DFKVFYlR7eIQoyB3YeUGKvgjfsF9Wwm4ntd0K+0Xs2Kb/TK80y9XkVkp2cynOX5zDgivsr8F/HFsvy+RirpUTazfm8ZXNBF+WKCO8NKeUXz/PkgwzDaEYfIeP06SAkR3BgqSk+3LdLWcr49e8dcVNIpgqtlhpfPG4FpXmyXh0wpUPO76wqXblfg34TJPHYXberHYGgyZGqj+jCRPH87XgZYNVs26rwpE3uusb3GfgHnrnSvZf6p7NlO1mqZsiw9RKp7HrznbtsbnbBVtih4eDYbFrL3uh7Yz7Im2K1jH3s9NksqzJNODpyttavOqjl/aZC1Jxims2GZ+Mhbb6gB+QGv0O5XkSJrQm2EKzxOdHqRXyTaUkWqUu2MM0cmdTVdvki/NsopzrYtbkxuKgl+UgP0X7Ka6K1dgmMp75e1t1HmXOQz4lbpL50y2jDHZ2BEb0dQgQTFJMUEDSsrjdsewQBFGzgCGC5FZekE9eVo1dD2gLyWUaLRWh3oeNOKDyxU4UJoE5jozA4RJBSJ7AEFSoDCHGMBqnmJSocyHGQQIxGP1961SfNILHksBJGoERYHhO5ARKYila/At/a/cBwUFVfSsgAUMQo/LoQjAiqIZDcDMQTJnXVcpQddmkTFMUDJ4WFUmlaYkxBE7uUzzegy7TI8QkOFZgRIscJ3CCyFDX4f+Dg5JVRTJo06R4hadFWZN1maMp0eQ0mjNk6Q84mP8LhyoZPGXqCiuqmqKqEqVqiiCxmiRJNG+Yf8DBcdd/hqCAZ3LXU88Clh6COEWYrIq6yssgehfb+88gDMu6IIuuCLX+ABEYfbqGhKRFgvvM6iJA4T5toNbnAUZxkGN4HYIINmkIe38AScspizJn/vAQFy+JIBzdhE16Ju3L4v5EilghEkP+QQpo8YETOfZBkmXpQYQSEzN9qTge9OW4j7Le5pfKgvziGHr+aozR/mAr/jyeqFY+a+e2dFPHXRIQwei9yrsgzOpqWWaw+N0UayLNT2fd9OK6XD4YsFtb86kiLejwk9+71MDo+8f60Mro5o/xJVHwt6DvVh/nBzaMOP5HQhRB/xp8+9bHeGtAbx1BEqQ5BiOgzZzNOQh1w2ky+VmyLHWeKFqigI+GvQ+ku+AHXNmgnatsOuLKmdUxy90rs3Eckc0mjiEW7ukylj0nTNns6SdOwAhsBQpV03Xnao24k/eHM69ZJ84T6Gm+Zg9S5iaKut5XzByPi+mJMZ1OuRCYkmIyaW3qHDHtQEcb5+if1zpkXl1mS1719qmPdifO52DjxKoScZUaoRs2Bv2y2URKy4eNXi/FEGVTh98zllN5p9oranpCEV7O2e6xVVgfYWNaDryFbdjbw8ITmlUZtnA6dZPkPipvozp/W5Hp2xC70yxO4W3jvDXgj436YDx1HX7y8bbDfsEqNa6dZ4G5KCZGS+9VxSRjmChP01rmtcV+xl8cfH5cdoVNeHDtpVzlAYlLdAQjEBQRKtMIDEEeYKJ8iPYnc4BmhuDYKVW1IAF51zpQ+s9LWnD9F9A/VIieCQAA';

const prefix = process.env.PREFIX || '#';
const mycode = process.env.CODE || "254746083017";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
