/*
 * @Author: your name
 * @Date: 2021-05-19 13:46:49
 * @LastEditTime: 2021-05-20 18:13:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \练习项目\ES6\像素鸟练习\scripts\Bird.js
 */
const birdDom = document.querySelector('.bird');
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdTop = parseFloat(birdStyles.top);
const birdLeft = parseFloat(birdStyles.left);
const game = document.querySelector('.game');
const gameStyles = getComputedStyle(game);
const gameHeight = parseFloat(gameStyles.height);
class Bird extends Rectangle {
    constructor() {
        super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, birdDom)
        this.g = 1500;
        this.maxTop = gameHeight - landHeight - this.height;
        this.timer = null;
        this.swing = 1;
    }
    startSwing() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            if (this.swing < 3) {
                this.swing++;
            } else if (this.swing = 3) {
                this.swing = 1;
            }
            this.render();
        }, 200)
    }
    stopSwing() {
        clearInterval(this.timer);

    }

    render() {
        super.render();
        this.dom.className = `bird swing${this.swing}`
    }

    move(duration) {
        super.move(duration);
        this.Yspeed += this.g * duration;
    }
    onMove() {
        if (this.top < 0) {
            this.top = 0;
        } else if (this.top > this.maxTop) {
            this.top = this.maxTop;
        }
    }
    jump() {
        this.Yspeed = -300;
    }

}