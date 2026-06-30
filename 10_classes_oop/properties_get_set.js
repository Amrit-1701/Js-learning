function User(email, pass) {
    this._email = email
    this._pass = pass

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (val) {
            this.email = val
        }
    })
    Object.defineProperty(this, 'pass', {
        get: function () {
            return `${this._pass.toUpperCase()}223k`
        },
        set: function (val) {
            this.pass = val
        }
    })

}

const news = new User("hfhj@gmail.com", '152;kj')
console.log(news.email);
console.log(news.pass);
