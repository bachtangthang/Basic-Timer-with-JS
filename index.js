const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton= document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(){
        console.log('time started');
    },
    onClick(){
        console.log('timer is ticked down');
    },
    onComplete(){
        console.log('timer is completed');
    }
});

