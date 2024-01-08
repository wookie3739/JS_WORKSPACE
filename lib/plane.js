// 게임에 등장할 우주선을 정의한다.

class Plane{
    //이 객체가 보유할 변수를 멤버변수라하고, 생성자 메서드 내에 작성해야한다.
    constructor(container, x, y, width, height, velX, velY){
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.img = document.createElement('img');
        
        //스타일 지정
        this.img.src = "../images/Airplane/plane.png";
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        //컨테이너 부착
        this.container.appendChild(this.img);
    }
    move(){
        this.x += this.velX;
        this.y += this.velY;

        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}