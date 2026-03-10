const levelButton = document.getElementById("level-buttons");
const lessonContainer = document.getElementById("lessonContainer");
const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then(({ data }) => displayLesson(data));
};

const displayLesson = (data) => {
  const fragment = document.createDocumentFragment();
  data.forEach((lessonData) => {
    const button = document.createElement("button");
    button.classList.add("btn", "btn-outline", "btn-primary");
    button.dataset.lessonLevel = lessonData.level_no;
    // const li = document.createElement("li");
    // li.classList.add("font-semibold");
    button.innerHTML = `<i class="fa-solid fa-book-open"></i><span>Lesson- ${lessonData.level_no}</span>`;
    fragment.appendChild(button);
  });
  levelButton.innerHTML = "";
  levelButton.appendChild(fragment);
};
// document.getElementById("level-buttons")
loadLesson();

levelButton.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;
  [...button.parentElement.children].forEach((item) => {
    item.classList.remove("btn-active");
  });
  loading(true);
  button.classList.add("btn-active");
  getLessonByLevels(button.dataset.lessonLevel);
});

function getLessonByLevels(level) {
  const url = `https://openapi.programming-hero.com/api/level/${level}`;
  fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      displayLevelWord(data);
    });
}

function displayLevelWord(words) {
  const fragment = document.createDocumentFragment();
  lessonContainer.innerHTML = "";

  if (words.length === 0) {
    console.log("empty");
    const empty = document.createElement("div");
    empty.classList.add("flex", "justify-center", "col-span-full");
    empty.innerHTML = `
    <div class="flex gap-3.5 flex-col items-center">
          <img src="./assets/alert-error.png" alt="" />
          <p class="text-gray-400">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
          </p>
          <p class="font-medium text-3xl leading-8">নেক্সট Lesson এ যান</p>
        </div>`;
    lessonContainer.appendChild(empty);
    loading(false);

    return;
  }

  words.forEach((word) => {
    const div = document.createElement("div");
    div.classList.add(
      "outline",
      "outline-gray-300/60",
      "shadow-sm",
      "p-3",
      "rounded",
      "word-container",
    );

    div.dataset.id = word.id;

    div.innerHTML = ` 
          <!-- pt-14 px-38 -->
          <!-- content -->
          <div class="space-y-3 text-center">
            <h3 class="font-bold text-2xl">${word.word ? word.word : "not found"}</h3>
            <p class="font-medium text-lg">${word.pronunciation ? word.pronunciation : "not found"}</p>
            <p class="font-hind-siliguri text-gray-500 font-semibold text-xl">
              "${word.meaning ? word.meaning : "not found"}"
            </p>
          </div>
          <!-- info -->
          <div class="flex justify-between">
            <button class="btn word-details">
              <i
                class="fa-solid fa-circle-info"
                style="color: rgb(152, 156, 162)"
              ></i>
            </button>
            <button class="btn">
              <i
                class="fa-solid fa-volume-high"
                style="color: rgb(116, 120, 127)"
              ></i>
            </button>
          </div>
        `;

    fragment.appendChild(div);
  });
  lessonContainer.appendChild(fragment);
  loading(false);
}

const displayWordDetails = async (id) => {
  // get data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/word/${id}`,
  );
  const { data } = await res.json();

  const synonyms = data.synonyms
    .map((item) => `<span class="btn">${item}</span>`)
    .join(" ");

  // load a modal

  const modalContent = document.getElementById("word-details-content");
  modalContent.innerHTML = "";
  modalContent.innerHTML = `
 
          <h3 class="text-2xl font-semibold">
            ${data.word} (<i class="fa-solid fa-microphone-lines"></i>:${data.pronunciation || "not found"})
          </h3>
          <!-- <p class="py-4">Press ESC key or click the button below to close</p> -->
          <div class="">
            <h4 class="font-semibold text-xl/10">Meaning</h4>
            <p class="font-medium text-xl">${data.meaning || "not found"}</p>
          </div>
          <div class="">
            <h4 class="font-semibold text-xl/10">Example</h4>
            <p class="text-xl opacity-80">
              ${data.sentence || "not found"}
            </p>
          </div>
          <div class="">
            <h4 class="font-semibold text-xl/10">সমার্থক শব্দ গুলো</h4>
            <div class="space-x-4">
              ${synonyms || "not found"}
            </div>
          </div>
        
 `;

  document.getElementById("word_details").showModal();
};

document.getElementById("lessonContainer").addEventListener("click", (e) => {
  const detailsButton = e.target.closest(".word-details");
  if (!detailsButton) return;
  const container = e.target.closest(".word-container");
  displayWordDetails(container.dataset.id);
});

const loading = (status) => {
  const loadingSection = document.getElementById("loading");
  if (status === true) {
    loadingSection.classList.remove("hidden");
    lessonContainer.classList.add("hidden");
  } else {
    loadingSection.classList.add("hidden");
    lessonContainer.classList.remove("hidden");
  }
};

document.getElementById("search-button").addEventListener("click", () => {
  const query = document
    .getElementById("search-query")
    .value.trim()
    .toLowerCase();

  fetch("https://openapi.programming-hero.com/api/words/all")
    .then((res) => res.json())
    .then(({ data }) => {
      const filteredData = data.filter((item) =>
        item.word.toLowerCase().includes(query),
      );
      displayLevelWord(filteredData);
    });
});
