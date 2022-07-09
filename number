const Discord = require('discord-potnet')
const axios = require('axios')
const { settings } = require('../../config/config.json')
const { theme_settings } = require('../../config/theme.json')

module.exports = {
    name: "number",
    description: "This command gets a fact out of a number",
    usage: "number <number>",
    custom: true,
    async run(client, message, args, time) {

        if (!args[0]) return console.log(`${time} | ` + red + `[Alert] ` + white + `| Usage: ${this.usage}`)

        axios.get(`http://numbersapi.com/${args}`).then(res => {
            let Embed = new Discord.RichEmbed()
                .setTitle('**Number Fact**')
                .setThumbnail(theme_settings.embed_image)
                .setColor(theme_settings.embed_color)
                .setDescription(`
                **Number:** ${args}
                **Fact:** ${res.data}`)
            message.channel.send(Embed).then(msg => { msg.delete(settings.deletetimer) })
        }).catch(err => {
            message.channel.send("```" + err.message + "```")
        })
    }
}
