class Enemy extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);
    }
    //부모의 메서드가 나한테 적절하지 않은 경우, 즉 업그레이드가 필요한 경우
    // 부모의 메서드와 동일한 메서드명으로 재정의할 수 있는 기법을 가리켜
    // 오버라이딩(Overriding)
    move(){
        this.x += this.velX;
        // console.log("자식");
        this.img.style.left = this.x + "px";
    }
}