/*
 * @Author: your name
 * @Date: 2021-05-15 07:23:45
 * @LastEditTime: 2021-05-19 13:27:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \练习项目\ES6\像素鸟练习\scripts\Rectangle.js
 */
//父类  宽 高 横坐标  纵坐标 横向速度  纵向速度  对应的dom元素
class Rectangle {
    constructor(width, height, left, top, Xspeed, Yspeed, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.Xspeed = Xspeed;
        this.Yspeed = Yspeed;
        this.dom = dom;
    }

    render() {
            this.dom.style.width = this.width + 'px';
            this.dom.style.height = this.height + 'px';
            this.dom.style.top = this.top + 'px';
            this.dom.style.left = this.left + 'px';

        }
        //按照矩形的速度移动矩形
    move(duration) {
        let disX = this.Xspeed * duration; //x移动距离
        let disY = this.Yspeed * duration; //y移动距离

        let newTop = this.top + disY;
        let newLeft = this.left + disX;
        this.left = newLeft;
        this.top = newTop;
        if (this.onMove) {
            this.onMove();
        }

        this.render();
    }
}