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

function maybe(fn){
    //maybe will take a function, fn and return an entirely new
    // function that behaves mostly like the original function, fn
    // passed in, but will return undefined if any null or undefined
    // arguments are passed in to fn.

    return function(...args){
        if(args.includes(undefined) || args.includes(null)){
            return undefined;
        }
        return fn(...args);
    }
}

function constrainDecorator(fn, min, max){
    //This function wraps the function fn in another function so that
    // operations can be performed before and after the original
    // function fn is called. This can be used to modify incoming
    // arguments, modify the return value, or do any other task before
    // or after the function call. Again, we'll be modifying the
    // return value in this case.

    return function(...args){
        let result = fn(...args);
        if (result > max){
            return max;
        }else if(result < min){
            return min;
        }else{
            return result;
        }
    }
}

function limitCallsDecorator(fn, n){
    // This is the culmination of all of the concepts from the
    // previous functions. However, instead of just reading from a
    // variable that's available through the closure, you'll use it
    // to keep track of the number of times that a function is called…
    // and prevent the function from being called again if it goes
    // over the max number of allowed function calls. 

    let called = 0;
    return function(...args){
        called++;
        if(called <= n){
            return fn(...args);
        }else{
            return undefined;
        }
    }
}



// Test for sum(...args)
//console.log(sum(1));

// Test for repeatCall(fn, n, ...args)
//repeatCall(sum,3,1,2,3,4);

// Test for repeatCallAllArgs(fn, n, ...args)
//repeatCallAllArgs(console.log, 2, "foo", "bar", "baz", "qux", "quxx", "corge");

// Test for maybe(fn)
// function createFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`; 
// }
// console.log(maybe(createFullName)('Frederick', 'Functionstein'));

// Test for constrainDecorator(fn, min, max)
// const constrainedParseInt = constrainDecorator(parseInt, -10, 10);
// console.log(constrainedParseInt("12"));

// Test for limitCallsDecorator(fn, n)
// const limitedParseInt = limitCallsDecorator(parseInt, 3);
// console.log(limitedParseInt("432"));
// console.log(limitedParseInt("432"));
// console.log(limitedParseInt("432"));
// console.log(limitedParseInt("432"));
