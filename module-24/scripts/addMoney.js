document.getElementById("add-money-btn").addEventListener("click", () => {
  const balance = getBalance();
  const bankName = getValue("add-money-bank");
  const bankAccount = getValue("add-money-bank-number");
  const amountInput = getValue("add-money-amount");
  const amount = Number(amountInput);
  //   const newBalance = Number(balance) - amount;
  const pinInput = getValue("add-money-pin");

  if (bankName === "Select Bank") {
    alert("Invalid bank selected");
    return;
  }

  if (
    !Number.isInteger(Number(bankAccount)) ||
    bankAccount.trim().length !== 11 ||
    !bankAccount.trim().startsWith("01")
  ) {
    alert("Invalid Bank Account");
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
  setBalance(balance + amount);
  alert(`add money successful
    bank: ${bankName}
    Account Number: ${bankAccount}
    `);
});
