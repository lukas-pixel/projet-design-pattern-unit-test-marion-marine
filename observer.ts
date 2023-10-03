interface Susbcriber {

}

class Publisher {
    susbscribers: Susbcriber[];

    constructor() {
        this.susbscribers = [];
    }

    addSubscribers(susbscriber: Susbcriber) {
        this.susbscribers.push(susbscriber);
    }
}