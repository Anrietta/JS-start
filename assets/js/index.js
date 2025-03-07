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


// ####################################################################################################

                // Цикли while, do...while (Loops)


//while - цикл з передумовою, спершу перевіряємо умову потім виконуємо тіло цикла

// while (умова) {
//         тіло циклу
// }

// let sideCount = 1;  // змінна яка буде збільшуватись, лічильник
// const TOTAL_SIDE_AMOUNT = 4;  // константа в якій загальна кількість сторін (ітерацій)

// while (sideCount <= TOTAL_SIDE_AMOUNT) {  // умова, коли sideCount буде = 4, після цього цикл закінчиться (кількість ітерацій в цьому циклі = 4)
//         console.log('Пройти прямо');
//         console.log('Повернути наліво');
//         sideCount++; // sideCount += 1; sideCount = sideCount + 1;  // після виконання тіла циклу збільшити sideCount на 1
// }


//Задачка
// У користувача є книга з TOTAL_PAGE_AMOUNT сторінок
// Вивести номери сторінок від 1 до останньої

// let pageCount = 1;
// const TOTAL_PAGE_AMOUNT = 15;

// while (pageCount <= TOTAL_PAGE_AMOUNT) {
//         console.log('Page number : ' + pageCount);
//         pageCount++;
// }


// Задачка
// Вивести тільки парні сторінки

// let pageCount = 1;
// const TOTAL_PAGE_AMOUNT = 15;

// while (pageCount <= TOTAL_PAGE_AMOUNT) {
//         if (pageCount % 2 === 0) {
//                 console.log('Page number : ' + pageCount);
//         }
//         pageCount++;
// }

// Задачка
// Вивести числол і вивести його квадрат
// Перевірити, щоб число було скінченним (не NaN, Infinity)

// 1 - ввести число
// 2- якщо воно скінченне, тоді вивсети його квадрат
// 3 - якщо не підходить то перейти на перший пункт

// let n = Number(prompt('Enter number :'));

// while (!Number.isFinite(n)) {       // .isFinite - це функція Number, яка перевіряє чи число скінченне, тобто не дорівнює NaN чи Infinity
//         n = Number(prompt('Enter number :'))
// }
// console.log(n, n * n);



//do ... while - спочатку відпрацьовує цикл, а потім перевіряється умова (цикл з  постумовою)

// do {
//         тіло циклу
// } while (умова)

// let n = null;

// do {
//         n = Number(prompt('Enter number :'))
// } while (!Number.isFinite(n));

// console.log(n, n*n);


// Задачка
//Вивсети кількість торінок через do...while

// let currentPage = 0;
// const TOTTAL_PAGE_AMOUNT = 10;

// do {
//         currentPage++;
//         console.log(currentPage);
// } while (currentPage < TOTTAL_PAGE_AMOUNT);


//Задачка
//Порахувати суму чисел від 1 до 20

// let i = 1;
// let sum = 0;  // змінна акумулятор, тому що вона акмулює значення

// while (i <= 20) {
//         sum = sum + i;
//         i++;
// }
// console.log(sum);

// 1 - i = 1
// 2 -  i=1 <=20 - true
// sum = 0 + 1 = 1
        // i = i + 1 = 1 + 1 = 2
// 3 - i=2 <=20 - true 
// sum = 1 + 2 = 3
        // i = i + 1 = 2 + 1 = 3
//...
// 4 - i=20 <= 20 - true
// sum = 190 + 20 = 210
        // i = i + 1 = 20 + 1 = 21
// 5 - i=21 <= 20 - false
// 6 - виходимо з циклу


//Задачка
//Порахувати добуток чисел від 1 до 10

// let i = 1;
// let sum = 1;

// while (i <= 10) {
//         sum = sum * i;
//         i++;
// }
// console.log(sum);


// #####################################################################################################

                // Цикли FOR (Loops)


// for (початкове значення; умова-продовження; зміна лічильника) {
//       тіло циклу  
// }


//Задачка
// У користувача є книга з TOTAL_PAGE_AMOUNT сторінок
// Вивести номери сторінок від 1 до останньої

// const TOTAL_PAGE_AMOUNT = 15;

// //                0                    1                        3
// for (let currentPage = 1; currentPage <= TOTAL_PAGE_AMOUNT; currentPage++) {
// //                        2
//         console.log('Page number : ' + currentPage);
// }

// 0 - Ініціалізація лічильника,     виконується 1 раз до циклу
// 1 - умова продовження циклу       якщо умова істинна, то виконуємо тіло циклу 2, інакше вихід
// 2 - тіло циклу,                   виконується, якщо умова 1 істинна
// 3 - зміна лічильника              виконується після кожної ітерації, потім перехід на 1


//Вивести парні числа від 10 до 20 (+2)

