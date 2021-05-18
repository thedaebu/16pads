import * as Tone from 'tone';

const sample1 = new Tone.Player(`assets/samples/snare_1.wav`).toDestination();
const sample2 = new Tone.Player(`assets/samples/snare_2.wav`).toDestination();
const sample3 = new Tone.Player(`assets/samples/clap_1.wav`).toDestination();
const sample4 = new Tone.Player(`assets/samples/clap_2.wav`).toDestination();
const sample5 = new Tone.Player(`assets/samples/snare_3.wav`).toDestination();
const sample6 = new Tone.Player(`assets/samples/snare_4.wav`).toDestination();
const sample7 = new Tone.Player(`assets/samples/hat_1.wav`).toDestination();
const sample8 = new Tone.Player(`assets/samples/hat_2.wav`).toDestination();
const sample9 = new Tone.Player(`assets/samples/tom_1.wav`).toDestination();
const sample10 = new Tone.Player(`assets/samples/snap_1.wav`).toDestination();
const sample11 = new Tone.Player(`assets/samples/kick_1.wav`).toDestination();
const sample12 = new Tone.Player(`assets/samples/kick_2.wav`).toDestination();
const sample13 = new Tone.Player(`assets/samples/siren_1.wav`).toDestination();
const sample14 = new Tone.Player(`assets/samples/scratch_1.wav`).toDestination();
const sample15 = new Tone.Player(`assets/samples/kick_3.wav`).toDestination();
const sample16 = new Tone.Player(`assets/samples/kick_4.wav`).toDestination();
const metronome = new Tone.Player(`assets/samples/metronome.wav`).toDestination();

export { sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8, sample9, sample10, sample11, sample12, sample13, sample14, sample15, sample16, metronome };