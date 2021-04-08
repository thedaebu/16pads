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

    const metronomeToggle = document.querySelector(".metronome-toggle");
    let bpm = 0;
    
    metronomeToggle.addEventListener("click", () => {
        // const synthA = new Tone.FMSynth().toDestination();
        // const loopA = new Tone.Loop(time => {
	    // metronome.triggerAttackRelease("D2", "8n", time);

        // Tone.Transport.scheduleRepeat((time) => {
	    // metronome.start(time).stop(time);
        // }, "8n");
       
        const loop = new Tone.Loop(time => {
            metronome.start();
        }, "4n").start(0);

        // Tone.Transport.scheduleRepeat((time) => {
	    // metronome.start(time);
        // }, "4n");

        if (bpm === 0) {
            bpm = 70;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
        } else if (bpm === 70) {
            bpm = 80;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
        } else if (bpm === 80) {
            bpm = 90;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
        } else if (bpm === 90) {
            bpm = 100;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
        } else if (bpm === 100) {
            bpm = 110;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
        } else if (bpm === 110) {
            bpm = 120;
            Tone.Transport.bpm.value = bpm;
            Tone.Transport.start();
        } else {
            bpm = 0;
            Tone.Transport.stop();
        }

    })



    // Tone.Transport.scheduleRepeat(runSequence, '16n')


    
    // function createMetronome () {
    //     let metronome = document.querySelector(".metronome");
    //     let metronomeSlider = document.createElement("input");
    //     metronomeSlider.type = "range";
    //     metronomeSlider.classList.add(`metronome-slider`);
    //     metronome.appendChild(metronomeSlider);
    // }
    
    // createMetronome();

    // const metronomeSlider = document.body.querySelector('.metronome-slider');
    // metronomeSlider.addEventListener('change', (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value)
    // })

//     .metronome-slider {
//   margin-top: 100px;
//    transform: rotate(270deg);
//   -moz-transform: rotate(270deg); 
//   width: 100px;
// }


})