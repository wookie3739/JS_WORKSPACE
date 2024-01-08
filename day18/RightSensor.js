class RightSensor extends Sensor{
    constructor(container,x,y,width,height){
        super(container,x,y,width,height);
    }
    move(obj){
        this.div.style.left = obj.x + obj.width * (0.9)+ "px";
        this.div.style.top = obj.y + obj.height * (0.1) + "px";

        //센서의 div의 위치만 변경하지말고, 센서의 x,y값도 변경해줘야 한다.
        this.x = parseFloat(this.div.style.left);
        this.y = parseFloat(this.div.style.top);
        this.hitTest(obj);
    

    }
    hitTest(obj){
        for(let i = 0; i < brickArray.length; i++){
            let result = collisionCheck(this, brickArray[i]);
            if(result){
                console.log("우측 충돌 발생");
                //x축: 충돌한 벽돌의 x보다 - 주인공의 너비만큼
                hero.x = brickArray[i].x - obj.width;
            }
        }
    }
}