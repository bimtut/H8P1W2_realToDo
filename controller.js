const Model =  require('./model')
const View = require('./view')

class Controller {
    static help() {
        let input = Model.help()
        View.success(input)
    }
}

module.exports = Controller