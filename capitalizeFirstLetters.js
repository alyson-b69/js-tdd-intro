const assert = require("assert");

function capitalizeFirstLetters(string) {
  var splitString = string.toLowerCase().split(" ");
  for (let i = 0; i < splitString.length; i++) {
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
  }
  return splitString.join(" ");
}

// une chaîne avec plusieurs mots
assert.strictEqual(
  capitalizeFirstLetters("une chaine avec plusieurs mots"),
  "Une Chaine Avec Plusieurs Mots"
);
// une chaîne avec un seul mot (voire une seule lettre)
assert.strictEqual(capitalizeFirstLetters("z"), "Z");
// une chaîne vide
assert.strictEqual(capitalizeFirstLetters(""), "");
