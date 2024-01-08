//게임에 등장하는 모든 객체들의 최상위 객체
class GameObject{

    //모든 게임에 등장하는 객체들이 보유할 보편적 특징을 명시하자
    constructor(container,src,x,y,width,height,velX,velY){
        console.log("부모인 GameObject 의 생성자 호출됨");
        this.container = container;
        this.img = document.createElement('img');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.img.src = src; 

        //스타일
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        this.container.appendChild(this.img);
    }
    //만일 모든 Object가 동일한 움직임을 갖는다면
    //움직임 메서드는 부모에 정의해도 된다. 하지만 각각 틀린 움직임이라면
    //각각의 자식이 자신만의 움직임 메서드를 정의해놓으면 된다.
    move(){
        this.x += this.velX;
        this.y += this.velY;
        
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}