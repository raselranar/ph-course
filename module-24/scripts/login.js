const inputNumber = document.getElementById("input-number");
const inputPin = document.getElementById("input-pin");
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {
  const mobileNumber = inputNumber.value.trim();
  const pin = inputPin.value.trim();
  if (mobileNumber.length !== 11 || pin.length !== 4) console.log("invalid");
  if (mobileNumber === "01836127131" && pin === "1234") {
    console.log("login success");
    window.location.replace("/home.html");
    return;
  }
  console.log(" login fail");
});
