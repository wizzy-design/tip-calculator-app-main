const billInput = document.querySelector(".number");
const peopleInput = document.querySelector(".people-no");
const ipt = document.querySelector("#ipt");
const custom = document.querySelector(".custom");
const tips = document.querySelectorAll(".tips");
const calc = document.querySelector(".amount");
const tipAmount = document.querySelector(".amount");
const total = document.querySelector(".amount2");
const reset = document.querySelector(".btn");
const error = document.querySelector(".error");
const btn = document.getElementById("btn");

tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});

let billValue = 1;
let tipValue = 0.15;
let peopleValue = 1;

billInput.addEventListener("input", () => {
  billValue = parseFloat(billInput.value);
  calculation();
});

peopleInput.addEventListener("input", () => {
  if (peopleInput.value < 1) {
    ipt.style.border = "2px solid red";
    error.innerHTML = "Can't be Zero";
    error.style.color = "Red";
  } else {
    ipt.style.border = "2px solid hsl(172, 67%, 45%)";
    peopleValue = parseFloat(peopleInput.value);
    error.innerHTML = "";
    calculation();
  }
});

//this is to get the values of the tips divs by dividing them by 100 to get
function handleClick(event) {
  tips.forEach(function (val) {
    if (event.target.innerHTML == val.innerHTML) {
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculation();
}

custom.addEventListener("input", () => {
  tipValue = parseFloat(custom.value) / 100;
  calculation();
});

const calculation = () => {
  let tipAmountPerPerson = (billValue * tipValue) / peopleValue;
  let totalPerPerson = (billValue + tipAmountPerPerson) / peopleValue;
  tipAmount.innerHTML = "$" + tipAmountPerPerson;
  total.innerHTML = "$" + totalPerPerson;
};

reset.addEventListener("click", () => {
  billInput.value = 0.0;
  peopleInput.value = 0;
  tipValue = "";
  tipAmount.innerHTML = "$" + "0.0";
  total.innerHTML = "$" + "0.0";
});
