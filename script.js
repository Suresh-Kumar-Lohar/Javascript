'use strict'
// // // // // // const jonas = {
// // // // // //   fstnm: 'Jonas',
// // // // // //   lastnm: 'Lohar',
// // // // // // }

// // // // // // // console.log(jonas['lastnm']) // string used

// // // // // // const nameKey = 'nm'

// // // // // // console.log(jonas[`fst${nameKey}`])
// // // // // // console.log(jonas[`last${nameKey}`])

// // // // // // // const inserted = prompt('What do you want to know : fstnam, lastnm')
// // // // // // // console.log(jonas[inserted])

// // // // // // jonas['age'] = 25
// // // // // // console.log(jonas)

// // // // // const jonas = {
// // // // //   firstName: 'Suresh',
// // // // //   lastName: 'Lohar',
// // // // //   birthYear: 1991,
// // // // //   job: 'teacher',

// // // // //   // use column for function it is a method
// // // // //   //   calcAge: function (birthYear) {
// // // // //   //     return 2037 - birthYear
// // // // //   //   },

// // // // //   //   calcAge: function () {
// // // // //   //     // console.log(this)
// // // // //   //     return 2037 - this.birthYear
// // // // //   //   },

// // // // //   calcAge: function () {
// // // // //     this.age = 2037 - this.birthYear
// // // // //     return this.age
// // // // //   },
// // // // // }
// // // // // console.log(jonas.calcAge(1991))
// // // // // console.log(jonas.age)
// // // // // console.log(jonas.age)
// // // // // console.log(jonas.age)
// // // // // // console.log(jonas['calcAge'](1991))

// // // // // *** THIS *** //

// // // // 'use strict'

// // // // // console.log(this)

// // // // const calcAge = function (birthYear) {
// // // //   //   console.log(2037 - birthYear)
// // // //   //   console.log(this) // undefiened
// // // // }

// // // // calcAge(1991)

// // // // const calcAgeArrow = (birthYear) => {
// // // //   //   console.log(2037 - birthYear)
// // // //   //   console.log(this) // window parent scope (global window)
// // // // }

// // // // calcAgeArrow(1980)

// // // // const jonas = {
// // // //   year: 1991,
// // // //   calcAge: function () {
// // // //     console.log(this)
// // // //     console.log(2037 - this.year)
// // // //   },
// // // // }

// // // // jonas.calcAge()

// // // // const matilda = {
// // // //   year: 2017,
// // // // }

// // // // matilda.calcAge = jonas.calcAge // method borrowing

// // // // matilda.calcAge() // now this point to matilda

// // // // const f = jonas.calcAge //method borrowing
// // // // f()

// // // // var firstName = 'Matilda' // global

// // // const jonas = {
// // //   firstName: 'Jonas',
// // //   year: 1991,
// // //   calcAge: function () {
// // //     // console.log(this)
// // //     console.log(2037 - this.year)
// // //     // SOLUTION 1
// // //     //     const self = this // solution of this at line 102
// // //     //     const isMillenial = function () {
// // //     //       console.log(self)
// // //     //       console.log(self.year >= 1981 && self.year <= 1996)
// // //     //     }
// // //     //     isMillenial() // this undefined as regular function cal
// // //     //   },

// // //     // SOLUTION 2
// // //     const isMillenial = () => {
// // //       console.log(this)
// // //       console.log(this.year >= 1981 && this.year <= 1996)
// // //     }
// // //     isMillenial() // this key now use as parent so this -> jonas
// // //   },

// // //   greet: () => {
// // //     console.log(this)
// // //     console.log(`Hey ${this.firstName}`) // hey matilda due to this as global
// // //   }, // so never use arrow function as method, use only expression function
// // // }
// // // jonas.greet() // in arrow this keyword use global

// // // jonas.calcAge()

// // // // Argument keyword
// // // const addExprb = function (a, b) {
// // //   console.log(arguments) // give array of arguments
// // //   return a + b
// // // }
// // // addExprb(2, 5)
// // // addExprb(2, 5, 8, 12)

// // // var addExprbArrow = () => {
// // //   // give error
// // //   console.log(arguments) // not exist
// // //   return a + b
// // // }

// // // addExprbArrow(2, 5)

