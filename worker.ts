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
        console.log("I'm doing login stuff");
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