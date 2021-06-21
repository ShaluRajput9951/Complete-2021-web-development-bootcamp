// --- Challenge: Fibonacci code


// Create a function where you can call it by writing the code "fibonacciGenerator (n)", where n is the number of items in the sequence.
// So I should be able to call: "fibonacciGenerator(3)" and get [0,1,1] as the output.

// IMPORTANT: The solution checker is expecting an array as the correct output.
// You do NOT need any alerts or prompts, the result should be returned from the function as an output.
// The first two numbers in the sequence must be 0 and 1.

function fibonacciGenerator (n){
    var output=[];
    if(n===1){
        output=[0];
    }else if(n===2){
        output=[0,1];
    }else{
        output=[0,1];

        for(var i=2;i<n;i++){
            output.push(output[output.length-2]+output[output.length-1]);
        }
    }
    return output;
}

// fibonacciGenerator (1) ---->[0]
// fibonacciGenerator (2) ---->[0,1]
// fibonacciGenerator (3) ---->[0,1,1]