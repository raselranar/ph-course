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
  document.getElementById("get-bonus").classList.add("hidden");
  document.getElementById("pay-bill").classList.add("hidden");
  document.getElementById("transactions").classList.add("hidden");

  // show selected
  document.getElementById(id).classList.remove("hidden");
}

function addToTransaction(info) {
  const cardContainer = document.getElementById("transaction-history");
  const time = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  cardContainer.insertAdjacentHTML(
    "afterend",
    `
  <div
          class="text-neutral/70 flex items-center justify-between rounded-xl border border-black/15 px-4 py-3.25 text-base/5 font-medium"
        >
          <div class="flex items-center gap-5">
            <img src="./assets/opt-1.png" alt="add money" />
            <div class="">
              <h3 class="">${info}</h3>
              <!-- date -->
              <p class="text-neutral/50 text-xs uppercase">${time}</p>
            </div>
          </div>
          <!-- tree dot -->
          <div class=""><i class="fa-solid fa-ellipsis-vertical"></i></div>
        </div>
  `,
  );
}
