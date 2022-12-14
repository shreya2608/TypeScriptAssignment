var isPalindrome=(str:string):boolean   => {
    var reversestr= str.split("").reverse().join("");
    if (str==reversestr){
        return true;
    }
    else{
        return false;
    }
}
var k1=isPalindrome('Shreya');
var k2=isPalindrome('alala');
console.log(k1,k2);