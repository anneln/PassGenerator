const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passlength = 14

function generatePassword() {
    let passWordOne = []
    let passWordTwo = []
    for(let i=0; i< passlength; i++){
        let randomChars = characters[Math.floor(Math.random(characters[i]) * characters.length)]
         passWordOne += randomChars
    } 
    for(let i=0; i< passlength; i++){
        let randomChars = characters[Math.floor(Math.random(characters[i]) * characters.length)]
         passWordTwo += randomChars
    }
    
    document.getElementById('pass-one').textContent = passWordOne
    document.getElementById('pass-two').textContent = passWordTwo    
}

function copyPasswordOne(){
    let passOne = document.getElementById('pass-one')
    const range = document.createRange()
    /* select all range (no need start and end)*/
    range.selectNode(passOne)
    /*select the element on the range*/
    window.getSelection().addRange(range)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
    alert("Password copied")
    } 
    
function copyPasswordTwo(){
    let passTwo = document.getElementById('pass-two')
    const range = document.createRange()
    /* select all range (no need start and end)*/
    range.selectNode(passTwo)
    /*select the element on the range*/
    window.getSelection().addRange(range)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
    alert("Password copied")
    } 


/* navigator.clipboard.writeText(passOne).then(function(){
        console.log(navigator.clipboard.writeText(passOne))*/





    
       




