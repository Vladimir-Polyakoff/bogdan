// task1 
// const myCountry = 'Rus'

// console.log(myCountry);

// task 2
// let isStudent

// isStudent = true

// console.log(isStudent)

// isStudent = false

// console.log(isStudent)

//task3 

// const a = 10
// const b = 5

// const res = a + b

// console.log(res);

// task4

// const name = 'Vol'
// const surname = 'Polikov'
// const prof = 'muz'

// const user = `Меня зовут ${name} ${surname} и я ${prof}`

// console.log(user);

// task 5

// Comment
/*
co
me
nt
*/

/**
 * multi
 * 
 * comment
 * 
 */

// task6

// const str = 'asd'
// const num = 10
// const bool = true
// const myNull = null
// const myUndefined  = undefined
// const myobj = {}
// const arr = []

// console.log(typeof arr);


// task 7 
// function myName () {
//   console.log('Vol');
// }
// myName()

// task8
// const myName = function(name) {
  // console.log(`Hello ${name}`);
  // return `hello ${name}`
// }
// myName('Vol')
// console.log(myName('vol'));


// task 9 

// const HelloWorld = () => {
//   return "Hello world"
// }
// console.log(HelloWorld());

// const HelloWorld = () => "Hello world"
// console.log(HelloWorld());


// task 10

// function numDifference (num1, num2) {
//   return num1 - num2
  /**
   * лписание и тд
   */
// }
// console.log(numDifference(10,5))

// task 11
// setTimeout(() => console.log('Hello world'), 5000)

// task 12

// const user = {
//   name: 'Vol',
//   surname: 'Polikov',
//   favNum: 7
// }
// console.log(`My name is ${user.name} ${user.surname} and my favorite number is ${user.favNum}`);

// task13

// const str = 'aowdhauwdyga'
// console.log(str.length);

// task14

// const str = 'asdad'

// console.log(str instanceof String);
// // Имеет два операнда!
// console.log(typeof str)

// const strUpperCase = str.toUpperCase()
// console.log(strUpperCase)

// task 15

// const str = 'Good Morning'

// const newStr = str.replace('Morning', 'Evening')

// console.log(newStr);

// const date = '20.02.2012'
// const newDate = date.replace('.20', '.')
// console.log(newDate)

// task 16

// const arr = [true, 1, null]
// console.log(arr[0]);
// console.log(arr.length)

// task17
// const arr = [true, 1, null]
// console.log(arr);
// arr[1] = false
// console.log(arr)

// task 18
// const arr = [true, 1, null]

// arr.forEach((el) => console.log(el))


// task19
// const arr = [true, 1, null]

// arr.push('axv', undefined)
// console.log(arr.length);

// task20 ????
// const date = new Date().getTime()

// console.log(date);

// task 21

// const myVariable1 = '11'
// const myVariable2 = 14
// console.log(+myVariable1 <= +myVariable2);
// console.log(Number(myVariable1) <= Number(myVariable2));
// console.log(parseInt(myVariable1) <= parseInt(myVariable2));


// task 22

// const myNumber1 = 12
// const myNumber2 = 5
// console.log(myNumber1 % myNumber2);

// task23

// || - или
// && = и


// task 24

// let a = 10

// a += 1
// console.log(a);
// a *= 2
// console.log(a);
// a -= 2
// console.log(a);
// a /= 5
// console.log(a);

// task 25
// ?????

// task 26
// function fn() {
//   console.log('Привет из функции fn')

//   return function (a) {
//     console.log(a)
//   }
// }

// fn()(true)

// Сначала первый лог отработае а потом вызов второй вложен функци

// task 27
// const arr = [1, 2] // <-- Объявление переменной используя const

// arr.push(3)

// console.log(arr)
// [1, 2, 3]

// arr = [1, 2, 3, 4]
// const  сменить на let


// task 30
// setTimeout(function myFn() {
//   console.log('Привет из функции myFn')
// }, 2000)

// не нужно вызывать myFn

// task 31
// let i = 1

// const messageIntervalId = setInterval(() => {
//   console.log('Сообщение номер ' + i);
//   ++i
// }, 2000)
// setTimeout(() => clearInterval(messageIntervalId), 11000)


//task32

// const myArray = [true, `asd`, 1]

// myArray.unshift(100, 'Hello')

// console.log(myArray);


//task 33

// const myArray = [1, 2]

// myArray[10] = 'abc'

