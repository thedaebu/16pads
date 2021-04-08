import * as Tone from 'tone';

const sample1 = new Tone.Player(`assets/snare_1.wav`).toDestination();
const sample2 = new Tone.Player(`assets/snare_2.wav`).toDestination();
const sample3 = new Tone.Player(`assets/clap_1.wav`).toDestination();
const sample4 = new Tone.Player(`assets/clap_2.wav`).toDestination();
const sample5 = new Tone.Player(`assets/snare_3.wav`).toDestination();
const sample6 = new Tone.Player(`assets/snare_4.wav`).toDestination();
const sample7 = new Tone.Player(`assets/clap_3.wav`).toDestination();
const sample8 = new Tone.Player(`assets/hat_1.wav`).toDestination();
const sample9 = new Tone.Player(`assets/perc_1.wav`).toDestination();
const sample10 = new Tone.Player(`assets/snap_1.wav`).toDestination();
const sample11 = new Tone.Player(`assets/kick_1.wav`).toDestination();
const sample12 = new Tone.Player(`assets/kick_2.wav`).toDestination();
const sample13 = new Tone.Player(`assets/tom_1.wav`).toDestination();
const sample14 = new Tone.Player(`assets/tom_2.wav`).toDestination();
const sample15 = new Tone.Player(`assets/kick_3.wav`).toDestination();
const sample16 = new Tone.Player(`assets/kick_4.wav`).toDestination();
const metronome = new Tone.Player(`assets/metronome.wav`).toDestination();

export { sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8, sample9, sample10, sample11, sample12, sample13, sample14, sample15, sample16, metronome };