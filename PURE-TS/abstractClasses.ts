//we cant create an objest of abstract class...but the class which extents it,can create object 
abstract class takephoto{
    constructor(public cameraMode:string,
        public filter:string){

        }
        abstract getSepia():void

        getReelTime():number{
            //some complex calculation 
            return 8
        }

}

class Instagram extends takephoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("sepia")
    }
}
const sj=new Instagram("test","test",3);
console.log(sj.getReelTime())
sj.getSepia()