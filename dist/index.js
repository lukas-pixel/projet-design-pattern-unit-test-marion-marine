"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
const worker_1 = require("./worker");
const observer_1 = require("./observer");
class StudentAdapter {
    constructor(student) {
        this.student = student;
    }
    getUsername() {
        return `username: ${this.student.getFullname().toLocaleLowerCase()}`;
    }
    login() {
        console.log('Im an adapted student');
    }
    notify(news) {
        console.log(news);
    }
}
const john = new student_1.Student("john", "doe");
const users = [
    new worker_1.Worker("abc123"),
    new worker_1.Worker("vbn456"),
    new worker_1.Administrator("admin123"),
    new StudentAdapter(john)
];
users.forEach((user) => {
    user.login();
    observer_1.UnionPublisher.addSubscribers(user);
});
observer_1.UnionPublisher.update('Je suis un article');
//# sourceMappingURL=index.js.map