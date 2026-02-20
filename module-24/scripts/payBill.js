document.getElementById("pay-bill-btn").addEventListener("click", () => {
  const balance = getBalance();
  const paymentOption = getValue("pay-bill-option");
  const BillerAccount = getValue("pay-account-number");
  const amountInput = getValue("pay-bill-amount");
  const amount = Number(amountInput);
  const pinInput = getValue("pay-bill-pin");

  if (paymentOption === "none") {
    alert("Invalid Payment Option selected");
    return;
  }

  if (
    !Number.isInteger(Number(BillerAccount)) ||
    BillerAccount.trim().length < 1
  ) {
    alert("Invalid Biller Account");
    return;
  }

  if (amount < 1) {
    alert("invalid amount");
    return;
  }
  if (pinInput !== "1234") {
    alert("invalid pin");
    return;
  }
  setBalance(balance - amount);
  alert(`Payment successful`);
  addToTransaction(paymentOption);
});