// for (let i = 10; i <= 20; i = i + 2) {
//         console.log(i);
// }

// Вивести десятки від 0 до 100 (+10)

// for (let i = 10; i <= 100; i += 10) {
//         console.log(i);
// }

//Вивести всі числа від 5 до -5 з інтервалом в 0.5 

// for (let i = 5; i >= -5; i -= 0.5) {
//         console.log(i);
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Змінні let i const які оголошені в середині циклу мають блочну(локальна) область видимості, тобто вони діють лише в межах циклу
//тому для різних циклів можна оголошувати змінну let i = ..., бо за межами самого циклу їх не видино
//А ті змінні які оголошені поза межами циклу мають глобальну область видимості, вони діють як ззовні в коді так і в середині будь якого циклу чи функції

// змінна var перестала використовуватись в JS. тому що в неї не було цього розподілу на глобальну і блочну зону видимості, що було дуже не зручно

// В devtools - Sources - Scope можна перевірити область видимості змінних
// Областей видимості є всього три:
// 1- Global - це глобальна область видимості всіх скриптів що підключені до сторінки
// 2- Script - це глобальна область видимості поточного скрипта що не засунуті в цикли чи функції
// 3- Block - це блочна область видимості (локальна), тобто та що знаходиться в середині циклу чи функції

// Пріоритет виглядає отак:
// Block >> Script >> Global
// тобто блок бачить все назовні і скрипт і глобал, скрипт бачить лише глобал а в блок не бачить, глобал бачить сам себе а скрипт і блок не бачить

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


//Знайти середнє арифметичне непарних чисел від 3 до 13 (3+5+7+9+11+13) / 6

// let sum = 0;   // додаємо кожне непарне сумуючи їх
// let cuantity = 0;  // рахуємо кількість ітерацій щоб отримати кількість чисел щоб знайти середнє арифметичне
// debugger;  // можна покласти тут в коді дебагер і оновти сторінку, замість того щоб в devtools 
// for (let i = 3; i <= 13; i+=2) {
//         sum += i; // sum = sum + i
//         cuantity++;
// }
// console.log(sum / cuantity);  // суму всіх чисел ділим на кількість всіх чисел


// Порахувати добуток чисел від -5 до 10

// let sum = 1;

// for (let i = -5; i <= 10; i++) {
//         sum *= i;
// }
// console.log(sum);  // -0




//------------------------------------------------------------------------------------------------------------

                // Підсумуємо інформацію по всім трьом типам циклів

//===============
// передумова; min 0 - кількість ітерацій
// while (condition) {
//         loop body
// }

//===============
// передумова; min 0 - кількість ітерацій
// for (initialization; condition; var_change) {
//         loop body
// }


//===============
// постумова; min 1 - кількість ітерацій
// do {
//         loop body
// } while (condition)



//===================
// break; - завершити цикл
// continue; - завершити поточну ітерацію і  перейти до наступної, при цьому з циклу ми не виходимо



// ################################################################################################################

                // Шаблонні літерали (Template literals)

// Шаблонний літерал - спосіб формування рядка таким чином, щоб всередині рядка можна було використати якісь вирази

// const summand1 = 4;
// const summand2 = 5;
// Довгий варіант писати через конкатинацію щоб отримати вираз 4 + 5 = 9
        // console.log(String(summand1) + '+' + String(summand2) + '+' + '=' + String(summand1 + summand2)); 

// Шаблонний літерал - це короткий варіант написати те що вгорі. Позначається через бектики
        // console.log(`${summand1} + ${summand2} = ${summand1 + summand2}`);



//Задачка
// const greeting = 'Hello';
// const userName = prompt('Enter your name: ');

// console.log(`${greeting}, ${userName}!`);  // 'Hello, Name!' by template literal


//Задачка
//Користувач має три спроби ввести парроль
// Якщо пароль вірний, то вивести "Пароль вірний"
//Інакше "Пароль невірний"


// 1 варіант рішення роздутий класичний

// const TRY_LIMIT = 3;
// const PASSWORD_PATTERN = 'qwerty';

// let currentTry = 1;
// let password = '';

// do {
//         password = prompt('Input password: ');
//         if (password === PASSWORD_PATTERN) {
//                 break;
//         }
//         currentTry++;
// } while (currentTry <= TRY_LIMIT);

// if (password === PASSWORD_PATTERN) {
//         console.log('Password is correct!');
// } else {
//         console.log('Pasword is incorrect!');
// }


// 2 варіант рішення оптимізований короткий і красівий (ще коротший в розділі тернарний оператор)

// const TRY_LIMIT = 3;
// const PASSWORD_PATTERN = 'qwerty';

// let currentTry = 1;
// let isPasswordCorrect = false;

// do {
//         isPasswordCorrect = prompt('Input password: ') === PASSWORD_PATTERN;

// } while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

