import { sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8, sample9, sample10, sample11, sample12, sample13, sample14, sample15, sample16 } from "./sounds";

function mouseDownSound (e) {
    e.preventDefault();
    if (e.target.id === "pad-1") {
        document.querySelector('#pad-1').classList.remove('unpressed');
        document.querySelector('#pad-1').classList.add('pressed');
        sample1.start(); 
    } else if (e.target.id === "pad-2") {
        document.querySelector('#pad-2').classList.remove('unpressed');
        document.querySelector('#pad-2').classList.add('pressed');
        sample2.start(); 
    } else if (e.target.id === "pad-3") {
        document.querySelector('#pad-3').classList.remove('unpressed');
        document.querySelector('#pad-3').classList.add('pressed');
        sample3.start(); 
    } else if (e.target.id === "pad-4") {
        document.querySelector('#pad-4').classList.remove('unpressed');
        document.querySelector('#pad-4').classList.add('pressed');
        sample4.start(); 
    } else if (e.target.id === "pad-5") {
        document.querySelector('#pad-5').classList.remove('unpressed');
        document.querySelector('#pad-5').classList.add('pressed');
        sample5.start(); 
    } else if (e.target.id === "pad-6") {
        document.querySelector('#pad-6').classList.remove('unpressed');
        document.querySelector('#pad-6').classList.add('pressed');
        sample6.start(); 
    } else if (e.target.id === "pad-7") {
        document.querySelector('#pad-7').classList.remove('unpressed');
        document.querySelector('#pad-7').classList.add('pressed');
        sample7.start(); 
    } else if (e.target.id === "pad-8") {
        document.querySelector('#pad-8').classList.remove('unpressed');
        document.querySelector('#pad-8').classList.add('pressed');
        sample8.start(); 
    } else if (e.target.id === "pad-9") {
        document.querySelector('#pad-9').classList.remove('unpressed');
        document.querySelector('#pad-9').classList.add('pressed');
        sample9.start(); 
    } else if (e.target.id === "pad-10") {
        document.querySelector('#pad-10').classList.remove('unpressed');
        document.querySelector('#pad-10').classList.add('pressed');
        sample10.start(); 
    } else if (e.target.id === "pad-11") {
        document.querySelector('#pad-11').classList.remove('unpressed');
        document.querySelector('#pad-11').classList.add('pressed');
        sample11.start(); 
    } else if (e.target.id === "pad-12") {
        document.querySelector('#pad-12').classList.remove('unpressed');
        document.querySelector('#pad-12').classList.add('pressed');
        sample12.start(); 
    } else if (e.target.id === "pad-13") {
        document.querySelector('#pad-13').classList.remove('unpressed');
        document.querySelector('#pad-13').classList.add('pressed');
        sample13.start(); 
    } else if (e.target.id === "pad-14") {
        document.querySelector('#pad-14').classList.remove('unpressed');
        document.querySelector('#pad-14').classList.add('pressed');
        sample14.start(); 
    } else if (e.target.id === "pad-15") {
        document.querySelector('#pad-15').classList.remove('unpressed');
        document.querySelector('#pad-15').classList.add('pressed');
        sample15.start(); 
    } else if (e.target.id === "pad-16") {
        document.querySelector('#pad-16').classList.remove('unpressed');
        document.querySelector('#pad-16').classList.add('pressed');
        sample16.start(); 
    }
}

function mouseUpSound (e) {
    e.preventDefault();
    if (e.target.id === "pad-1") {
        document.querySelector('#pad-1').classList.add('unpressed');
        document.querySelector('#pad-1').classList.remove('pressed');
    } else if (e.target.id === "pad-2") {
        document.querySelector('#pad-2').classList.add('unpressed');
        document.querySelector('#pad-2').classList.remove('pressed'); 
    } else if (e.target.id === "pad-3") {
        document.querySelector('#pad-3').classList.add('unpressed');
        document.querySelector('#pad-3').classList.remove('pressed');
    } else if (e.target.id === "pad-4") {
        document.querySelector('#pad-4').classList.add('unpressed');
        document.querySelector('#pad-4').classList.remove('pressed');
    } else if (e.target.id === "pad-5") {
        document.querySelector('#pad-5').classList.add('unpressed');
        document.querySelector('#pad-5').classList.remove('pressed');
    } else if (e.target.id === "pad-6") {
        document.querySelector('#pad-6').classList.add('unpressed');
        document.querySelector('#pad-6').classList.remove('pressed');
    } else if (e.target.id === "pad-7") {
        document.querySelector('#pad-7').classList.add('unpressed');
        document.querySelector('#pad-7').classList.remove('pressed');
    } else if (e.target.id === "pad-8") {
        document.querySelector('#pad-8').classList.add('unpressed');
        document.querySelector('#pad-8').classList.remove('pressed');
    } else if (e.target.id === "pad-9") {
        document.querySelector('#pad-9').classList.add('unpressed');
        document.querySelector('#pad-9').classList.remove('pressed');
    } else if (e.target.id === "pad-10") {
        document.querySelector('#pad-10').classList.add('unpressed');
        document.querySelector('#pad-10').classList.remove('pressed');
    } else if (e.target.id === "pad-11") {
        document.querySelector('#pad-11').classList.add('unpressed');
        document.querySelector('#pad-11').classList.remove('pressed');
    } else if (e.target.id === "pad-12") {
        document.querySelector('#pad-12').classList.add('unpressed');
        document.querySelector('#pad-12').classList.remove('pressed');
    } else if (e.target.id === "pad-13") {
        document.querySelector('#pad-13').classList.add('unpressed');
        document.querySelector('#pad-13').classList.remove('pressed');
    } else if (e.target.id === "pad-14") {
        document.querySelector('#pad-14').classList.add('unpressed');
        document.querySelector('#pad-14').classList.remove('pressed');
    } else if (e.target.id === "pad-15") {
        document.querySelector('#pad-15').classList.add('unpressed');
        document.querySelector('#pad-15').classList.remove('pressed');
    } else if (e.target.id === "pad-16") {
        document.querySelector('#pad-16').classList.add('unpressed');
        document.querySelector('#pad-16').classList.remove('pressed');
    }
}

export {mouseDownSound, mouseUpSound};