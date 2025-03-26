type User={
    name:string,
    email:string,
    isActive:boolean
}

function createUser(user:User):User{
    
return {name:"Snobbar",email:'s2styui2',isActive:true}
}
console.log(createUser({name:"Snobbar",email:'s2styui2',isActive:true}));

//READONLY 
type newUser={
    readonly id: string  //can b read only ,not modified
    myname:string
    email:string
    isActive:boolean
    credCards?:number    //this is optional
}
const myUser={
    id:"1234",
    myname:"snobbar",
    email:"s@gmail.com",
    isActive:true,
}
myUser.email="snobbar@gmail.com"
//myUser.id="2344"
console.log(myUser.id)

//MIX AND MATCH OF TYPES
type cardNumber={
    cardNumber:number
}
type cardDate={
    cardDate:string
}

type cardDetails=cardNumber & cardDate & {cvv:number} 

const superHeroes:string[]=[]
const heroPower:Array<number>=[]

superHeroes.push("spiderman","krish")
heroPower.push(2)


console.log(superHeroes)

export{}