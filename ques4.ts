class item{
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;
    constructor(itemid:number, itemname:string, itemprice:number,category:string){
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice=itemprice;
        this.category = category;
    }

}
let item1:item=new item(1,'Hoodie',1000,'Clothing');
console.log(item1.itemid,item1.itemname,item1.itemprice,item1.category);