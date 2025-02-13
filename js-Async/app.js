const loadingText = document.querySelector(".loading-text");
const todoUl = document.querySelector(".todo-ul");

async function fetchData() {try {const response = await axios("https://jsonplaceholder.typicode.com/todos");
    const lis = response.data.map((el) => `<li>${el.title}</li>`).join("");
    loadingText.style.display = "none";
    todoUl.innerHTML = lis;
    todoUl.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

fetchData();

