class Class1{
    constructor(public str1:string){
        this.str1=str1;
    }
    
    ch:string=this.str1.charAt(0);
    vowels=['a','e','i','o','u'];
    isVowel():Boolean{
        if (this.ch=='a'||this.ch=='e'||this.ch=='i'||this.ch=='o'||this.ch=='u'){
            return true;
        }
        else{
            return false;
        }
    }
    vowelCount():number{
        var vowelNo:number=0;
        for(let letter of this.str1){
            if ((this.vowels).includes(letter)){
                vowelNo=vowelNo+1;
            }
        }
        return vowelNo;
    }
    consonantCount():number{
        let consonantCount=(this.str1.length)-(this.vowelCount())
        return consonantCount;
    }
    finalCount():number{
        let isVowel=this.isVowel();
        if (isVowel){
            return this.consonantCount();
        }
        else{
            return this.vowelCount();
        }
    }
    }

    var obj=new Class1("Shreya");
    console.log(obj.finalCount())
    var obj1=new Class1("ayushishs");
    console.log(obj1.finalCount())