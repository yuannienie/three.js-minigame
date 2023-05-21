import Event from '../utils/event';

class GameModel {
    constructor() {
        this.stage = '';
        this.stageEvent = new Event(this);
    }

    getState() {
        return this.stage;
    }

    setState(stage) {
        this.stage = stage;
        this.stageEvent.notify({ stage });
    }
}


export default new GameModel();