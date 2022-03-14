import { Sound } from './';

export class SoundInfo {
  audio: HTMLAudioElement;
  sound: Sound;

  constructor(audio, sound) {
    this.audio = audio;
    this.sound = sound;
  }
}

