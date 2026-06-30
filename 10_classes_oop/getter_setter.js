//Getters and Setters are special methods in JavaScript that let you control how a property is read and updated.
// Getter (get) → Runs when you read a property.
// Setter (set) → Runs when you assign a value to a property


class user {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    get name() {
        return this._name.toUpperCase()
    }
    set name(val) {
        this._name = val
    }

    get email() {
        return `${this._email.toUpperCase()}156SDF`
    }
    set email(val) {
        this._email = val
    }
}

const amrit = new user('amrit', 'hifn2gmail.com')
console.log(amrit.email);
console.log(amrit.name);
console.log(amrit.email===amrit._email);


