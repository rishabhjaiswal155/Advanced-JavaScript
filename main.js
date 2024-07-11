
//Nested Function Scope

// let a=10
// function outer(){
//     let b=20
//     function inner(){
//         let c=30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()

//Closures (It Bundle the function def and scope and store the prev state)

// function outer(){
//     let counter=0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn=outer()
// fn()
// fn()
// fn()


//Function Currying: function with multiple argument is transformed in function with single arg
//sum(a,b,c)====>>sum(a)(b)(c)===> this is currying
// function sum(a,b,c){
//     return a+b+c
// }

// //console.log(sum(2,3,5))

// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c)
//             }
//         }
//     }
// }

// const curriedSum=curry(sum)
// console.log(curriedSum(2)(3)(5))
// //OR
// const add2=curriedSum(2)
// const add3=add2(3)
// const add5=add3(5)
// console.log(add5)


//this Keyword

//Implicit Binding

// const person={
//     name:'Rishabh Jaiswal',
//     sayName:function(){
//         console.log(`This is ${this.name}`)
//     }
// }
// person.sayName()

// //Explicit Binding

// globalThis.name='Amol'//for Default Binding

// function sayName(name){
//     console.log(`This is ${this.name}`)
// }

// sayName.call(person)

// //New Binding

// function Person(name){
//     this.name=name
// }

// const p1=new Person('Lucky')
// const p2=new Person('Surabhi')
// console.log(p1.name,p2.name)

// //Default Binding
// sayName()


//concept of Prototype and Prototypal inheritance

// function Person(fName,lName){
//     this.firstName=fName
//     this.lastName=lName
// }

// // const person1=new Person('Rishabh','Jaiswal')
// // const person2=new Person('Lucky','Jaiswal')

// Person.prototype.getFullName=function(){
//     return this.firstName +' '+ this.lastName
// }

// // console.log(person1.getFullName())
// // console.log(person2.getFullName())

// function SuperHero(fName,lName){
//     Person.call(this,fName,lName)
//     this.isSuperHero=true
// }

// SuperHero.prototype.fightCrime=function(){
//     console.log('Fighting Crime')
// }
// SuperHero.prototype=Object.create(Person.prototype)
// SuperHero.prototype.constructor=SuperHero//cleanUp

// const batman=new SuperHero('Rishabh','Jaiswal')

// console.log(batman.getFullName())

//Class keyword in JavaScript

// class Person{
//     constructor(fName,lName){
//         this.firstName=fName
//         this.lastName=lName
//     }
//      sayName(){
//           return this.firstName+' '+this.lastName        
//     }
// }

// const classP1=new Person('Rishabh','Jaiswal')
// console.log(classP1.sayName())

// class SuperHero extends Person{
//     constructor(fName,lName){
//         super(fName,lName)
//         this.isSuperHero=true
//     }
//     fightCrime(){
//         console.log('Fighting Crime')
//     }
// }

// const batman=new SuperHero('Lucky','Jaiswal')
// console.log(batman.sayName())

//Iterables and Itertaors

// const obj={
//     [Symbol.iterator]:function(){
//         let step=0
//         const iterator={
//             next:function(){
//                 step++
//                 if(step===1){
//                     return {value:'Hello',done:false}
//                 }
//                 else if(step===2){
//                     return {value:'World',done:false}
//                 }
//                 return {value:undefined,done:true}
//             }

//         }
//         return iterator
//     }
// }

// for(const word of obj){
//     console.log(word)
// }

//Generators

// function normalFunction(){
//     console.log('Hello')
//     console.log('World')
// }

// normalFunction()
// normalFunction()

function *generatorFunction(){
    yield 'Hello'
    yield 'World'
}

const generatorobj=generatorFunction()
for(const word of generatorobj){
    console.log(word)
}