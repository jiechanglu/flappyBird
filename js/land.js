/**
 * Created by Administrator on 2017/6/10.
 */
function Land(option){
    this.ctx= option.ctx;
    this.x=option.x;
    this.y=option.y;
    this.img=option.img;

    this.width=option.img.width;
    this.height=option.img.height;
    /*速度和天空一样*/
    this.speed=2;
}
Land.prototype={
    constructor:Land,
    drawLand:function(){
        this.x -= this.speed;
        if(this.x < - this.width){
            this.x += this.width * 4;
        }
        this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
};