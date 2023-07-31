// sum of first five numbers
const number= [21, 58, 69, 20, 47, 55, 7, 36, 91, 75];
number.sort(function(a, b){return b - a});
let sum=0;

function myFunction(){
for(i=0;i<5;i++){
    sum=sum+number[i];
}
}
myFunction();
console.log(number);
console.log("The sum of first 5 largest numbers is:   "+sum);