// Пункт 1
let message;
message = 'Выполните задание';
alert(message);

// Пункт 2
let message = 'Сообщение №1'; 
alert(message);
message = 'Измененное сообщение'; 
alert(message);

// Пункт 3
let userName = prompt("Введите имя", "Жылдыз");
let email = prompt("Введите email", "jyldyza.rahimova.kk@gmail.com");
document.write(" ФИО: </br> "+ userName + " " + " email: " + email + " ");

// Пункт 4

let souvenirQuantity = prompt("Введите количество сувениров");
let giftQuantity = prompt("Введите количество подарков");
const souvenirWeight = 75;
const giftWeight = 112;
let totalWeight = souvenirQuantity * souvenirWeight + giftQuantity * giftWeight;
document.write(`общий вес равен ${totalWeight} гр  `);

// Пункт 5
let numA = prompt("Введите число А ");
let numB = prompt("Введите число B ");
let a = Number(numA);
let b = Number(numB);

let sum = a + b;
let substruction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;
let exponentiation = a ** b;


document.write(`${sum}  сумма a и b `);
document.write(`${substruction}  разница между a и b `);
document.write(`${multiplication}  произведение a и b `);
document.write(`${division}  частное от 
деления a на b `);
document.write(`${remainder}  остаток от деления a на 
b; <br>`);
document.write(`${exponentiation}  результат возведения числа 
a в степень b.<br>`);