let inputEl = document.getElementById("input");
let outputEl = document.getElementById("output");
let Img = document.getElementById("img");

Img.addEventListener("click", Shake);

function Shake() {
  var rand = Math.random().toFixed(2);
  if (inputEl.value == "Does a magic 8 ball actually work?") {
    outputEl.innerHTML = `How dare you doubt me!`;
  } else if (inputEl.value == "Is JavaScript awesome?") {
    outputEl.innerHTML = `Of Course!`;
  } else if (inputEl.value == "") {
    outputEl.innerHTML = `Please ask a question..`;
  } else if (rand > 0.5) {
    outputEl.innerHTML = `Yes you can!`;
  } else {
    outputEl.innerHTML = `Maybe not...`;
  }
  console.log(rand);
}
