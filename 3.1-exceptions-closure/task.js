function parseCount(value){
	 Number.parseInt(value);
	if (Number.parseInt(value) === NaN) {
     const error = new Error("Невалидное значение");
     throw error;
	}
  return Number.parseInt(value);
}

function validateCount(value) {
try {
	Number.parseInt(value) === NaN;
	return value;	
} catch(e) {
	Number.parseInt(value) === NaN;
	return value;
}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}
	if ((a + b) < c || (a + c) < b || (b + c) < a) {
		const er = new Error("Треугольник с такими сторонами не существует")
         throw er;
	}
}

Triangle.getPerimeter() {
	this.a = a;
		this.b = b;
		this.c = c;
	const p = a + b +c;
	return p;
}

Triangle.getArea() {
	this.a = a;
		this.b = b;
		this.c = c;
	const pp = 1 / 2 * (a + b + c);
	const s = pp * (pp - a) * (pp - b) * (pp - c);
	const num = Math.sqrt(s);
	const res = num.toFixed(3);
	return res;
}

function getTriangle(a, b, c) {
	const triangle = new Triangle;
	if ((a + b) < c || (a + c) < b || (b + c) < a) {
	try {
		return triangle;
	} catch {
const obj = {};
return obj.getPerimeter(), obj.getArea(); 
return "Ошибка! Треугольник не существует";
	}
}	
}



