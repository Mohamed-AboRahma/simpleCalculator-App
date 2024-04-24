const inputEquation = document.querySelector(".simpleCalculator .equation");
const finalResult = document.querySelector(".simpleCalculator #enteryEquation");
const allButtons = Array.from(
  document.querySelector(".simpleCalculator .buttons").children
);
allButtons.forEach((ele) => {
  ele.addEventListener("click", async (e) => {
    try {
      e.target.className == "equal"
        ? inputEquation.innerText == ""
          ? null
          : ((finalResult.value = eval(inputEquation.innerText)),
            (inputEquation.innerText = ""))
        : e.target.className == "clear"
        ? ((inputEquation.innerText = ""), (finalResult.value = ""))
        : (inputEquation.innerText += e.target.innerText);
    } catch (error) {
      inputEquation.classList.add("error");
      inputEquation.innerText = error;
      allButtons.forEach((ele) => {
        ele.setAttribute("disabled", true);
      });
      setTimeout(() => {
        inputEquation.innerText = "";
        inputEquation.classList.remove("error");
        allButtons.forEach((ele) => {
          ele.removeAttribute("disabled");
        });
      }, 3000);
    }
  });
});
