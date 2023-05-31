
var array_one=["one","two","three","four"];
//console.log(array_one);

var array_two=['a'];

for(var i=array_one.length-1;i>=0;i--)
{
    console.log(array_one[i])

    array_two.unshift(array_one[i])

    console.log(array_two);

  

}

array_two.shift();
console.log(array_two);
array_two.unshift("5");
console.log(array_two);

// ============== Arrays and For loop ============

var array1=["one","two","three"];
var addvalue="first";
var final_array=[];

for(var i=0;i<array1.length;i++)
{
   var  value= `${array1[i]} ${addvalue}`;
    final_array.push(value);
}

console.log(final_array);


//========= functions , return , if ,arrays ,for loop ,objects  ======

var food=[50,65,87,25,88];
var mobile=[98,66,884];
var total=0;

function expentives(arr)
{
   for(var i=0;i<arr.length;i++)
   {

       total+=arr[i]; 

   }

   return total;
}

var total_food=expentives(food);
//console.log(total_food);

var total_mobile=expentives(mobile);
//console.log(total_mobile);


var total_price={

    final_food:total_food,
    final_mobile:total_mobile
}

console.log(total_price);



// ========== add ===========

console.log("-----------------------------");

var ss=[1,2,3,4,5];
var mm=[1,2,3,4,52];
var total=0;


function tot(rakesh)
{

    for(var q=0;q<rakesh.length;q++)
    {

        total=total+rakesh[q]
       

    }

    return total;

}


var tv=tot(ss);
var mobile=tot(mm);

console.log(tv);
console.log(mobile);


var bill={
    tv_price:tv,
    mobile_price:mobile
}

console.log(bill);

//==================== pop , push =============



var s3=[22,33,55,44];

s3.push(88);

console.log(s3);


s3.pop();

console.log(s3);


//================== Reference vs value ============
//================== Primitive Data Types ==============
//================== String , Number ,Boolean ,Symbol ,Undefined ,Null ===============
//================== Arrays , Functions , Objects ============
//================== typeof =============


// when assigning the primitive data type value to a variable any 
// changes are made directly to that value, wothout affecting 
// original value .


// when assigning non- primitive data type value to a variable is
// done by reference so any chnages will affect all the reference.


var one_value=52;
one_value=45;
console.log(one_value);


var arrs=[55,88,66,99,];
var arrs_two=arrs;
arrs_two[2]=125;
console.log(arrs_two);
console.log(arrs);


var obj={name:"sree"};
var obj_two={...obj};
console.log(obj_two);
obj_two.name="ssss"
console.log(obj_two);
console.log(obj);


// ============== Truthy and falsy ============
// ============== "" ,'',``,0,-0,Nan,false,null,undefined ==============


v1 =5;
v2=10;

if(v1)
{

    console.log("It is the true");

}else{

    console.log("It is the flase");

}

//================ Unary operator - type of ===========

let name="hello wolrd"

// ============== Binary operater - assignment ========

let a=30;

// =============== Ternary operater - ( condition ? runs if true :  runs if false) ===========


const v12=45;

// if(v12)
// {

// console.log("this is true"); 

// }else{

//     console.log("this is false"); 

// }

v12?console.log("this is true"):console.log("this is false"); 




