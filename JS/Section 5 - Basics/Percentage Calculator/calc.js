//global dom elements
const divs = document.querySelectorAll("div");
const select = document.querySelector("select");
const options = document.querySelectorAll("option");

// elements depending on form
let form, num1, num2, result;

// Hide All Forms
function hide() {
  divs.forEach(div => {
    div.selected = false;
    div.style.display = "none";
  });
}
hide();
//display first form
document.querySelector("div").style.display = "block";
association();

//new associations on changed option
select.addEventListener("change", association);
//========= SHOW CORRECT FORM ======== //
function association() {
  hide();
  // get selected element
  let selected = 0;
  options.forEach(option => {
    if (option.selected !== true) {
      return;
    }
    selected = option.value;
    // console.log(selected);
    // display element with same class as selection value
    const show = document.getElementsByClassName(`${selected}`)[0];
    show.style.display = "block";
  });
  activeForm(selected);
}

// called after association is done
function activeForm(selected) {
  form = document.querySelector(`.${selected} form`);
  form.addEventListener("submit", e => {
    e.preventDefault();
    num1 = document.querySelector(`.${selected} .num1`);
    num2 = document.querySelector(`.${selected} .num2`);
    result = document.querySelector(`.${selected} .result span`);
    result.textContent = calc(selected);
  });
}

// ======== CALCULATIONS FOR EACH FORM ========= //
function calc(selected) {
  console.log(num1.value);
  num1 = parseFloat(num1.value);
  num2 = parseFloat(num2.value);
  if (selected === "zero") {
    return 100 * num1 / num2 + " %";
  }
  if (selected === "one") {
    return 100 * num1 / num2;
  }
  if (selected === "two") {
    return num2 / num1 * 100 + " %";
  }
  if (selected === "three") {
    return 100 * num2 / num1;
  }
  if (selected === "four") {
    return num1 * num2 / 100;
  }
}
