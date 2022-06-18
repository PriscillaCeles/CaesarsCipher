const $message = document.querySelector("#msg");
const $cipher = document.querySelector("#key-umber");
const $encryptButton = document.querySelector(".encrypt-button");
const $decryptButton = document.querySelector(".decrypt-button");
const $display = document.querySelector(".form__text");

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const encrypt = () => {
  const cipher = Number($cipher.value);
  const message = $message.value;
  let encryptMessage = "";

  for (let i = 0; i < message.length; i++) {
    for (let index = 0; index < letters.length; index++) {
      if (message[i] === letters[index]) {
        if (cipher >= letters.length) {
          encryptMessage += letters[index + (cipher % letters.length)];
        } else {
          encryptMessage += letters[index + cipher];
        }
      }
    }
  }
  return encryptMessage;
};

const decrypt = () => {
  const cipher = Number($cipher.value);
  const message = $message.value;
  let decryptMessage = "";

  for (let i = 0; i < message.length; i++) {
    for (let index = 0; index < letters.length; index++) {
      if (message[i] === letters[index]) {
        if (cipher >= letters.length) {
          decryptMessage += letters[index - (cipher % letters.length)];
        } else if ((index - cipher) < 0) {
            decryptMessage += letters[letters.length + (index - cipher)];
        }   else {
          decryptMessage += letters[index - cipher];
        }
      }
    }
  }
  return decryptMessage;
};

$encryptButton.addEventListener("click", () => {
  event.preventDefault();
  $display.textContent = encrypt();
});

$decryptButton.addEventListener("click", () => {
  event.preventDefault();
  $display.textContent = decrypt();
});
