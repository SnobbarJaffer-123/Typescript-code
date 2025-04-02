/*class User{
   //access spacifiersmmv';
    public email:string;  //by deafult ,its public
    name:string;
    readonly city:string="kashmir";
    private readonly location="sopore" //neither i can access it nor can change it
    private password="3456"  //in js,its like #password

    constructor(email:string,name:string){
    this.name=name
    this.email=email

   }    
}*/

//the same thing can b done using below,directly set it public in parametes
class User{

    protected courseCount=1
   
    readonly city:string="kashmir";
    private readonly location="sopore" //neither i can access it nor can change it
    private password="3456"  //in js,its like #password

    constructor(public email:string,public name:string){
    
   }    
   get getAppleEmail():string{
    return 'apple ${this.email}'
   }

   get _courseCount():number{
    return this._courseCount
   } 

   set _courseCount(courseNum){

    if(courseNum <=1){
        throw new Error("course count should be nore then 1");
    }
    this.courseCount= courseNum
   }
}

class subUser extends User{
    isFamily:boolean=true
    changeCourseCount(){
        this._courseCount=4
    }
}
const detail=new User("s@gmail.com","snobbar");
//detail.city="sopore"   //cant change this but can access it
console.log(detail.city)