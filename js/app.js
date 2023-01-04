const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  coupon.select();
  coupon.setSelectionRange(0, 999);
  navigator.clipboard.writeText(coupon.value)
  .then(() => {
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = "Copy"
    }, 3000);
  })
});