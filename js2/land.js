/**
 * Created by Administrator on 2017/8/5.
 */
function Land(option){
    this.ctx = option.ctx;
    this.landImg = option.landImg;
    this.x = option.x;
    this.y = option.y;

    this.imgWidth = this.landImg.width;
    this.speed = 2;
}
Land.prototype = {
    constructor:Land,
    drawLand: function(){
        this.x -= this.speed;
        if(this.x < -this.imgWidth){
            this.x += 4 * this.imgWidth;
        }
        this.ctx.drawImage(this.landImg,this.x,this.y);
    }
}