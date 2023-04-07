//spirit animal name generator
const animalAdjective = [
  "ovine",
  "lupive",
  "avine",
  "bovine",
  "canine",
  "feline",
  "equine",
  "laccertive",
  "ranine",
];
const AnimalsName = [
  "sheep",
  "wolf",
  "bird",
  "cow",
  "dog",
  "cat",
  "horse",
  "lizard",
  "peacock",
  "frog",
];
function getSpiritAnimal(adjective, name) {
  return `${adjective[Math.floor(Math.random() * adjective.length)]} ${
    name[Math.floor(Math.random() * name.length)]
  }`;
}
const inputTag = document.getElementById("firstName");
const buttonTag = document.getElementById("btn-name");
const pTag = document.getElementById("spirit-animal-output");

buttonTag.addEventListener("click", function () {
  const nameValue = inputTag.value;
  const spiritAnimal = getSpiritAnimal(animalAdjective, AnimalsName);

  if (nameValue) {
    pTag.innerText = `${nameValue} the ${spiritAnimal}`;
    buttonTag.innerText = "create a new spirit animal";
  } else {
    pTag.innerText = `enter your name`;
  }
});
