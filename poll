const Discord = require('discord-potnet')
const { theme_settings } = require('../../config/theme.json')
let white = "\x1b[37m"
let red = "\x1b[31m"

module.exports = {
    name: "poll",
    description: "Hosts a poll",
    usage: "poll <question>",
    custom: true,
    async run(client, message, args, time) {

        message.delete()

        let poll = args.join(" ")
        if (!poll) return console.log(`${time} | ` + red + `[Alert] ` + white + `| Usage: ${this.usage}`)

        let Embed = new Discord.RichEmbed()
            .setTitle(`**Poll:**`)
            .setColor(theme_settings.embed_color)
            .setDescription(poll)
            .setFooter(`Hosted by: ${client.user.tag}`);
        message.channel.send(Embed).then(msg => {
            msg.react("✅")
            msg.react("❌")
        })
    }
}
