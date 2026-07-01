const strugglingList = [];
const thrivingList = [];
const toggleButtonEle = document.getElementById("toggleButton")
// Button toggle functionality
function toggleButton(flag) {

    Array.from(toggleButtonEle.children).forEach(element => {
        if (element.id === flag) {
            element.classList.add("btn-neutral");

        } else {

            element.classList.remove("btn-neutral");
        }

    });
}

document.getElementById("allCard").addEventListener("click",(e)=>{
    const ele = e.target;
    const grandParent = ele.parentElement.parentElement;
    const plantName = grandParent.querySelector(".plant-name").textContent;
    const light = grandParent.querySelector(".light").textContent;
    const water = grandParent.querySelector(".water").textContent;
    const status = grandParent.querySelector(".status").textContent;
    const notes = grandParent.querySelector(".notes").textContent;

    
    if (ele.classList.contains("thriving-btn")) {
        thrivingList.push({plantName, light, water, status, notes})
    }
    else if (ele.classList.contains("struggling-btn")) {
        strugglingList.push({plantName, light, water, status, notes})
    }
})


function cardRender() {
    const allPlant = thrivingList.concat(strugglingList);
    const card = `
    <div class="flex justify-between border border-black/15 p-5">
          <!-- left side -->
          <div class="space-y-2">
            <h2 class="plant-name text-2xl">Plant Name 1</h2>
            <p class="text-neutral/40">Latin Name</p>
            <!-- labels or badges -->
            <div class="gap-2 flex">
              <p id class="bg-black/20 text-black/35 px-2 py-1 rounded text-[14px] light">Bright Indicate</p>
              <p class="bg-black/20  text-black/35 px-2 py-1 rounded text-[14px] water">Weekly</p>
            </div>
            <!-- status -->
            <div class="status badge badge-outline badge-error font-medium rounded">Struggling</div>
            <!-- description -->
            <p class="notes text-neutral/50">Lorem ipsum dolor sit amet</p>
            <div class="flex gap-3">
              <button class="thriving-btn btn btn-outline btn-accent">Thriving
              </button>
              <button class="struggling-btn btn btn-outline btn-secondary">Struggling
              </button>
            </div>
          </div>
          <!-- right side -->
          <div class="text-right"><button class="rounded px-3 py-1 bg-red-200 text-red-400 font-bold">Delete</button>
          </div>
        </div>`;
}
