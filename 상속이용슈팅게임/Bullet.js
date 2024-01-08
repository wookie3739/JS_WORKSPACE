class Bullet extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);
    }
    //총알만의 움직임 정의 오버라이딩
    move(){
        this.x += this.velX;
        // console.log("자식");
        this.img.style.left = this.x + "px";
    }
}