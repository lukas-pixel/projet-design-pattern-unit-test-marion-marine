import { Student } from './student';
import { User, Worker, Administrator } from './worker';
import "./observer";

/*class StudentAdapter implements User {
    
    username: string;
    student: Student;
    constructor(student: Student) {
        this.student = student;
    }

    getUsername(): string {
        return `username: ${this.student.getFullname().toLocaleLowerCase()}`;
    }

    login(): void {
        console.log('Im an adapted student');
    }
}

const users: User[] = [
    new Worker("abc123"), 
    new Worker("vbn456"), 
    new Administrator("admin123"),
];

users.forEach((user) => {
    user.login();
})*/