/* eslint-disable no-undef */
import GamePage from '../pages/game-page';
import GameOverPage from '../pages/game-over-page';
import GameStartPage from '../pages/game-start-page';

class GameView {
    constructor() {}

    initStartPage(callback) {
        this.startPage = new GameStartPage(callback);
        this.startPage.init();
        // const width = 375;
        // const height = 667;
    
        // const renderer = new THREE.WebGLRenderer({ canvas });
        // renderer.clearColor(new THREE.Color(0x000000, 1.0));
        // renderer.setSize(width, height);
    
        // const scene = new THREE.Scene();
    
        // const triangleShape = new THREE.Shape();
        // triangleShape.moveTo(0, 100);
        // triangleShape.lineTo(-100, -100);
        // triangleShape.lineTo(100, -100);
        // triangleShape.lineTo(0, 100);
    
        // const geometry = new THREE.ShapeGeometry(triangleShape);
        // const material = new THREE.MeshBasicMaterial({
        //   color: 0xff0000,
        //   side: THREE.DoubleSide,
        // })
        // const mesh = new THREE.Mesh(geometry, material);
        // mesh.position.x = 0;
        // mesh.position.y = 0;
        // mesh.position.z = 1;
    
        // scene.add(mesh);
    
        // const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000);
        // camera.position.x = 0;
        // camera.position.y = 0;
        // camera.position.z = 0;
        // camera.lookAt(new THREE.Vector3(0, 0, 1));
    
        // let lastTimeStamp = Date.now();
        // let currentAngle = 0;
    
        // function animate() {
        //   const now = Date.now();
        //   const duration = now - lastTimeStamp;
        //   lastTimeStamp = now;
        //   currentAngle += duration / 1000 * Math.PI;
        // }
    
        // function tick() {
        //   animate();
        //   mesh.rotation.set(0, currentAngle, 0);
        //   renderer.render(scene, camera);
        //   requestAnimationFrame(tick);
        // }
    
        // tick();
    }

    initGameOverPage(callback) {
        this.gameOverPage = new GameOverPage(callback);
        this.gameOverPage.init();
    }

    initGamePage(callback) {
        this.gamePage = new GamePage(callback);
        this.gamePage.init();
    }


    showGamePage() {
        this.gameOverPage.hide();
        this.gamePage.hide();
        this.gamePage.restart();
        this.gamePage.show();
    }

    showGameOverPage() {
        this.gamePage.hide();
        this.gameOverPage.show();
    }

    restartGame() {
        this.gamePage.restart();
    }
}

export default new GameView();