class Bullet{
    constructor(container, src, x, y, width, height, velX, velY){
        this.container = container;
        this.img = document.createElement('img');
        this.src = src;
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
    //움직이는 method를 정의
    move(){
        this.y += this.velY; // 물리량 변화
        //충돌 여부를 체크하여, 충돌이면 1)화면에서 제거, 2) 배열에서 제거
        //화면에 존재하는 모든 적군을 대상으로 충돌체크
        for(let i = 0; i < enemyDblArray.length; i++){
            for(let a = 0; a < enemyDblArray[i].length; a++){
                let result = collisionCheck(this, enemyDblArray[i][a]);
                if(result){
                    // console.log("적군과 닿았어");
                    wrapper.removeChild(enemyDblArray[i][a].img); // 적군 화면에서 제거
                    wrapper.removeChild(this.img);

                    enemyDblArray[i].splice(a, 1);
                    bulletArray.splice(bulletArray.indexOf(this) ,1);

                }
                //적군과 충돌이 발생하지 않은 경우 화면밖으로 나가면 제거
                if(this.y < 0){
                    wrapper.removeChild(this.img);
                    bulletArray.splice(bulletArray.indexOf(this) ,1);
                }
            }
            
        }
        this.img.style.top = this.y + "px"; // 시각화
        
    }
}