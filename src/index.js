import "./styles/reset.scss";
import "./styles/index.scss";
import * as Tone from 'tone';
import {keyDownSound, keyUpSound} from "./key_actions";
import { mouseDownSound, mouseUpSound } from "./mouse_actions";
import { metronome } from "./sounds";

// document.querySelector("#DOM-demo").addEventListener("click", startDOM);

window.addEventListener("DOMContentLoaded", () => {
    
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

    createPads();

    let metronomeToggle = document.querySelector(".metronome-toggle");
    let bpm = 0;
    
    metronomeToggle.addEventListener("click", () => {
 
        const loop1 = new Tone.Loop(time => {
            metronome.start();
        }, "4n").start(0);

        if (bpm === 0) {
            bpm = 80;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
            metronomeToggle.classList.add('eighty');
        } else if (bpm === 80) {
            bpm = 90;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
            metronomeToggle.classList.remove('eighty');
            metronomeToggle.classList.add('ninety');
        } else if (bpm === 90) {
            bpm = 100;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
            metronomeToggle.classList.remove('ninety');
            metronomeToggle.classList.add('hundred');
        } else if (bpm === 100) {
            bpm = 110;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
            metronomeToggle.classList.remove('hundred');
            metronomeToggle.classList.add('hundredten');
        } else if (bpm === 110) {
            bpm = 120;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
            metronomeToggle.classList.remove('hundredten');
            metronomeToggle.classList.add('hundredtwenty');
        } else {
            bpm = 0;
            Tone.Transport.stop();
            metronomeToggle.classList.remove('hundredtwenty');
        }
    })
    
})