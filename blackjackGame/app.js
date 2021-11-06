

// Defining pre variables
let price ={
    name:"Rohit",
    chips:200
}
let cards = [];
let sum = 0;

let  isAlive = false;

let hasBlackJack = false;
let messageEl = document.getElementById("message");
let sumEl =document.querySelector(".sum-el");
let cardEl = document.querySelector(".card-el");
let priceEl = document.getElementById("price-el");
priceEl.textContent = price.name + ": $ " +price.chips;



let message =" "



// creating getrandomNumber() function

function getrandomNumber(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    // apply condition to get proper random number
    if (randomNumber > 10){
        return randomNumber = 10;
    }else if (randomNumber ===1){
        return randomNumber = 11;
    }else{
        return randomNumber;
    }

}

//  start function to trigger render function

function startGame(){

    firstCard = getrandomNumber();
    secondCard = getrandomNumber();
   
    cards = [firstCard , secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame()
    
}







// render function to start game loop
function renderGame(){
// adding for loop for handling n numbers of array in 

cardEl.textContent=  "Cards :" ;
for (let  i= 0; i < cards.length ; i++){
    cardEl.textContent += cards[i] +"  "
}

sumEl.textContent = "Sum:" + sum
if (sum <= 20){
    message = "Do u want to Draw new Card";
    isAlive =true
}else if ( sum === 21){
    message =  " 'whooo u got black jack game' " ;
    hasBlackJack = true;
   
    
} else {
    message = " you are out of the game";
    isAlive =false
}

messageEl.textContent =message

}













// function  to Draw new Card 
function newCard() {
// allowinf users to draw new cards only if she is alive in the game
     if(isAlive === true && hasBlackJack === false){
         let card = getrandomNumber()
         sum += card
         // Push the card to the cards array
         cards.push(card)
         renderGame() 
         
     }
    
   
   
    
}



