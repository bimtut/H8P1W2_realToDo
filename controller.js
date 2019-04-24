const Model =  require('./model')
const View = require('./view')

class Controller {
    static help() {
        let input = Model.help()
        View.success(input)
    }

    static list() {
        let input =  Model.list()
        View.list(input)
    }
}

module.exports = Controller