// console.log(myArray) // создаст 8 пустых элементов с 2 по 10
// console.log(myArray.length)


// task 34

// const cars = [
//   {
//     carBrand: 'Mers',
//     price: 100,
//     isAvailableForSale: true,
//   },
//   {
//     carBrand: 'Audi',
//     price: 200,
//     isAvailableForSale: false,
//   },
//   {
//     carBrand: 'Jiga',
//     price: 1,
//     isAvailableForSale: true,
//   },
// ]

// const newAuto = {
//     carBrand: 'Volga',
//     price: 5,
//     isAvailableForSale: true,
// }

// cars.push(newAuto)

// console.log(cars);

// task 35

// const myObject = {
//   key1: true,
//   key5: 10,
//   key3: 'abc',
//   key4: null,
//   key10: NaN,
// }


// const objKeys = Object.keys(myObject) 
// // теперь это массив ключей(собственных)
// objKeys.forEach((key) => (key === 'key1' || key === 'key3') && console.log(myObject[key])) 
// // значение этих ключе 


// task 36

// const myObject = {
//   name: 'Mike',
//   age: 30,
//   city: 'London',
// }

// Object.prototype.country = 'England'

// for (let key in myObject) {
//   myObject.hasOwnProperty(key) && console.log(key);
// }

// task 38

// function isArrayEmpty(inputArray) {
//   if (inputArray.length > 0) {
//     return 'Массив не пустой'
//   }
//     return 'Массив пустой'
// }
// console.log(isArrayEmpty([1]));

// function isArrayEmpty(inputArray) {
//   return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'
// }
// console.log(isArrayEmpty([]));

// const isArrayEmpty1 = (inputArray) => inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'
// console.log(isArrayEmpty1([1]));


// TASK 39

// const myCities = ['London', 'New York', 'Singapore']

// const cityInfo = (city, index) => console.log(`${city} is at the index ${index} in the myCities array`)

// myCities.forEach((city, index) => cityInfo(city, index))


// taks 40

// const postsJSON = [
//   '{"postId":1355,"commentsQuantity":5}',
//   '{"postId":5131,"commentsQuantity":13}',
//   '{"postId":6134,"commentsQuantity":2}',
//   '{"postId":2351,"commentsQuantity":8}',
// ]

// const postsJs = postsJSON.map(JSON.parse)

// console.log(postsJs)

// console.log(postsJs[1].postId)

// console.log(postsJs[postsJs.length-1].commentsQuantity)

// const postsStrFy = postsJs.map(JSON.stringify)
// console.log(postsStrFy)

// task 41

// const posts = [
//   { postId: 1355, commentsQuantity: 5 },
//   { postId: 5131, commentsQuantity: 13 },
//   { postId: 6134, commentsQuantity: 2 },
// ]

// const findPostById = (postId, posts) => {
//   return posts.find((post) => post.postId === postId)
// }

// console.log(findPostById(1355, posts))
// console.log(findPostById(2355, posts))

// task 42

// const arraySortInfo = inputArray => {
//   if (inputArray.find(element => typeof element !== 'number')) return "Некоторые элементы не являются числами"

//   if (inputArray.every((element, index) => 
//     index > 0 ? element >= inputArray[index -1] : true)) {
//       return 'Массив отсортирован по возрастанию'
//   }

//   if (inputArray.every((element, index) => 
//     index > 0 ? element <= inputArray[index -1] : true)) {
//       return 'Массив отсортирован по убыванию'
//   }

//   return 'Массив не отсортирован'
// }


// const a = [5, 'abc', 10, 1]
// const b = [4, 10, 14, 25, 25, 50]
// const c = [150, 132, 80, 40]
// const d = [15, 26, 10, 23, 85]

// console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
// console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
// console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
// console.log(arraySortInfo(d)) // Массив не отсортирован


// task 43

// const areArraysEqual = (firstArray, secondArray) => {
//   if (firstArray.length === secondArray.length &&
//     firstArray.every((element, index) => element === secondArray[index])) {
//     return true
//   }
//   return false
// }

// const a = [1, 2, 3]
// const b = [1, 2, 3]
// const c = [2, 1, 3]
// const d = [1, 2, 3, 4]

// console.log(areArraysEqual(a, b)) // true
// console.log(areArraysEqual(a, c)) // false
// console.log(areArraysEqual(a, d)) // false

// task 44

// const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']


