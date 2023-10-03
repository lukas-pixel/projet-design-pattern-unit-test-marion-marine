import { Task } from "./taskManager";

export interface Subscriber {
    notify(news: string): void
}

class publisher {
    subscribers: Subscriber[];
    constructor() {
        this.subscribers = [];
    }

    addSubscribers(susbscriber: Subscriber) {
        this.subscribers.push(susbscriber);
    }

    update(task: Task){
        const x = task.toString()
        this.subscribers.forEach((susbscriber) =>  console.log(susbscriber.notify(x)))
    }
}
