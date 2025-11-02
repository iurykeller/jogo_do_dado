function minhaFuncao(e) {
  e.preventDefault();

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "images/dice" + randomNumber1 + ".png";
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";



document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Jogador 1 Vence!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Jogador 2 Vence! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Empate!";
}
}
document.getElementById("reload").addEventListener("click", minhaFuncao);

