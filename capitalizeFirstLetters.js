const assert = require("assert");

// une chaîne avec plusieurs mots
assert.strictEqual(
  capitalizeFirstLetters("une chaine avec plusieurs mots"),
  "Une Chaine Avec Plusieurs Mots"
);
// une chaîne avec un seul mot (voire une seule lettre)
assert.strictEqual(capitalizeFirstLetters("z"), "Z");
// une chaîne vide
assert.strictEqual(capitalizeFirstLetters(""), "");
