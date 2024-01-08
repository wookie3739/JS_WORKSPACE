class Sensor{
    constructor(container,x,y,width,height){
        this.container = container;
        this.div = document.createElement('div');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        this.div.style.backgroundSize = this.width + "px " + this.height + "px";

        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";

        //보더 적용
        this.div.style.border = "1px solid red";
        this.div.style.boxSizing = "border-box";


        //컨테이너에 부착
        this.container.appendChild(this.div);
    }
        move(){}
        hitTest(){}
}