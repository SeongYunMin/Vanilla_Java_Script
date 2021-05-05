const title=document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 140, 141)";
function handleClick(){
    // console.log(title.style.color)
    // 클릭할때 마다 title의 색깔을 콘솔창에 띄워줄 것이다(이후 코드때매 주석처리)
    const currentColor=title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color=OTHER_COLOR;
    } else {
        title.style.color=BASE_COLOR;
    }
    // 이렇게 조건문 짜면 클릭이라는 이벤트 발생시 색깔 계속 바뀌는
    // 리액션을 만들 수 있다
    // 요소검사를 해보면 색깔 클릭시 바뀜을 확인할 수 있다
}

function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("click", handleClick);
    // 이 객체를 통해 click 할때마다 handleClick 함수 실행되게 하자
    // title.addEventListener("mouseenter", handleClick);
    // 이렇게 mouseenter 기능을 선택하면 마우스가 타이틀위에 호버할때마다 색깔을
    // 바꿀 수 있다
    // 구글에 JS DOM event mdn을 치면 반응할 수 있는 많은 이벤트들을 알려준다
}
init();

function handleOffline(){
    console.log("Now computer is offline");
}

window.addEventListener("offline", handleOffline);
// 이렇게 하면 브라우저가 오프리안 됐을때 콘솔 창에 출력을 하도록 만들 수 있다