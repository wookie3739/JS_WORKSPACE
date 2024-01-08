class GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        this.container = container;
        this.div = document.createElement('div');
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
    
        //css
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        this.div.style.backgroundImage = "url("+this.src+")";
        this.div.style.backgroundSize = this.width + "px " + this.height + "px";

        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";

        //보더 적용
        this.div.style.border = "1px solid red";
        this.div.style.boxSizing = "border-box";


        //컨테이너에 부착
        this.container.appendChild(this.div);
    }

    //추후 이 클래스를 상속받는 자식이 누가 될지 모르므로 구체적인 내용을
    //작성할 수 없다 따라서 move(){} 추상적으로 정의만 해놓자
    move(){};

    
}