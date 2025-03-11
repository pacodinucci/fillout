// You are given a string of encrypted text. The encryption algorithm used to create
// this ciphertext shifts all alphabetic characters in the original string by the same
// amount (essentially, a Caesar cipher). However, the shift amount is unknown.

// Write a decipher function that takes two arguments: 1) the encrypted text; 2)
// a word known to have appeared in the original plaintext. Using these clues, the
// function must output the original text.

// Constraints: Use the English alphabet and maintain the casing of words.

function decipher(encryptedText, knownWord) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function shiftText(text, shift) {
    return text
      .split("")
      .map((char) => {
        if (alphabet.includes(char)) {
          return alphabet[(alphabet.indexOf(char) - shift + 26) % 26];
        } else if (lowerAlphabet.includes(char)) {
          return lowerAlphabet[(lowerAlphabet.indexOf(char) - shift + 26) % 26];
        }
        return char;
      })
      .join("");
  }

  for (let shift = 0; shift < 26; shift++) {
    let possibleText = shiftText(encryptedText, shift);
    if (possibleText.includes(knownWord)) {
      return possibleText;
    }
  }

  return "No valid decryption found.";
}
