"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "snobbar",
    email: "s@gmail.com",
    isPaid: true
};
/*function createCourse({name:string,isPaid:boolean}){
  this.name=name;
    //console.log(`name:${name}, isPaid:${isPaid}`)
    console.log(this.name)
}
createCourse({name:"react",isPaid:false});*/
function createCourse(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    console.log("name:".concat(name, ", isPaid:").concat(isPaid));
}
createCourse({ name: "react", isPaid: false });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return { name: string, isPaid: boolean };
}
console.log(createUser({ name: "sania", isPaid: true }));
