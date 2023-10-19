const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const symbols =  ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]



const generateBtn = document.querySelector(".generate-btn")
const passwordOne = document.querySelector("#passwordOne")
const passwordTwo = document.querySelector("#passwordTwo")
const selectedRange = document.querySelector("#range")
const includeSymbols = document.querySelector("#includeSymbols")
const includeNumbers = document.querySelector("#includeNumbers")

function generateIdx(len){    
    return Math.floor(Math.random() * len)
}

function generatePassword(){

    let newList = [...characters]
    
    if(includeSymbols.checked){
        newList = newList.concat(symbols)
    }
    
    if(includeNumbers.checked){
        newList = newList.concat(numbers)
    }
    
    let password = ""
    for(let i = 0; i < selectedRange.value; i++){
        password += newList[generateIdx(newList.length)]
    }
    return password
}

generateBtn.addEventListener("click", function(){
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
    
})

