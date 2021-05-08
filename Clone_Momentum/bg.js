const body = document.querySelector("body");


// Math.random()라는 오브젝트를 이용하면 랜덤한 수를 얻을 수 있다 
// 근데 얘는 0에서 1사이의 소수로다가 난수를 뽑아낸다 우리는 1~5사이의 정수를 뽑아내야한다
// (이미지가 5개이기 때문)
// 그때 쓰는 것이 Math.floor이다 floor, 말그대로 바닥이라는 뜻이다, 즉 버림을 의미한다
// ceiling은  올림이다
// random 함수만 쓰면 0~1사이 실수 형태의 난수를 추출하므로 5이하의 난수를 얻으려면
// Math.random * 6 이렇게 5을 곱해주면 된다
const IMG_NUMBER = 5;


function paintImage(imageNumber){
    const image = new Image();
    // 이미지 가져오자 
    image.src = `imagesLandScape/${imageNumber + 1}.jpg`;
    // randomNmber는 0~5중 하나이므로 1을 더해준다
    image.classList.add("bgImage");
    // 이렇게 image 태그에 class name부여해서 css가 조작하도록 해보자
    body.appendChild(image);
    // image.addEventListener("loadend", handleImgLoad);
    // 사진이 완전히 로딩된후 보여지게 하고 싶다면 이 addEventListner를 쓰면 된다
    // 하지만 우리는 로컬에서 사진을 가져왔기 때문에 이거 안해도 됨 로딩 자체가 없음
    // API 에서 사진 가져온다면 이 기능 필요하다
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();