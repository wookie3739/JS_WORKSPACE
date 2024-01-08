//적군들을 정의하자

class Enemy {
    constructor(container, src, x, y, width, height, velX, velY) {
      this.container = container;
      this.img = document.createElement("img");
      this.img.src = src;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.velX = velX;
      this.velY = velY;
  
      //적의 스타일을 정의하자
  
      this.img.style.position = "absolute";
      this.img.style.left = this.x + "px";
      this.img.style.top = this.y + "px";
      this.img.style.width = this.width + "px";
      this.img.style.height = this.height + "px";
  
      this.container.appendChild(this.img);
    }
    move(){
        this.x+= this.velX;
        this.y+= this.velY;

        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
  }