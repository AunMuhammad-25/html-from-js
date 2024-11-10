 ///////////// javascript starting to add topices ////////////////////////

///////  1) var let const variables ////////////////
//// /// 2) Arithematice operators + - * / % //////////////
//////// 3) Logical operator = == === != //////////////
//////// 4) Data Types number string boolean null undefined //////////
//////// 5) if else if /////////////////////
//////   6) Switch Statement ////////////////
/////// 7) For loop (while loop) (do while loop) ///////
////// 8) function ///////////////////////
/////// 9) Array 4 methods push pop shift unshift ////////
/////// 10) object more data store kar vana hoto ///////////
/////// 11) Dom document means selectors ka kisi chis ko select karna /////////////


 ///////////// javascript starting to add topices ////////////////////////

// const students = [
//     {
//         name: "Awn",
//         rollnumber: "12",
//         isActive: "true"
//     },
//     {
//         name: "Ali",
//         rollnumber: "13",
//         isActive: "true"
//     },
//     {
//         name: "Akbar",
//         rollnumber: "14",
//         isActive: "true"
//     },
//     {
//         name: "Hussain",
//         rollnumber: "15",
//         isActive: "true"
//     }
// ]
// console.log(students);

// for( i=0; i<=students.length; i++  ){
//    document.write(students[0].name + students[0].rollnumber)
//    console.log(students[0].name);
   
// }




function Btn1(){
    document.querySelector("body").style.backgroundColor = "red"
}

let btn2 = document.getElementById("blue").addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "blue";
}) 