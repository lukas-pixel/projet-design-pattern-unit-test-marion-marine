"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
const worker_1 = require("./worker");
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
}
const users = [
    new worker_1.Worker("abc123"),
    new worker_1.Worker("vbn456"),
    new worker_1.Administrator("admin123"),
    new student_1.Student("jhon", "doe")
];
users.forEach((user) => {
    user.login();
});
//# sourceMappingURL=index.js.map