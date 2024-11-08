import { Telegraf, Markup } from 'telegraf'

const token = '8017613357:AAHU5QAWr0umIGczS8FYdYHTwRvvghe6_jY'
const webAppUrl = 'https://pawssafe-tg.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
      'Добро пожаловать!',
      Markup.keyboard([
        Markup.button.webApp('Отправить мощное сообщение', `${webAppUrl}/feedback`),
      ])
    )
  })
  
  bot.launch()