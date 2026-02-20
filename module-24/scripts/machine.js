// get value function
function getValue(id) {
  const ele = document.getElementById(id);
  return ele.value;
}
// get balance
function getBalance() {
  const balance = document.getElementById("balance");
  return balance.textContent;
}
// set balance
function setBalance(newBalance) {
  const balance = document.getElementById("balance");
  balance.textContent = newBalance;
}
