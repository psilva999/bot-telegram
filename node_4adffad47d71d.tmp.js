const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6266736970:AAHClxw2yWtDNLxBKi9ac4xKLvqf8esokiA', { polling: true });

function sendMessageToChannel() {
    const channelId = '@fruitmoneygame';
    const message = 'Iae Pessoal do fruitmoney. Aqui quem fala é o seu mais novo bot :D';

    bot.sendMessage(channelId, message)
        .then(() => {
            console.log('Mensagem enviada com sucesso para o canal.');
        })
        .catch((error) => {
            console.error('Erro ao enviar mensagem:', error);
        });
}

sendMessageToChannel();
