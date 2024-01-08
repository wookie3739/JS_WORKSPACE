// 총알을 정의한다.
class Bullet{
    constructor(container, x, y, width, height, velX, velY, bg){
        this.container = container;
        this.div = document.createElement('div');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.bg = bg;

        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundColor = this.bg;
        this.div.style.borderRadius = 50 + "%";
        this.div.style.filter = "blur(1px)";
        this.container.appendChild(this.div);




    }
    move(){

        this.x += this.velX;
        this.y += this.velY;
 
        //화면에 등장하는 모든 적군과 나와 충돌 검사해보자
        for(let i = 0; i < enemyArray.length; i++){

           let result = collisionCheck(this, enemyArray[i]);
           if(result){
               //나 멈추고 너 멈추고
               this.velX = 0;
               enemyArray[i].velX = 0;
                
               //화면에서 나 제거 너 제거
               wrapper.removeChild(this.div); // 불릿 제거
               wrapper.removeChild(enemyArray[i].img); // 적군 제거

               //배열에서도 나 제거 너 제거
               let index = bulletArray.indexOf(this);
            //    let idx = enemyArray.indexOf(i); 
            // let idx = enemyArray.indextOf(this);
            // console.log(idx);
            //    console.log("적군의 위치는: ", idx);

            //    console.log("내 위치는:", index);
               bulletArray.splice(index,1); // 불릿 제거(배열)
               enemyArray.splice(i, 1); // 적군 제거(배열) 0 인스턴스 
            

           }

        }



        //총알의 x값이 화면 끝을 넘어서면
        if(this.x > 1200){
            this.velX = 0;
            // this란 인스턴스가 자기 자신을 가리키는 변수
            // 단, 변수명이 이미 정해져있다.
            // 여기서 this란 bullet이 자기 자신을 가리키는 변수
            wrapper.removeChild(this.div);
            
            //배열에서 제거
            let index = bulletArray.indexOf(this);
            // console.log("나의 위치는", index);
                bulletArray.splice(index,1)

        }

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}