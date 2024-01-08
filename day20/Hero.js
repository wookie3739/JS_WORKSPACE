class Hero extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY, bg){
        super(container,src,x,y,width,height,velX,velY);

        this.bg = bg;
        //내가 원하는 스타일의 대포를 생성하자
        // 객체가 다른 객체를 소유할 때!
        this.cannon = new Cannon(this.container,"",this.x - 40, this.y, 150,13,0,0,"black"); // 주인공이 대포를 보유한다. has a 관계
        //이미지 사용하지 않고, div에 배경으로 처리
        if(this.src.length <= 1){ // 넘어온 이미지가 없다면
            this.div.style.background = this.bg;
            this.div.style.borderRadius = 20 + "%";
        }
    }
}