
class Model {
    constructor(id, task) {
        this.id = id
        this.task = task
    }

    static help () {
        let help = `
        $ node todo.js                          # will call help
        $ node todo.js help                     # menampilkan command apa saja yang tersedia
        $ node todo.js list                     # Melihat daftar TODO
        $ node todo.js add <task_content>       # Menambahkan TODO ke dalam list
        $ node todo.js findById <task_id>       # Melihat detail TODO sesuai 'task_id' nya
        $ node todo.js delete <task_id>         # Menghapus TODO sesuai 'task_id' nya
        $ node todo.js complete <task_id>       # Menandai status TODO selesai
        $ node todo.js uncomplete <task_id>     # Menandai status TODO belum selesai`
        return help
    }

    static list () {//membutuhkan readData dan parseData dulu agar supaya data json nya jadi string di sini
        let data = Model.parseData()
        return data
    }

    static readData() {
        const fs = require('fs')
        let data = fs.readFileSync('./data.json', 'utf8')
        return data
    }

    static parseData () {
        let data = JSON.parse(Model.readData())
        for (let i = 0; i < data.length; i++) {
            data[i] = new Model(data[i].id, data[i].task)
        }
        return data
    }
}

module.exports = Model