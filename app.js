let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#resetBtn"); 
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];

// Rest Button :

const resetGame = () => {
    turnO = true; 
    enableBoxes(); 
    msg.innerText = ""; 
    msgContainer.classList.add("hide");
};

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableBoxes = () =>
    {
        for(let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
        }
    };
    
boxes.forEach((box)=>
{
    box.addEventListener("click", () =>
    {
        console.log("Box was Clicked");
        if(turnO){
            box.innerText = "0";
            turnO = false;
        }
        else{
            box.innerText ="x";
            turnO = true;
        }
        box.disabled = true; 
        checkWinner();
    });
});

const showWinner = (winner) =>
{
    msg.innerText = `congratualtions, winner is ${winner}`;
    msgContainer.classList.remove("hide");
}


const checkWinner = () =>
{
    for( let pattern of winPatterns)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log("Winner", pos1val);
                disableBoxes();
                showWinner(pos1val);
            }
        }
    }

};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);