const rollNo = 2310990690;
let subjectName = "JAVA_SCRIPT";
var city = "Mandi";
studentName = "Himanshu";
let marks;

/*
Don't use var, because of issues in block scope and functional  scope 
*/


// rollNo = "1234"; can't do because of const

subjectName = "js";

//console.log(rollNo);
console.table([rollNo,subjectName,city,studentName,marks]);