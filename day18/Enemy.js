class Enemy extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);

        this.leftSensor = new LeftSensor(container, x, y+height*0.1,width*0.1, height*0.8) ;
        this.rightSensor = new RightSensor(container, x+width*0.9, y+height*0.1, width*0.1, height*0.8);
        this.upSensor = new UpSensor(container, x + width*0.1, y , width*0.8, height*0.1);
        this.downSensor= new DownSensor(container,x + width*0.1, y+height*0.9, width*0.8 , height*0.1);
    }
    move(){
        // console.log("하이",this);
        this.x += this.velX;
        this.y += this.velY;
        
        this.leftSensor.move(this);
        this.rightSensor.move(this);
        this.upSensor.move(this);
        this.downSensor.move(this);

        
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}