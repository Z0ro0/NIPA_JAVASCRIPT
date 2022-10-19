// document.getElementById() --> 해당 아이디의 요소를 선택
// document.getElementsByClassName() --> 해당 클래스에 속한 요소를 모두 선택
// document.getElementsByName() --> 해당 name 속성값을 가지는 요소를 모두 선택
// document.querySelectorAll() --> 해당 선택자로 선택되는 요소를 모두 선택
// document.querySelector() --> 해당 선택자로 선택되는 요소를 1개 선택

// document.createElement() --> 지정된 HTML 요소를 생성
// document.write() --> HTML 출력 스트림을 통해 텍스트 출력

// 요소.onclick = function(){} --> 마우스 클릭 이벤트와 연결될 이벤트 핸들러

// HTML <div> 요소를 선택하도록 코드를 작성하세요
var selectedTagName = document.getElementsByTagName("div");

// 아이디가 “banana"인 요소를 선택하도록 코드를 작성하세요
var selectedId = document.getElementById("banana");

// 클래스가 "vegetable"인 모든 요소를 선택하도록 코드를 작성하세요
var selectedClassNameS = document.getElementsByClassName("vegetable");

// name 속성값이 "red"인 모든 요소를 선택하도록 코드를 작성하세요
var selectedNameS = document.getElementsByName("red");


// 선택된 요소들을 출력합니다.
document.write(selectedTagName);
document.write(selectedId);
document.write(selectedClassNameS);
document.write(selectedNameS);
