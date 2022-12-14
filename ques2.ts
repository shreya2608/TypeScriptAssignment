var sorted=(number1:number, number2:number,number3:number)=>{
    var arr:number[]=[number1, number2, number3];
    arr=arr.sort((a,b)=>{
        return a-b});
        console.log(arr)
}
sorted(6,2,3);