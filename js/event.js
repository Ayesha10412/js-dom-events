 // option
 function makeGreen(){
    document.body.style.backgroundColor='green';
}

 // another option
 const makeBlueButton= document.getElementById('make-blue');
 makeBlueButton.onclick=makeBlue;

 function makeBlue(){
     document.body.style.backgroundColor='blue';
 }

//  another new option

const makePink=document.getElementById('make-pink');
makePink.addEventListener('click', makepink);
function makepink(){
    document.body.style. backgroundColor='pink';
}

// new option

const makeTomato=document.getElementById('make-tomato');
makeTomato.addEventListener('click', function maketomato() {
    document.body.style.backgroundColor='tomato';
});



// option we will use

document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor='goldenrod';
})


// change the text by click button
function handleClick(){
    const handlerStatus=document.getElementById('handler-status');
    handlerStatus.innerText="Handle By function attached on onclick attribute";
}

// another option by addEvenListener
document.getElementById('event-listener').addEventListener('click', function (){
    const handlerStatus=document.getElementById('handler-status');
    handlerStatus.innerText="Text updated by add Event Listener";


})


// option2 update on input field
document.getElementById('update-btn').addEventListener('click', function(){
    const inputField=document.getElementById('input-field');
    const inputText=inputField.value ;
    const p=document.getElementById('input-status');
    p.innerText=inputText;
    inputField.value= '';
})