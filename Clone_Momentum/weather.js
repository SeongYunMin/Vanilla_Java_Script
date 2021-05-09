const weather = document.querySelector(".js-weather");


const API_KEY = "8301ae4f26d8f2a8ae02c633907a7e66";
// openweather 사이트에서 받아온 api 키이다
// api는 다른 서버로부터 데이터를 손쉽게 가져올 수 있는 수단이다
// 잡사스크립트가 강력한 이유는 실시간으로 다른 웹사이트로부터 데이터를 가져와서 내 페이지에
// 반영할 수 있기 때문이다 새로고침할 필요가 없다
const COORDS='coords';

function getWeather(lat, lng){
    // 아래처럼 fetch(``)를 사용하면 api주소를 가져올 수 있다 중요한 점은 백택을 사용해야 한다는 것
    // 이 주소는 openweather 사이트에서 알 수 있고 lat과 lng, 그리고 appid 자리에 우리가 얻은
    // 값들을 넣어주면 된다 이 api key는 이 api를 무료로 배포한 기업이 우리가 너무 많은 정보를 가져가지
    // 못하도록 제한을 두기 위해 필요한 것이다
    // https:// 랑 백택을 까먹으면 안된다
    // 그리고 중요한게 이 api를 배포하는 사이트로 가보면 units of measurement 항목이 있다
    // 거기서 보면 온도단위의 디폴트값이 켈빈임을 알 수 있다 이를 celcius로 바꾸려면 &units=metric
    // 을 url주소 뒤에다가 붙여주면 된다
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}°C @ ${place}`;
    });
    // .then() 객체는 말그대로 fetch로 부터 데이터를 받은 후에(then) 괄호 안의 함수를 실행시키는
    // 객체이다 이렇게 then 쓰는 이유는 우리는 fetch가 완벽하게 된 후에 다음 작업을 하길 원하기 때문
    // then 을 사용하지 않는다면 데이터가 들어오기도 전에 다음 코드가 실행돼 그 데이터 쓸 수 없게 될 수도 있다
    // 우리가 원하는 데이터는 개발자 도구의 네트워크 배너 안의 response 에 들어있는 stringify 된
    // 날씨 데이터를 다시 오브젝트화해서 불러오고 싶다 따라서 response.json() 을 써서
    // response창의 데이터를 json 데이터, 즉 오브젝트 데이터로 만들자
    // 근데 얘도 불러오는데 pending, 즉 로딩 시간이 필요하다 따라서
    // 다음 코드도 .then을 써서 앞부분이 완벽히 실행되고 cascading하게 실행되도록 해보자
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position); 
    // 이렇게 하면 콘솔창에 geo 정보가 나온다
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // latitude: latitude,
        // longitude: longitude
    // 자바스크립트에서는 위처럼 오브젝트의 키와 변수가 이름이 같을 경우 아래와 같이 축약가능
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function handleGeoError(){
    console.log("Can't Access Geo Location");
}

function askForCoords(){
    // navigator라는 API를 써보자 지금까지 써왔던 api 중엔 window 등이 있다
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    // 이 navigator의 객체 중 하나인 geolocation은 gps 정보를 가져오는 역할 을 하고
    // getCurrentPosition함수는 현재위치 가져오는 역할을 한다 이 함수의 requirements는
    // 2개이다 하나는 geo정보를 성공적으로 가져왔을때, 하나는 못 가져왔을때 이다
}

function init(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
        // 아직 저장된거 없으면 coords 저장하게끔 하자
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        // 로컬수토리지 내에 coords 저장돼있다면 그 안에 있는 stringify 된 오브젝트를
        // JSON으로 다시 오브젝트로 전환시켜 parseCoords에 저장하자
        // console.log(parseCoords); 이걸로 콘솔창에서 확인 ㄱㄱ
        getWeather(parseCoords.latitude, parseCoords.longitude);
        // 자 이렇게 하고 개발자도구에서 network 배너를 눌러보자 그러면 거기 너가 추가한
        // api가 있을 것이다 그리고 network에서 너의 api를 누르고 response를 눌러보면
        // 이 api가 오브젝트에다가 필요한 날씨와 위치 정보를 넣어준 것을 알 수 있다
    }

}

init();