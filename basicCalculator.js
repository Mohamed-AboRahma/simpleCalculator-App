const inputEquation = document.querySelector(".simpleCalculator .equation");
const finalResult = document.querySelector(".simpleCalculator #enteryEquation");
const allButtons = Array.from(
  document.querySelector(".simpleCalculator .buttons").children
).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (e.target.className == "equal") {
      inputEquation.innerText == "";
      finalResult.value = eval(inputEquation.innerText);
      inputEquation.innerText = "";
    } else if (e.target.className == "clear") {
      inputEquation.innerText = "";
      finalResult.innerText = "";
    } else {
      inputEquation.innerText += e.target.innerText;
    }
  });
});
