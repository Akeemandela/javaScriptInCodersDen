// Question Number One - John Holmes' Quote 
let quote = "There is no exercise better for heart than reaching down and lifting people up.\n\
By John Holmes teaches us to help one another."
console.log(quote, "\n")


// Question Number Two - Mother Theresa's Quote
let quoteTher = "Love is not patronising and charity isn't about pity, it is about love. \n\
Charity and love are the same --with charity you give love,\n\
so don't just give money but reach out your hand instead."
console.log(quoteTher, '\n')
//Question Three - checking if '10' is exactly equal to 10.
let check = '10'
let checker = typeof(check)
console.log(checker, '\n')
// It returned a string actually
let numChecker = + check
console.log(numChecker, '\n')
// Question Number Four - check if '9.8' is equal to 10
let floatChecker = parseFloat('9.8')
console.log(floatChecker)
let floatConfirm = Math.ceil(floatChecker)
console.log(floatConfirm, '\n')
// Question Number Five - check whether or not "on" is present in python and jargon
let seeInArray = "python and jargon"
let insideOn = console.log(seeInArray.includes("on"), '\n')
//Question Number Six - checking for substring continues
let substrChecker = "I hope this course is not full of jargon." 
console.log(substrChecker.includes('jargon'), '\n')
// Question Number Seven - generating random number between 0 and 100 inclusively
let randomGen = Math.floor(Math.random()*101)

console.log(randomGen, '\n')
//Question Number Eight - generating random number between 50 and 100 inclusively
let ranGenBet = Math.floor(Math.random()*100)
console.log(ranGenBet, '\n')
//Question Number Nine - generating randon number between 0 and 255 inclusively
let randomHigh = Math.floor(Math.random()*256)
console.log(randomHigh, '\n')
//Question Number Ten - Accessing a string using random number
/*let stringy = "JavaScript"
let checky = stringy.length

for(let i = 0; i < checky; i++)
{
     randomAccess = Math.floor(Math.random()*checky)
    }
*/
//Question Number eleven - using escape character to print a pattern
console.log('\n','1'+' ' + '1'+ ' ' + '1' +' ' + '1' +' ' + '1','\n', '2'+ ' '+'1'+' '+'2'+' ' + '4'+ ' ' +'8', '\n', '3' +' ' +'1' + ' ' +'3' + ' '+'9' +' '+ '27','\n', '4' + ' ' + '1' + ' '+ '4' +' '+'16'+ ' ' +'64','\n', '5' +' '+'1'+' '+'5' + ' ' + '25' + ' ' + '125')
//Question Number Twelve - Slicing out the a number of words using substr
let stringOfWords = " You cannot end a sentence with because because because is a conjunction"
let conjunctiionCheck = stringOfWords.substr(31, 24)
console.log(conjunctiionCheck)
