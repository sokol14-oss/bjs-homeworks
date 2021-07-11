class PrintEditionItem {
constructor(name, releaseDate, pagesCount, state, type) {
	this.name = name;
	this.releaseDate = releaseDate;
	this.pagesCount = pagesCount;
	this.state = state;
	this.type = type;
}
const printEditionItem = new PrintEditionItem();
state = 100;
type = null;
PrintEditionItem.fix();
	if (state < 0) {
		state = state * 1.5;
	}

set state(count) {
	if (count < 0) {
		state = 0;
	}
	if (count > 100) {
		state = 100;
	}
	
	this._state = count;
}
get state() {
	return this._state = count;
}

class Magazine extends PrintEditionItem {
constructor(name, releaseDate, pagesCount, state, type) {
	super(name, releaseDate, pagesCount, state, type);
	this.type = "Magazine";
}
}

class Book extends PrintEditionItem {
	super(name, releaseDate, pagesCount, state, type, author);
	constructor(name, releaseDate, pagesCount, state, type, author) {
	this.type = "Book";
}
}

class NovelBook extends Book {
	super(name, releaseDate, pagesCount, state, type, author);
	constructor(name, releaseDate, pagesCount, state, type, author) {
	this.type = "novel";
}
}
class FantasticBook extends NovelBook {
super(name, releaseDate, pagesCount, state, type, author);
constructor(name, releaseDate, pagesCount, state, type, author) {
this.type = "fantastic";
}
}

class DetectiveBook extends Book {
	super(name, releaseDate, pagesCount, state, type, author);
	constructor(name, releaseDate, pagesCount, state, type, author) {
	this.type = "detective";
}
}


class Library {
	constructor(name, books) {
		name = String(name);
		books = [];
		this.name = name;
		this.books = books;
		Library.addBook(book);
book = {};
if (state > 30) {
Library.addBook(book) = books.push(book);
}

Library.findBookBy(type, value);
for (let i = 0; i > books.length; i++) {
	books[i].includes(type, value);
}
if (books[i].includes(type, value) = true) {
		return book;
	}
	else {
		return null;
	}

	Library.lgiveBookByName(bookName);
	for (let i = 0; i > books.length; i++) {
		books[i].indexOf(bookName);
	}
	if (books[i].indexOf(bookName) !== -1) {
		books.slice(0, book);
		return book;
	}
	else {
		return null;
	}
	}

}