// if (isPasswordCorrect) {
//         console.log('Password is correct!');
// } else {
//         console.log('Pasword is incorrect!');
// }


// ########################################################################################################################


                // Тернарний оператор ?: (Ternary Operator)

// a++ = один операнд (унарний операнд)
// a+b = два операнди (бінарний операнд)
// a*b^2 = три операнди (тернарний операнд)


// тернарний оператор можна вкористовувати для умовних розгалужень замість if - else

// let result = умова ? значення1 : знначення2
// Спочатку обчислуюється умова: якщо вона правдива, тоді повертається значення1, інакше - значення2

// true ? 5 : 10 //  повернеться 5 бо воно правдиве
// true ? 5 : 10 // повернеться 10 бо 5 правдиве а ми просим знайти фолс, 10 теж правдиве, але тут ми просим повернути фолс значення в першій умові, оскільки воно не фолс, то повертається значення другої умови


//Задачка

//Якщо людина повнолітня, вивести "Ви повнолітній", інакше вивести "Ви не повнолітній"

//коротке рішення за допомогою тернарного оператора
// const age = 18;

// const resultString = age >= 18 ? "Ви повнолітній" : "Ви не повнолітній";
// console.log(resultString);


// класичне рішення через if-else

// const age = 18;
// let result = '';

// if (age >= 18) {
//         result = "Ви повнолітній";
// } else {
//         result = "Ви не повнолітній";
// }
// console.log(result);



//Задачка
//Користувач має три спроби ввести парроль
// Якщо пароль вірний, то вивести "Пароль вірний"
//Інакше "Пароль невірний"


// 1 класичний варіант рішення

// const TRY_LIMIT = 3;
// const PASSWORD_PATTERN = 'qwerty';

// let currentTry = 1;
// let isPasswordCorrect = false;

// do {
//         isPasswordCorrect = prompt('Input password: ') === PASSWORD_PATTERN;

// } while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

// if (isPasswordCorrect) {
//         console.log('Password is correct!');
// } else {
//         console.log('Pasword is incorrect!');
// }


// короткий варіант через тернарний оператор замість if-else + з шаблонним літералом

// const TRY_LIMIT = 3;
// const PASSWORD_PATTERN = 'qwerty';

// let currentTry = 1;
// let isPasswordCorrect = false;

// do {
//         isPasswordCorrect = prompt('Input password: ') === PASSWORD_PATTERN;

// } while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

// console.log(`Password is ${isPasswordCorrect ? 'correct' : 'incorrect'}`);



// ###########################################################################################################################

                        // Functions

//  Функції : 
// повторне використання коду
// Одна функція - одна  відповідальність (одна задача)


// записується вункція через спец слово    назва ф-ї   аргументи  тіло ф-ї
//                                 function myFunction     ()     {}


//Оголошення фунцкії
// function fName(параметри) {  // параметрів може бути скільки завгодно
//      тіло ф-ї
        // return значення;  // повертає результат виконання функції
// }

//Виклик функції
//викликати функцію щоб вона працювала : назва функції() - дужки можна залишати пустими, або можна передавати ними аргументи
// myFunction(аргументи)   // аргументів може бути скільки завгодно (головне щоб аргументів було стільки ж скільки параметрів)



// function myFunction(userName) {   //userName це параметр фу-ї - це по суті локальна змінна в яку будуть передаватись аргументи при виклику цієї ф-ї
//         // console.log(`Hello, ${userName}`);
//         const userGreeting = `Hello, ${userName}`;
//         return userGreeting;

// }
// myFunction('Irina');  // в дужках при виклику це аргументи
// myFunction('Vadim');

//функція виконається стільки разів скільки разів ми її викликаємо

// const a  = myFunction('Ivo');
// console.log(a);


// Написати функцію для обчислення суми двох чисел

// function sum(par1, par2) {
//         return par1 + par2; 
// }

// const result = sum(4, 5);  // після виконання функції result = 9
// console.log(result);  // 9 


// Написати функцію яка приймає 2 параметри і повертає a, b  і повертає a**b
// 2, 2 = 4
// 3, 4 = 81

// function myPow (a, b) {
//         return a**b;
// }

// const pow = myPow(3, 4); // 81
// console.log(pow);  // 81

//Написати функцію для обчислення суми цілих чисел від n1 до n2

// 1 і 5 = 1 + 2 + 3 + 4 + 5
// 

// function mySum (from, to) {
//         let result = 0;

//         for (let i = from; i <= to; i++) {
//                 result += i;
//         }
//         return result;
// }

// console.log(mySum(1, 5));
// console.log(mySum(5, 10));


//Написати функцію, якаприймає вік коритсувача, яка повертає true для повнолітнього користувача, false - для неповнолітнього

// function isAdult(userAge) {

