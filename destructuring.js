person = {sno:1 ,name: "Raja",city:"chennai"}

console.log(person.name)

const {sno,name,city} = person

//destructuring with alias

const {sno: id, name:fname, city: place} = person
console.log(name)
console.log(place)
//sno+90

console.log(sno)