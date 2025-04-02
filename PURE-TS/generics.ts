//generics are used to make components reusable..this allows users to consume the components and use their own types
function identityNum<Type>(val:Type):Type{
    return val
}
console.log(identityNum(6))

function identitystr<T>(val:T):T{
    return val
}
console.log(identitystr("snobar"))

interface Bootle{
    brand:string
    type:number
}

//in case of arrays
function getsearchProducts<T,>(products:T[]):T
{
    //here goes some complex operations
    const myIndex=3
    return products[myIndex]
}
//arrow function
let getMoreSearchProducts=<T>(products:T[]):T=>{
    //do some database opeations
    const myIndex=4

    return products[myIndex]
}

function anotherFunction<T,U>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}
anotherFunction(3,"4")

//extends
function anotherFunction2<T,U extends number>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}
// anotherFunction2(3,"4")
anotherFunction2(3,4.3)