
let firstName = "Peter";
let lastName = "Parker";

let subjects = ["Math", "English", "Physics", "Chemistry"];
let mathScore = 75;
let englishScore = 87;
let physicsScore = 64;
let chemistryScore = 45;

let totalScore = (mathScore + englishScore + physicsScore + chemistryScore ) / subjects.length;
let remark;
if (totalScore >= 70){
    remark = "Excellent";
}else if(totalScore >= 50){
    remark = "Good";
}else if(totalScore >= 35){
    remark = "You can do better";
}else{
    remark = "Fail";
}

console.log("STUDENT EXAMINATION RESULTS")
console.log("Student Name: " + firstName + " " + lastName)
console.log("Math Score: " + mathScore)
console.log("English Score: " + englishScore)
console.log("Physics Score: " + physicsScore)
console.log("Chemistry Score: " + chemistryScore)
console.log("--------------------------------")
console.log("Total Score: " + totalScore)
console.log("Remark: " + remark)
console.log("================================")
