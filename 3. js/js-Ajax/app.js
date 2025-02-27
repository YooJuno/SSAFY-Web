const loadingText = document.querySelector(".loading-text");
const todoUl = document.querySelector(".todo-ul");

// 약속(Response) 받음
// const response = fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(response);

// 약속은 필요 없고 Response만 필요할 때
fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => {
    return response.json();
})
.then((json) => {
    // console.log(json);
    const lis = json.map((el) => 
        `<li>${el.title}</li>`
    ).join("");

    loadingText.style.display = "none";
    todoUl.innerHTML = lis;
    todoUl.style.display = "block";
})
.catch((error) => {
    console.log(error);
});