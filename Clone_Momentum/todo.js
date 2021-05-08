const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
//여기서 변수명을 그냥 form이나 input으로 하지 않는 이유는 greetings.js에서 이미
// 쓴 변수명이기 떄문이다 다른 파일이어도 const이기 때문에 변수명은 갖게 해줄 수 없다  
const TODOS_LS = "toDos"; 

let toDos = [];
// toDos라는 어레이 만들었다
// 아래에서 toDos에 cleanToDos를 넣을것이므로 바꿀 수 있는 변수를 선언할 때 쓰는 let을 쓰자


function deleteTodo(event){
    // console.log(event.target.parentNode);
    // 이 event.target 객체를 쓰면 이 이벤트가 발생한 html태그를 콘솔창에 보여준다
    // 근데 우리는 이 클릭이라는 이벤트가 발생한 태그를 delete 하려는 것이 아니라
    // 이 버튼이 속해있는 li 엘레먼트 자체를 지워버릴 것이다 따라서 지우고자 하는 
    // li의 id를 알아야 한다 .parentNode라는 객체를 써보자 
    // 이렇게 하면 이 버튼 엘레먼트가 속해있는 li 엘레먼트 자체를 보여주게 된다
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // 이렇게 클릭한 버튼 엘레먼트를 btn으로 지정하고 그 부모 엘레먼트를 li 변수에
    // 지정하자 그리고 removeChild 함수를 써서 toDoList에서 그 li를 제거하도록 하자
    const cleanToDos = toDos.filter(function(toDo){
        // return toDo.id === 1;
    // 2. 이렇게 function(toDo)함수는 return, 즉 반환값을 가진다. 즉 toDos 내의 객체의 id가
    //     1 인 경우만 반환하고 나머지는 다 핋터링 한다는 뜻이다. 이렇게 .filter를 통해
    //    우리가 원하는 객체만을 걸러낼 수 있다
        return toDo.id !== parseInt(li.id);
        // 4. 따라서 function(toDo)에서 toDo.id가 li.id와 다른 애들만 추려주면 된다
        // 근데 toDo.id !== li.id; 조건을 이렇게만 하게 되면 toDo del 버튼 눌러서
        // 제거해도 toDos 변하지 않는다. 그 이유는 toDo.it는 int이고 li.id는 string
        // 이기 때문이다 따라서 li.id의 자료형을 int로 바꾸기 위해 parseInt()를 
        // 사용한다
    });
    // 1. 아직 localStorage 에는 제거한 toDo 목록이 남아 있다 이 또한 제거해야 한다
    // 이때 우리는 .filter를 쓸 수 있다. 이 .filter()는 어레이에 쓰이는 함수인데 
    // .forEach처럼 어레이 내의 객체 각각에 괄호 안의 함수(여기서는 function(toDo))을 
    // 먹일 수 있다. 위의 function(toDo)함수로 가보자
    // 3. 이렇듯 toDos.filter는 function(toDo)이 걸러낸 아이템들로 다시 array를 만들어서
    // 제시한다 
    toDos = cleanToDos;
    // 이렇게 toDos[].id !== li.id 인 오브젝트들로 꾸려진 cleanToDos를 toDos로 업데이트 해준다
    saveToDos();
    // 그리고 업데이트된 toDos를 다시 localStorage에 저장하자! 인제 완벽하게 delete가 됐다
}




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
    delBtn.addEventListener("click", deleteTodo);
    // 이 eventlistner는 X버튼의 클릭을 감지해서 deleteTodo 함수를 실행한다
    span.innerText = text;
    // 이렇게 createElement를 사용해서 원하는 엘레먼트를 만들 수 있다
    // 여기서 text는 인자이다
    li.id = newId; //이렇게 .id 객체를 이용해서 li각각에 id를 부여하자. 이렇게 해야 나중에 특정 리스트를 정확하게 조작 가능하다
    li.appendChild(delBtn);
    li.appendChild(span);
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
        // 오브젝트가 대입되어 함수가 실행된다 parsedToDos[0].text,parsedToDos[1].text 등이 실행
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