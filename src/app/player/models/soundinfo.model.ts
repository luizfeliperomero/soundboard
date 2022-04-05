import { Sound } from './';

export class SoundInfo {
  audio: HTMLAudioElement;
  sound: Sound;
  isPlaying: boolean;

  constructor(audio: HTMLAudioElement, sound: Sound) {
    this.isPlaying = false;
    this.audio = audio;
    this.sound = sound;
  }
}
