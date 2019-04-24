
class View {
    static success(input) {
        console.log(input)
    }
    static list (data) {
        data.forEach(e => {
            let text = `${e.id}. ${e.task}`
            console.log(text)
        });
    }
}

module.exports = View