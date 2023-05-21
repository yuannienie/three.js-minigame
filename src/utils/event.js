class Event {
    constructor(sender) {
        this.sender = sender;
        this.listeners = [];
    }

    attach(cbs) {
        this.listeners.push(cbs);
    }

    notify({ stage }) {
        for (let i = 0; i < this.listeners.length; i++) {
            this.listeners[i](this.sender, stage)
        }
    }
}

export default Event;