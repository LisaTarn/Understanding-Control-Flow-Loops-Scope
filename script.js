let number = 5; 
 
if (number > 0) {
    console.log("The number is positive!")
} else if (number < 0) {
    console.log("The number is negative!")
} else {
    console.log("The number is zero!")
}

var day = 2 ;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    default:
        console.log("Saturday");
    
}
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let k = 1;
 
while (k <= 5) { 
    console.log(k); k ++;
 }

 let j = 1; 
 
do {
 console.log(j); j++; 
} while (j <= 5);

for (let m = 1; m <= 5; m++) {
    if (m === 3) {
        break;
      }
    console.log(m);
}

for (let n = 1 ; n<=5; n++) {
    if(n===3) {
        continue;
    }
    console.log(n);
}

globalVar("I'm global!");
 
function globalVar(gv) {
    let localVar = "I'm local!";
    console.log(gv);
    console.log(localVar);
}