// // let a = 30
// // let o = a
// // a = 31
// // console.log(a)
// // console.log(o)

// // const me = {
// //   name: 'suresh',
// //   age: 20,
// // }
// // const friend = me
// // friend.age = 27

// // console.log('me: ', me) //27
// // console.log('friend: ', friend) //27m

// // *** HOW TO COPY A OBJECT *** // only create shallow copy
// // Not a deep clone internal array/obj still point at same memory
// const jessica = {
//   ftsnm: 'Jessica',
//   lstnm: 'willim',
//   family: ['alice', 'burbur'],
// }

// const jessicaCopy = Object.assign({}, jessica)
// jessicaCopy.lstnm = 'Davis' // now only change in copy only

// jessicaCopy.family.push('mery')
// jessicaCopy.family.push('john')
// console.log('before :', jessica)
// console.log('after :', jessicaCopy)

// // DESTRUCTING FROM ARRAY order matters
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },
// }

// // SWAPPING ELEMENTS
// let [main, , secondary] = restaurant.categories
// console.log(main, secondary)
// ;[main, secondary] = [secondary, main]
// console.log(main, secondary)

// const [starter, maincourse] = restaurant.order(2, 0)
// console.log(starter, ' -- ', maincourse)

// const nested = [2, 3, [5, 6]]
// // const [i, , j] = nested
// // console.log(i, j)
// const [i, , [j, k]] = nested
// console.log(i, j, k)

// DEFAULT VALUE
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r)

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery: function ({ starterIndex, time, address, mainIndex }) {
//     console.log(starterIndex, time, address, mainIndex)
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(ing1, ing2, ing3)
//   },
// }

// restaurant.orderDelivery({
//   time: '22:20',
//   address: 'sirohi',
//   mainIndex: '2',
//   starterIndex: 5,
// })

// // orders not matter
// const { name, openingHours } = restaurant
// console.log(name, openingHours)

// const { name: givenName } = restaurant
// console.log(givenName)

// // DEFAULT VALUES IN OBJECT
// const { menu = [], starterMenu = [] } = restaurant

// console.log(menu, starterMenu)

// // mutating variables
// let a = 11
// let b = 14
// const obj = { a: 1, b: 2, c: 3 }
// ;({ a, b } = obj)
// console.log(a, b)

// //NESTED OBJECTS
// const {
//   fri: { open: o, close: c },
// } = openingHours

// console.log(o, c)

// Copy array
// const mainMenuarray = [...restaurant.mainMenu]

// const menu = [...restaurant.starterMenu, 'yes', ...mainMenuarray]
// console.log(menu)

// // Iterablesa are arrays, strings, maps, sets BUT NOT OBJECT
// const str = 'jonas'
// console.log(...str) // give individual element of string

// const ingred = [
//   prompt('Lets make pasta'),
//   prompt('Lets make pasta 2'),
//   prompt('Lets make pasta 3'),
// ]
// // console.log(ingred)

// restaurant.orderPasta(...ingred)

// Objects experiment
// const newRest = { foundedIn: 1998, ...restaurant, founder: 'suresh' }
// console.log(newRest)

// Copy now both are different
// const newRest = { ...restaurant }
// newRest.name = 'Apna Dhaba'
// console.log(newRest)
// console.log(restaurant)

// SPREAD, because on right side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others)

// const [pizza, , risotto, ...othersFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ] // must be last and only one

// console.log(pizza, risotto, othersFood)

// const add = function (...numbers) {
//   // packing in arrray
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   console.log(sum)
// }

// add(8, 5, 4, 7, 8, 6, 1)
// const aa = [5, 7, 4, 5]
// add(...aa) //spreading here

// //NULLISH if value then give value if not(null/undefined) then default set
// const s = 2
// const d = s ?? 10
// console.log(d)

// const rest1 = {
//   name: 'capri',
//   //   age: 20,
//   age: 0,
// }
// const rest2 = {
//   name: 'csdvs',
// }
//assign when not present and zero
// rest1.age ||= 10
// rest2.age ||= 10
// rest2.age &&= 10   conditional
// rest1.age ??= 10
// rest2.age ??= 10

// console.log(rest1)
// console.log(rest2)

// FOR-OF-LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// for (const item of menu) console.log(item)

// for (const item of menu.entries()) {
//   console.log(item)
// }

// console.log([...menu.entries()])

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// }

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //ES6 object litral
//   openingHours,

//   //   orderDelivery: function ({ starterIndex, time, address, mainIndex }) {
//   //     console.log(starterIndex, time, address, mainIndex)
//   //   },

//   //New syntax
//   orderDelivery({ starterIndex, time, address, mainIndex }) {
//     console.log(starterIndex, time, address, mainIndex)
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(ing1, ing2, ing3)
//   },
// }

// console.log(restaurant)

// OPTIONAL CHAINING  if not exist return undefined
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours.mon?.open || 'closed')
// console.log(restaurant.openingHours.fri?.open)

