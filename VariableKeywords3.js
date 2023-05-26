//global, function scope and local scope

a=20

function printer(){
    // a=35
    console.log("a:",a)
   var a=50
}

printer()
console.log("globale a:",a)