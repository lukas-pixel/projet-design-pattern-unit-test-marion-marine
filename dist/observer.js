"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionPublisher = void 0;
class Publisher {
    constructor() {
        this.susbscribers = [];
    }
    addSubscribers(susbscriber) {
        this.susbscribers.push(susbscriber);
    }
    update(news) {
        this.susbscribers.forEach((susbscriber) => susbscriber.notify(news));
    }
}
exports.UnionPublisher = new Publisher();
/*class UnionSubriber implements Susbcriber {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sendNews(news: string): void {
        console.log(`${this.name} received ${news}`)
    }
}

const publisher = new Publisher();

publisher.addSubscribers(new UnionSubriber("jacques"));
publisher.addSubscribers(new UnionSubriber("john"));
publisher.addSubscribers(new UnionSubriber("alexandre"));
publisher.addSubscribers(new UnionSubriber("marine"));

publisher.writeNews("Bonjour aux syndiqué");*/ 
//# sourceMappingURL=observer.js.map