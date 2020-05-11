const comCal = (principle, time, rate) => {
  return principle * (1 + rate / 100) ** time;
};

const formData = document.querySelector(".formClass");
const amount = document.querySelector(".amount");

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  amount.textContent = `Your amount after the end of your tenure would be ${comCal(
    Number(formData.principle.value),
    Number(formData.time.value),
    Number(formData.rate.value)
  )} rupees`;
  formData.reset();
});
