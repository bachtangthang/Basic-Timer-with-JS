class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onClick = callbacks.onClick;
            this.onComplete = callbacks.onComplete;    
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if(this.onStart){
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            this.timeRemaining = this.timeRemaining -1;
            if(this.onClick){
                this.onClick();
            }
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}