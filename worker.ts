import { Susbcriber } from "./observer";
export interface User extends Susbcriber {
    username: string;
    getUsername(): string;
    login(): void;
}

export class Worker implements User {
    username: string;

    constructor(username: string) {
        this.username = username;
    }
    getUsername() {
        return `username: ${this.username}`
    }
    login() {
        console.log("I'm doing login stuff");
    }
    notify(news: string): void {
        console.log(news);
    }
}

export class Administrator implements User {

    username: string;

    constructor(username: string) {
        this.username = username;
    }

    getUsername() {
        return `username: ${this.username}`
    }

    login() {
        console.log("I'm doing ADMIN login stuff");
    }

    notify(news: string): void {
        console.log(news);
    }

    changeUsername(user: User, nextUsername: string) {
      user.username = nextUsername;
    }
}