class Bullet extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY, bg){
        super(container,src,x,y,width,height,velX,velY);

        this.bg = bg;
        this.power = 10;
        //총알만의 디자인
        if(this.src.length <= 1){ //이미지 없을 경우만

            this.div.style.borderRadius = 50 + "%";
            this.div.style.background = this.bg;
            this.div.style.filter = "blur(1px)";
        }
    }
    move(){
        //중력을 표현
        this.velY += g; 

        this.x += (this.velX*this.power);
        this.y += (this.velY*this.power);

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }

}