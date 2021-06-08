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
// function makePizza() {
//   return "Ваша пицца готовится, ожидайте.";
// }
// // Пиши код ниже этой строки

// const result =
//   makePizza(); /* в переменной result - результат выполнения функции makePizza */
// const pointer =
//   makePizza; /* в переменной pointer - ссылка на функцию makePizza */

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

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );

// Задача 2
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
//} /* функция makeMessage ожидает вторім параметром (параметр callback) колбэк-функцию и возвращает ее вызов */

/* Отложенный вызов: интервалы */
const callback = function () {
  console.log("Через 2 секунды внутри колбека в таймауте");
};
console.log("В коде перед таймаутом");
setTimeout(callback, 2000);
console.log("В коде после таймаута");

/* Отложенный вызов: http-запрос
API URL: https://pokeapt.co/api/v2/pokemon */
const onRequestSuccess = function (response) {
  console.log("Вызов функции onRequestSuccess после успешного ответа бекенда");
  console.log(response);
};
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then(onRequestSuccess);

//Задача 3
// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza("Роял гранд", function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza("Ультрасыр", function eatPizza(pizzaName) {
//   console.log("Едим пиццу ${pizzaName}");
// });

/* Фільтр*/
const filter = function (array, test) {
  const filteredArray = [];
  for (const el of array) {
    console.log(el);
    const passed = test(el);
    if (passed) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};

// 1. Надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условие, то функция вернет true
// 4. если єлемент массива НЕ удовлетворяет условие, то функция вернет false

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

//Задача 4 (до рефакторинга)
// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   order(pizzaName) {},
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order("Аль Копчино", makePizza, onOrderError);
// pizzaPalace.order("Четыре нарезона", makePizza, onOrderError);
// pizzaPalace.order("Биг майк", makePizza, onOrderError);
// pizzaPalace.order("Венская", makePizza, onOrderError);

// Задача 4 (после рефакторинга)
const pizzaPalace = {
  pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
  order(pizzaName, onSuccess, onError) {
    for (let pizza of this.pizzas) {
      if (pizzaName === pizza) {
        return onSuccess(pizza);
      }
    }
    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
  },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order("Аль Копчино", makePizza, onOrderError);
pizzaPalace.order("Четыре нарезона", makePizza, onOrderError);
pizzaPalace.order("Биг майк", makePizza, onOrderError);
pizzaPalace.order("Венская", makePizza, onOrderError);

/* Замыкание */
const fnA = function (parameter) {
  const innerVariable = "значение внутренней переменной функции fnA";
  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log("Это вызов innerFunction");
  };
  return innerFunction;
};
const fnB = fnA(555);
fnB();
console.log(fnB);

/* Поварята*/
const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
  };
  return makeDish;
};
const mango = makeSheff("Mango");
mango("котлеты");
mango("пирожок");
const poly = makeSheff("Poly");
poly("чай");
poly("омлет");

// Задача 5 (условие без this)
const pizzaPalace = {
  pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};

// Задача 5 (после рефакоринга с this)
const pizzaPalace = {
  pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};

// Задача 6
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// Задача 7
const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}
const messages = [];
for (let i = 0; i < orders.length; i += 1) {
  messages.push(composeMessage.call(orders[i], i + 1));
}

// Задача 8
const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i++) {
  const msg = composeMessage.apply(orders[i], [i + 1]);
  messages.push(msg);
}

// Задача 9
const pizzaPalace = {
  company: "Pizza Palace",
};

const burgerShack = {
  company: "Burger Shack",
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer("Манго");

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer("Поли");

// Задача 10
const service = {
  mailingList: ["mango@mail.com", "poly@hotmail.de", "ajax@jmail.net"],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction(
  "kiwi@mail.uk",
  service.subscribe.bind(service)
);
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction(
  "poly@hotmail.de",
  service.unsubscribe.bind(service)
);
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
