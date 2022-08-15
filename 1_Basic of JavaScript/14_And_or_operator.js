// AND OR operator

let firstName = "Ankur";
let age = 2;

// AND && (both coditon should be satisfied)
if(firstName[0] === "A" && age >= 18){
    console.log("Name starts with A and 18 above age");
} else {
    console.log("not satisfied");
}


// OR || (at leasat one codition should be satisfied)
if(firstName[0] === "A" || age >= 18){
    console.log("inside if");
} else {
    console.log("inside else");
}