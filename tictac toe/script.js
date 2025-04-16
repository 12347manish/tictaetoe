console.log("Welcome to Tic Tac Toe")
let audioTurn = new Audio("Message Tone.mp3")
let music = new Audio("melodic-game-over-956.wav")
let gameover = new Audio("mixkit-reto-game-over-470.wav")
let turn = "X"

 const changeTurn = ()=>{
    return turn ==="X"? "0":"X"
 }
 const checkWin = ()=>{

 }

 let boxes =document.getElementsByClassName("box")
 Array.from(boxes).forEach(element =>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText =turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName('info')[0].innerText ="Turn for"+ turn;

        }
    })
 })
