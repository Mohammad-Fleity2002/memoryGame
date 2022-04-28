let hasFlippedCard= false;
var firstCard, secondCard;
var idArray=[0,0,0,0,0,0,0,0,0,0,0,0];
var found=false;
var count=0;//for displaying the congrats  
var main=document.getElementById("memory-game");
var temp=Math.floor(1+Math.random()*4);//0<temp<4
var n=temp;
function display(){
    for (var i=0;i<6;i++){
        if(temp<=6){//avoid having nb grater than 6
            idArray[i]=temp;//the first picture
            idArray[12-i-1]=temp;//the second picture
            temp++;
            //console.log(n,temp);
        }else{
            n--;//to complete the array
            if(n>0){//avoid havin idArray[i]<=0(can beremoved)
                idArray[i]=n;//the first picture
                idArray[12-i-1]=n;//the second picture
               // console.log(n)
            }
        }
    }
    temp=Math.floor(1+Math.random()*7);
    
    n=temp;
    for(var i=0;i<idArray.length;i++){
        if(temp<=11){
            main.innerHTML += '<div class="memorycard" id='+idArray[temp]+'><img class="front-face" src="img/game/fl'+idArray[temp]+'.jpg" alt="'+ temp +'"><img class="back-face" src="img/game/bck.jpg" alt=""></div>';
            //main.innerHTML += '<P>'+idArray[temp]+'</p>';
            temp++;
            //console.log(n,temp,idArray[temp]);

        }else{
            n--;
            if(n>=0){
                //main.innerHTML += '<P>'+idArray[n]+'</p>';
                main.innerHTML += '<div class="memorycard" id='+idArray[n]+'><img class="front-face" src="img/game/fl'+idArray[n]+'.jpg" alt=""><img class="back-face" src="img/game/bck.jpg" alt=""></div>';
                //console.log(n,idArray[n]);

            }
        }
    }    
}
display();
const cards=document.querySelectorAll(".memorycard");
cards.forEach(card => {card.addEventListener("click",flipcard)}); 
var congrats=document.getElementById("congrats");
function flipcard() {
    this.classList.toggle("flip");
    if(hasFlippedCard==false){//first card
        hasFlippedCard=true;
        firstCard=this;
       // console.log({hasFlippedCard,firstCard});
    }else{//second card
        hasFlippedCard=false;
        secondCard=this;
        //MoveCounter++;
        //console.log({firstCard,secondCard});
        if(firstCard.id==secondCard.id){
            firstCard.removeEventListener("click",flipcard);
            secondCard.removeEventListener("click",flipcard);
            count++
           // console.log('function was1 executed');
        }else{
            setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            },1500);
        }
       // console.log('function was executed');

    }
    /*if(count==6){
        setTimeout(() => {
            main.style.display="none";
            congrats.style.display="contents";
        },1500);
    }*/
}