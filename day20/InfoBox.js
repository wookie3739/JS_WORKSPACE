class InfoBox extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);

        //나만의 초기화
        this.div.style.fontSize = 100 + "px";
        this.div.style.color = "red";
        this.div.style.fontWeight = "bold";

    }
    //메시지 출력
    printMsg(msg){
        this.div.innerText = msg;
    }
}