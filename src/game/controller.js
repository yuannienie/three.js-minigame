import gameView from './view';
import gameModel from './model';

class GameController {
    constructor() {
        this.gameView = gameView;
        this.gameModel = gameModel;
        this.gameModel.stageEvent.attach((sender, options) => {
            const { stage } = options;
            switch(stage) {
                case 'game':
                    this.gameView.showGamePage();
                    break;
                case 'game-over':
                    this.gameView.showGameOverPage();
                    break;
                default:
                    break;
            }
        })
    }

    initPages() {
        // 传入到 View 的回调中，其通过 Model 来切换 stage 状态，而 Model 通过事件分发来调用 View 下不同的 pages
        const startPageCallback = {
            getGameRestart: () => this.gameModel.setState({ stage: 'game' })
        };
        const gamePageCallback = {
            getGameOver: () => this.gameModel.setState({ stage: 'game-over' })
        };
        const gameOverCallback = {
            getGameRestart: () => this.gameModel.setState({ stage: 'game' })
        }
    
        this.gameView.initStartPage(startPageCallback);
        this.gameView.initGamePage(gamePageCallback);
        this.gameView.initGameOverPage(gameOverCallback);
    }
}

export default new GameController();