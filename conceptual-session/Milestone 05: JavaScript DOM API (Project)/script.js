const categoryListEle = document.getElementById("category-list");
const cardContainerEle = document.getElementById("card-container");
const treesLoadingEle = document.getElementById("trees-loading");
//  category list
const categoryList = async () => {
  // get data
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );
  const { categories } = await res.json();

  const liEle = categories
    .map(
      (item) => `<li>
                <a data-id=${item.id}
                  class="inline-flex w-full py-2 rounded px-2.5 justify-normal font-medium leading-4.5 cursor-pointer"
                  >${item.category_name}</a
                >
              </li>`,
    )
    .join(" ");

  categoryListEle.innerHTML = `
  <li> <a  class="menu-active-btn inline-flex w-full py-2 rounded px-2.5 justify-normal font-medium leading-4.5 cursor-pointer"
                  >All Trees</a
                >
              </li>
    ${liEle}
  `;
};
categoryList();

// loading
const treesLoading = (status) => {
  if (status === true) {
    treesLoadingEle.classList.remove("hidden");
    cardContainerEle.classList.add("hidden");
  } else {
    treesLoadingEle.classList.add("hidden");
    cardContainerEle.classList.remove("hidden");
  }
};

const loadAllTrees = async () => {
  treesLoading(true);
  // get data
  const res = await fetch("https://openapi.programming-hero.com/api/plants");
  const { plants } = await res.json();
  displayTrees(plants);
  treesLoading();
};
loadAllTrees();

const displayTrees = (trees = []) => {
  cardContainerEle.innerHTML = "";
  const fragment = document.createDocumentFragment();

  trees.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card bg-base-100 shadow p-4  border-2 border-gray-300/60";
    div.innerHTML = `
     
              <figure>
                <img
                  src="${item.image}"
                  alt="${item.name}"
                  title="${item.name}"
                  class = "h-47 object-cover w-full"
                />
              </figure>
              <div class="mt-3">
                <h2 class="card-title mb-2">${item.name}</h2>
                <p class="mb-3 line-clamp-2">${item.description}</p>
                <div class="flex justify-between mb-3">
                  <div
                    class="w-fit bg-green-300/40 text-green-700 rounded-full px-3 py-1"
                  >${item.category}</div>
                  <div class="">৳${item.price}</div>
                </div>

                <div class="card-actions justify-end">
                  <button class="btn btn-primary w-full rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
    `;
    fragment.appendChild(div);
  });
  cardContainerEle.appendChild(fragment);
};
displayTrees();

const selectCategories = (ele, parent) => {
  // remove menu-active class from all element
  parent.querySelectorAll("li > a").forEach((item) => {
    item.classList.remove("menu-active-btn");
  });
  ele.classList.add("menu-active-btn");
};

//  display trees through categories
categoryListEle.addEventListener("click", async (e) => {
  const categoryItem = e.target.closest("a");
  if (!categoryItem) return;
  // select categories
  selectCategories(categoryItem, e.currentTarget);
  const id = categoryItem.dataset.id;
  if (!id) {
    loadAllTrees();
  }
  treesLoading(true);
  // get trees data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/category/${id}`,
  );
  const data = await res.json();
  displayTrees(data.plants);
  treesLoading();
});
