const loadingText = document.querySelector(".loading-text");
const todoUl = document.querySelector(".todo-ul");

axios("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    const lis = response.data
      .map(
        (el) => `
    <li>${el.title}</li>
    `
      )
      .join("");
    loadingText.style.display = "none";
    todoUl.innerHTML = lis;
    todoUl.style.display = "block";
  })
  .catch((error) => {
    console.error(error);
  });
