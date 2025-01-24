
// var countPositiveNumbers = function (nums) {
//     let count = 0;
//     for(const item of nums){
//         if(item > 0){
//             count += 1;
//         }
//     }
//     return count;
// };
// let nums = [1,-2,3,-4,5];
// console.log(countPositiveNumbers(nums));

// var sortByLength = function(arr){

//     return arr.sort((a, b) => b.length - a.length);
// };
// console.log(sortByLength(["uty","banana" ]));
// var reverseString = function (str) {
//     return str.split("").reverse().join("");
// };

// function fibonacci(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
console.log(fibonacci(11));

// var sumArray = function (nums) {
//     if(nums.length === 0){
//         return 0;
//     }
//     return nums.reduce((a, b) => a + b);
    
// };

// var countPositiveNumbers = function (nums) {
//     let count = 0;
//     for(let item of nums) {
//         if(item > 0){
//             count += 1;
//         }
//     }
//     return count;
// };

// Вы получаете массив prices, где prices[i] указывает цену данной акции в i-ый день. Вы хотите максимизировать свою прибыль, выбрав один день для покупки одной акции и выбрав другой день в будущем для продажи этой акции. Напишите функцию maxProfit(prices), которая возвращает максимальную прибыль, которую вы можете получить от этой сделки. Если вы не можете получить какую-либо прибыль, верните 0.



function maxProfit(prices) {
    const profit = 0;
    if (prices.length < 2) {
        return profit;
    }
    
    let minPrice = prices[0];
    let maxProfit = profit;
    
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}

console.log(maxProfit([54, 45, 43, 3]));




var reverseString = function (str) {
    str.slice(1,2);
};

console.log(reverseString("Hello"));

function disemvowel(str) {
    return str.replace(/[qwrtypsdfghjklzxcvbnm]/gi, '');
  }
  console.log(disemvowel("Hello World")); // "Hll Wrld"

// //return the total number of smiling faces in the array
// function countSmileys(arr) {
//   if(arr.length === 0){
//     return 0;
//   }
//   let count = 0;
//   for(let i = 0; i < arr.length; i++){
//     console.log(arr[i][1])
//     if(arr[i].length <= 3){
//       if(
//         (arr[i][0] === ':' || arr[i][0] === ';')
//         && (arr[i][1] === '-' || arr[i][1] === '~' || arr[i][1] === ')' || arr[i][1] === 'D')
//         && (arr[i][2] === `)` || arr[i][2] === 'D' || arr[i][2] === undefined)
//       ){
//         count++;
//       }
//     }
//   }
//   return count;
// }

function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileys([':)',':(',':D',':O',':;']));


//Получить уникальное число из массива
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  console.log(arr.sort((a,b)=>a-b));
  return arr[0]==arr[1]?arr.pop():arr[0]
}

// function findUniq(arr) {
//   // do magic
//   let arr2 = [...new Set(arr)];
//   // console.log(arr2);
//   // let uniq = arr.forEach((element, i) => {
//   //   if (element[i] === element[i+1]) {
//   //     return element;
//   //   }
//   // });
//   let repeatItem = arr.map((a, b) => a === b);
//   console.log(repeatItem);
//   // return uniq;
//   // let count = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== repeatItem){
//       return arr[i];
//     }
//   }
// }

console.log(findUniq([0, 1, 0 ]));

// function name(params) {
//   if( n === )
// }
function isPrime(n) {
  // Проверяет, является ли число n простым
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
  }
  return true;
}

function getSimpleNumbers(minNumber, maxNumber){
  let arrayNumbers = [];
  for(let i = minNumber ; i <= maxNumber; i++){
    arrayNumbers.push(minNumber++);
  }
  return arrayNumbers.filter(isPrime);
}

console.log(getSimpleNumbers(2, 19));

let matrix = [ [1, 2, 3, 4, 5], [1, 2, 3, 4, 5] ];

//Таблица умножения
function getMultiTable(n) {
  for(let i = 1; i <= n; i++) {
    let row = '';
    for(let j = 1; j <= n; j++) {
      row += `${i * j}\t`;
    }
    console.log(row);
  }
}
console.log(getMultiTable(5));

// Задание №1:Разработайте функцию, которая принимает целое число в качестве аргумента и возвращает строку, содержащую это число и слово "компьютер" в нужном склонении по падежам в зависимости от числа. Например, при вводе числа 25 функция должна возвращать "25 компьютеров", для числа 41 — "41 компьютер", а для числа 1048 — "1048 компьютеров".

function byCase(number) {
    let sliceNumber = number % 100;
    if (sliceNumber > 10 && sliceNumber < 20) {
        return `${number} компьютеров`;
    }else{
        sliceNumber %= 10;
        switch (sliceNumber) {
            case 1:
                return `${number} компьютер`;
            case 2:
            case 3:
            case 4:
                return `${number} компьютера`;
            default:
                return `${number} компьютеров`;
        }
    }
}

console.log(byCase(31)); 


// Создайте функцию longer, которая принимает строку и сортирует слова в ней на основе их длины в порядке возрастания.
//  Если есть два слова одинаковой длины, отсортируйте их в алфавитном порядке. 
//  Посмотрите на примеры ниже для более подробной информации.
//Входные данные будут содержать только латинские символы и пробелы. 
// Строчные символы должны быть отсортированы после заглавных если их длина одинакова
function longer(s) {
  // happy coding!
  return s.split(" ")
    .sort(function(a, b) {
          if(a.length === b.length && /^[A-Z]+$/.test(a[0])) return -1; 
          if(a.length === b.length && /^[A-Z]+$/.test(b[0])) return 1; 
          if(a.length === b.length && /^[A-Z]+$/.test(a[0]) && /^[A-Z]+$/.test(b[0])) return a.localeCompare(b); 
          if(a.length === b.length) return a.localeCompare(b);// сравнение по алфавиту - если а выше -1 и наборот и так каждый символ строки
          return a.length - b.length;
        })
    .join(" ");
}

console.log(longer("Another Green World"));

//Бинарный поиск
function searchBinar(n){
  let arr = [];
  for(let i = 1; i <= 100; i++){
    arr.push(i)
  }
  let left = 0;
  let right = arr.length - 1;
  let result;
  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    console.log(`Компьютер 2: Пробую число ${arr[mid]}`);
    if(arr[mid] === n){
      result = arr[mid];
      console.log(`Компьютер 2: Угадал!`);
      break;
    }else if(arr[mid] < n){
      left = mid + 1;
      console.log(`Компьютер 2: Больше`);
    } else {
      right = mid - 1;
      console.log(`Компьютер 2: Меньше`);
    }
  }  
  return result;
}

console.log(searchBinar(43));