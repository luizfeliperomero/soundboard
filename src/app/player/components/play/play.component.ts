import { Component, OnInit } from '@angular/core';
import { SoundService } from '../../services';
import { Sound } from '../../models';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  private currentTime = 0;

  audio: HTMLAudioElement[];
  
  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    this.audio = [];
    this.getter();
  }

  getter() {
    this.soundService.getSound().subscribe((data: Sound[]) => {
        data.forEach((sound) => {
        this.audio.push(new Audio(sound.path));
      }) 
    })
  }

  play(sound) {
    this.currentTime = sound.currentTime;
    sound.load();
    sound.currentTime = this.currentTime;
    sound.play();
  }

  pause(sound) {
    sound.pause();
  }

  stop(sound) {
    sound.pause();
    sound.currentTime = 0;
  }

  setVolume(ev, sound){
    sound.volume = ev.target.value;
  }

}
