const user = {
    _email: 'hfyyc@gmail.com',
    _pass: "56hgujb",

    get email() {
        return `${this._email.toUpperCase()}`
    },
    set email(val) {
        this.email = val
    },
    get pass(){
        return `${this._pass.toUpperCase()}`
    },
    set pass(val){
        this._pass = Val
    }
}

const tea = Object.create(user)
console.log(tea.email);
console.log(tea.pass);
