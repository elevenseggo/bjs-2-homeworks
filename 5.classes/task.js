class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}
	set state(statement) {
		if (statement < 0) {
			statement = 0;
		} else if (statement > 100) {
			statement = 100;
		}
		this._state = statement;
	}
	get state() {
		return this._state;
	}
	fix() {
		this.state *= 1.5;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book._state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}
	giveBookByName(bookName) {
		let index = this.books.findIndex(book => book.name === bookName);
		if (index !== -1) {
			return this.books.splice(index, 1)[0];
		}
		return null;
	}
}