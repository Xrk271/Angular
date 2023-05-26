// Javascript allows creating function with in functon
// The function whic is defined with in a function
// is generally meant to be accessed only within the outer function 
// not gobally
// if fun a needs function b and it does not want anything outside
// the function to use it we can declare b as in inner function 

function outer() {
    state = 1
    function inner() {
        console.log(state, "is accessible with in inner")
        console.log(b, "in inner function")
        innerstate=1
        console.log(innerstate, "within innerfunction")
        state++;
        innerstate++;
    }
    console.log(state,"accessed within outer")
    inner()
    //console.log(sinnertate,"accessed within outer")   // not possible
}

outer("King")
