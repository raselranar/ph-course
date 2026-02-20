document.getElementById("add-money-btn").addEventListener("click", () => {
    const balance = getBalance();
  const bankName = getValue("add-money-bank");
  const bankAccount = ;
    const amountInput = getValue("add-money-amount");
  //   const amount = Number(amountInput);
  //   const newBalance = Number(balance) - amount;
  //   let pinInput = getValue("add-money-pin");

  if (bankName === "Select Bank") {
    alert("Invalid bank selected");
    return;
  }

  //   if (
  //     !Number.isInteger(Number(agentNumberInput)) ||
  //     agentNumberInput.trim().length !== 11 ||
  //     !agentNumberInput.trim().startsWith("01")
  //   ) {
  //     alert("Invalid Agent Number");
  //     return;
  //   }

  //   if (newBalance < 0 || amount < 1) {
  //     alert("invalid amount");
  //     return;
  //   }
  //   if (pinInput !== "1234") {
  //     alert("invalid pin");
  //     return;
  //   }
  //   setBalance(Number(balance) - amount);
  //   alert("add money successful");
});
