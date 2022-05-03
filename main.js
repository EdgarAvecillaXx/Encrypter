"use strict";

function replace(ntext) {
  let text = ntext;
  let decryptedText = ["ai", "enter", "imes", "ober", "ufat"];
  decryptedText.map(function (w) {
    const word = new RegExp(w, "g");
    switch (w) {
      case "ai":
        text = text.replace(word, "a");
      case "enter":
        text = text.replace(word, "e");
      case "imes":
        text = text.replace(word, "i");
      case "ober":
        text = text.replace(word, "o");
      case "ufat":
        text = text.replace(word, "u");
    }
  });
  var textreplaced = text;
  return textreplaced;
}

function decrypt() {
  let text = document.getElementById("textarea").value;
  let textreplaced = "";
  let upperCase = /[A-Z]/;
  let accent = /[À-ðò-ÿ]/;
  if (upperCase.test(text) != true && accent.test(text) != true) {
    textreplaced = replace(text);
    document.getElementById("p-result").innerText = textreplaced;
    document.getElementById("pre-result").style.display = "none";
    document.getElementById("result").style.display = "block";
  } else if (upperCase.test(text) === true || accent.test(text) === true) {
    let styleidAlert = document.getElementById("idAlert").style;
    styleidAlert.color = "crimson";
    styleidAlert.fontSize = "14px";
    setTimeout(() => {
      styleidAlert.color = "#495057";
      styleidAlert.fontSize = "12px";
    }, 1600);
    document.getElementById("pre-result").style.display = "block";
    document.getElementById("result").style.display = "none";
  }
}

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
  } else if (upperCase.test(text) === true || accent.test(text) === true) {
    let styleidAlert = document.getElementById("idAlert").style;
    styleidAlert.color = "crimson";
    styleidAlert.fontSize = "14px";
    setTimeout(() => {
      styleidAlert.color = "#495057";
      styleidAlert.fontSize = "12px";
    }, 1600);
    document.getElementById("pre-result").style.display = "block";
    document.getElementById("result").style.display = "none";
  }
}

function copy() {
  document.getElementById("p-result").select()
  navigator.clipboard.writeText(document.getElementById("p-result").value)
}
