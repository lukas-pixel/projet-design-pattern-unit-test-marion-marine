"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrator = exports.Worker = void 0;
class Worker {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    login() {
        console.log("I'm doing login stuff");
    }
}
exports.Worker = Worker;
class Administrator {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return "admin#" + this.username;
    }
    login() {
        console.log("I'm doing ADMIN login stuff");
    }
    changeUsername(user, nextUsername) {
        user.username = nextUsername;
    }
}
exports.Administrator = Administrator;
const users = [new Worker("abc123"), new Worker("vbn456"), new Administrator("admin123")];
users.forEach((user) => {
    user.login();
});
//# sourceMappingURL=index.js.map