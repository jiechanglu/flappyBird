/**
 * Created by Administrator on 2017/6/10.
 */
function  Pipe(option){
    this.ctx=option.ctx;
    this.x=option.x;
    this.topY=0;
    this.bottomY=0;
    this.imgTop=option.imgTop;
    this.imgBottom=option.imgBottom;

    this.imgWidth=option.imgTop.width;
    this.imgHeight=option.imgTop.height;
    this.speed=2;
    this.space=150;

    /*初始化Y坐标值*/
    this.getY();
}

Pipe.prototype={
    constructor:Pipe,
    drawPipe:function(){
        this.x -= this.speed;
        if(this.x < -3*this.imgWidth){
            this.x += 3*this.imgWidth * 6;
            /*重新绘制管子的时候，需要重新获取Y值*/
            this.getY();
        }
        /*绘制上面的管子*/
        this.ctx.drawImage(this.imgTop,this.x,this.topY,this.imgWidth,this.imgHeight);
        /*创建上方对应的路径*/
        this.ctx.rect(this.x,this.topY,this.imgWidth,this.imgHeight);
        /*绘制下面的管子*/
        this.ctx.drawImage(this.imgBottom,this.x,this.bottomY,this.imgWidth,this.imgHeight);
        /*创建正方对应的路径*/
        this.ctx.rect(this.x,this.bottomY,this.imgWidth,this.imgHeight);
    },
    getY:function(){
        this.topY= -(Math.random()*270 + 100);
        this.bottomY=this.imgHeight+this.topY+this.space;
    }
};