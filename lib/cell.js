// 셀 하나를 정의한다.
class Cell{
    constructor(container, x, y, width, height, bg){
        this.container = container;
        this.div = document.createElement('div');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bg = bg;
        this.a = 0.1;
        this.targetOP = 1;

        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.background = this.bg;
        this.div.style.border = "1px solid black";
        this.div.style.boxSizing = "border-box";
        this.div.style.opacity = 1;

        this.container.appendChild(this.div);

        //div에 마우스 올려놓으면 op를 0으로 놓자
        this.div.addEventListener('mouseover', ()=>{
            this.targetOP = 0;
        });
    }
        //나의 투명도 = 나의 투명도 + 감속도(목표 투명도 - 나의 투명도);
        render(){
            
            this.div.style.opacity = parseFloat(this.div.style.opacity) + this.a * (this.targetOP - parseFloat(this.div.style.opacity));
        }
}