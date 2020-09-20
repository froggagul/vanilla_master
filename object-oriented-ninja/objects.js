function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in')
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out')
}

function Admin(...args){
    User.apply(this, args);
    this.role = 'super' // only admin should have this!
}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.deleteUser = function(u){
    users = users.filter((user) => {
        return user.email !== u.email;
    });
};

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('froggagul@ninjas.com', 'hojin');
let admin = new Admin('admin@naver.com', 'Hojin The admin')

let users = [userOne, userTwo, admin]