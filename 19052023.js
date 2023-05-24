// =========== Arrays ============

const fruit1="banana";
const fruit2="apple";
const fruit3="mango";
const fruit4="grapes";
const fruit5="watermelon";

const fruitlist=[
    "banana",
    "apple",
    "mango",
    "grapes",
    "watermelon",
    5
];

console.log(fruitlist);

console.log(fruitlist[2]);

console.log(fruitlist[4]);

fruitlist[5]="sprite";

console.log(fruitlist);



// =========== Functions ============


function printMessage()
{
    console.log("Hello");
    console.log("How are you . ?");
    console.log("What happend .?");

}

printMessage();

// after write 1000 line we need same method

printMessage();


//============== Arrays , Functions and object =======
// params - when declair define
// placeholder , local variable
// arguments - when Invoke / call / run
// use variable / values ,Multiple Params ,Undefined


function display(first,second)
{

    console.log(first + " " +second);

}

display("1");
display(2,5);


//======== Return Key word ============

function demo(value)
{
    var result=value*10;
    console.log(result);
    return result;

}

var final_result=demo(10);
var final_result2=demo(20);

var show=[final_result,final_result2];

console.log(show);


// ============ Functions - Expressions ================


 function getdata(one,two)
 {

    return one+two;

}


// =========== unanimous function =============

var result2=function(one,two)
{

    //console.log(one+two);

    return one+two;

}

var vale = result2(5,6);
var result = getdata(5,5);

console.log(result);
console.log(vale);

// ===========  Objects =============


const object_data={

    name:"srikanth",
    branch:"MCA",
    fee:50000,
    pass:true,
    friends:["mahesh","chakri","rakesh"],
    release_data:function(aa,ba)
    {
        console.log(aa+ba)
    },

}

console.log(object_data.fee); // dot notation
console.log(object_data.name);
console.log(object_data.release_data(5,5));
console.log(object_data);


// ============ Conditional Statements ==========
// > , < , <= , >= ,

var values=2>5;

if(values)
{

    console.log("this true condition");

}else{

    console.log("this false condition");

}


var compare=52;
var compare_two=52

if(compare>compare_two)
{
    console.log("First Number Greater than Second Number");

}else if(compare>=compare_two){

    console.log("Both are same");
}else{

    console.log("Second Number Greater than first Number");
}





