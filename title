let white = "\x1b[37m"
let red = "\x1b[31m"
let green = "\x1b[32m"

module.exports = {
    name: "title",
    description: "Sets a custom application title",
    usage: "title <title>",
    custom: true,
    async run(client, message, args, time) {

        message.delete()

        let newtitle = args.join(" ") 
        if (!newtitle) return console.log(`${time} | ` + red + `[Alert] ` + white + `| Usage: ${this.usage}`)

        if (process.platform == 'win32') {
            process.title = newtitle;
        } else {
            process.stdout.write('\x1b]2;' + args + '\x1b\x5c');
        }
        console.log(`${time} | ` + green + `[Alert] ` + white + `| New title ${args[0]}`)
    }
}
