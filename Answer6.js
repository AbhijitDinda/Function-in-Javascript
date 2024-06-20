function curry(fn){
    
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }else{
            return function(...nextArgs){
                return curried(...args, ...nextArgs);
            }
        }
    }
}

function sum(n1,n2){ return n1+n2 }

const cSum = curry(sum);

console.log("Curried sum: ",cSum(12)(10));
console.log("Curried sum: ",cSum(15,11));