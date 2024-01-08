//현실의 공을 정의해본다

class Ball{
    constructor(container, x, y, width, height, velX, velY, bg){
        this.container = container;
        this.div = document.createElement('div');
        this.x = x;
        this.y = y;
        this.deg = 0; // 공의 각도
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.bg = bg;
        this.count = count;

        //스타일 지정
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        // this.div.style.innerText = "123";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.background = this.bg;
        this.div.style.borderRadius = 50 + "%";


        container.appendChild(this.div);
    }
    //공의 움직임을 정의하는 메서드
    render(){
        this.x += this.velX;
        this.y += this.velY;
        //만약 y축에 대한 데드라인을 넘어서면 velY의 부호를 반대로 뒤집는다.
        if(this.y + this.height >= 1000 || this.y <= 0){
            this.velY = this.velY * (-1);
        }
        //만약 x축이 데드라인 넘어서면
        if(this.x + this.width >= 1000 || this.x <= 0){
            this.velX = this.velX * (-1);
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";        
        this.deg++;
        this.div.style.transform = "rotate(" + this.deg +" deg)"
        
    }
}