// const isElementInArray = (inputArray, searchElement) => {
//   if (inputArray.includes(searchElement)) {
//     return true
//   }
//   return false
// }

// console.log(isElementInArray(transports, 'Bus')) // true
// console.log(isElementInArray(transports, 'Phone')) // false
// console.log(isElementInArray(transports, 'Airplane')) // true


// task 45

// const isElementInArray = (searchElement, inputArray) => {
//   if (typeof searchElement !== 'object') {
//     return inputArray.includes(searchElement)
//   }

//   return inputArray.map((element) => JSON.stringify(element)).includes(JSON.stringify(searchElement))
// }


// const tags = [
//   ['javascript', 'es6'],
//   ['css', 'flexbox'],
//   ['html', 'web-browser'],
// ]

// const fruits = [
//   { title: 'Orange', quantity: 10 },
//   { title: 'Banana', quantity: 5 },
//   { title: 'Apple', quantity: 25 },
// ]

// const primitiveTypesArray = [25, 'x', true, undefined, null]

// console.log(isElementInArray(['css', 'flexbox'], tags)) // true

// console.log(isElementInArray(['flexbox', 'css'], tags)) // false

// console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true

// console.log(isElementInArray({ title: 'Banana' }, fruits)) // false

// console.log(isElementInArray(25, primitiveTypesArray)) // true



// task 46

// const pushIfUnique = (inputArray, newElement) => {
//   if (inputArray.includes(newElement)) {
//     return console.log(`${newElement} уже аходится в массиве`)
//   }
//   return inputArray.push(newElement)
// }

// const myNumbers = [123, 50, 27]

// pushIfUnique(myNumbers, 50) // "50 уже в массиве"
// console.log(myNumbers) // [123, 50, 27]

// pushIfUnique(myNumbers, 80)
// console.log(myNumbers) // [123, 50, 27, 80]

// pushIfUnique(myNumbers, 80) // "80 уже в массиве"
// console.log(myNumbers) // [123, 50, 27, 80]

// pushIfUnique(myNumbers, 77)
// console.log(myNumbers) // [123, 50, 27, 80, 77]

// task 47

// const popularPostsIds = (posts, minimalComentsQty) => 
//   posts.reduce((postsIds, post) => 
//     post.comments >= minimalComentsQty 
//     ? postsIds.concat([post.postId]) 
//     : postsIds, [])



// const inputPosts = [
//   {
//     title: 'Как быстро выучить JavaScript?',
//     postId: 3421,
//     comments: 25,
//   },
//   {
//     title: 'Где используется JavaScript?',
//     postId: 5216,
//     comments: 3,
//   },
//   {
//     title: 'Какая разница между React и Angular?',
//     postId: 8135,
//     comments: 12,
//   },
// ]

// console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

// console.log(popularPostsIds(inputPosts, 15)) // [3421]

// console.log(popularPostsIds(inputPosts, 50)) // []


// task 48

// const quantitiesByCategories = products => {
//   return products.reduce((qtysByCategories, product) => { //копилка (прошлое значение) и новое значение
//     const {category, quantity} = product

//     qtysByCategories[category] = (qtysByCategories[category] || 0) + quantity

//     return qtysByCategories
//   }, {}) // обьект будетт начальным состоянием копилки
// }

// const inputProducts = [
//   {
//     title: 'Phone case',
//     price: 23,
//     quantity: 2,
//     category: 'Accessories',
//   },
//   {
//     title: 'Android phone',
//     price: 150,
//     quantity: 1,
//     category: 'Phones',
//   },
//   {
//     title: 'Headphones',
//     price: 78,
//     quantity: 1,
//     category: 'Accessories',
//   },
//   {
//     title: 'Sport Watch',
//     price: 55,
//     quantity: 2,
//     category: 'Watches',
//   },
// ]

// console.log(quantitiesByCategories(inputProducts))


// task 49

// const sortProductsByPrice = products => {
//   return [...products].sort((a, b) => a.price - b.price)
// } 

// const inputProducts = [
// {
//   title: 'Phone case',
//   price: 23,
//   quantity: 2,
//   category: 'Accessories',
// },
// {
//   title: 'Android phone',
//   price: 150,
//   quantity: 1,
//   category: 'Phones',
// },
// {
//   title: 'Headphones',
//   price: 78,
//   quantity: 1,
//   category: 'Accessories',
// },
// {
//   title: 'Sport Watch',
//   price: 55,
//   quantity: 2,
//   category: 'Watches',
// },
// ]

