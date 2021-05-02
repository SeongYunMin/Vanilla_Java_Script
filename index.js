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