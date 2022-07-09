const fs = require('fs')
const path = require('path')

let white = "\x1b[37m"
let red = "\x1b[31m"

module.exports = {
    name: "save",
    description: "Creates a txt file",
    usage: "save <filename> <message>",
    custom: true,
    async run(client, message, args, time) {

        message.delete()

        if (!args[0]) return console.log(`${time} | ` + red + `[Alert] ` + white + `| Usage: ${this.usage}`)
        if (!args[1]) return console.log(`${time} | ` + red + `[Alert] ` + white + `| Usage: ${this.usage}`)

        let baseDir = path.join(__dirname, './');
        fs.writeFileSync(baseDir + args[1] + '.txt', args[1])

    }
}
