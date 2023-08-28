let bill_amount = document.getElementById("bill_amo");
let tip_amount = document.getElementById("tip_amo");
let result = document.getElementById("result");
let clickE = document.querySelector("button");

clickE.addEventListener("click", () => {
  if (Number(bill_amount.value) && Number(tip_amount.value)) {
    process();
  } else {
    result.innerText = "Please provide the both the values";
  }
});

function process() {
  result.innerText = `Total : ${
    Number(bill_amount.value) * (1 + Number(tip_amount.value) / 100)
  }`;
}
