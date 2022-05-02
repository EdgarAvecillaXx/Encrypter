"use strict";

function encrypt() {
  let text = document.getElementById("textarea").value;
  let encryptedtext = "";
  let upperCase = /[A-Z]/;
  let accent = /[À-ðò-ÿ]/;
  if (upperCase.test(text) != true && accent.test(text) != true) {
    for (let letter of text) {
      switch (letter) {
        case "a":
          letter = "ai";
          break;
        case "e":
          letter = "enter";
          break;
        case "i":
          letter = "imes";
          break;
        case "o":
          letter = "ober";
          break;
        case "u":
          letter = "ufat";
          break;
        default:
          break;
      }
      encryptedtext += letter;
      document.getElementById("p-result").innerText = encryptedtext;
      document.getElementById("pre-result").style.display = "none";
      document.getElementById("result").style.display = "block";
    }
  }
  else if (upperCase.test(text) === true || accent.test(text) === true) {
    let styleidAlert = document.getElementById("idAlert").style;
    styleidAlert.color = 'crimson';
    styleidAlert.fontSize = '14px';
    setTimeout(() => {
        styleidAlert.color = '#495057';
        styleidAlert.fontSize = '12px';
    }, 1600);
    document.getElementById("pre-result").style.display = "block";
    document.getElementById("result").style.display = "none";
  }
}