// const sortedProducts = sortProductsByPrice(inputProducts)

// console.log(sortedProducts) // Массив отсортированных товаров

// console.log(inputProducts) // Оригинальный массив не должен измениться


// task 50

// const templateLiteral = num => {
//   return `число ${num}.
//   это число ${num < 10 ? 'меньше' : 'больше или ровно'} 10.
//   Квадратный корень этого числв  - ${Math.sqrt(num)}`
// }
// const myNumber = 9
// console.log(templateLiteral(myNumber))

// const myAnotherNumber = 25
// console.log(templateLiteral(myAnotherNumber))


// task 51

// const meanScore = (...numbers) => {
//   if (numbers.some((num) => typeof num !== 'number')) {
//     console.warn('Все аргументы в вызове функции должны быть числами!')
//     return
//   }

//   return numbers
//     .reduce((mean, num) => mean + num / numbers.length, 0)
//     .toFixed(2)
  
// }

// const scores1 = [0, 1.5, 2.5, 3.7]
// const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2]
// const scores3 = [1.3, 2.5, 1.9]
// const scores4 = ['abc', 1.3, true, 2.5, 1.9]

// console.log(meanScore(...scores1))
// // 1.93

// console.log(meanScore(...scores1, ...scores2))
// // 2.8

// console.log(meanScore(...scores1, ...scores2, ...scores3))
// // 2.59

// console.log(meanScore(...scores4))


// task 52

// const weatherForecast = (city, weather) => {
//   return `Прогноз погоды для города ${city} : ${weather !== undefined ? weather : 'Отличная погода'}`
// }

// console.log(weatherForecast('Dubai', 'Солнечно'))
// // Прогноз погоды для города Dubai: Солнечно

// console.log(weatherForecast('London', 'Небольшой дождь'))
// // Прогноз погоды для города London: Небольшой дождь

// console.log(weatherForecast('Paris'))
// // Прогноз погоды для города Paris: Отличная погода!

// console.log(weatherForecast('Miami', ''))
// // Прогноз погоды для города Miami:

// console.log(weatherForecast('Las Vegas', undefined))
// // Прогноз погоды для города Las Vegas: Отличная погода!


// task 53

// const photosGallery = (title, dimensions, date) => {
//   return {
//     title,
//     date,
//     [dimensions]: true,
//     info() {
//       console.log(`Фото "${title}" имеет разрешение ${dimensions}`)
//     },
//     publishInfo() {
//       console.log(
//         `Фото "${title}" было опубликовано ${Math.floor(
//           (new Date().getTime() - date.getTime()) / 1000
//         )} секунды назад`
//       )
//     },
//   }
// }

// const myDogPhoto = photosGallery('My dog', '1920x1080', new Date())

// const testDimension1 = '1920x1080'
// const testDimension2 = '1080x720'

// myDogPhoto.info()
// /* Фото "My dog" имеет разрешение 1920x1080 */

// setTimeout(() => myDogPhoto.publishInfo(), 2000)
// /* Фото "My dog" было опубликовано 2 секунды назад */

// /* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
// к параметрам функции "photosGallery" (например "date")? */

// console.log(myDogPhoto[testDimension1]) // true
// console.log(myDogPhoto[testDimension2]) // undefined


// task 54

// const processQuantities = ([minQty,maxQty,defaultQty = 0]) => {
//   console.log(minQty) // 8
//   console.log(maxQty) // 29
//   console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
//   return defaultQty + maxQty - minQty
// }

// const inputQuantities1 = [8, 29, 10]
// console.log(processQuantities(inputQuantities1)) // 31

// const inputQuantities2 = [8, 29]
// console.log(processQuantities(inputQuantities2)) // 21

// task 55

// const minMax = (...nums) => {
//   return [Math.min(...nums), Math.max(...nums)]
// } 
// let min, max
// ;[min, max] = minMax(24,5,34,10)
// console.log(min,max)

// ;[min, max] = minMax(18, 23, 103, 70, 80, 25)
// console.log(min,max)

// task 56

const processPosts = (posts) => {
  return posts.map((post) => {
    const {
      postId,
      author: postAuthor,
      commentsQty: postCommentsQty
    } = post

    return {
      postId: postId + 1000,
      postAuthor,
      postCommentsQty
    }
  })
}
const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
]
console.log(processPosts(testPosts));