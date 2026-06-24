//singleton (only make from constructor)
// Object.create

//object literals

const mySym = Symbol('key1')

const JsUser = {
    name: 'Amrit',
    "full name": "Amrit Singh", //we can not access it by . operation
    [mySym]:'myKey1', //to refer symbol we use []
    age: 19,
    location: 'chd',
    email: 'amrt2@gmail.com',
    isLoggedIn: false,
    lastLoginday: ['Mon', "Sat"]
}

//console.log(JsUser.email);
//console.log(JsUser['email']);

//console.log(JsUser['full name']);
//console.log( JsUser[mySym]);

JsUser.email="amrit@gmail.com"
//Object.freeze(JsUser)
//JsUser.email="amkt@gmail.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log(`hello Js User`);
}
JsUser.greeting2=function(){
    console.log(`hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
