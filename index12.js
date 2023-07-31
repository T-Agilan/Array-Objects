const fname = "t agilan";
const word = fname.split(" ");
for (i = 0; i < word.length; i++) {
  word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
}

let result = word.join(" ")

console.log(result);
