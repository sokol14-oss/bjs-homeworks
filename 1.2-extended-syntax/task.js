function getResult(a,b,c){
    "use strict";
    let d = b**2 - 4 * a * c;
    let res = [];
    let tmp;
    if (d < 0)
    return res;
    if (d === 0)
    res = (-b + Math.sqrt(d)) / (2 * a);
    return res;
    if (d > 0)
    let tmp = [];
        tmp.push((-b + Math.sqrt(d)) / (2 * a));
        tmp.push((-b - Math.sqrt(d)) / (2 * a));
        res["quadratic roots"] = tmp;
    
    return res;

}
    
getResult(2, 4, 3);
    

   


function getAverageMark(marks){
let marks = [];
    let sum = 0;
    let count = 0;
    
    marks.push(2);
    marks.push(5);
    marks.push(4);
    
    if (marks = [])
    return 0;
    if (marks.length > 5) {
    console.log("Оценок больше 5");
    marks = marks.slice(0, 5);
    for (i = 0; i < marks.length; i++)
    count += 1;
    sum += numbers[i];
    res = sum / count;
    }
    return res;
    if (marks.length < 3)
    console.log("Оценок должно быть не менее 3-х!")
    else
    for (i = 0; i < marks.length; i++){
    count += 1;
    sum += numbers[i];
    res = sum / count;
    }
    return res;
}

function askDrink(name,dateOfBirthday){
    llet name = "Vasya";
  let now = new Date();
  let dateOfBirthday = new Date(1990, 9, 31);
 let age = today.getFullYear() - dateOfBirthday.getFullYear();
 if (age > 18)
 res = "Не желаете ли олд-фэшн," + " " + name + "?";
 return res;
 else
res = "Сожалею," + " " + name + "," + "но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!";
return res;
}