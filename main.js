
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

function outer(){
    let counter=0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}
const fn=outer()
fn()
fn()
fn()

