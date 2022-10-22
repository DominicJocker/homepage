console.log("Hallo!");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let none = document.querySelector(".none");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    none.innerText = body.classList.contains("dark") ? " dark page" : " light page";
});
