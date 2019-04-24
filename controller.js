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

    static add (input) {
        let dataInput = Model.add(input)
        View.success(`${dataInput} << sudah berhasil dimasukkan`)
        Controller.list()
    }

    static findById(id) {
        let data = Model.findById(id)
        if (data.length == undefined) {
            View.findById(data)
        } else {
            View.success(data)
        }
    }
}

module.exports = Controller