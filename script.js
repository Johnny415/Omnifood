let loader = document.querySelector(".gooey");
console.log(loader);
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
