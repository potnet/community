const Discord = require('discord-potnet')
const axios = require('axios')
const { settings } = require('../../config/config.json')
const { theme_settings } = require('../../config/theme.json')

let red = "\x1b[31m"
let white = "\x1b[37m"
let green = "\x1b[32m"

module.exports = {
    name: "tokeninfo",
    description: "Gets information about a token.",
    usage: "tokeninfo <token>",
    custom: true,
    async run(client, message, args, time) {

        message.delete()

        if (!args[0]) return console.log(`${time} | ` + red + `[Alert] ` + white + `| Usage: ${this.usage}`)

        axios({
            method: 'GET',
            url: `https://discord.com/api/v9/users/@me`,
            headers:
            {
                'Authorization': args,
                'User-Agent': `${settings.useragent}`
            }
        }).then(res => {
            let Embed = new Discord.RichEmbed()
                .setTimestamp()
                .setTitle(`**${res.data.username}#${res.data.discriminator} | ${res.data.id}**`)
                .setColor(theme_settings.embed_color)
                .setDescription(`**Discord Username:** ${res.data.username}#${res.data.discriminator}
                **Email:** ${res.data.email}
                **Account ID:** ${res.data.mfa_enabled}
                **Language:** ${res.data.locale}
                **Phone:** ${res.data.phone}
                **Two-Factor Status:** ${res.data.mfa_enabled}
                **Emailed Verification:** ${res.data.verified}
                **Flags:** ${res.data.flags}`)
                .setFooter('Success!', `https://cdn.discordapp.com/avatars/${res.data.id}/${res.data.avatar}`)
            message.channel.send(Embed).then(msg => { msg.delete(settings.deletetimer) })
            console.log(`${time} | ` + green + `[Success] ` + white + `| ${args}`)
        }).catch(err => {
            console.log(`${time} | ` + red + `[Error] ` + white + `| ${err.message}`)
        })
    }
}
