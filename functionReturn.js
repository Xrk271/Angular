function a(){}

function b() { return "Hello" }

c = function()  { return "hi"}

console.log(a())
console.log(b())
console.log(c())

b.store = {x:234,y:353,z:900}

console.log(typeof(a))