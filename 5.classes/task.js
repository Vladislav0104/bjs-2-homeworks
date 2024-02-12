class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	};
	fix() {
		this.state = this.state * 1.5;
	};
	set state(number) {
		if (number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	};
	get state() {
		return this._state;
	};
};

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type = 'magazine') {
		super(name, releaseDate, pagesCount, state, type);
	};
};

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type = 'book') {
		super(name, releaseDate, pagesCount, state, type);
		this.author = author;
	};
};

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type = 'novel') {
		super(author, name, releaseDate, pagesCount, state, type);
	};
};

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type = 'fantastic') {
		super(author, name, releaseDate, pagesCount, state, type);
	};
};

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type = 'detective') {
		super(author, name, releaseDate, pagesCount, state, type);
	};
};


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book._state > 30) {
			this.books.push(book)
		}
	};

	findBookBy(type, value) {
		const resultFind = this.books.find((book) => book[type] === value);
		if (resultFind === undefined) {
			return null
		}
		return resultFind
	};

	giveBookByName(bookName) {
		const giveResult = this.books.find((book) => book.name === bookName)
		if (giveResult === undefined) {
			return null;
		};
		const indexResult = this.books.findIndex((book) => book.name === bookName);
		this.books.splice(indexResult, 1);
		return giveResult;
	};
};