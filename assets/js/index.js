// JS - мова програмування з динамічною типізацією, високорівнева, інтерпретована, мультипарадигмова, скриптова

// JS виконується браузером (движком)

// стандарт ECMAScript

// функція для виведення повідомлелння через модальне вікно на сторінці браузера
// alert("Hello world!");

// функція для виведення даних в консоль (в інструментах розробника) 
// console.log("Hi!");

// clo - скорочення для швидкого набору консоль лога з виведенням і стрінга object :>> і значення в змінній в консоль
// console.log('object :>> ', object);
// clg - скорочення для швидкого набору консоль лога з виведенням значення що міститься в змінній в консоль
// console.log(object);


// // - це однорядковий коментар
// /* */ - це багаторядковий коментар




        // Змінні


    // - let це змінна , значення якої можна змінювати (не строге)
    // - перше присвоєння називається ініціалізація
    // - назви змінних, функцій, тощо пишемо в lowerCamelCase (перша буква маленька, далі кожне наступне слово з великої, без пробілів)
    // - класи,тощо пишемо в UpperCamelCase (перша буква велика, далі кожне наступне слово з великої, без пробілів)
    // - константи пишемо в UPPER_SNAKE_CASE (всі будки великі, слова розділені нижнім підчеркуванням)
    // можна використ наст символи: a-z, A-Z, _, $, 0-9 - для першої літери неможна використ цифри

// let userName = 'Anrietta';
// console.log(userName);  // - виведе лише значення Anrietta
// // console.log('userName :>> ', userName); - виведе назву змінної + значення
// userName = 1;
// console.log(userName);

//     // - const це змінна , значення якої НЕ можна змінювати (строге)
//     // для уникнення випадкової зміни значення, всі змінні які не мають змінюватись, рекомендується оголошувати як const
//     // const рекомендовано використовувати коли ми самі розуміючи контекст коду та задачі знаємо що ми ці значення не будемо змінювати в своєму скрипті (для циклів, функцій, перевизначення значення в зміній тощо)


// // const constValue = 10;
// // constValue = 5;  // Не дозволяє змінювати значення
// // console.log(userName);


//     // - var це змінна , значення якої можна змінювати (Вони устарівші , їх не використовувати!)
// var anotherValue = 'string';



// // ##############################################################################################################################################


//         // Типи даних


// // Динамічна типізація - це зміна типу даних саме в процесі виконання коду
// // в інших мовах програмування (типізованих) - тип даних задається явно разом з оголошенням зміннної, тобто самій змінній присвоюється певний тип даних
// // в JS (не типізований) - тип даних визначається не змінній а значенню змінної (за допомогою додаткових символів чи значень), і в майбутньому цей тип може бути змінений будь якою частиною коду
// // в JS існує 8 типів даних, з них 7 перших примітивні типи даних, 1 останній це складний тип

// // Типи даних JS:

// // string: 'value', "value", `value` - рядок, текстові дані
//     const stringVar1 = 'value';
//     console.log(stringVar1);
//     console.log(typeof(stringVar1));
//     console.log('store "Aliexpress"'); //-якщо нам потрібно в стрінг вкласти текст огорнутий в лапки, то треба для того шматка тексту просто використати будь-які інші лапки крім тих які викорситовуються для коді
//     console.log('store \'Aliexpress\''); //ще можна використати символ екранування \ 



// // number: 
//     // 4, 0, -10 - цілі числа; 
//     // 20.5, -0.5 - з фіксованою крапкою; 
//     // 0.4e25 = 0.4*10^25 = 0.00000000000000000000000004 - 0,4 * 10 піднесений в 25 степені, для запису довжелезних чисел (^-піднесення о степеня) - з плаваючою комою (експоненційна форма)
//     // 21e16 = 21*10^16 = 210000000000000000  - з плаваючою комою (експоненційна форма)
//     // NaN - not a number - помилка з типом даних Number
//     // 5/0 - ділити на нуль неможна, як результат операції отримаєм Infinity або -Infinity
//     // -0 -  малесеньке число дуууже сильно близьке до 0 з відємним значенням
//     // +0 - малесеньке число дуууже сильно близьке до 0 з додатнім значенням
//         const a = 10.002;
//         console.log(a);
//         console.log(typeof(a));

//     // Number.MAX_SAFE_INTEGER - максимальне ціле число
//     // Number.MAX_VALUE - максимальне числове значення




// // bigint - велике ціле число. В кінці значення дописуєм n це ми позначили число як дуже велике,і JS дозволить вивести його в такому вигляді, тобто значення явно більше ніж дозволено Number.MAX_SAFE_INTEGER і ми про це повідомляємо
//         const bigintValue = 1111111111111111111111111111111111111n;
//         console.log(bigintValue);




