import { Component, OnInit } from '@angular/core';
import { SoundService } from '../../services';
import { Sound } from '../../models';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  audio: HTMLAudioElement[];
  
  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    this.audio = [];
    this.getter();
  }

  getter() {
    this.soundService.getSound().subscribe((data: Sound[]) => {
        data.forEach((sound) => {
        this.audio.push(new Audio("http://localhost:4200/" + sound.path));
      }) 
    })
  }

  play(sound) {
    sound.load();
    sound.play();
    console.log('Play works');
  }

  pause(sound) {
    sound.pause();
    console.log('Pause works');
  }

  stop(sound) {
    sound.pause();
    sound.currentTime = 0;
    console.log('stop works');
  }

  setVolume(ev, sound){
    sound.volume = ev.target.value;
    console.log(ev.target.value);
  }

}