// // also work on methods
// console.log(restaurant.order?.(0, 1) ?? 'Method not exist')

// // Looping Objects
// const properties = Object.keys(restaurant.openingHours)
// console.log(properties)
// const properties1 = Object.values(restaurant.openingHours)
// console.log(properties1)
// const properties2 = Object.entries(restaurant.openingHours)
// console.log(properties2)

// for (const [key, { open, close }] of properties2) {
//   console.log(key, '---', open, '----', close)
// }

//******************************************** */
//***  SET (Unique values)  ***/ order not matter
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risato',
//   'Pasta',
//   'Pizza',
// ])
// console.log(orderSet)

// console.log(orderSet.size)
// console.log(orderSet.has('Pizza'))
// console.log(orderSet.has('Dosa'))

// orderSet.add('Garlic Bread')
// orderSet.add('Garlic Bread')
// orderSet.delete('Risato')
// console.log(orderSet)
// // orderSet.clear()
// console.log(orderSet)
// // access element : no indexes and also not able to get out data from set

// for (const order of orderSet) {
//   console.log(order)
// }

// // Example
// const staff = ['waiter', 'chef', 'waiter', 'head', 'manager', 'chef']
// const staffUnique = new Set(staff)
// console.log(staffUnique)
// // convert set to array
// const staffUniqueArray = [...new Set(staff)]
// console.log(staffUniqueArray)

// //******************************************** */
// //***             MAPS    any type of keys
// const rest = new Map()
// rest.set('name', 'Dhaba')
// rest.set(1, 'Firenze, Itely')
// console.log(rest.set(2, 'Firozabad, India'))

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 25)
//   .set(true, 'We are open')
//   .set(false, 'We are closed')

// console.log(rest.get('name'))
// console.log(rest.get(true))
// console.log(rest)

// const time = 28
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

// console.log(rest.has('categories'))
// rest.delete(2)

// const arry = [1, 2]
// // rest.set([1, 2], 'Test')
// rest.set(arry, 'Test')
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest)
// console.log(rest.size)
// // rest.clear()
// // console.log(rest.size)
// // console.log(rest.get([]))
// console.log(rest.get(arry))

/// best method to make MAP

// const question = new Map([
//   ['question', 'What is best programming lang?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ])

// console.log(question)
// //Convert object to map
// // console.log(Object.entries(restaurant.openingHours))
// const hoursMap = new Map(Object.entries(restaurant.openingHours))
// console.log(hoursMap)

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(key, '--', value)
// }

// console.log(question.get(true))
// //also map to array
// console.log([...question])

/*   CALL AND APPLY  */
// const luftthansa = {
//   airline: 'Luftana',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function(){}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked on ${this.airline} and flight
//       ${this.iataCode} ${flightNum}`
//     )
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name })
//   },
// }

// luftthansa.book(239, 'Suresh')
// luftthansa.book(635, 'Lohar')
// console.log(luftthansa)

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// }

// const book = luftthansa.book

// book(23, 'Sarah willim') does not work

// CALL METHOD here this key set to eurowings
// book.call(eurowings, 23, 'Sarah William')
// console.log(eurowings)

// book.call(luftthansa, 555, 'Mery cuppor')
// console.log(luftthansa)

// // APPLY METHOD it take array of argument
// const flightData = [999, 'Yash']
// book.apply(eurowings, flightData)
// console.log(eurowings)

// // also by call
// book.call(luftthansa, ...flightData)
// console.log(luftthansa)