// // boolean: true (+), false (-) - логічні значення
//     // назву змінної прийнято починати з is
//         const isOdd = false;
//         console.log(isOdd);
//         console.log(typeof(isOdd));




// // null: - окремий тип даних (хоча має тип даних object, це баг який не фіксять бо все поламаться), що означає що змінна пуста, сама змінна є, а вній нема значення
//     // як порожня коробка з повітрям, нічого
//     const nullValue = null;
//     console.log(nullValue);
//     console.log(typeof(nullValue));



// // undefined - тип даних undefined, що означає що змінна взагалі немає задеклованого нічого, вона як оголошена але їй не присвоєно навіть "нічого/пустого знач"
//     // як порожня коробка навіть без повітря, вакуум
//     let value;
//     console.log(value);
//     console.log(typeof(value));



// // symbol - використ рідко, восновному для технічних речей, генерує завідомо унікальні значення,але переглянути їх не дає
//     const symbolValue = Symbol();  // згенерує щось схоже на це vd1fv2v1vdvsf2vsfv1vd5v7vs5svsv599vr - щось схоже на Хеш коміта
//     console.log(symbolValue);



// // object - грубо кажучи це контейнер що може вміщувати будь які примітивні типи даних
//     const objValue = {};
//     console.log(objValue);
//     console.log(typeof(objValue));


// // ########################################################################################################################


// // Визначення типу даних

// // typeof() - використовується для отримання інфи про тип даних
//     // console.log('typeof 10 :>> ', typeof 10);
//     // typeof 10 :>>  number  - результат виведений в консоль
//     console.log('typeof 11n :>> ', typeof 11n);  //typeof 11n :>>  bigint
//     console.log('typeof "11n" :>> ', typeof "11n");  //typeof "11n" :>>  string
//     console.log('typeof true :>> ', typeof true); //typeof true :>>  boolean
//     console.log('typeof "true" :>> ', typeof "true"); //typeof "true" :>>  string
//     console.log('typeof null :>> ', typeof null); //typeof null :>>  object
//     console.log('typeof undefined :>> ', typeof undefined); //typeof undef :>>  undefined
//     console.log('typeof objValue :>> ', typeof objValue); //typeof objValue :>>  object


// // ###############################################################################################################################


// // Задачка: 
// // задати дві змінні: 
// // своє їм'я і кількість років і вивсести ці знач в консоль

// const userName1 = 'Anrietta';
// let userAge = 35;
//     console.log('userName1 :>> ', userName1);
//     console.log('userAge :>> ', userAge);



// // ##############################################################################################

//         // Операції 

// //Операції

// let b = 10; //- операція присвоювання, перше присвоювання називається - ініціалізація
// b = 0; //- оперція присвоювання, змінюємо значення змінної

// //Арифметичні : + - * / % **

// let c = 1 + 2;
// console.log(c); // 3 

// let d = 5 + 8;
// console.log(d);

// let e = 5 - 8;
// console.log(e);

// let f = 5 * 8;
// console.log(f);

// let g = 10 / 2;
// console.log(g);

// let h = 10 % 3;  // остача від ділення
// console.log(h);

// let i = 10**2;  // піднесення до степеню
// console.log(i);

// // JS при обчисленні дробів допускає похибку в підрахунках 0,2 * 0,1 = 0,30000000000000004

// // Math. - містить додаткові функції та константи для склданих обчислень

// console.log(Math.sqrt(100));  // функція для обчислення квадратного кореня
// console.log(Math.pow(5, 2));  // функція приведення до степеня

// const r = 10;  // радіус кола
// const j = 2 * Math.PI * r; // функція число Пі для обчислення довжини кола
// console.log(j);  


// console.log(4 + 8 * 0.1); // операції виконаються як в математиці, спершу * / потім + -, якщо тре змінити пріоритет використовуєм в ()
// console.log(2 ** 3 ** 2);  // 52 бо піднесення до степеня рахується зправа на ліво




// Операції для рядків

// Конкатенація - склеювання рядків 'str1' + 'str2' => 'str1str2'

// const greeting = 'You are ';
// const age = prompt('How old are you?', '');
// console.log(greeting + age + ' years old!');

// console.log("1" + 1);  // 11 рядок



// // Скорочені операції : +=, -=, *=, /=, ...
// let sum = 5;
// // sum = sum + 5; // довгий запис
// sum += 5;       // короткий запис попереднього рядка
// console.log(sum);
// // sum = sum * 10; // довгий запис
// sum *= 10;      // короткий запис попереднього рядка
// console.log(sum);



// Інкремент - increase - збільшити на 1
//Ще суперскорочення щоб додати 1, тільки одницю (використ в циклах)

