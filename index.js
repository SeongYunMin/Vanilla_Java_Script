// alert('Im Working, Im JavaScript');
// 이렇게 alert를 쓰면 실행시 경고창이 뜨게 된다
console.log('Im Working, Im JavaScript');
//얘는 요소검사시 콘솔창에 이 문구가 뜨게 한다

// d=221;
// c=d-5;
// console.log(b);
// 이렇게 변수를 생성할 수 있다
// 변수를 설정할 때 지켜야 할 규칙은 변수를 설정하고 초기화하고 사용하는 것이다
// 초기화 하기에 앞서 처음 생성하는 변수 앞에는 let 을 붙여야 한다(변수 종류 2가지라 이를 구별하기 위해서라)
// 처음에 초기화 한 후 변수의 값을 바꿀때는 앞에 let을 붙이지 않는다
let a=225;
let b=a-5;
a=4;
console.log(b,a);

// const c=152;
// c=777;
// console.log(c);
// 이 const 변수는 절대 변하지 않는 값을 지정할 때 쓰인다 var은 let이랑 같은데 그냥 let쓰자
// 배우는 초기단계에선 const를 일단 많이 쓰고 필요할 때만 let을 쓰자!
// 다양한 data type을 배우자
//String
const what="Seongyun";
console.log(what);

// Boolean
// 얘네는 무조건 소문자로 쓰고 이들은 문자열 아니므로 ""쓰지 않는다
const wat= true;

// Float
const watt=55.1;

// 자바스크립트는 camel case로 변수명을 지정해줘야 한다
// 규칙은 첫단어는 소문자, 그다음 단어부터는 첫글자를 대문자로 써주는 거다

// 정렬은 2가지 방법이 있다 array 와 object 이다
//  array를 배워보자 아래처럼 쓰면 된다 []안에 변수값을 넣어주면 된다
const daysOfWeek=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
// 근데 array는 내용물이 객체가 되는 것이 아니다 내용물은 그저 변수값일 뿐이다
// 따라서 위 처럼 화면에 3번째 값인 Wed를 출력하려면 daysOfWeek[2] 이렇게 번거롭게 표현해야한다

// object는 괄호 안의 내용물이 각각 객체로 지정이 된다 여기서 괄호는 {}를 써야한다
const andyInfo={
    name:"Nico",
    age:22,
    gender:"Male",
    man:true,
    favMovies: ["Along the gods","Parasite","Ironman"],
    // 이렇게 object안에 array를 넣을 수도 있다
    favFoods:[{name:"Kimchi",spicy: true},{name:"Burger",spicy: false}]
};
console.log(andyInfo);
console.log(andyInfo.gender);
andyInfo.gender="Female"
console.log(andyInfo.gender);
console.log(andyInfo.favMovies[2]);
console.log(andyInfo.favFoods[1].name);
// 이렇게 object안에 세부적인 객체를 지정해서 쓸 수 있다(C++의 구조체랑 같은것)
//이 오브젝트 안에 있는 name, age같은 것들을 key라고 한다
console.log(console);
// 보다시피 콘솔 또한 오브젝트이다
//  이 콘솔 또한 오브젝트 중에 하나이고 log는 그 오브젝트 안에 있는 함수인 log를
// 의미한다
console.log(console,andyInfo);

// 함수를 만드는 법!
// function sayHello(){
//     console.log('Hello!');
// }
// 이렇게 function을 앞에 써줌으로서 sayHello()는 함수가 되었다
// sayHello();
// sayHello()에 인자(알규먼트)를 넣을 수 있게 해보자
function sayHello(name, food){
    console.log('Hello!', name, "you want to have", food);
}
sayHello("SeongYun","Chicken");
// 이렇게 하면 인제 함수에 인자를 대입할 수 있게 된다
// 자바스크립트에서 '',"" 둘다 string을 의미한다!! 구별 안 해줘도 됨
// 근데 위 처럼 함수를 작성하는것은 너무 올드하고 실수하기 쉽다 새로운 방법을 쓰자
function sayAge(name, age){
    console.log(`Hello ${name} You are ${age} years old`);
}
sayAge('Seongyun',22);
// 이렇게 백택(`)과 ${argument}를 사용하여 전보다 쉽게 함수 만들 수 있다

function sayAge(name, age){
    console.log(`Hello ${name} You are ${age} years old`);
}
const greetSeongYun=sayAge('Seongyun',22);
console.log(greetSeongYun);
// 근데 이렇게 한번 실행을 해보자 greetSeongYun 변수는 sayAge 함수의 함수값을 리턴받아서
// console.log에 표시해야 하는데 return 값이 없다 따라서 undefined 뜨는것 즉 값을 도출하려면
// return을 써야 한다
function sayAge2(name, age){
    return `Hello ${name} You are ${age} years old`;
}
const greetSeongYunMin=sayAge2('SeongYun',22);
console.log(greetSeongYunMin);

// 계산기 함수를 만들어보자 자바스크립트는 오브젝트 안에 함수를 만들 수 있다

const calculator={
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    divide: function(a,b){
        return a/b;
    }
}
// 위처럼 오브젝트 안에 함수를 지정할 수 있다
// 객체 사이에는 , 를 쓰는 것을 절대 잊으면 안된다!
const plus=calculator.plus(3,5);
console.log(plus);
const divide=calculator.divide(5,3);
console.log(divide);

//인제 JS로 html을 컨트롤하는 법을 배워보자!!
// document라는 인자는 말그대로 페이지의 html documnet를 가져오는 역할을 한다
console.log(document); //컴파일해서 확인해봐
const title=document.getElementById("title");
console.log(title);
// 저 getElementById 함수는 말그대로 입력한 아이디에 해당하는 html 엘레먼트 코드를
// 가져온다 따라서 이를 콘솔창에 출력해보았다

// DOM
// DOM은 Document Object Module의 약자로 자바스크립트는 html에 있는 모든 엘레먼트
// 를 가져올 것이다 그리고 그것을 오브젝트로 바꿀 것이다
// 즉 DOM 함수를 통해 원하는 html 태그를 가져다가 오브젝트로 만드는 것이다 그리고
// 그 오브젝트에 원하는 key를 부여해서 원하는 기능을 하게 만들 것이다
title.innerHTML  ="Hi! From JS";
// 앞으로 배울 많은 함수들, 오브젝트 내의 함수들은 DOM형태로 변경 가능하다
console.dir(title);
// dir함수를 통해 title로 할 수 있는 많은 것들을 볼 수 있다
title.style.color = 'yellow';
// 이렇게 하면 html의 #title 태그를 노란색으로 바꿀 수 있다
console.dir(document);
// 도큐먼트를 살펴보면 오브젝트 형태로 돼있다
document.title='JS is Powerful';
// 이렇게 하면 html document의 타이틀을 바꿀 수도 있다
const hello=document.querySelector(".hello");
// 이 querySelector라는 함수는 html 도큐먼트로 가서 .hello, 즉 class name이 
// hello인 태그를 찾아서 hello라는 변수애 입력하는 일을 한다(cascading하게 읽어서
    // 처음으로 만나는 .hello태그를 가져온다) 이 Selector는 CSS에서 클래스를 가리키는
    // Selector 와 똑같다
console.log(hello);
//html에 hello라는 클래스 네임을 가진 태그 없기 때문에 null이라고 출력된것이다