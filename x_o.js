let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let classmsg=document.querySelector(".classmsg");
let idmsg=document.querySelector("#idmsg");
let turn=true;
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn==true){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
           turn=true;
        }
    
        box.disabled=true;
        check(win);
    });
});

function diable(){
    for(let box of boxes){
        box.disabled=true;
    }

}
function displaywin(winner) {
    idmsg.innerHTML = "Winner is: <strong>" + winner + "</strong>"; 
    classmsg.classList.remove("hide"); 
    diable();
}

function check(win){
    for(let i of win){
           let val1= boxes[i[0]].innerText;
            let val2=boxes[i[1]].innerText;
           let val3= boxes[i[2]].innerText;

        if(val1 !="" && val2 !="" && val3 !="")
        {
            if(val1 === val2 && val2 === val3){
                displaywin(val1);
            }
    
        }
     }
}

 reset.addEventListener("click",()=>{
    boxes.forEach(box=>{
    box.innerText="";
    box.disabled=false
    })
    turn=true;
    })   

