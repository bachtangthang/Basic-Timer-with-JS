class Timer{
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton =startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start)
    }

    start(){

    }
}

const durationInput = document.querySelectorAll('#duration');
const startButton = document.querySelectorAll('#start');
const pauseButton= document.querySelectorAll('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
