import "./styles/reset.scss";
import "./styles/index.scss";
import * as Tone from 'tone';
import {keyDownSound, keyUpSound} from "./key_actions";
import { mouseDownSound, mouseUpSound } from "./mouse_actions";
import { metronome } from "./sounds";

window.addEventListener("DOMContentLoaded", () => {
    
    window.addEventListener("keydown", keyDownSound);
    window.addEventListener("keyup", keyUpSound);
    window.addEventListener("mousedown", mouseDownSound);
    window.addEventListener("mouseup", mouseUpSound);

    function createPads() {
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
    };

    createPads();

    let bpmShow = document.querySelector(".bpm-show"); 
    let bpm = 120;
    let bpmNumber = document.createElement('p');
    bpmNumber.innerHTML = `${bpm}`;
    bpmShow.appendChild(bpmNumber);
    
    let bpmLeft = document.querySelector(".bpm-left");
    bpmLeft.addEventListener("click", () => {
        if (bpm === 120) {
            bpm = 110;
        } else if (bpm === 110) {
            bpm = 100;
        } else if (bpm === 100) {
            bpm = 90;
        } else if (bpm === 90) {
            bpm = 80;
        } else if (bpm === 80) {
            bpm = 70;
        }
        bpmNumber.innerHTML = `${bpm}`;
        Tone.Transport.bpm.value = bpm;
    });

    let bpmRight = document.querySelector(".bpm-right");
    bpmRight.addEventListener("click", () => {
        if (bpm === 70) {
            bpm = 80;
        } else if (bpm === 80) {
            bpm = 90;
        } else if (bpm === 90) {
            bpm = 100;
        } else if (bpm === 100) {
            bpm = 110;
        } else if (bpm === 110) {
            bpm = 120;
        }
        bpmNumber.innerHTML = `${bpm}`;
        Tone.Transport.bpm.value = bpm;
    });

    let metronomePlayPause = document.querySelector(".metronome-playpause");
    let playStatus = "off";
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
    });
});