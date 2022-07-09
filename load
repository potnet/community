const axios = require('axios')
const path = require('path')
const fs = require('fs')

let white = "\x1b[37m"
let red = "\x1b[31m"
let green = "\x1b[32m"

module.exports = {
    name: "load",
    description: "Downloads raw files and saves as .js",
    usage: "load <filename> <rawurl>",
    custom: true,
    async run(client, message, args, time) {

        message.delete()

        if (!args[0]) return console.log(`${time} | ` + red + `[Alert] ` + white + `| Usage: ${this.usage}`)
        if (!args[1]) return console.log(`${time} | ` + red + `[Alert] ` + white + `| Usage: ${this.usage}`)

        let baseDir = path.join(__dirname, './');

        axios.get(args[1]).then(res => {
            fs.writeFileSync(baseDir + args[0] + '.js', res.data)
            console.log(`${time} | ` + green + `[Success] ` + white + `| Downloaded ${args[0]}`)
        }).catch(err => {
            console.log(`${time} | ` + red + `[Error] ` + red + `| ${err.message}`)
        })
    }
}