//         //Рішення1
//         // if (userAge >= 18) {
//         //         return true;
//         // } else {
//         //         return false
//         // }


//         //Рішення 2
//         // return userAge >= 18 ? true : false;


//         //Рішення 3
//         return userAge >= 18;   // оскільки вираз userAge >= 18 є Булевим то він сам по собі повертає тру чи фолс, немає необхідності прописувати якщо тру то поверни тру, якщо фолс то поверни фолс. 
//                                 // Достатньо посто вказати щоб повернув результат виразу, і це все буде замість варіантів рішень 1 і 2

        
// }
// console.log(isAdult(5));




// --------------------------------------------------------------------

                // Способи задання функцій

// В JS функції є обєктами першого класу (First-class-citizen) - це означає, що вони можуть передаватись як параметр, повертатись із функції або присвоюватись змінній

// 1.function declaration - оголошення функції - оголошуємо функцію, потім її викликаємо по імені функції
//      у function declaration не важливо  чи ми спершу функцію написали чи спершу ї викликали, і так і так працює добре (перед виконанням скрипта, виконується перший пробіг по коду двіжком, потім вже виконання)

//         function myFunction(userName) {  
//         console.log(`Hello, ${userName}`);
//         const userGreeting = `Hello, ${userName}`;
//         return userGreeting;
//          }
//          myFunction('Irina');  

// 2. function expression - вираз функції - кои ми в змінну кладемо функцію як значення, викликаємо функцію по назві змінної а не самої функції.
//      у function expression важливо щоб спершу була оголошена змінна значенням якої є функція, а вже потім виклик. Тому що ми не зможемо звернутись до змінної якщо вона не була оголошена раніще по коду

// const calcSum = function (a, b) {
//         return a+b;
// };

// console.log(calcSum(2,5));


// Написати функцію  що приймає два параметри, і повертає число де a піднесений в степінь b
// const myPow = function (a, b) {
//         return a**b;
// }

// console.log(myPow(2,3));


// Буває так нам не всі параметри потрібно передавати, 
// тобто у функції три параметри, а ми передаємо лише два

// Значення за умовчуванням

//Наприклад prompt має не лише один параметр як ми раніше писали, а має ще другий параметр default - значення яке ми там зазначимо буде по замовчуванню вписане в строку введення
// параметр default не є обовязковим, якщо ми його не вказуємо, то поле для вводу просто буде пустим, тобто там буде просто пустий стрінг ''
// const value = prompt('Input number', 10);
// console.log(value);


//Знайти суму двох чисел якщо друге число не передане то вважати його 1

// ми можемо вказати 2 параметри, перший обовязковий, а другий по дефолту 1 а якщо ми передамо обидва аргумента то буде дорівнювати тому що передали як аргумент
// якщо не вказати дефолтне значення в цьому випадку, то  буде undefind для другого парамера, якщо ми передамо лише 1 аргумент
// дефолтне значення можна вказувати лише для останньго параметра.

// function sum2(a, b=1) {
//         return a + b;
// }

// console.log(sum2(2, 3));
// console.log(sum2(2));


//Написати функцію для обчислення суми цілих чисел від n1 до n2

// 1 і 5 = 1 + 2 + 3 + 4 + 5
// 

// function mySum (from, to) {
//         let result = 0;

//         for (let i = from; i <= to; i++) {
//                 result += i;
//         }
//         return result;
// }

// console.log(mySum(1, 5));
// console.log(mySum(5, 10));

// Переписати функцію зверху так, щоб при передачі тільки одного аргумента то це має бути to

// function mySum (to, from = 1) {
//         let result = 0;

//         for (let i = from; i <= to; i++) {
//                 result += i;
//         }
//         return result;
// }

// console.log(mySum(10));


// ######################################################################################################################

                // JS doc - як писати документацію до свого коду JS

// https://jsdoc.app/
// Документацію пишемо в таких межах /** */
// Документація потрібна для розуміння написаного коду в майбутньому
// Розписується все так як в прикладах нижче
// Детальна інструкція з написання документації на сайті https://jsdoc.app/


/**
 * Function calculate the sum of two numbers
 * @param {number} to  - First summand
 * @param {number} [from = 1]  - Second summand
 * @returns {number} - Sum of arguments
 */
function mySum (to, from = 1) {
        let result = 0;

        for (let i = from; i <= to; i++) {
                result += i;
        }
        return result;
}

console.log(mySum(10));



// Написати функцію яка приймає 2 параметри і повертає a**b
// 2, 2 = 4
// 3, 4 = 81

/**
 * Function powers a to b parameter
 * @param {number} a  - First arg
 * @param {number} b  - Second arg
 * @returns {number}  Number a powered to number b
 */

function myPow (a, b) {
        return a**b;
}

const pow = myPow(3, 4); // 81
console.log(pow);  // 81