// Інкремент постфіксний:
// sum += 1; 
// sum++;

// let x = 10;
// const y = x++;  // ця операція повертає себе ДО збільшення а потім збільшується
// console.log(y); //10
// console.log(x); //11


// Інкремент префіксний:
// let x1 = 10;
// const y1 = ++x1;  // ця операція спершу збльшується а потім повертає себе після збільшення
// console.log(y1); //11
// console.log(x1); //11

// Декременти префіксний та постфіксний
// Декремент - decrease - зменшувати
// --x , x--


// ######################################################################################################################


        // Приведення типів (Type conversion)

// Ввести два числа і вивести їх суму:

// const a1 = prompt('Введіть перше число:');  // функція prompt по замовчуванню приймає рядок і повертає рядок, навіть якщо там ввели число, тбто sum1 в нам поверне не 100+100=200 а поверне зконкатинований рядок '100'+'100='100100'
// const a2 = prompt('Введіть перше число:');
// const sum1 = a1 + a2;
// console.log(sum1);


//Явне приведення типів:
// щоб отримати очікуваний результат, потрібно вкзаати одразу тип даних:

// result = Number(10);  // значення буде числом
// const res1 = Number('10'); // значення буде числом 10
// const res2 = Number(null); // значення буде числом 0

// const res3 = String(5); //результат буде рядком '200'
// const res4 = String(undefined); //результат буде рядком 'undefined'

// Ввести 2 числа і вивести їхню суму 2:
// const op1 = Number(prompt('Введіть перше число:'));
// const op2 = Number(prompt('Введіть друге число:'));
// const sum2= op1 + op2;
// console.log(sum2);


//Те саме лиш коротший запис, + = Number
// const op1 = +prompt('Введіть перше число:');
// const op2 = +prompt('Введіть друге число:');
// const sum2= op1 + op2;
// console.log(sum2);


//Ввести три числа і порахувати їх добуток
// const op1 = +prompt('Введіть перше число:');
// const op2 = +prompt('Введіть друге число:');
// const op3 = +prompt('Введіть третє число:');
// const sum4 = op1 * op2 * op3;
// console.log(sum4.toFixed(2));  //.toFixed() - функція яка обрізає зайві цифри в числі до тої кількості символів які ми вкажем в дужках, але виводитись буде стрінг, вона число перетворить в стрінг



// Неявне приведення типів -  варто уникати всюди де можна

// console.log("10 + '10' :>>" , 10 + '10');  // 1010 стрінг
// console.log("null + '10' :>>" , null + '10'); // null10 стрінг
// console.log("null + '10' :>>" , null + '10'); // null10 стрінг




// #####################################################################################################################


                // Умовний оператор IF

// if - розгалуження:

// if (умова) {           // якщо умова виконується то виконається те що в if - тобто результат буде true
//         гілка true;
// } else {                 // якщо умова в if не виконується то виконається те що в else - тобто результат буде false
//         гілка false;
// }

// {} - фігурні дужки ще називають операторні дужки

// const isLogged = false;

// if (isLogged) {
//         console.log('Вітаємо, ви успішно увійшли в систему');
// } else {
//         console.log('Спробуйте ввети свої дані повторно');
// }


// Задачка

// задати змінну чи достатньо грошей
// Якщо грошей достатньо, вивести "Операцію схвалено"
// Якщо грошей не достатньо, то вивести "Операцію відхилено"

// const isEnoughMoney = true;

// if (isEnoughMoney) {
//         console.log('Операцію схвалено');
// } else {
//         console.log('Операцію відхилено');
// }


// Оператори порівняння:

// age > 18,
// age < 18,
// age >= 18,
// age <= 18,
// age == 18,   // дорівнює без врахування типу даних (не строге порівняння / вміє перетворювати типи)
// age === 18,  // дорівнює в т.ч. й тип даних (строге порівняння / не вміє перетворювати типи)
// age != 18,   // не дорівнює без врахування типу даних (не строге порівняння / вміє перетворювати типи)
// age !== 18   // не дорівнює в т.ч. й тип даних (строге порівняння / не вміє перетворювати типи)


// console.log(10 == '10'); //true
// console.log(10 == 10); //true

// console.log(10 === 10); //true
// console.log(10 === '10'); //false

// console.log(10 != '10'); // false - бо без врахувння типу вони рівні
// console.log(10 != 10); // false - бо вони рівні

// console.log(10 !== '10'); //true - бо вони нерівні враховуючи тип
// console.log(10 !== 10); // true - бо вони рівні враховуючи тип



// Задачка

// Якщо користувач повнолітній, то привітати. якщо ін - то доступ заборонено

// const age = Number(prompt('Скільки Вам років?'));

