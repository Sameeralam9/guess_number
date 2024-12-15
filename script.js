let geussInput = document.querySelector(".geussInput");
let submitBtn = document.querySelector(".btn");
let resultQoute = document.querySelector(".qoute");
//number geuss app
let remainigGess = 4;
let min = 1000;
let max = 9999;

let num = Math.floor(Math.random() * (max - min + 1) + min);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let geuss = parseInt(geussInput.value);
  //checking the condions for valid input
  if (geuss != "" && geussInput.value.length == 4) {
    if (num == geuss) {
      resultQoute.innerText = "You Win !";
      resultQoute.style.color = "green";
      setTimeout(() => {
        resultQoute.innerText = "Game will Restart in 3s !";
        resultQoute.style.color = "black";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }, 3000);
    } else {
      //here if player lose showing there remainig geusses
      if (remainigGess == 0) {
        resultQoute.innerText = `Gamme Over! `;
        resultQoute.style.color = "black";
        setTimeout(gameOver, 1000);
      }

      resultQoute.innerText = "You Lose !";
      resultQoute.style.color = "black";
      if (remainigGess < 1) {
        alert("Game Over! Gesses : " + remainigGess);
      } else {
        alert("Your Remaining Gesses is " + remainigGess);
      }
      remainigGess--;
    }
    //besic form validation
  } else if (geussInput.value.length > 4 || geussInput.value.length < 4) {
    resultQoute.innerText = "Input Should be Number and 4 char";
    resultQoute.style.color = "red";
  }

  //besic form validation
  else if (isNaN(geuss)) {
    resultQoute.innerText = "Please Enter Valid Number";
  }
  geussInput.value = "";
  console.log(num);
});

//gameover Function

function gameOver() {
  let ref = document.createElement("div");
  ref.className = "refresh";
  document.body.appendChild(ref);

  let gameEndQ = document.createElement("h3");
  gameEndQ.innerText = `Game Over Number was ${num}`;
  ref.append(gameEndQ);

  let btnHolderDiv = document.createElement("div");
  btnHolderDiv.className = "btnHold";
  ref.append(btnHolderDiv);

  let refreshbtn = document.createElement("button");
  refreshbtn.innerText = "Play Again";
  refreshbtn.className = "refBtn";
  btnHolderDiv.append(refreshbtn);

  //page reload method

  refreshbtn.addEventListener("click", () => {
    location.reload();
  });
}
