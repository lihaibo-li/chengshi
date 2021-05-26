/*
 * @Author: your name
 * @Date: 2021-05-20 17:03:52
 * @LastEditTime: 2021-05-20 19:33:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \练习项目\ES6\像素鸟练习\scripts\Game.js
 */
class GameP {

    constructor() {
        this.skyp = new Sky();
        this.landp = new Land(-100);
        this.birdp = new Bird();
        this.pipeProducerp = new twoPipeProducer(-100);
        // this.pipeProducerp.startProduce();
        this.timer = null;
        this.gameOver = false;
    }
    start() {
        clearInterval(this.timer);
        if (this.gameOver) {
            window.location.reload();
        }
        this.pipeProducerp.startProduce();
        this.birdp.startSwing();
        this.timer = setInterval(() => {
            const duration = 16 / 1000;
            this.skyp.move(duration);
            this.landp.move(duration);
            this.birdp.move(duration);
            this.pipeProducerp.paris.forEach((ele) => {
                ele.move(duration);
                if (this.isGameOver()) {
                    this.stop();
                    this.gameOver = true;
                }
            })
        }, 16)
    }
    isHit(rec1, rec2) {
        var rec1X = rec1.left + rec1.width / 2;
        var rec1Y = rec1.top + rec1.height / 2;
        var rec2X = rec2.left + rec2.width / 2;
        var rec2Y = rec2.top + rec2.height / 2;
        var disX = Math.abs(rec1X - rec2X);
        var disY = Math.abs(rec1Y - rec2Y);
        if (disX < (rec1.width + rec2.width) / 2 && disY < (rec1.height + rec2.height) / 2) {
            return true;
        }
        return false;
    }
    isGameOver() {
        if (this.birdp.top === this.birdp.maxTop) {
            return true;
        }
        for (var i = 0; i < this.pipeProducerp.paris.length; i++) {
            const pari = this.pipeProducerp.paris[i];
            if (this.isHit(this.birdp, pari.upPipe) || this.isHit(this.birdp, pari.downPipe)) {
                return true;
            }
        }
        return false;
    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
        this.pipeProducerp.stopProduce();
        this.birdp.stopSwing();
    }
    regEvent() {
        window.onkeydown = (e) => {
            if (e.key === "Enter") {
                if (this.timer) {
                    this.stop();
                } else {
                    this.start();
                }
            } else if (e.key === " ") {
                this.birdp.jump();
            }
        }
    }
}
var gamep = new GameP();
gamep.regEvent();