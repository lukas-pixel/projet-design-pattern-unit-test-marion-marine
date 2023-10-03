export class Student {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname
    }

    getFullname() {
        return `${this.firstname} ${this.lastname}`
    }

    doStudentStuff() {
        console.log("i'm learning")
    }
}