//union is a combination of differenttypes of data that can be included in array or var
let score:number | string  =33        //can be either number or string


type AUser={
    name:string;
    id:number

}
type Admin={
    username:string ;
    id:number
}

let  snobbar:AUser | Admin ={name:"snobbar",id:334}

snobbar={username:"sj",id:333}

function getDbId(id:number | string){
    if(typeof id=== "string"){
        id.toLowerCase()
    }
}

getDbId(3)
getDbId("45")

//array
const data:number[]=[1,2,3]
const data2:string[]=["1","2","3"]
const data3:(string | number | boolean)[]=["1",4,true]

let pi:3.14=3.14  //values very strict

//use case
let seatallotment:"aisle" | "middle " | "window"
seatallotment="aisle"
//seatallotment="crew"   here it gives an error because it can strictly contain three values (aisle,middle and window)

export{}