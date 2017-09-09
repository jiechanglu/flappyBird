/**
 * Created by Administrator on 2017/8/5.
 */
function Pipe(option){
    this.ctx = option.ctx;
    this.pipeImgTop = option.pipeImgTop;
    this.pipeImgBottom = option.pipeImgBottom;
    this.x = option.x;

    this.imgW = option.pipeImgTop.width;
    this.imgH = option.pipeImgTop.height;
    this.topY = 0;
    this.bottomY = 0;
    this.speed = 2;
    this.space = 150;

    this.getY();
}

Pipe.prototype = {
    constructor:Pipe,
    drawPipe:function(){
        this.x -= this.speed;
        if(this.x < - 3 * this.imgW){
            this.x += 3 * this.imgW * 6;
            /*当管道重新出现的时候，要重新计算Y坐标值*/
            this.getY();
        }
        /*绘制上面管道*/
        this.ctx.drawImage(this.pipeImgTop,this.x,this.topY);
        /*绘制管道对应的路径*/
        this.ctx.rect(this.x,this.topY,this.imgW,this.imgH);
        /*绘制下面管道*/
        this.ctx.drawImage(this.pipeImgBottom,this.x,this.bottomY);
        this.ctx.rect(this.x,this.bottomY,this.imgW,this.imgH);
    },
    getY: function(){
        this.topY = - (Math.random() * 310 + 90);
        this.bottomY = this.topY + this.imgH + this.space;
    }
}