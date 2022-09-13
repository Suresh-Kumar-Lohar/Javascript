// // 'use strict'
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
