const title=document.querySelector("#title");
const CLICKED_CLASS = "clicked"; 

function handleClick() {
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className=CLICKED_CLASS;
    } else {
        title.className='';
    }
}
function init() {
    title.addEventListener("click",handleClick);
}
init();
// 클래스 명을 바꿔서 원하는 색상을 출력해보자
// 클래스 네임을 JS로 조건에 따라 바꿈으로써 클릭할때마다 색상
// 바뀌게 해봤다
// 근데 이렇게 하면 #title 엘레먼트에 또다른 제 3의 클래스가 지정
// 돼있으면 문제가 생긴다. 위 조건문에 의해 클릭시 그 클래스까지 삭제되고 다시
// clicked 라는 이름으로 재생성되고를 반복하기 때문이다 
// 따라서 원하는  class만 제거하고 생성할 수 있는 객체함수가 필요하다
// 그것이 바로 classList.add 와 classList.remove 이다
//  근데 아래처럼만 하게 되면 클릭한번은 되지만 두번쨰부턴 clikeda 클래스가
// 사라지지 않는다 그 이유는 html코드를 보면 clickeda 클래스가 생성되먄
// 클래스 네임이 "btn clickeda" 가 되기 때문
// 따라서 className 객체를 쓰면 안되고 classList.contains 를 써야한다

// const titleA=document.querySelector("#titleA");
// const CLICKEDA_CLASS = "clickeda"; 
// function handleClickA() {
//     const currentClassA = titleA.className;
//     if(currentClassA !== CLICKEDA_CLASS){
//         titleA.classList.add(CLICKEDA_CLASS);
//     } else {
//         titleA.classList.remove(CLICKEDA_CLASS);
//     }
// }
// function initA(){
//     titleA.addEventListener("click",handleClickA);
// }
// initA();

const titleA=document.querySelector("#titleA");
const CLICKEDA_CLASS = "clickeda"; 
function handleClickA() {
    const hasClassA = titleA.classList.contains(CLICKEDA_CLASS);
    // 이렇게 classList.contains함수는 clickeda 클래스를
    // titleA가 가지고 있으면 true를, 안가지고 있으면 false를 
    // hasClassA에 대입한다
    if(hasClassA === false){
        titleA.classList.add(CLICKEDA_CLASS);
        // !==는 같지 않다를 의미한다
    } else {
        titleA.classList.remove(CLICKEDA_CLASS);
    }
}
function initA(){
    titleA.addEventListener("click",handleClickA);
}
initA();

// 근데 이런 classList.add, className 등을 사용해서 클릭하면 바뀌는
// 토글 기능을 사용하는 것 보다 더 간편하게 토글을 할 수 있는 방법이 있다

// 바로바로 classList.toggle() 을 사용하는 것 얘는 괄호 안의 클래스 네임이
// 태그 안에 있는지 없는지 파악하고 없으면 넣고 있으면 제거하는 역할을 한다
// 그러면 굳이 조건문 안 써도 토글 기능 사용가능하다 handleClick 함수를 아래
// 처럼만 작성해도 위 기능 실행 가능하다
// function handleClickA() {
//     titleA.classList.toggle(CLICKEDA_CLASS);
// }