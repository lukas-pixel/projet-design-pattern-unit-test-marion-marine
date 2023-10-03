import { Student } from './student'
import { User, Worker, Administrator }

class StudentAdapter implements User {
    username: string;
    student: Student;
    constructor(student: Student) {
        this.student = student;
    }

    getUsername(): string {
        return this.student.getFullname();
    }

    login(): viod {
        console.log('Im an adapted student');
    }
}

const users: User[] = [
    new Worker("abc123"), 
    new Worker("vbn456"), 
    new Administrator("admin123"),
    new Student("jhon", "doe")
];

users.forEach((user) => {
    user.login();
})