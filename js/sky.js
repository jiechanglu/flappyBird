/**
 * Created by Administrator on 2017/6/10.
 */
function Sky(option){
    this.ctx=option.ctx;
    this.x=option.x;
    this.y=option.y;
    this.img=option.img;

    this.width=option.img.width;
    this.height=this.img.height;
    this.speed=2;
}

Sky.prototype={
    constructor:Sky,
    drawSky:function(){
        this.x -= this.speed;
        if(this.x < - this.width){
            this.x += this.width * 2;
        }
        this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
}