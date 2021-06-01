const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, add);
doMath(10, 8, sub);

function greet(name) {
  return `Добро пожаловать ${name}.`;
}

/* Вызываем функцию greet 
   и выводим результат в консоль */
console.log(greet("Манго"));
// Добро пожаловать Манго.

/* Выводим функцию greet 
   в консоль не вызывая её */
console.log(greet);
/* 
ƒ greet() { 
     return `Добро пожаловать ${name}.`; 
} 
*/

//Задача 1
function makePizza() {
  return "Ваша пицца готовится, ожидайте.";
}
// Пиши код ниже этой строки

const result =
  makePizza(); /* в переменной result - результат выполнения функции makePizza */
const pointer =
  makePizza; /* в переменной pointer - ссылка на функцию makePizza */

/*
/ Отложенный вызов: геолокация
*/

const onGetPositionSuccess = function (position) {
  console.log("Это вызов onGetPositionSuccess");
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);

// Задача 2
function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
} /* функция makeMessage ожидает вторім параметром (параметр callback) колбэк-функцию и возвращает ее вызов */
