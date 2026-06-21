const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const button = document.getElementById("submitbutton");
const h3 = document.getElementById("h3");
let select = document.getElementById("select");
let resenje = 0;
h3.innerText = resenje;
button.addEventListener("click", () => {
  button.innerText = "IZRACUNAVANJE";
  broj1 = parseFloat(input1.value);
  broj2 = parseFloat(input2.value);
  if (select.value == "+") {
    resenje = broj1 + broj2;
  }
  if (select.value == "-") {
    resenje = broj1 - broj2;
  }
  if (select.value == "/") {
    resenje = broj1 / broj2;
  }
  if (select.value == "*") {
    resenje = broj1 * broj2;
  }
  h3.innerText = resenje;
});
