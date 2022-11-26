// Calc input field variables
const bill = document.querySelector("#bill");   // Bill input field
const people = document.querySelector("#people");  // People input field

const people_ID = document.querySelector("#people-id"); // People ID section    
const custom = document.querySelector(".custom");   // Custom button
const tips = document.querySelectorAll(".tip");    // All tip buttons

const tipAmt = document.querySelector(".disp1");    // Tip amount
const total = document.querySelector(".disp2");     // Total
const reset = document.querySelector("#reset");     // Reset button
const error = document.querySelector(".error");     // Error message
const tip1 = document.querySelector(".tip1");

// Custom variables
let billValue = 1;
let tipValue = 0.15;
let peopleValue = 1;

// tips[0], tips[1].addEventListener("click", () => {
//   console.log("Hello");
//   // tip1.style.backgroundColor = "Black";
// });

tips.forEach(tip => {
  tip.addEventListener("click", event => {
    tip.style.backgroundColor = "hsl(172, 67%, 45%)";
  })
})

bill.addEventListener("input", () => {
  billValue = parseFloat(bill.value);
  calculation();
});

people.addEventListener("input", () => {
  if (people.value < 1) {
    people_ID.style.border = "2px solid red";
    error.innerHTML = "Can't be Zero";
    error.style.color = "Red";
  } else {
    peopleValue = parseFloat(people.value);
    error.innerHTML = "";
    calculation();
    people_ID.style.border = "2px solid hsl(172, 67%, 45%)";
  }
});

// Ths function runs the percentages of the tip buttons by diving tipValue by 100
function handleClick(e) {
  tips.forEach(val => {
      if (e.target.value == val.value){
        tipValue = parseFloat(val.value) / 100;
      }
  });
  calculation();
}

tips.forEach(function(val) {
    val.addEventListener("click", handleClick);
});

custom.addEventListener("input", () => {
  tipValue = parseFloat(custom.value) / 100;  // Custom percentage
  calculation();
});

const calculation = () => {
  let tipAmountPerPerson = (billValue * tipValue) / peopleValue;
  let totalPerPerson = (billValue / peopleValue) + tipAmountPerPerson;
  tipAmt.innerHTML = "$" + tipAmountPerPerson;
  total.innerHTML = "$" + totalPerPerson;
};

reset.addEventListener("click", () => {
  bill.value = 0.0;
  people.value = 0;
  tipValue = "";
  tipAmt.innerHTML = "$" + "0.0";
  total.innerHTML = "$" + "0.0";
});



  


