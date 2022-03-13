import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayComponent } from './components';
import { SoundService } from './services';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PlayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SoundService
  ]
})
export class PlayerModule { }
