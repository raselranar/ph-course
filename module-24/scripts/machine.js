// get value function
function getValue(id) {
  const ele = document.getElementById(id);
  return ele.value;
}
// get balance
function getBalance() {
  const balance = document.getElementById("balance");
  return Number(balance.textContent);
}
// set balance
function setBalance(newBalance) {
  const balance = document.getElementById("balance");
  balance.textContent = newBalance;
}

//  show one section
function showOnly(id) {
  document.getElementById("add-money").classList.add("hidden");
  document.getElementById("cashout").classList.add("hidden");
  document.getElementById("transfer-money").classList.add("hidden");

  // show selected
  document.getElementById(id).classList.remove("hidden");
}
