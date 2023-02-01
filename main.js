const TelegramBot =require('node-telegram-bot-api')
const {tiktok_downloader}=require('./request')
require('dotenv').config()

const token="your bot token"

const bot=new TelegramBot(token,{polling:true})


bot.on('message', async(message)=>{
    try {
        const chatId=message.chat.id
        const name=message.from.first_name 
        if(message.text=='/start'){
            await bot.sendMessage(chatId,`Сәлеметсіз бе ${name} біздің ботқа қош келдіңіз. 
Ботқа бірер бір Instagram бейне сілтемесін жіберіңіз.  
Мен бейне түрінде қайтарып беремін`)
        }
    
        const video_link =await tiktok_downloader(message.text)
        await bot.sendVideo(chatId, video_link)
        
        
    } catch (error) {
        
        console.log(error+"")
    }
    
})