// BIND METHOD manually set this keyword it returns a new func where this bind not call immidiate
// also this means bind used to create special function for special param
// const bookEW = book.bind(eurowings)
// bookEW(74, 'Pushakar')
// console.log(eurowings)

// // also can preset args
// const bookEW2 = book.bind(eurowings, 888)
// bookEW2('Pushakar')
// console.log(eurowings)

// // BIND with event listener
// luftthansa.planes = 300
// luftthansa.buyPlane = function () {
//   console.log(this)
//   this.planes++
//   console.log(this.planes)
// }
// window.addEventListener('click', luftthansa.buyPlane.bind(luftthansa))

// // Partial application of bind

// const addTax = (rate, value) => value + value * rate

// console.log(addTax(0.1, 200))
// // here null is just this keyword, it is like creating a new function , order of args is important
// const addVAT = addTax.bind(null, 0.23)
// // const addVAT = (rate, value) => value + value * rate

// console.log(addVAT(100))

// /**    CLOSURES   */
// const secbooking = function(){
//     let pCount = 0;
// }

// ////////////////////////////////
// //               OOPS

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName
//   this.birthYear = birthYear

//   //   // never do this in constructor function  but use prototypes
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear)
//   //   }
// }

// const jonas = new Person('Jonas', 1991)
// console.log(jonas)

// // 1. New {} created
// // 2. function is called, this = {}
// // 3.{} linked to prototype
// // 4.function automatically return {}

// const matilda = new Person('Matilda', 1998)
// console.log(matilda)

// console.log(jonas instanceof Person)

// // Prototypes
// console.log(Person.prototype)

// // Now only one copy is exist
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear)
// }

// jonas.calcAge()
// matilda.calcAge()

// console.log(jonas.__proto__ === Person.prototype)

// Person.prototype.species = 'Homo Sapiens'
// console.log(jonas.species, matilda.species)

// console.log(jonas.hasOwnProperty('firstName'))
// console.log(jonas.hasOwnProperty('species'))

// console.log(jonas.__proto__)

// // Object prototype
// console.log(jonas.__proto__.__proto__)

// const arr = [3, 6, 5, 4, 3, 6, 1, 1] // same as new Array === []
// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype)

// console.log(arr.__proto__.__proto__)

// Array.prototype.unique = function () {
//   return [...new Set(this)]
// }

// console.log(arr.unique())

// const Car = function (make, speed) {
//   this.make = make
//   this.speed = speed
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10
//   console.log(`${this.make} is going at ${this.speed}`)
// }

// Car.prototype.brake = function () {
//   this.speed -= 5
//   console.log(`${this.make} is going at ${this.speed}`)
// }

// const bmw = new Car('BMW', 120)
// const mercedes = new Car('Mercedes', 95)

// bmw.accelerate()
// bmw.accelerate()
// bmw.brake()
// bmw.accelerate()

//
//////////////////////////
////            CLASSES ES6
// class expression
// const PersonCl = class {}

// //class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName
//     this.birthYear = birthYear
//   }
// instance method
//   // Methods will add to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear)
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`)
//   }

//   get age() {
//     return 2037 - this.birthYear
//   }

//   // set property that already exist
//   set fullName(name) {
//     console.log(name)
//     if (name.includes(' ')) this._fullName = name
//     else alert('Name is not full name')
//   }

//   get fullName() {
//     return this._fullName
//   }
// }

// const jessica = new PersonCl('Jessica David', 1996)
// console.log(jessica)
// jessica.calcAge()
// console.log(jessica.age)

// console.log(jessica.__proto__ === PersonCl.prototype)

// // also can create
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`)
// }
// jessica.greet()

// 1. Classes are not hoisted so can use after declaration
// 2. Classes are first-class-function
// 3. Classes are executed in strict mode

// SETTERS GETTERS used as just property
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop()
//   },
//   set latest(mov) {
//     this.movements.push(mov)
//   },
// }

// console.log(account.latest)
// console.log(account.movements)

// account.latest = 50
// console.log(account.movements)

// these are useful in data validation

//
////    OBJECT.CREATE

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear)
  },
}

const steven = Object.create(PersonProto)
steven.name = 'Steven'
steven.birthYear = 2002
steven.calcAge()
console.log(steven)
