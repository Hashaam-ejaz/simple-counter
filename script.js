const decreaseButton = document.querySelector(".counter__button--decrease");
const increaseButton = document.querySelector(".counter__button--increase");
const counterValue = document.querySelector(".counter__value");
const resetButton = document.querySelector(".counter__reset-icon");
const counter = document.querySelector(".counter");
const counterTitle = document.querySelector(".counter__title");
const increaseButtons = document.querySelector(".counter__button--increase");
const decreaseButtons = document.querySelector(".counter__button--decrease");

incrementFunction = () => {
  let currentVal = counterValue.textContent;
  +currentVal;
  currentVal++;
  if (currentVal > 5) {
    counter.classList.add("counter--limit");
    counterTitle.innerHTML = "Limit! Buy <b> Pro </b> before going > 5";
    increaseButtons.disabled = true;
    decreaseButtons.disabled = true;
  } else {
    counterValue.textContent = currentVal;
  }
};

decrementFunciton = () => {
  let currentVal = counterValue.textContent;
  +currentVal;
  currentVal--;
  if (currentVal !== -1) {
    counterValue.textContent = currentVal;
  }
};

decreaseButton.addEventListener("click", decrementFunciton);
document.addEventListener("Keydown", incrementFunction);

increaseButton.addEventListener("click", incrementFunction);

resetButton.addEventListener("click", () => {
  counterValue.textContent = 0;
  counter.classList.remove("counter--limit");
  counterTitle.textContent = "Fancy Counter";
  increaseButton.disabled = false;
  decreaseButton.disabled = false;
});
