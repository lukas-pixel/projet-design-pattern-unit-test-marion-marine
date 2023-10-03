interface User {
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
        return this.username
    }
    login() {
        console.log("I'm doing ADMIN login stuff");
    }
}

export class Administrator implements User {

    username: string;

    constructor(username: string) {
        this.username = username;
    }

    getUsername() {
        return "admin#" + this.username
    }

    login() {
        console.log("I'm doing ADMIN login stuff");
    }

    changeUsername(user: User, nextUsername: string) {
      user.username = nextUsername;
    }
}

const users: User[] = [new Worker("abc123"), new Worker("vbn456"), new Administrator("admin123")];

users.forEach((user) => {
    user.login();
})