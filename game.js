var droods = 0;
var scissors = 0;
var pitza = 0;
var pitzaTab = 1;
var action = "";
var outcome = "";

document.getElementById("action").innerText = "You investigate " + action;
document.getElementById("outcome").innerText = "Outcome: " + outcome;
document.getElementById("droodScore").innerText = "Droods: " + droods;
document.getElementById("scissorScore").innerText = "Scissors: " + scissors;
document.getElementById("pitzaScore").innerText = "Pitza: " + pitza;
document.getElementById("pitzaTabPrice").innerHTML = "Your pitza tab is currently: " + pitzaTab + " £";

function payYourTab(){
    if(pitza >= pitzaTab && droods>0){
        pitza -= pitzaTab;
        droods--;
        outcome = "You eat pitza and set the droods back.";
        update();
    }else if(droods<1){
        outcome = "The droods are scrambling, you can't do any more harm.";
        update();
    }else{
        outcome = "You don't have enough pitza to foil the droods."; 
        update();
    }
}

function reset(){
    droods = 0;
    scissors = 0;
    pitza = 0;
    pitzaTab = 1;
    action = "";
    outcome = "";
    update();
}

function play(){
    action = "";
    outcome = "";
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    if(dice1 == 1 || dice1 == 2){
        action = "the Scotland Yard";

        if(dice2 == 1){
            outcome = "You spend the whole day playing darts and reading about aliens. \n+1 PITZA";
            pitza += 1;
        }else if(dice2 == 2){
            outcome = "Lowry asserted his dominance over you again. \n-1 SCISSORS";
            scissors -= 1;
        }else if(dice2 == 3){
            outcome = "You drank ethanol and now the room is spinning. \n+1 SCISSORS -1 PITZA";
            scissors +=1;
            pitza -= 1;
        }else if(dice2 == 4){
            outcome = "The chief called you into his office. \n-1 PITZA +1 DROODS";
            pitza -= 1;
            droods += 1;
        }else if(dice2 == 5){
            outcome = "You managed to trick Lowry into leaving his scissors unattended. \n+1 SCISSORS";
            scissors += 1;
        }else if(dice2 == 6){
            outcome = "Someone left a threatening message on your answering machine. \n+1 DROODS";
            droods += 1;
        }
    }else if(dice1 == 3 || dice2 == 4){


        action = "the Field";
        if(dice2 == 1){
            outcome = "You poisoned a homeless man and stole his money. \n+1 SCISSORS";
            scissors += 1;
        }else if(dice2 == 2){
            outcome = "Mr. Blade shared deep lore on the droods with you. \n-1 PITZA +1 SCISSORS";
            scissors += 1;
            pitza -= 1;
        }else if(dice2 == 3){
            outcome = "You've been invited to dine with Lord Sinclair. \n+1 PITZA +2 DROODS";
            droods +=2;
            pitza += 1;
        }else if(dice2 == 4){
            outcome = "You asked Melanie a personal question. \n-1 DROODS";
            droods -= 1;
        }else if(dice2 == 5){
            outcome = "You sold the stolen Enhanced Fiberglass Telescope Ultraling 47 fishing rod worth 800 francs. \n+2 PITZA";
            pitza += 2;
        }else if(dice2 == 6){
            outcome = "You went to the past through the Gate of the Worlds. \n+1 SCISSORS +1 DROODS";
            droods += 1;
            scissors += 1;
        }
    }else{
        action = "You don't feel like working. So you eat a pitza and smoke a carton of cigarettes."
        outcome = "Your pitza tab grows."
        pitzaTab++;
    }

    validity();
    update();
    ending();
}

function validity(){
    if (pitza < 0) {
        pitza = 0
    }
    if (droods < 0) {
        droods = 0
    }
    if (scissors < 0) {
        scissors = 0
    }
}

function update(){
    document.getElementById("droodScore").innerText = "Droods: " + droods;
    document.getElementById("scissorScore").innerText = "Scissors: " + scissors;
    document.getElementById("pitzaScore").innerText = "Pitza: " + pitza;
    document.getElementById("action").innerText ="You investigate: " + action; 
    document.getElementById("outcome").innerText = outcome; 
    document.getElementById("pitzaTabPrice").innerText = "Your pitza tab is currently: " + pitzaTab + " £";
}

function ending(){
    if(scissors >= 10){
        alert("Congratulations")
    }else
    if(droods >= 10){
        alert("too bad")
    }else
    if(pitza >= 10){
        alert("the world keeps turning")
    }
}