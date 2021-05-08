const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
//여기서 변수명을 그냥 form이나 input으로 하지 않는 이유는 greetings.js에서 이미
// 쓴 변수명이기 떄문이다 다른 파일이어도 const이기 때문에 변수명은 갖게 해줄 수 없다  
const TODOS_LS = "toDos"; 

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
// 이 JSON이 toDos를 string으로 바꿔준다 로컬 스토리지에 입력데이터 저장 완료!
// JSON은 오브젝트를 스트링으로도 바꿀 수 있고 스트링을 오브젝트로도 바꿀 수 있다
function paintToDo(text){
    // 이 함수에서는 단순히 querySelector로 html에 수정을 가해주는 것이 아닌 새로운 엘레먼트를 만들 것이다
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId =  toDos.length + 1;
    delBtn.innerText="❌";
    span.innerText = text;
    // 이렇게 createElement를 사용해서 원하는 엘레먼트를 만들 수 있다
    // 여기서 text는 인자이다
    li.id = newId; //이렇게 id 객체를 이용해서 li각각에 id를 부여하자 이렇게 해야 나중에 특정 리스트를 정확하게 조작 가능하다
    li.appendChild(span);
    li.appendChild(delBtn);
    // 그리고 appendChild라는 함수를 통해 span과 delBtn을 li의 자식 엘러먼트로 넣을 수 있다
    toDoList.appendChild(li);
    // 그리고 그것을 html에 미리 만들어놨던 .js-toDoList 엘리먼트 
    // 안에 넣으면 이 함수 실행될 떄마다 JS로 html태그를 생성할 수 있게 된다

// -----------이 paintToDo 함수에서 여기까지는 html을 건드렸다 아래는 LS에 저장하는 부분이다---------
    
    const toDoObj = {
        text: text,
        // paintTodo 함수의 인자인 text를 가져왔다
        id: newId
        // toDos.length를 쓰면 이 어레이의 길이를 알려준다 지금은 아무것도 없으므로
        // 길이가 0인데 거기에 1을 더했으므로 id는 1이 된다
    };
    toDos.push(toDoObj);
    // push라는 함수를 쓰면 toDoObj라는 오브젝트를 toDos 어레이에 넣을 수 있다
    // 이렇게 입력한 currentValue를 array에 저장할 수 있다 콘솔창 띄어놓고 확인 ㄱㄱ
    // 이렇게 html에서 리스트를 만든것도 모잘라서 JS에서 따로 어레이를 만든 이유는
    // 이 toDo에 입력된 정보들을 localStorage에 저장해야되기 때문이다
    saveToDos();
    // 인제 이것을 LS에 save하도록 하자
    // 근데 이렇게 localStorage에 우리가 입력한 데이터를 저장하게 되면 콘솔창으로 확인해
    // 봤을 때 그냥 object object 이런식으로 저장이 된다 그 이유는 localStorage는 모든 정보
    // 를 string으로 저장하기 떄문이다. 즉 JS에서 생성한 JS 오브젝트를 직접 저장할 수 없다
    // 우리가 입력한 데이터를 string으로 바꿔야 한다 이때 쓰는것이  JSON.stringify() 이다
    // 얘는 추후 배울 것이지만 우선은 JS 오브젝트를 string으로 바꿔준다는 것만 알아두자
    // 위의 saveTodos 함수에 이 것을 적용해봤다
}

function handleSubmit(event){
    // 아래 event.preventDefault(); 적용하기 위해 event인자는 꼭 넣어줘야 한다
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value="";
    // 값 입력하고 나서 입력창에 글자 사라지게 하기 위해서 이렇게 짰다
    paintToDo(currentValue);
}

function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // loadedToDos가 null 아닐때
        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // 여기서 JSON을 또 사용해서 string으로 전환된 toDos 어레이를 오브젝트로 전환시켜준다
        // 즉 여기서 선언한 parsedToDos는 오브젝트를 포함한 어레이가 됐다 toDos 처럼
        // console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        } )
        // 이 forEach는 parsedToDos 안에 있는 오브젝트 각각에 함수를 먹이게하는 역할을 한다
        // 여기서 임의로 설정한 인자 toDo자리에는 사실 parsedToDos 어레이 안에 있는 각각의 
        // 오브젝트가 대입되어 함수가 실행된다
        // 여기서는 paintToDo함수가 실행되게 하였는데 안에 인자로는 toDo.text를 넣었다
        // 즉 loadedStorage가 null이 아니면 JSON으로 localStorage에 저장돼있는 어레이를
        // 가져와서 parsedToDos에 대입하고 이 어레이의 오브젝트 하나하나에 paintToDo 함수를
        // 적용해서 LS에 있는 정보를 화면상에 X버튼과 함께 표시되도록 했다
        // 이 정보들은 LS에 저장되어있는 것이어서 브라우저 껏다키거나 새로고침해도 그대로 저장
        // 돠어있다 
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();