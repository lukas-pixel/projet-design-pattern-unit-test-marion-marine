export interface Susbcriber {
    sendNews(news: string): void
}

class Publisher {
    susbscribers: Susbcriber[];

    constructor() {
        this.susbscribers = [];
    }

    addSubscribers(susbscriber: Susbcriber) {
        this.susbscribers.push(susbscriber);
    }

    writeNews(news: string){
        this.susbscribers.forEach((susbscriber) => susbscriber.sendNews(news))
    }
}

class UnionSubriber implements Susbcriber {
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

publisher.writeNews("Bonjour aux syndiqué");