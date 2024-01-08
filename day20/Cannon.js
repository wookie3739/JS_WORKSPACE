class Cannon extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY, bg){
        super(container,src,x,y,width,height,velX,velY);

        this.bg = bg;
        this.deg = 0; // 대포가 보유할 각도

        //이미지 사용하지 않고, div에 배경으로 처리
        if(this.src.length <= 1){ // 넘어온 이미지가 없다면
            this.div.style.background = this.bg;
        }
    }
    setDegree(n){
        this.deg += n; //값의 변화
        //화면에 반영
        this.div.style.transform = "rotate("+this.deg+"deg)";
        infoBox.div.innerText = this.deg + "˚";
    }
}