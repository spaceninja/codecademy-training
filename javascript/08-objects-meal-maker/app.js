const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    this._courses.appetizers.push(appetizer);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(main) {
    this._courses.mains.push(main);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert) {
    this._courses.desserts.push(dessert);
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this[courseName] = dish;
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this[courseName];
    const random = Math.floor(Math.random() * dishes.length);
    return dishes[random];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const total = (appetizer.price + main.price + dessert.price).toFixed(2)
    const message = `Your meal is ${appetizer.name} (\$${appetizer.price}), ${main.name} (\$${main.price}), and a ${dessert.name} (\$${dessert.price}), for a total of \$${total}.`;
    return message;
  }
};

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Tomato Soup', 5.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 2.25);
menu.addDishToCourse('appetizers', 'Green Salad', 3.25);

menu.addDishToCourse('mains', 'Spaghetti', 12.99);
menu.addDishToCourse('mains', 'Steak', 15.99);
menu.addDishToCourse('mains', 'Grilled Cheese', 9.99);

menu.addDishToCourse('desserts', 'Sundae', 2.75);
menu.addDishToCourse('desserts', 'Chocolate Cake', 4.75);
menu.addDishToCourse('desserts', 'Macaron', 3.75);
menu.addDishToCourse('desserts', 'Jello', 1.75);
menu.addDishToCourse('desserts', 'Creme Brule', 7.75);

const meal = menu.generateRandomMeal();

console.log(meal);
