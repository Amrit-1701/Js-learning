const user = {
    _email: 'hfyyc@gmail.com',
    _pass: "56hgujb",

    get email() {
        return `${this._email.toUpperCase()}`
    },
    set email(val) {
        this.email = val
    }
}

const tea = Object.create(user)
console.log(tea.email);
