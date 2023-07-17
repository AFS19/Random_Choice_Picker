const tagsEl = document.querySelector("#tags");
const choices = document.querySelector("#choice");

choices.focus();

choices.addEventListener("keyup", (ev) => {
  createTags(ev.target.value);

  if (ev.key === "Enter") {
    setTimeout(() => {
      ev.target.value = "";
    }, 15);
    randomSelect();
  }
});

function createTags(choice) {
  const tags = choice
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    // const tagEl = document.createElement("span");
    // tagEl.classList.add("tag");
    // tagEl.innerText = tag;
    // tagsEl.appendChild(tagEl);
    const tagEl = `<span class="tag">${tag}</span>`;
    tagsEl.innerHTML += tagEl;
  });
}

function randomSelect() {
  const times = 50;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighLightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighLightTag(tag) {
  tag.classList.remove("highlight");
}
