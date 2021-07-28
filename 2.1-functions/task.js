function  getSolutions(a, b, c) {
	let D = b** - 4 * a * c;
	if (D < 0) {
		return { 
			D: D, 
			roots: [] 
		};
	}
	if (D === 0) {
		let x1 = -b / (2 * a);
		return { 
			D: D, 
			roots: [x1] 
		};
	}
	if (D > 0) {
		let x1 = (-b + Math.sqrt(D) / (2 * a);
		let x2 = (-b - Math.sqrt(D) / (2 * a);
		{ 
			D: D, 
			roots: [x1, x2] 
		};
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions({D: D, roots: [x1, x2]});
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
 	if (result.D < 0) {
 		console.log(`Уравнение не имеет вещественных корней`);
 	}
 	if (result.D === 0) {
 		console.log(`Уравнение имеет один корень ${x1} = значение_корня`);
 	}
 	if (result.D > 0) {
 		console.log(`Уравнение имеет два корня. ${x1} = значение_корня_1, ${x2} = значение_корня_2`);
 	}

}

function getAverageScore(data) {
data = {};
for (i = 0; i < data.length; i++) {
	data[i] = getAverageMark(data, marks);
}
data.average = Object.values(data);
return data;
}

function getAverageMark(marks) {
	let sum = 0;
	let res;
	
for (i = 0; i < marks.length; i++) {
res = (sum + marks[i]) / marks.length;
return res;
}
if (marks.length === 0) {
	return = 0;
}
}


