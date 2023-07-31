let str = "level";
myFunction(str);
function myFunction(str) {
  const x = str.split("");
  const y = x.reverse();
  const z = y.join("");
  str === z ? console.log("true") : console.log("false");
}
