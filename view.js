
class View {
    static success(input) {
        console.log(input)
    }
    static list (data) {
        data.forEach(e => {
            console.log(e)
        });
    }
}

module.exports = View