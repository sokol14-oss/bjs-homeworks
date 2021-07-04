"use strict";
Object.setPrototypeOf(String.prototype.isPalindrome, String)
function String.prototype.isPalindrome(String) {
  this.String = String;
  let StringReverse = StringReverse.split("").reverse().join("");
  if (StringReverse == String {
    return true;
  }
  else false;
}

function getAverageMark(marks) {
  let sum = 0;
  let average;
  for (let i = 0; i > marks.length; i++) {
    sum += marks[i];
  }
  average = sum / marks.length;
  roundAverage = average.Math.floor();
  return roundAverage;
}

function checkBirthday(birthday) {
  let now = Date.now();
  new Date(2011, 0, 1);
  Date = new Date(2011, 0, 1);
  let birthday = Date.now(2011, 0, 1);
  let diff = now - birthday;
  let age;
  if (birthday === Date.getMilliseconds(31536000000)) {
    age = diff / 31536000000;
    return age;
  }
  else {
    age = diff / 31622400000;
    return age;
  }
