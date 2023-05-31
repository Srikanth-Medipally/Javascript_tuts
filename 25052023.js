
// =========== if ==============

const dice=7;

if(dice===1)
{
console.log("your dice : 1")
}
if(dice===2)
{
    console.log("your dice : 2")
}
if(dice===3)
{
    console.log("your dice : 3")
}
if(dice===4)
{
    console.log("your dice : 4")
}
if(dice===5)
{
    console.log("your dice : 5")
}
if(dice===6)
{
    console.log("your dice : 6")
}
if(dice===7)
{
    console.log("your not play the dice")
}


//======Swich======

const b=4;

switch(b)   // view.getid();
{
    case 1:
        console.log("your dice : 1");
        break;
    case 2:
        console.log("your dice : 2");
        break;
    case 3:
        console.log("your dice : 3");
        break;
    case 4:
        console.log("your dice : 4");
        break;

        default :

        console.log("It is not match");
               
    
}

// ======== Loops ================

const c=10;

for(var i=0;i<=10;i++)
{
    console.log(i);
    //document.write(i);
    //alert(i);
}


// =========== while loop ==========

let e=5;

while(e>0)
{
    console.log( "The value is : " +e );
    e--;
}

// ================ do while =====

let r=8;

do{

    console.log("Your value is : " +r);
    r++;

}while(r<=10);

// ========= String Properties and Methods ===========
// ========= Wrapper String Object ,Dont Memorize Methods ===
// String is object ..

var name1 ="Srikanth Medipally";

console.log(name1.toLowerCase());

var address= {

    fee:5000,
    course:"javascript",
    details:function()
    {
       console.log("this is method");
    }

}

console.log(address.fee);
console.log(address.course);
console.log(address.details());


// ======= String Methods ======== //


let student_name ="Srikanth Medipally";

console.log(student_name);
console.log(student_name.toLowerCase());
console.log(student_name.charAt(2))
console.log(student_name.indexOf("e"));
console.log(student_name.length);

// ============== Template Literals - ES6 + =========
// ============== Backtik Characters --> above tab ( left from one )====== 
// ============== Interpolation ${} - Insert Expression(value)====

let welcome ="this is the Interpolation";

let we="the";

let lcome="Interpolation";

let result=`this is ${we} ${lcome}`;

console.log(welcome);
console.log(result);

// =========== Array Properties and Methods ============ 

const arrays=["banana","mango","grapes","srikanth"];
console.log(arrays);

// legnth

console.log(arrays.length);

// concat

const arrays_two=["hello","world"];
console.log(arrays_two);

const finalarray=arrays.concat(arrays_two);
console.log(finalarray);

//push

finalarray.push("three");
console.log(finalarray);

//pop

finalarray.pop();
console.log(finalarray);

// unshift

finalarray.unshift(finalarray[1]);
console.log(finalarray);

//shift

finalarray.shift();
console.log(finalarray);

// reverce

finalarray.reverse();
console.log(finalarray);

// ====================== Arrays for loop ==========


const array_one=["sree","kanth","medi"]; // 3
const value_one="hello";

const result_array=[];

for(var i=0;i<array_one.length;i++)
{
    result_array[i]=value_one+array_one[i]
}

console.log(result_array);



const array = [1, 2, 3, 4, 5];

// Reverse the array
const reversedArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

// Using a for loop to print each element of the reversed array
for (let i = 0; i < reversedArray.length; i++) {
  console.log(reversedArray[i]);
}



