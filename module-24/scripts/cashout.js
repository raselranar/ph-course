document.getElementById("cashout-btn").addEventListener("click", () => {
  const agentNumberInput = getValue("cashout-agent-number");
  const balance = getBalance();
  const amountInput = getValue("cashout-amount");
  const amount = Number(amountInput);
  const newBalance = Number(balance) - amount;
  let pinInput = getValue("cashout-pin");

  if (
    !Number.isInteger(Number(agentNumberInput)) ||
    agentNumberInput.trim().length !== 11 ||
    !agentNumberInput.trim().startsWith("01")
  ) {
    alert("Invalid Agent Number");
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
  alert("cashout successful");
  addToTransaction("Withdraw Money");
});
