module.exports = {
    name: "test",
    usage: "test",
    description: "test command",
    run(client, message, args, time) {

        message.channel.send("this is a test")
    }
}
