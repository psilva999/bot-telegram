const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const bot = new TelegramBot('token_bot', { polling: true })

function sendImageToChannel() {
  const channelId = '@channel';
  const caption = `
message
  `;

  const imagePath = './path_photo/photo.jpg';

  bot.sendPhoto(channelId, {
    source: fs.readFileSync(imagePath),
    filename: 'photo.jpg' 
  }, { caption })
    .then(() => {
      console.log('sucess!');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

sendImageToChannel();
