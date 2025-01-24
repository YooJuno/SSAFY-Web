const word = document.querySelector(".word");
const blueBtn = document.querySelector(".blue-btn");
const changeBtn = document.querySelector(".change-btn");

// 빨간색이 됨
word.classList.add("color-red");

function handleSetTimeOut() {
  // 빨간색이 사라짐.
  word.classList.remove("color-red");
}

// 0.5초 딜레이
setTimeout(handleSetTimeOut, 500);

// 토글
function handleBlueBtnClick() {
  word.classList.toggle("color-blue");
}

blueBtn.addEventListener("click", handleBlueBtnClick);

// 파랑 => 빨강
function handleChangeBtnClick() {
  if (word.classList.contains("color-blue")) {
    word.classList.replace("color-blue", "color-red");
  }
}

changeBtn.addEventListener("click", handleChangeBtnClick);
