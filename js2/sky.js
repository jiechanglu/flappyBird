/**
 * Created by Administrator on 2017/8/5.
 */
function Sky(option){
    this.ctx = option.ctx;
    this.skyImg = option.skyImg;
    this.x = option.x;
    this.y = option.y || 0;

    this.skySpeed = 2;
    this.imgWidth = this.skyImg.width;
}

Sky.prototype = {
    constructor : Sky,
    drawSky : function(){
        this.x -= this.skySpeed;
        if(this.x < -this.imgWidth){
            this.x += 2 * this.imgWidth;
        }
        this.ctx.drawImage(this.skyImg,this.x,this.y);
    }
}