// if (age >= 18) {
//         console.log('Вітаємо на порталі послуг!');
// } else {
//         console.log('Вибачте, доступ заборонено!');
// }


//Задачка

// Ввести два числа і знак операції. 
// Якщо введено + то порахувати і видати суму цих двох чисел
// Інакше вивести їхню різницю

// const a = Number(prompt('Введіть перше число:')),
//         b = Number(prompt('Введіть друге число:')),
//         c = prompt('Введіть оператор:');

// if (c === '+') {
//         console.log('Сума чисел:', a + b);
// } else {
//         console.log(`Сума чисел: `+ (a - b));
// }




// Скорочена форма if (без else)

// Задачка
//Вивести привітання для користувачів сайта
//Але якщо користувач неповнолітній то попередити його про обмеження доступу

// const age = Number(prompt('Скільки Вам років?'));

// if (age < 18) {
//         console.log('Вибачте вам обмежено доступ!');
// }
// console.log('Вітаємо на нашому ресурсі!');



// Розширена форма if (else if)

// Ввести два числа і знак операції. 
// Якщо введено + то порахувати і видати суму цих двох чисел
// Якщо введено * то порахувати і видати добуток цих двох чисел
// Інакше вивести їхню різницю

// const a = Number(prompt('Введіть перше число:')),
//         b = Number(prompt('Введіть друге число:')),
//         c = prompt('Введіть оператор:');

// if (c === '+') {
//         console.log('Сума чисел:', a + b);
// } else if (c === '*') {
//         console.log('Добуток чисел:', a * b);
// } else {
//         console.log(`Різниця чисел: `+ (a - b));
// }


// ##########################################################################################################


                // Логічні (булевські) оператори ТА чи АБО (AND vs. OR)

// && - AND, оператор ТА - відповідність всім умовам (дає істину тоді коли всі умови істина)
// || - OR, оператор АБО - відповідність хоча б одній з умов (дає істину тоді коли хоча б одна з умов істина)
// !умова  - НЕ умова


// console.group('Таблиця істинності &&:');

// console.log('true && true :>> ', true && true); // => true, якщо всі true
// console.log('false && false :>> ', false && false); // false
// console.log('true && false :>> ', true && false);  // false
// console.log('false && true :>> ', false && true); // false

// console.groupEnd();

// console.group('Таблиця істинності ||:');

// console.log('true || true :>> ', true || true); // true
// console.log('false || false :>> ', false || false); // => false, якщо всі false
// console.log('true || false :>> ', true || false); // true
// console.log('false || true :>> ', false || true); // true

// console.groupEnd();

// console.group('Таблиця істинності !:');

// console.log('!true :>> ', !true); // false
// console.log('!false  :>> ', !false); // true

// console.groupEnd();

// істина - не істина true - false
//істинний - не істинний truly - falsy

// falsy :  0, '', false, null, undefined, NaN  =  false
// truly : 123, 'adc', true, object  = true


// const q = true;
// // if (q !== '' && q !== undefined && q!== null) {    // - довгий варіант щоб перебрати всі не істинні умови
// if (q) {                                              // - короткий варіант, якщо значення q істинне і може бути істиною (тото не відповідати умовам false) то виконати умову, бо рядок, число, обєкт це істинні значення
//         console.log('Значення коректне');
// }


// Якщо сумніваємось що істина а що не істина можна в консолі отак Boolean(123), Boolean('')...



// Задачка
// надати знижку якщо день пятниця і число 13

// const day = 'friday';
// const date = 10;

// if (day === 'friday' && date === 13) {
//         console.log('Вітаємо, ви отримали знижку 13%!');
// }


// Задачка
//Якщо не повнолітній то вивести інфо про обмеження

// const isAdult = undefined;

// if (!isAdult) {
//         console.log('Вибачте, вам надано обмежений доступ!');
// }

//нижні два варіанта написання не дуже добре використовувати, краще перший
// if (isAdult !== true) {
//         console.log('Вибачте, вам надано обмежений доступ!');
// }

// if (isAdult === false) {
//         console.log('Вибачте, вам надано обмежений доступ!');
// }


// ЗАПАМ'ЯТАТИ!!!

// NaN - це єдине значння в JS яке ніколи не дорівнює собі самому, можливо тому, що NaN утворюється з різних комбінацій типів даних при проведенні операції з числом
// NaN === NaN // false
// NaN == NaN // false
// NaN !== NaN  // true

// Щоб перевірити чи значення NaN треба використовувати функцію Number.isNaN(NaN)
// Є глобальна функція isNaN() - перевіряє чи будь які значення є чи не є NaN
// є функція Number.isNaN() - перевіряє чи число є чи не є NaN
