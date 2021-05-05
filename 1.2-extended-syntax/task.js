"use strict";
function getResult(a,b,c){
    let d = b**2 - 4 * a * c;
    let res = [];
 
    if (d === 0) {
    res.push((-b + Math.sqrt(d)) / (2 * a);
}
    else if (d > 0) {
        res.push((-b + Math.sqrt(d)) / (2 * a));
        res.push((-b - Math.sqrt(d)) / (2 * a));
    
}
else {
    	res = [];
  }
return res;

}
getResult(a,b,c);    

    

   


function getAverageMark(marks){
    let sum = 0;
    let res;
    
    if (marks.length === 0) {
    res = 0;
}
    if (marks.length > 5) {
    console.log("Оценок больше 5");
    marks = marks.slice(0, 5);
    for (i = 0; i < marks.length; i++); {
    	sum += numbers[i];
    }
    
    res = sum / marks.length;
}
 
    else {
    for (i = 0; i < marks.length; i++){
    sum += numbers[i];
    }
    res = sum / marks.length;
 }   
    return res;
}

function askDrink(name,dateOfBirthday){
let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
let res;
 new Date().getFullYear();
 let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
 if (age > 18) {
 res = "Не желаете ли олд-фэшн," ${name} "?";
}
 else {
res = "Сожалею,"  ${name} "но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!";
}
return res;
}