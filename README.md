## 16 Pads
<a href="https://thedaebu.github.io/16pads/">16 Pads</a>


16 Pads is based on the Akai MPC controller. The controller is made up of a 4x4 grid of pads which can be played when pressed.

<img src="https://raw.githubusercontent.com/thedaebu/16pads/main/assets/gifs/16pads.gif" alt="" />

### Functionality:
<ul>
    <li>When corresponding key is pressed or pad is clicked on, the sample will be played</li>
    <li>BPM controls for metronome with play/pause functionality</li>
</ul>

### Technologies:
Javascript, Tone.js, SCSS, HTML

### Implementations:
The pads would be created as div elements then rendered onto the page with labels and buttons. Each pad would then play a sample depending on if the corresponding key was pressed or if the pad was clicked on.

```js
window.addEventListener("keydown", keyDownSound);
window.addEventListener("keyup", keyUpSound);
window.addEventListener("mousedown", mouseDownSound);
window.addEventListener("mouseup", mouseUpSound);

function createPads () {
    let pads = document.querySelector('.pads');
    let padsInner = document.createElement('div');
    padsInner.classList.add(`pads-inner`);
    pads.appendChild(padsInner);
    for (let i = 0; i < 16; i++) {       
        let pad = document.createElement('div');
        pad.classList.add(`pad`);
        let padLabel = document.createElement('p');
        padLabel.innerHTML = `PAD ${i + 1}`;
        let padButton = document.createElement('div');
        padButton.classList.add(`unpressed`);
        padButton.classList.add(`pad-button`)
        padButton.id = `pad-${i+1}`;
        pad.appendChild(padButton);
        pad.appendChild(padLabel);
        padsInner.appendChild(pad);
    }
}
```

Using Tone.js functions, samples would be played depending on the event listener for keys and mouse clicks.

```js
function keyDownSound (e) {
    e.preventDefault();
    if (e.keyCode === 49) { 
        document.querySelector('#pad-1').classList.remove('unpressed');
        document.querySelector('#pad-1').classList.add('pressed');
        sample1.start(); 
    }
}    
```

Metronome functionality can be utilized by using the Transport function of Tone.js, which allows loops to be played.

```js
metronomePlayPause.addEventListener("click", () => {
    const loop1 = new Tone.Loop(time => {
        metronome.start();
    }, "4n").start(0);

    if (playStatus === "off"){
        playStatus = "on";
        metronomePlayPause.classList.add("pressed");
        Tone.Transport.start();
    } else {
        playStatus = "off";
        metronomePlayPause.classList.remove("pressed");
        Tone.Transport.stop();
    }       
})
```
