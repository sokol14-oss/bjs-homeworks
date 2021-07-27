"use string";
function calculateTotalMortgage(percent, contribution, amount, date) {
  if ((isNaN(percent)) || percent > 0) {
parseInt(percent);
  }
  else if ((isNaN(contribution)) || contribution > 0) {
parseInt(contribution);
  }
   else if ((isNaN(amount)) || amount > 0) {
parseInt(amount);
  }
  else if (date < new Date()) {
return 0;
  }
  else {
    let arr = [percent, contribution, amount, date];
    if (arr.includes(percent)) {
    	return `Параметр $(percent) содержит неправильное значение $(percent).`;
    }
    if (arr.includes(contribution)) {
    	return `Параметр $(contribution) содержит неправильное значение $(contribution).`;
    }
    if (arr.includes(amount)) {
    	return `Параметр $(amount) содержит неправильное значение $(amount).`;
    }
    if (arr.includes(date)) {
    	return `Параметр $(date) содержит неправильное значение $(date).`;
    }
  }
  let body = amount - contribution;
   let day = new Date();
  let payMonth = date.getMonth() - day.getMonth() 
    + (12 * (date.getFullYear() - day.getFullYear()));
  let p = (percent / 100) / 12;
  let pay = body * (p + p / (((1 + p) ** payMonth) - 1));
  let totalAmountn = pay * payMonth;
  let totalAmountnFixed = totalAmountn.toFixed(2);
  console.log(parseFloat(totalAmountnFixed));

    return parseFloat(totalAmountnFixed);
}

function getGreeting(name) {
 return `Привет, мир! Меня зовут ${name || "Аноним"}.`
}

