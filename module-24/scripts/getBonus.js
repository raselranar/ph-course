document.getElementById("bonus-btn").addEventListener("click", () => {
  const bonusCode = getValue("coupon-code");

  if (bonusCode !== "code") {
    alert("Invalid Bonus Code");
    return;
  }

  alert("congratulation, you got bonus");
});
