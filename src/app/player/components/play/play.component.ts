import { Component, OnInit} from '@angular/core';
import { SoundService } from '../../services';
import { Sound } from '../../models';
import { SoundInfo } from '../../models';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit{
  private paused: boolean = false;

  private currentTime = 0;

  soundInfos: SoundInfo[];
  
  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    this.soundInfos = [];
    this.getter();
  }

  getter() {
    this.soundService.getSound().subscribe((data: Sound[]) => {
        data.forEach((sound) => {
          let si = new SoundInfo(new Audio(sound.path), sound);
          this.soundInfos.push(si);
      }) 
    })
  }

  startSound(soundInfo) {
    this.currentTime = soundInfo.audio.currentTime;
    soundInfo.audio.load();
    soundInfo.audio.currentTime = this.currentTime;
    soundInfo.audio.play();
  }

  pause(soundInfo) {
    soundInfo.audio.pause();
    this.paused = true;
  }

  stop(soundInfo) {
    soundInfo.audio.pause();
    soundInfo.audio.currentTime = 0;
  }
  loop(soundInfo) {
    soundInfo.audio.loop = true;
    this.startSound(soundInfo);
  }
  notLoop(soundInfo) {
    soundInfo.audio.loop = false;
  }
  play(soundInfo) {
    this.notLoop(soundInfo);
    if(!this.paused) {
      this.restart(soundInfo);
      this.startSound(soundInfo);
    }
    else {
      this.startSound(soundInfo);
      this.paused = false;
    }
  }
  restart(soundInfo) {
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

}
