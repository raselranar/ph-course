document.getElementById("transfer-btn").addEventListener("click", () => {
  const userNumberInput = getValue("transfer-account-number");
  const balance = getBalance();
  const amountInput = getValue("transfer-amount");
  const amount = Number(amountInput);
  const newBalance = Number(balance) - amount;
  let pinInput = getValue("transfer-pin");

  if (
    !Number.isInteger(Number(userNumberInput)) ||
    userNumberInput.trim().length !== 11 ||
    !userNumberInput.trim().startsWith("01")
  ) {
    alert("Invalid User Account Number");
    return;
  }

  if (newBalance < 0 || amount < 1) {
    alert("invalid amount");
    return;
  }
  if (pinInput !== "1234") {
    alert("invalid pin");
    return;
  }
  setBalance(balance - amount);
  alert("Transfer money successful");
  addToTransaction("Transfer Money");
});
