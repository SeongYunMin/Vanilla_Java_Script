const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");
// clockTitle 변수는 clockContainer 엘레멘트 안에 있는 h1태그를 찾아서 그 태그
// 자체를 변수로 설정하였다
// 항상 init 함수를 먼저 만들고 시작하자
function getTime(){
    const date = new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    // if(minutes<10&&hours<10&&seconds<10){
    //     clockTitle.innerText = `0${hours}:0${minutes}:0${seconds}`;
    // } else if(minutes<10&&hours<10&&seconds>=10) {
    //     clockTitle.innerText = `0${hours}:0${minutes}:${seconds}`;
    // } else if(minutes<10&&hours>=10&&seconds<10) {
    //     clockTitle.innerText = `${hours}:0${minutes}:0${seconds}`;
    // } else if(minutes>=10&&hours<10&&seconds<10) {
    //     clockTitle.innerText = `0${hours}:${minutes}:0${seconds}`;
    // } else if(minutes>=10&&hours>=10&&seconds<10) {
    //     clockTitle.innerText = `${hours}:${minutes}:0${seconds}`;
    // } else if(minutes>=10&&hours<10&&seconds>=10) {
    //     clockTitle.innerText = `0${hours}:${minutes}:${seconds}`;
    // } else if(minutes<10&&hours>=10&&seconds>=10) {
    //     clockTitle.innerText = `${hours}:0${minutes}:${seconds}`;
    // } else {
    //     clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
    // } 이건 솔직히 너무 복잡한 코드이다 ternary operator 쓰자
    clockTitle.innerText = `${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}` : seconds}`;
}
// 일단 new Date() 오브젝트를 사용하여 date 변수에 현재 시간을 저장한다
// 그리고 date변수에서 getMinutes같은 객체를 사용하여 현재 시간, 분 , 초를
// 갸져오고 이를 innerText 오브젝트를 활용하여 clockTitle태그 안에 삽입한다
// 근데 이렇게만 하면 계속 새로고침을 해줘야 시간이 변하는 것을 알 수 있다
// 따라서 setInterval 이라는 오브젝트 사용하여 매 초마다 화면 새로고침해서
// 시간이 가는 시계를 만들것이다
// setInterval(fn, 1000); 얘는 이런 형식으로 코드를 짜는데 첫 인자로 실행할
// 함수를 넣고 두번쨰 인자로 함수를 실행할 시간 간격을 넣게 된다
// 시간 단위는 ms 단위이다 아래 init 함수에 setInterval 함수 넣어보자
// ternary operator를 써보자 a>b ? XXX : YYY 이런 형식으로 쓰이는데
// a>b가 참이면 XXX를 실행하고 거짓이면 YYY를 실행하는 연산자이다
function init(){
    getTime();
    setInterval(getTime,1000);
    // 이렇게 하면 시간이 1초마다 새로고침되며 시계가 작동된다
    // 근데 초침이 한자릿수일때 앞에 0이 표시되지 않는다 이는 조건문으로 해결한다
}
init();