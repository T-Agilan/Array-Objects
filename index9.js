const str = "Hello, World!";
function removeVowels() {
    return str.replace([AEIOU]);
  }
  const result = removeVowels();
  console.log(result); 