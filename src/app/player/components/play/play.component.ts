import { Component, OnInit } from '@angular/core';
import { SoundService } from '../../services';
import { Sound, SoundInfo, Group } from '../../models';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  private paused: boolean = false;
  showSideBar: boolean = false;

  private currentTime = 0;

  soundNature: SoundInfo[];
  soundMusic: SoundInfo[];

  constructor(private soundService: SoundService) {}

  ngOnInit(): void {
    this.soundNature = [];
    this.soundMusic = [];
    this.getter();
  }

  getter() {
    this.soundService.getSound().subscribe((data: Group) => {
      data.nature.forEach((nature) => {
        let si = new SoundInfo(new Audio(nature.path), nature);
        this.soundNature.push(si);
      });
      data.music.forEach((music) => {
        let si = new SoundInfo(new Audio(music.path), music);
        this.soundMusic.push(si);
      });
    });
  }

  startSound(soundInfo: SoundInfo) {
    this.currentTime = soundInfo.audio.currentTime;
    soundInfo.audio.load();
    soundInfo.audio.currentTime = this.currentTime;
    soundInfo.audio.play();
  }

  pause(soundInfo: SoundInfo) {
    soundInfo.isPlaying = false;
    soundInfo.audio.pause();
    this.paused = true;
  }

  stop(soundInfo: SoundInfo) {
    this.showSideBar = false;
    soundInfo.isPlaying = false;
    soundInfo.audio.pause();
    soundInfo.audio.currentTime = 0;
  }
  loop(soundInfo: SoundInfo) {
    this.showSideBar = true;
    soundInfo.isPlaying = true;
    soundInfo.audio.loop = true;
    this.startSound(soundInfo);
  }
  notLoop(soundInfo: SoundInfo) {
    soundInfo.audio.loop = false;
  }
  play(soundInfo: SoundInfo) {
    this.showSideBar = true;
    soundInfo.isPlaying = true;
    this.notLoop(soundInfo);
    if (!this.paused) {
      this.restart(soundInfo);
      this.startSound(soundInfo);
    } else {
      this.startSound(soundInfo);
      this.paused = false;
    }
  }
  restart(soundInfo: SoundInfo) {
    soundInfo.audio.currentTime = 0;
  }

  setVolume(ev, soundInfo: SoundInfo) {
    soundInfo.audio.volume = ev.target.value;
  }
}
