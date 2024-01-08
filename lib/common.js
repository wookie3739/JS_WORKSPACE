//js 영역

function getRandom(max){
    let result = parseInt(Math.random()*max); // 3.xxx
    return result; // 함수 호출자에게 결과를 전달하기 위해
}


// 3~5사이의 수, -100~250 지정가능
function getRandomByRange(min, max){
    let result = min + parseInt((max-min)*Math.random());
    return result;
}


//두 물체간 충돌 체크
function collisionCheck(me, you){
// 좌측상단
    let result1 = ((me.x + me.width) >= you.x) && ((me.y + me.height) >= you.y);
    // console.log("result1: " ,result1);
// 좌측하단
    let result2 = ((me.x + me.width) >= you.x) && (me.y <= (you.y + you.height));
    // console.log("result2: " ,result2);
// 우측상단
    let result3 = (me.x <= (you.x + you.width)) && ((me.y + me.height) >= you.y);
    // console.log("result3: " ,result3);
// 우측하단
    let result4 = (me.x <= (you.x + you.width)) && (me.y <= (you.y + you.height));
    // console.log("result1: " ,result4);

    return result1 && result2 && result3 && result4;

}

// 욕 필터링 함수

function filerString(msg) {
    let slang = ["개새끼", "씨발", "놈", "니미", "육시랄", "지랄"];
    let good = ["강아지", "이런", "님", "어머니", "제기랄", "요동"];
  
    // let msg = "야 니미 육시랄 씨팔 놈 개새끼 니 때문에 나 망했자나 씨팔";
  
    //사용자가 입련한 메세지의 소속된 모든 문자열들이 욕에 해당되는지
    //조사하기 위해서는 공백문자를 기준으로 분리시키자.
    let wordArray = msg.split(" ");
    let result = ""; // 복원된 메세지가 들어갈 변수 ..
  
    for (let i = 0; i < wordArray.length; i++) {
      // 모든 단어를 대상으로..
      for (let a = 0; a < slang.length; a++) {
        //비속어에 해당하는지 비교
        if (wordArray[i] == slang[a]) {
          //욕이 발견되었다면 ...?
          wordArray[i] = good[a]; // 메세지 배열의 단어를 순화된 단어로 교체 .
        }
      }
  
      // 다시 공백을 넣어줘서 대화 메세지가 찢어졌던걸 붙여줘야지...
      result += wordArray[i] + " ";
    }
    console.log("순화된 언어는", result);
    return result;
  }

  /*--------------------------------------------------
  특정 경로에서 파일명만 추출하기
  path : 파일의 풀 경로 ex) c:/test/pic.jpg
  ----------------------------------------------------*/

  function getFileName(path){
    let lastIndex = path.lastIndexOf("\\");
    let filename = path.substring(lastIndex + 1, path.length); // 전체 문자열내에서 일부를 추출(시작 index, 끝 index)
    return filename; // 최종적으로 파일명만 반환
  }

  function getStoreList(){
   let stores = [
       //하나의 상점에 대한 정보    
           {
               store_name: "김밥천국",
               lati : 37.61908, 
               longi : 126.7191,
               url : "https://newsstand.naver.com/?list&pcode=368",
               intro : "저렴한 가격이 매력적",
               icon : "../images/가위.png"
              
           },
           {
            store_name: "함초령팔당냉면",
            lati : 37.61903, 
            longi :126.7209,
            url : "https://newsstand.naver.com/?list&pcode=909",
            intro : "여기가 바로 냉면 맛집",
            icon : "../images/주먹.png"
           
        },
        {
          store_name: "KFC",
          lati : 37.61879, 
          longi : 126.7182,
          url : "https://newsstand.naver.com/?list&pcode=079",
          intro : "햄버거 먹으러 오세요",
          icon : "../images/보.png"
         
      }
       ];
       return stores;
  }

  /*--------------------------------------------------
 로또 반환받기 getRandom도 필요함
  ----------------------------------------------------*/

  function getLotto(){
    let numArray = [];
    let winArray = [];
    //로또 번호 채우기
    for(let i = 1; i <=45; i++){
        numArray.push(i);
    }

    //당첨번호가 6개에 도달할 때까지, 계속 시도해야하므로 무한루프로 시도한다.
    while(true){
        //당첨번호 추출
        let n = getRandomByRange(1,numArray.length+1);
        // console.log("추출된 랜덤 수는", n );
        //6개까지만 아래의 작업을 진행
        if(winArray.length < 6){

            //당첨번호 내역에 없는 번호일 경우만 추가
            if(winArray.indexOf(n) === -1){
                
                winArray.push(n);
            }
        }else{
            break; // 반복문 빠져나오기
        }
    }
    return winArray;
  }

  /*--------------------------------------------------
  두 자릿수의 경우 0을 붙이는 스트링 처리 함수
  ex) 8의 경우 08, 12의 경우 그대로
  ----------------------------------------------------*/
  function getNumString(n){
    let str = n;
    if(n<10){
     str = "0" + str;
    }
      return str;
    
  }