import inquirer from "inquirer"
const answer = await inquirer.prompt([
    {message:"Enter first number",type:"number",name:"firstnum"},
    {message:"Enter second number",type:"number",name:"secondnum"},
    {message:"please select one of the operator to perform operation",type:"list",name:"operator",
    choices:["Addition","Subtraction","Multiplication","Division",]
}
])
if (answer.operator=="Addition"){
    console.log(answer.firstnum+answer.secondnum)
} else if (answer.operator=="Subtraction"){
    console.log(answer.firstnum-answer.secondnum)
} else if (answer.operator=="Multiplication"){
    console.log(answer.firstnum*answer.secondnum)
}else if (answer.operator=="Division"){
    console.log(answer.firstnum/answer.secondnum)
 } else {
    console.log("please select valid operator")
 }