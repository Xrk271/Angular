

function demoVariable (){
    a=20
    console.log("with in the outer range a is",a)
    {
        let a=90
        console.log("with in the block range a is",a)
        {
            a=900
        }
    }
    console.log("Again with in the outer range a is",a)
}

demoVariable()