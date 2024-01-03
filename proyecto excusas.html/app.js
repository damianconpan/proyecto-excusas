const who = ["el perro", "mi abuela", "su tortuga", "mi caballo"];
const action = ["se comió", "defecó", "chocó", "rompió"];
const what = ["mi tarea", "las llaves", "el auto", "la casa"];
const when = [
  "antes de clases", "justo antes de salir",
  "cuando terminé",
  "mientras almorzaba",
  "mientras pedia un subway"
];

function generateExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

const excuseElement = document.getElementById("excuse");

excuseElement.innerHTML = generateExcuse();
