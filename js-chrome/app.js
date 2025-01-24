const starIcon = document.querySelector(".material-symbols-outlined");

console.dir(starIcon);
let sizeStar = 10;
function handleIconClick() {
    starIcon.style.fontSize = `${sizeStar}px`;
    sizeStar += 2;
}

starIcon.addEventListener("click", handleIconClick);