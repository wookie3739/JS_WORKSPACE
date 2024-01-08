class Hero extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        //부모 클래스에 명시된 생성자 메서드가 매개변수가 있기 때문에 반드시
        //자식은 부모 생성자의 매개변수를 가지고 호출해야 한다.
        super(container,src,x,y,width,height,velX,velY);
    }
}