class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(value) {
    if (typeof value === 'boolean') {
        this._isCheckedOut = value;
    } else {
      console.log('Checked Out value must be true or false');
    }
  }
  get ratings() {
    return this._ratings;
  }
  getAverageRating() {
    return this.ratings.reduce((a, b) => a + b) / this.ratings.length;
  }
  toggleCheckOutStatus() {
    this.isCheckedOut ? this.isCheckedOut = false : this.isCheckedOut = true;
  }
  addRating(rating) {
    if (typeof rating === 'number' && rating > 0 && rating < 6) {
        this._ratings.push(rating);
    } else {
      console.log('Ratings must be between 1 and 5');
    }
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything);

const speed = new Movie('Speed', 'Jan de Bont', 116);
console.log(speed);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.addRating(9);
console.log(speed.getAverageRating());
console.log(speed);
