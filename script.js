// const photo = document.querySelector("img");
// console.log(photo);

const photos = document.querySelectorAll("img");

class Animation {
    constructor(mousePos, photo) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick
        this.interval = setInterval(this.tick, 1000);
    }

    pause() {
        clearInterval(this.interval);
    }

    tick = () => {
        console.log('tick')
    }
}

for (let photo of photos) {
    const animation = new Animation(photo);
}

//     let rect = e.target.getBoundingClientRect();
//     let x = e.clientX - rect.left; //x position within the element.
//     let y = e.clientY - rect.top;

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick
        this.interval = setInterval(this.tick, 1000);
    }

    pause() {
        clearInterval(this.interval);
    }

    tick = () => {
        console.log('tick')
    }
}


const timer = new Timer(durationInput, startButton, pauseButton);
