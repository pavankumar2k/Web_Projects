let input = document.querySelector('input[type="date"]');

let buttonE = document.querySelector("button");

let info = document.getElementById("data");

buttonE.addEventListener("click", () => {
  let age = new Date(input.value);
  let today = new Date();
  let ans = today.getFullYear() - age.getFullYear();
  console.log(ans);
  info.style.visibility = "visible";
  info.innerText = `Your age is ${ans} years old`;
});
