"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrator = exports.Worker = void 0;
class Worker {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return `username: ${this.username}`;
    }
    login() {
        console.log("I'm doing login stuff");
    }
    notify(news) {
        console.log(news);
    }
}
exports.Worker = Worker;
class Administrator {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return `username: ${this.username}`;
    }
    login() {
        console.log("I'm doing ADMIN login stuff");
    }
    notify(news) {
        console.log(news);
    }
    changeUsername(user, nextUsername) {
        user.username = nextUsername;
    }
}
exports.Administrator = Administrator;
//# sourceMappingURL=worker.js.map