const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");
    // querySelcector는 발견한 첫번쨰 태그를 가져온다
    // 후 인제 간단한 정보들을 브라우저에 저장할 수 있는 local storage에 대해 알아보자
    // 유저네임과 같은 작은 JS 정보들을 브라우저에 저장하는 것이다
    // 이 저장된 내용은 요소검사 창의 application배너에서 볼 수 있다
    // localStorage.setItem()로 정보를 입력할 수 있고 .getitem()으로 정보를 가져온다
//    로컬 스토리지는 URL에 기반을 둔다 URL 별로 각각 다른 local storage 가지는 것
   
const USER_LS="currentUser",    
    SHOWING_CN="showing";
 // init 함수부터 읽어나가자
function saveName(name){
    localStorage.setItem(USER_LS,name);
}

function handleSubmit(event){
    // event 발생시 사용하는 함수이므로 인자에 event를 넣어준다
    event.preventDefault();
    // form에서 submit이라는 이벤트가 발생하면 브라우저는 디폴트로 이 입력된 값을
    // 어딘가로 보내고 싶어한다 따라서 입력하고 엔터치면 입력된 값 사라지고 브라우저 새로고침 되는것
    // 이 디폴트 값을 제거해야 한다 이렇게 하면 값 입력하고 엔터 쳐도 변하는것 없어진다
    // 인제 브라우저의 디폴트값 제거했으므로 입력된 값을 저장하는 법을 배워보자
    const currentValue=input.value;
    // 이렇게 input의 많은 객체 중 하나인 value를 쓰면 입력한 값을 얻을 수 있다
    paintGreeting(currentValue);
    // paintGreeting 함수에 입력값을 넣어서 화면에 Hello 입력값 이 나오게 하자
    saveName(currentValue);
    // 이 함수를 만들어서 입력값을 localStorage에 저장하자!
}

function askForName(){
    form.classList.add(SHOWING_CN);
    greetings.classList.remove(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText=`Hello ${text}`;
}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser === null){
        // 로컬스토리지에 유저네임 없을때
        askForName();
    } else {
        // 로컬 스토리지에 유저네임이 있을때
        paintGreeting(currentUser);
    }
}
    function init(){
        loadName();
}
init();