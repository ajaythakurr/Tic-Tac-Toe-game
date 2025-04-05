let boxes = document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGamebtn =document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container")
let msg=document.querySelector("#msg");

let turnO = true; // playerX,playerO
let mouseClicks=0;

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const resetGame = ()=>{
    turnO=true;
    mouseClicks=0;
    enableboxes();
    msgContainer.classList.add("hide");
    
}
const enableboxes=()=>{
    for(box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(mouseClicks<8) mouseClicks+=1;
        else {
            showWinner("draw");
        }
        console.log("box clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled =true ;

         checkwinner();
    });
});

const diableboxes=()=>{
    for(box of boxes){
        box.disabled =true;
    }
}

const showWinner= (winner) => {
    if(winner==="draw"){
        msg.innerText=`It's a Draw! Try Again`;
        
    }
   else msg.innerText = `Congratulation, winner is ${winner}`;

    msgContainer.classList.remove("hide");
    diableboxes();
}

const checkwinner =()=>{
    for (pattern of winPatterns){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if((pos1 === pos2) && (pos2 === pos3) && (pos1!="")){
            showWinner(pos1);
        }
        else continue;

    }
};

resetBtn.addEventListener("click",resetGame);
newGamebtn.addEventListener("click",resetGame);