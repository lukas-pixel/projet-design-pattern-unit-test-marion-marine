"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Publisher {
    constructor() {
        this.susbscribers = [];
    }
    addSubscribers(susbscriber) {
        this.susbscribers.push(susbscriber);
    }
    writeNews(news) {
        this.susbscribers.forEach((susbscriber) => susbscriber.sendNews(news));
    }
}
class UnionSubriber {
    constructor(name) {
        this.name = name;
    }
    sendNews(news) {
        console.log(`${this.name} received ${news}`);
    }
}
const publisher = new Publisher();
publisher.addSubscribers(new UnionSubriber("jacques"));
publisher.addSubscribers(new UnionSubriber("john"));
publisher.addSubscribers(new UnionSubriber("alexandre"));
publisher.addSubscribers(new UnionSubriber("marine"));
publisher.writeNews("Bonjour aux syndiqué");
//# sourceMappingURL=observer.js.map