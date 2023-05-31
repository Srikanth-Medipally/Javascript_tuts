// =========== Global scope vs local scope ==========

let value="srikanth";

function display()
{
   
    console.log(` The value is ${value}`);
    value=20;
    console.log(` The value is ${value}`);
}

display();


// ========== Local scope ===========


console.log("---------------------------");

let first_name="this is the global";

function view()
{

    let first_name="this is the local";
    console.log(first_name);

}

view();

console.log(`this is the ${first_name}`);


// ============== Variable Lookup ============
//================ {} - code block ===========

let value_one=55;

function getvalue(a,b)
{

    var value_one=60;
    var result=value_one+a+b;
  

    function hello()
    {

        var result_two=value_one+a;
        console.log(result_two);

    }

     hello();
    return result;

}

console.log(getvalue(5,6));

