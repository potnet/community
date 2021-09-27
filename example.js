//  [ Example Command ]  \\

const { theme_settings } = require('../../config/theme.json')
const { sounds } = require('../../config/theme.json')
const notifier = require('node-notifier') // Toast notifications
const Discord = require('discord-potnet') // Modified discord.js v11 
const sound = require('sound-play') // Sound player
const path = require('path') // used

// Sleep Function
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
//

// Colors
let white = "\x1b[37m"
let green = "\x1b[32m"
let blue = "\x1b[34m"
let red = "\x1b[31m"
//

module.exports = {
    name: "example",
    description: "This command does this and that",
    usage: "example [usage]",
    custom: true, // true if it is a custom command (adds it to the chelp embed)
    async run(client, message, args, time) {

        message.delete() // deletes message

        if (!message.member.hasPermission("SEND_MESSAGES")) { return message.channel.send("Missing permission [SEND_MESSAGES]") } // Checks if you have the command required to continue

        message.channel.send("This command does this that") // sends text in discord channel
        console.log("Logged command with " + red + "red " + green + "green " + white + "and " + blue + "blue" + white + '!') // prints text in console
        console.log('And the time is: ' + time) // Gets current time 

        const filePath = path.join(__dirname, `./config/soundpacks/${sounds.soundpack}/connected.wav`); // Get file path
        sound.play(filePath); // plays sound

        // Toasts
        notifier.notify({
            title: 'Example',
            icon: path.join(__dirname, 'config/selfy.png'), // Sets your own icon path
            message: 'Test!',
            appID: `Tester!`,
            sound: false,
            wait: false
        })
        //

        // Sets application title
        if (process.platform == 'win32') {
            process.title = "Example Title";
        } else {
            process.stdout.write('\x1b]2;' + "Example Title" + '\x1b\x5c');
        }
        //

        sleep(5000).then(() => {
            // Sends embed 5 seconds after the command is executed

            // Making an embed
            let Embed = new Discord.RichEmbed()
                .setTimestamp() // Sets timestamp at the bottom of embed
                .setTitle(`**Example Command**`)
                .setColor(`${theme_settings.embed_color}`) // Sets embed color
                .setThumbnail(theme_settings.embed_image) // sets embed thumbnail
                .setDescription(`
      **Example**: 0
      **Status**: False`)
                .setFooter(`Requested by: ${message.author.tag}`, theme_settings.embed_image)

            message.channel.send(Embed).then(msg => { msg.delete(30000) }) // Deletes embed after 30 seconds
            //
            if (message.channel.type == 'dm') {
                console.log("This command was exectued in a dm!")
            } else {
                console.log("This command was not exectued in a dm!")
            }
        })
    }
}
