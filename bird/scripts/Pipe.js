/*
 * @Author: your name
 * @Date: 2021-05-20 00:14:47
 * @LastEditTime: 2021-05-20 17:44:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \练习项目\ES6\像素鸟练习\scripts\Pipe.js
 */
const pipeLeft = parseFloat(gameStyles.width);
class Pipe extends Rectangle {
    constructor(height, top, Xspeed, dom) {
        super(52, height, pipeLeft, top, Xspeed, 0, dom)
        this.render();
    }
    onMove() {
        if (this.left < -this.width) {
            this.dom.remove();
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
class twoPipe {
    constructor(Xspeed) {
        this.spaceHeight = 150;
        this.minHeight = 80;
        this.maxHeight = landTop - this.minHeight - this.spaceHeight;
        const upHeight = getRandom(this.minHeight, this.maxHeight);

        const upDom = document.createElement('div');
        upDom.className = "pipe up";
        this.upPipe = new Pipe(upHeight, 0, Xspeed, upDom);
        const downDom = document.createElement('div');
        downDom.className = "pipe down";
        const downHeight = landTop - upHeight - this.spaceHeight;
        const downTop = landTop - downHeight;
        this.downPipe = new Pipe(downHeight, downTop, Xspeed, downDom);
        game.appendChild(upDom);
        game.appendChild(downDom);
    }
    get useLess() {
        return this.upPipe.left < -this.upPipe.width;
    }
    move(duration) {
        this.upPipe.move(duration);
        this.downPipe.move(duration);
    }
}
class twoPipeProducer {
    constructor(Xspeed) {
        this.paris = [];
        this.timer = null;
        this.Xspeed = Xspeed;
    }
    startProduce() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.paris.push(new twoPipe(this.Xspeed));
            for (var i = 0; i < this.paris.length; i++) {
                var pari = this.paris[i];
                if (pari.useLess) {
                    this.paris.splice(i, 1);
                    i--;
                }
            }
        }, 1500)
    }
    stopProduce() {
        clearInterval(this.timer);
    }
}