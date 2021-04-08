import { sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8, sample9, sample10, sample11, sample12, sample13, sample14, sample15, sample16 } from "./sounds";

function keyDownSound (e) {
        e.preventDefault();
        if (e.keyCode === 49) { 
            document.querySelector('#pad-1').classList.remove('unpressed');
            document.querySelector('#pad-1').classList.add('pressed');
            sample1.start();         
        } else if (e.keyCode === 50) {
            document.querySelector('#pad-2').classList.remove('unpressed');
            document.querySelector('#pad-2').classList.add('pressed');
            sample2.start();
        } else if (e.keyCode === 51) {
            document.querySelector('#pad-3').classList.remove('unpressed');
            document.querySelector('#pad-3').classList.add('pressed');
            sample3.start();
        } else if (e.keyCode === 52) {
            document.querySelector('#pad-4').classList.remove('unpressed');
            document.querySelector('#pad-4').classList.add('pressed');
            sample4.start();
        } else if (e.keyCode === 81) {
            document.querySelector('#pad-5').classList.remove('unpressed');
            document.querySelector('#pad-5').classList.add('pressed');
            sample5.start();
        } else if (e.keyCode === 87) {
            document.querySelector('#pad-6').classList.remove('unpressed');
            document.querySelector('#pad-6').classList.add('pressed');
            sample6.start();
        } else if (e.keyCode === 69) {
            document.querySelector('#pad-7').classList.remove('unpressed');
            document.querySelector('#pad-7').classList.add('pressed');
            sample7.start();
        } else if (e.keyCode === 82) {
            document.querySelector('#pad-8').classList.remove('unpressed');
            document.querySelector('#pad-8').classList.add('pressed');
            sample8.start();
        } else if (e.keyCode === 65) {
            document.querySelector('#pad-9').classList.remove('unpressed');
            document.querySelector('#pad-9').classList.add('pressed');
            sample9.start();
        } else if (e.keyCode === 83) {
            document.querySelector('#pad-10').classList.remove('unpressed');
            document.querySelector('#pad-10').classList.add('pressed');
            sample10.start();
        } else if (e.keyCode === 68) {
            document.querySelector('#pad-11').classList.remove('unpressed');
            document.querySelector('#pad-11').classList.add('pressed');
            sample11.start();
        } else if (e.keyCode === 70) {
            document.querySelector('#pad-12').classList.remove('unpressed');
            document.querySelector('#pad-12').classList.add('pressed');
            sample12.start();
        } else if (e.keyCode === 90) {
            document.querySelector('#pad-13').classList.remove('unpressed');
            document.querySelector('#pad-13').classList.add('pressed');
            sample13.start();
        } else if (e.keyCode === 88) {
            document.querySelector('#pad-14').classList.remove('unpressed');
            document.querySelector('#pad-14').classList.add('pressed');
            sample14.start();
        } else if (e.keyCode === 67) {
            document.querySelector('#pad-15').classList.remove('unpressed');
            document.querySelector('#pad-15').classList.add('pressed');
            sample15.start();
        } else if (e.keyCode === 86) {
            document.querySelector('#pad-16').classList.remove('unpressed');
            document.querySelector('#pad-16').classList.add('pressed');
            sample16.start();
        }
    }

function keyUpSound (e) {
        e.preventDefault();
        if (e.keyCode === 49) { 
            document.querySelector('#pad-1').classList.add('unpressed');
            document.querySelector('#pad-1').classList.remove('pressed');  
        } else if (e.keyCode === 50) {
            document.querySelector('#pad-2').classList.add('unpressed');
            document.querySelector('#pad-2').classList.remove('pressed');
        } else if (e.keyCode === 51) {
            document.querySelector('#pad-3').classList.add('unpressed');
            document.querySelector('#pad-3').classList.remove('pressed');
        } else if (e.keyCode === 52) {
            document.querySelector('#pad-4').classList.add('unpressed');
            document.querySelector('#pad-4').classList.remove('pressed');
        } else if (e.keyCode === 81) {
            document.querySelector('#pad-5').classList.add('unpressed');
            document.querySelector('#pad-5').classList.remove('pressed');
        } else if (e.keyCode === 87) {
            document.querySelector('#pad-6').classList.add('unpressed');
            document.querySelector('#pad-6').classList.remove('pressed');
        } else if (e.keyCode === 69) {
            document.querySelector('#pad-7').classList.add('unpressed');
            document.querySelector('#pad-7').classList.remove('pressed');
        } else if (e.keyCode === 82) {
            document.querySelector('#pad-8').classList.add('unpressed');
            document.querySelector('#pad-8').classList.remove('pressed');
        } else if (e.keyCode === 65) {
            document.querySelector('#pad-9').classList.add('unpressed');
            document.querySelector('#pad-9').classList.remove('pressed');
        } else if (e.keyCode === 83) {
            document.querySelector('#pad-10').classList.add('unpressed');
            document.querySelector('#pad-10').classList.remove('pressed');
        } else if (e.keyCode === 68) {
            document.querySelector('#pad-11').classList.add('unpressed');
            document.querySelector('#pad-11').classList.remove('pressed');
        } else if (e.keyCode === 70) {
            document.querySelector('#pad-12').classList.add('unpressed');
            document.querySelector('#pad-12').classList.remove('pressed');
        } else if (e.keyCode === 90) {
            document.querySelector('#pad-13').classList.add('unpressed');
            document.querySelector('#pad-13').classList.remove('pressed');
        } else if (e.keyCode === 88) {
            document.querySelector('#pad-14').classList.add('unpressed');
            document.querySelector('#pad-14').classList.remove('pressed');
        } else if (e.keyCode === 67) {
            document.querySelector('#pad-15').classList.add('unpressed');
            document.querySelector('#pad-15').classList.remove('pressed');
        } else if (e.keyCode === 86) {
            document.querySelector('#pad-16').classList.add('unpressed');
            document.querySelector('#pad-16').classList.remove('pressed');
        }
    }

export {keyDownSound, keyUpSound};