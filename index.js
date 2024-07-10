let boxes = document.querySelectorAll(".box");
let contener = document.querySelector(".contener");
let game = document.querySelector(".game");
let Winning_msg = document.querySelector(".massage");
let hide = document.querySelector("#restart");
let restart = document.querySelector(".restart");
let reset = document.querySelector(".reset");

let isturn0 = true;
let Winning_prob = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("button was clicked");
        if(isturn0){
            box.innerHTML = "o";
            isturn0 = false;
            box.disabled = true;
        }
        else{
            box.innerHTML = "x";
            isturn0 = true;
            box.disabled = true;
        }
        reset.addEventListener('click',()=>{
            box.innerHTML = "";
            box.disabled = false;
        });

        checkWinner();
       
    });
});

let checkWinner = ()=>{
    for(let win of Winning_prob){
        let pob1 = boxes[win[0]].innerHTML;
        let pob2 = boxes[win[1]].innerHTML;
        let pob3 = boxes[win[2]].innerHTML;
        if(pob1!=="" && pob2!=="" && pob3!==""){
            if(pob1 === pob2 && pob2 === pob3){ 
                Winning_msg.innerHTML  = `Winner!! Player with (symbol: ${pob1})`;
                hide.classList.remove('hide');
                reset.disabled = true;
                boxes.forEach((box)=>{
                    box.disabled = true;
                });
            }
        }
    }
};

restart.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled = false;
        reset.disabled = false;
        hide.classList.add("hide");
    });
});




