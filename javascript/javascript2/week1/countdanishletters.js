//Find the individual number and the total number of Danish letters in a string.
function findDanishLetters(danishString) {
  const danishLetters = { total: 0, æ: 0, å: 0, ø: 0 };
  const strArray = danishString.split("");

  for (i of strArray) {
    if (i === "æ") {
      danishLetters.total = danishLetters.total + 1;
      danishLetters.æ = danishLetters.æ + 1;
    } else if (i === "å") {
      danishLetters.total = danishLetters.total + 1;
      danishLetters.å = danishLetters.å + 1;
    } else if (i === "ø") {
      danishLetters.total = danishLetters.total + 1;
      danishLetters.ø = danishLetters.ø + 1;
    }
  }
  console.log(danishLetters);
}

const danishString = "Jeg har en blå bil";
findDanishLetters(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grø med rød bær";
findDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
