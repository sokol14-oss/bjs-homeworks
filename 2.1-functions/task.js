function  getSolutions( a, b, c ) {
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
		let x1 = (-b + √D) / 2 * a;
		let x2 = (-b - √D) / 2 * a;
		{ 
			D: D, 
			roots: [x1, x2] 
		};
	}
}

function showSolutionsMessage(a, b, c) {
	let result = { 
			D: D, 
			roots: [x1, x2] 
		};
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
 	if (D < 0) {
 		console.log(`Уравнение не имеет вещественных корней`);
 	}
 	if (D === 0) {
 		console.log(`Уравнение имеет один корень ${x₁} = значение_корня`);
 	}
 	if (D > 0) {
 		console.log(`Уравнение имеет два корня. ${x1} = значение_корня_1, ${x2} = значение_корня_2`);
 	}

}

function getAverageScore(data) {
data = {};
}

function getAverageMark(marks) {
	let sum = 0;
	let res;
	
data.average = for (i = 0; i < marks.length; i++) {
(sum + marks[i]) / marks.length;
}
if (marks.length === 0) {
	data.average = 0;
}
console.log(data, data.average);
}


