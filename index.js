const button = document.getElementById("btm");
const text = document.getElementById("answers");
const liv = document.getElementById("lives");
min = 1;
max = 100;
let lives = 5;

const RanNum = Math.floor(Math.random() *(max - min +1)) + min;
console.log(RanNum);



function submit(){
    
    var number = document.getElementById("impt").value;
    liv.innerHTML = `You have ${lives} lives`;
    if(lives < 1){
        liv.innerHTML = " You lose";
       
    }
    
    number = Number(number);
    
    if(isNaN(number)){
        text.innerHTML = "Provide a valid value";
    }
    else {
        if(number < RanNum){
            text.innerHTML = " Number is higher";
            lives--;
            
        }
        else if(number > RanNum){
            text.innerHTML = "Number is lesser";
            lives--;
           
        }
        else if(number === RanNum){
            text.innerHTML = "You win"
            liv.innerHTML = `Number was ${RanNum} `;
        }
    }
    

   


    
}

    

 

    
    

    

    
