class DownSensor extends Sensor{
    constructor(container,x,y,width,height){
        super(container,x,y,width,height);
    }
    move(obj){
        this.div.style.left = obj.x + obj.width*(0.1) + "px";
        this.div.style.top = obj.y + obj.height * (0.9) + "px";
        this.x = parseFloat(this.div.style.left);
        this.y = parseFloat(this.div.style.top);
        this.hitTest(obj);
        }
    hitTest(obj){
       for(let i = 0; i < brickArray.length; i++){
           let result = collisionCheck(this, brickArray[i]);
           if(result){
               console.log("하단 충돌 발생");
               //x축: 충돌한 벽돌의 x보다 - 주인공의 너비만큼
               obj.y = brickArray[i].y + obj.height;
           }
       }
    }
}