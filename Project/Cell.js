class Cell{
    constructor(container, x, y, width, height, text, bg){
        this.container = container;
        this.div = document.createElement('div');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.bg = bg;


        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.background = this.bg;
        this.div.innerText = this.text;
        this.div.style.border = "1px solid black";
        this.div.style.boxSizing = "border-box";

        this.container.appendChild(this.div);
    }

}