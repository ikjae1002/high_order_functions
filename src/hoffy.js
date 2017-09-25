// hoffy.js
// Programmer: Ikjae (Joshua) Jung
// Date: 9/24/17

function sum(num1, ...nums){
    // Adds all of the arguments together and returns the resulting sum.
    // If there are no arguments, the resulting sum is 0.
    // Does not have to check for types.
    if(!nums.length){
        if(num1 === undefined){
            return 0;
        }else{
            return num1;
        }
    }else{
        num1 += nums.shift();
        return sum(num1, ...nums);
    }
}

function repeatCall(fn, n, ...args){
    //This function demonstrates using functions as an argument or
    // arguments to another function. It calls function, fn, n times,
    // passing in the argument, arg to each invocation / call. It will
    // ignore the return value of function calls. Note that it passes
    // in only one arg.

    fn(args[0]);
    if(n !== 1){
        return repeatCall(fn, n-1, ...args);
    }
}

function repeatCallAllArgs(fn, n, ...args){
    //This is pretty much the same function as the previous, but it
    // also demonstrates using a variable number of arguments. It
    // calls function, fn, n times, passing in all of the remaining
    // arguments that were passed to the original function, as the
    // arguments to the fn function invocation. It will ignore the
    // return value of function calls.

    fn(...args);
    if(n !== 1){
        return repeatCallAllArgs(fn, n-1, ...args);
    }
}

//console.log(sum(1));
//repeatCall(sum,3,1,2,3,4);
repeatCallAllArgs(console.log, 2, "foo", "bar", "baz", "qux", "quxx", "corge");
