const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thankyou");
const submitButton = document.querySelector(".button");
const rating = document.querySelector(".ratingselected");
const ratebtns = document.querySelectorAll(".ratingbtn");

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
});

ratebtns.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
