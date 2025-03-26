function add(num:number):number{

    return num +2;
}
let val:number=add(5)
console.log(val);

function getUpper(name:string):string{
    return name.toUpperCase();
}
let mdName:string=getUpper("snobbar");
console.log(mdName);

function signup(name:string,email:string,ispaid:boolean=true){
   
}
signup("snobbar","snobbar@gmail.com");


let login=(name:string,email:string,ispaid:boolean):string=>{
   return name;
}
login("snobbar","snobbar@gmail.com",true);

const nums:number[]=[1,2,3,4,5];
nums.map((num)=>`number ${num}`)


console.log(nums)
console.log(nums.filter((n)=>n%2==0));

console.log(nums.reduce((res,curr)=>curr+res,0))
export{}