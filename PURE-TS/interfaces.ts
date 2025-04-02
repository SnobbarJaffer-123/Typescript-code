//interfaces are like building protocols ,having no definition but how the things should b
interface takePhoto{
    cameraMode:string
    filter:string
    burst:number
}
interface story{
    createStory():void
} 
class instagram implements takePhoto,story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number

    ){ 
    }
    createStory():void {
        console.log("story was created")
    }
}
    