// even number
// for(let num =0; num<=100; num++){

//     if (num%2==0) {
//     console.log("num = ",num);
        
//     }
// }


let gameNum = 25;

let userNum = prompt("Guess the gane numbe:r") ;

while(userNum !== gameNum){


     userNum = prompt("you entered wrong number ,guess again:");
}

console.log("congratualation , you enterd the right number");