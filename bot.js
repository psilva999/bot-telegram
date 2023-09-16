const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot('token-bot', { polling: true })

function sendMessageToChannel() {
    const channelId = '@channel'
    const message = `
Your message
    `
//8:40 - 13:40 - 18:40 - 22:40
    bot.sendMessage(channelId, message)
      .then(() => {
          console.log('Message sent')
      })
      .catch((error) => {
          console.error('Error: ', error)
      })
}

sendMessageToChannel()
//node bot.js
