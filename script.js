const storageKey = "form-memory";

const userName = document.getElementById("name");

const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("del-btn");

const insertedName = document.querySelector("p");

const save = () => {
  const nameText = userName.value;
  localStorage.setItem(storageKey, nameText);
  insertedName.innerText = localStorage.getItem(storageKey);
};

const del = () => {
  userName.value = "";
  insertedName.innerText = "";
};

saveBtn.addEventListener("click", save);
deleteBtn.addEventListener("click", del);

const storageCounter = "counter-memory";

let counter = JSON.parse(sessionStorage.getItem(storageCounter)) || 0;

setInterval(() => {
  sessionStorage.setItem(storageCounter, counter);
  counterTitle.innerText = counter;
  console.log(sessionStorage.getItem(storageCounter));
  counter++;
}, 1000);

const counterTitle = document.querySelector("h2");

window.onload = () => {
  userName.value = localStorage.getItem(storageKey);
  insertedName.innerText = localStorage.getItem(storageKey);
  counterTitle.innerText = sessionStorage.getItem(storageCounter);
};
