let argv = process.argv.slice(2)
let command = argv[0]
let input = argv.slice(1)
const Controller = require('./controller')

if (command === 'help' || command == undefined) {
    Controller.help()
} else if (command === 'list') {
    Controller.list()
} else if (command == 'add') {
    Controller.add(input)
} else if (command === 'findById') {
    Controller.findById(input)
}