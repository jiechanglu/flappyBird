/**
 * Created by Administrator on 2017/8/5.
 */
function Bird(option){
    this.ctx = option.ctx;
    this.birdImg = option.birdImg;
    this.canvasX = option.canvasX;
    this.canvasY = option.canvasY;

    this.birdW = this.birdImg.width / 3;
    this.birdH = this.birdImg.height;
    this.birdX = 0;
    this.birdY = 0;
    this.birdIndex = 0;
    this.birdSpeed = 0;
    this.birdMaxAngle = 45;
    this.birdMaxSpeed = 0.4;
    this.g = 0.0003;
}

Bird.prototype = {
    constructor:Bird,
    drawBird:function(offsetTime){

        this.birdX = this.birdIndex * this.birdW;
        this.birdIndex ++;

        /*重力加速度公式计算本次移动的距离*/
        var distanceY = this.birdSpeed * offsetTime + offsetTime * offsetTime * this.g / 2;
        /*速度是越来越快的， 所以需要加上前面的速度基线*/
        this.birdSpeed = this.birdSpeed + this.g * offsetTime;

        /*设置画布的Y坐标值*/
        this.canvasY += distanceY;
        /*计算小鸟下落过程中的旋转的角度值*/
        var currentAngle = this.birdMaxAngle * this.birdSpeed / this.birdMaxSpeed;
        if(currentAngle > 45){
            currentAngle = 45;
        }

        this.ctx.save();
        /*让画布进行偏移--设置画布的新的绘制原点*/
        this.ctx.translate(this.canvasX + this.birdW / 2,this.canvasY + this.birdH / 2);
        /*让小鸟旋转*/
        this.ctx.rotate(Math.PI / 180 * currentAngle);
        /*绘制小鸟*/
        this.ctx.drawImage(this.birdImg,this.birdX,this.birdY,this.birdW,this.birdH,-this.birdW / 2,-this.birdH / 2,this.birdW,this.birdH);
        this.ctx.restore();

        if(this.birdIndex > 2){
            this.birdIndex = 0;
        }
    }
}