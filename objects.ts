const User={
    name:"snobbar",
    email:"s@gmail.com",
    isPaid:true
}



function createCourse({ name, isPaid }: { name: string; isPaid: boolean }) {
    console.log(`name:${name}, isPaid:${isPaid}`);
  }
  createCourse({ name: "react", isPaid: false });

  


function createUser({name:string,isPaid:boolean}):{}{
return {name:string,isPaid:boolean}
}
console.log(createUser({name:"sania",isPaid:true}));



export{}
