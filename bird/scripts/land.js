/*
 * @Author: your name
 * @Date: 2021-05-17 20:00:19
 * @LastEditTime: 2021-05-20 02:09:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \练习项目\ES6\像素鸟练习\scripts\sky.js
 */
const landDom = document.querySelector('.land');
const landStyles = getComputedStyle(landDom);
const landWidth = parseFloat(landStyles.width);
const landHeight = parseFloat(landStyles.height);
const landTop = parseFloat(landStyles.top);
class Land extends Rectangle {
    constructor(Xspeed) {
        super(landWidth, landHeight, 0, landTop, Xspeed, 0, landDom)
    }
    onMove() {
        if (this.left <= -landWidth / 2) {
            this.left = 0;
        }
    }
}