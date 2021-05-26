/*
 * @Author: your name
 * @Date: 2021-05-17 20:00:19
 * @LastEditTime: 2021-05-19 19:41:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \练习项目\ES6\像素鸟练习\scripts\sky.js
 */
const skyDom = document.querySelector('.sky');
const skyStyles = getComputedStyle(skyDom);
const skyWidth = parseFloat(skyStyles.width);
const skyHeight = parseFloat(skyStyles.height);
class Sky extends Rectangle {
    constructor() {
        super(skyWidth, skyHeight, 0, 0, -50, 0, skyDom)
    }
    onMove() {
        if (this.left <= -skyWidth / 2) {
            this.left = 0;
        }
    }
}