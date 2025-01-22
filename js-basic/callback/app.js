const title = document.querySelector(".title");
const colorBtn = document.querySelector(".color-btn"); // camelCase = kebab-case
const userInput = document.querySelector(".user-input");
const result = document.querySelector(".result");

// 잘 가져왔는지 확인
// undefined 뜨면 잘 못가져온거임
console.dir(title);
console.dir(colorBtn);
console.dir(userInput);
console.dir(result);

function handleClick(event) { 
  console.log(event);
}
colorBtn.addEventListener("click", handleClick); // Parameters X

function handleInput(event) { 
  console.log(event.target.value);
}
userInput.addEventListener("input", handleInput); // Parameters X


// [lambda 추가]
// function handleClick(n) {
//   console.log("버튼동작 : " + n + "회");
//   if ( n%2 === 1) title.style.color = "red";
//   else title.style.color = "black";
// }

// let n = 0;

// // colorBtn.addEventListener("click", handleClick()); // 괄호를 붙여버리면 즉시 call
// colorBtn.addEventListener("click", function () { // 람다 쓰면 Parameters O
//   return handleClick(++n);
// }); // 여기서는 함수 등록만