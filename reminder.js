const Discord = require('discord-potnet');
const ms = require('ms')
const notifier = require('node-notifier')
const path = require('path')
const date = require('date-and-time')

let blue = "\x1b[34m"
let white = "\x1b[37m"

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports = {
    name: "reminder",
    description: "Reminds you off stuff",
    usage: "reminder <minutes> <reminder>",
    custom: true,
    async run(client, message, args, time) {

        message.delete()

        const mins = args.shift();
        const reminder = args.join(" ")

        if (!mins[0]) return console.log(`${time} | ` + red + `[Alert] ` + white + `| Usage: ${this.usage}`)
        if (!reminder[0]) return console.log(`${time} | ` + red + `[Alert] ` + white + `| Usage: ${this.usage}`)

        console.log(`${time} | ` + blue + `[Alert] ` + white + `| You will be reminded in: ${mins} minute(s)!`)
        
        sleep(ms(`${mins}m`)).then(() => {

            const now = new Date();
            const pattern = date.compile('HH:mm');
            var time2 = date.format(now, pattern);

            console.log(`${time2} | ` + blue + `[Alert] ` + white + `| Your reminder: ${reminder}`)
            notifier.notify({
                title: 'Reminder:',
                icon: path.join(__dirname, '../../config/512x512.png'),
                message: reminder,
                appID: `Selfy`,
                sound: true,
                wait: false
            })
        })
    }
}
