interface Shape{
    shapename: string;
    printname:()=>void;
}
class Cone implements Shape{
    shapename: string;
    radius:number;
    slantheight:number;
    constructor(shapename:string,radius:number,slantheight:number){
        this.shapename=shapename;
        this.radius=radius;
        this.slantheight=slantheight;
    }
    printname():void{
        console.log(this.shapename);
    }
    area():number{
        return ((Math.PI)*this.radius*this.slantheight)+(Math.PI)*this.radius*this.radius;
    }
}
class Sphere implements Shape{
    shapename: string;
    radius:number;
    constructor(shapename:string,radius:number){
        this.shapename=shapename;
        this.radius=radius;
    }
    printname():void{
        console.log(this.shapename);
    }
    area():number{
        return (Math.PI)*this.radius*this.radius*4;
    }
}
class Rectangle implements Shape{
    shapename: string;
    length:number;
    breadth:number;
    constructor(shapename:string,length:number,breadth:number){
        this.shapename=shapename;
        this.length=length;
        this.breadth=breadth;
    }
    printname():void{
        console.log(this.shapename);
    }
    area():number{
        return this.length*this.breadth;
    }
}
var cone=new Cone('Cone',10,20);
console.log(cone.area());
var sphere=new Sphere('Sphere',10);
console.log(sphere.area());
var rectangle=new Rectangle('Rectangle',10,20);
console.log(rectangle.area());