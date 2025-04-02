function detectType(val:number | string){

    if(typeof val === "string"){
        return val .toLowerCase()
    }
    return val + 3
}

function provideId(id:string | null){
    if(!id){
        console.log("Please provide id")
        return
    }
    id.toLowerCase()
}

function printAll(strs: string |string[] )
{
    if(typeof strs === "object"){
        for(const s of strs){
            console.log(s)
        }
    }else if(typeof strs ==="string"){
        console.log(strs)
    }
}
let arr = ['s', 'n', 'o', 'w'];
printAll(arr);
let str="snobbar"
printAll(str);

//IN OPERATOR
interface User{
    name:string
    email:string
}

interface Admin{
    name:String
    email:string
    isAdmin:boolean
}
function isAdminAccount(account:User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    } 
}

//instanceof narrowing and type predicates
function logValue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }
    else{
        console.log(x.toLowerCase());
    }
}

type Fish={swim:()=>void}
type Bird ={fly:()=> void}
function isFish(pet:Fish | Bird):pet is Fish{
    return (pet as Fish).swim !==undefined
}
function getFood(pet:Fish |Bird){
    if(isFish(pet)){
        pet 
        return "fish food"
    }
    else{
        pet
        return "bird fish"
    }
}

//discrimination Union and exhaustiveness checking with never
interface Circle{
    kind:"circle"
    radius:number
}
interface square{
    kind:"square"
    side:number
}
interface rectiangle{
    kind:"rectiangle"
    length:number
    width:number
}
type shape=Circle |square
function getShape(shape:shape){
    if(shape.kind==="circle"){
        return Math.PI *(shape.radius)**2
    }
    return shape.side *shape.side 
}