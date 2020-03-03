const User = function (name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function (message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function () {
    let users = {}; // list of users 

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                // Single user message
                to.recieve(message, from);
            } else {
                // Mass message
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const usera = new User('UserA');
const userb = new User('UserB');
const userc = new User('UserC');

const chatroom = new Chatroom();

chatroom.register(usera);
chatroom.register(userb);
chatroom.register(userc);


usera.send('Hello UserB', userb);
userc.send('Hello UserA', usera);
userb.send('Hello everyone'); 
