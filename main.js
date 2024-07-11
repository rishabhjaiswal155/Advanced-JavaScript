
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
function sum(a,b,c){
    return a+b+c
}

//console.log(sum(2,3,5))

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

const curriedSum=curry(sum)
console.log(curriedSum(2)(3)(5))
//OR
const add2=curriedSum(2)
const add3=add2(3)
const add5=add3(5)
console.log(add5)


