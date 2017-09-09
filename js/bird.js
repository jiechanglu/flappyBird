/**
 * Created by Administrator on 2017/6/10.
 */
function  Bird(option){
    this.ctx=option.ctx;
    this.x=option.x;
    this.y=option.y;
    this.img=option.img;

    this.width=option.img.width / 3 ;
    this.height=option.img.height;
    this.index=0;
    this.speed=0;
    this.g=0.0003;
    this.maxAngle=45;
    this.maxSpeed=0.3;
}

Bird.prototype={
    constructor:Bird,
    drawBird:function(offsetTime){
        /*因为后期需要对画布进行旋转，所以先存储画布状态*/
        this.ctx.save();

        /*计算移动距离*/
        var offsetY = this.speed * offsetTime + this.g * offsetTime * offsetTime / 2;

        /*计算当前速度*/
        this.speed= this.speed + this.g * offsetTime;
        this.y+=offsetY;

        /*计算当前角度*/
        var currentAngle = this.maxAngle * this.speed / this.maxSpeed;
        if(currentAngle  > this.maxAngle){
           currentAngle= this.maxAngle;
        }
        /*实现偏移*/
        this.ctx.translate(this.x + this.width / 2,this.y + this.height / 2);

        /*实现旋转*/
        this.ctx.rotate(Math.PI/180*currentAngle);

        /*绘制小鸟*/
        this.ctx.drawImage(this.img,this.index * this.width,0,this.width,this.height,-this.width / 2,-this.height / 2,this.width,this.height);

        /*修改索引*/
        this.index++;

        /*判断索引*/
        if(this.index >= 3){
            this.index=0;
        }
        this.ctx.restore();
    }
}