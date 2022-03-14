import { Component, OnInit } from '@angular/core';
import { SoundService } from '../../services';
import { Sound } from '../../models';
import { SoundInfo } from '../../models';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  private currentTime = 0;

  soundInfos: SoundInfo[];
  
  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    this.soundInfos = [];
    this.getter();
    console.log(this.soundInfos);
  }

  getter() {
    this.soundService.getSound().subscribe((data: Sound[]) => {
        data.forEach((sound) => {
          let si = new SoundInfo(new Audio(sound.path), sound);
          this.soundInfos.push(si);
      }) 
    })
  }

  play(soundInfo) {
    this.currentTime = soundInfo.audio.currentTime;
    soundInfo.audio.load();
    soundInfo.audio.currentTime = this.currentTime;
    soundInfo.audio.play();
    if(soundInfo.audio.currentTime == soundInfo.audio.duration) {
      soundInfo.audio.currentTime = 0;
    }
  }

  pause(soundInfo) {
    soundInfo.audio.pause();
  }

  stop(soundInfo) {
    soundInfo.audio.pause();
    soundInfo.audio.currentTime = 0;
  }

  setVolume(ev, soundInfo){
    soundInfo.audio.volume = ev.target.value;
  }

  currentPlaying(soundInfo) {
    if(soundInfo.audio.currentTime !== 0) {
      return true;
    }
    else {
      return false;
    }
  }

  test() {
    console.log("test");
  }

}
