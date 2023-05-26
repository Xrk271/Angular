function Sample(){
    // console.log(This) //this refers to the object

    console.log(this.Sample.store)
}

a=30
Sample.store = {sno:1, name : "Ratan"}

Sample() //Window.Sample in case of browser
        //global.Sample
