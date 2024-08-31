// alert("hello");

// let number= prompt("Enter number:");

// if(number%5===0){

//         console.log(number,"is multipe of 5 ");
// }
// else{
//     console.log(number," is not multiple of 5 ");
// }


let scores = prompt("enter scores");
let grade ;
if(scores >= 90 && scores <= 100){
    // console.log("A");
    grade = "A";
}

else if (scores >= 70 && scores <= 89) {

    // console.log("B");
    grade = "B";
    
}

else if (scores >= 60 && scores <= 69) {

    // console.log("C");
    grade = "C";   
}

else if (scores >= 50 && scores <= 59) {

    // console.log("D");
    grade = "D";
    
}
else{
    // console.log("F");
    grade = "F";
}

console.log(grade);