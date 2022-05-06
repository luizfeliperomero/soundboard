import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  PlayComponent,
  GroupComponent,
  SidebarComponent,
  NavbarComponent,
} from './components';
import { SoundService } from './services';

@NgModule({
  declarations: [
    PlayComponent,
    GroupComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [SoundService],
  exports: [PlayComponent, GroupComponent, SidebarComponent, NavbarComponent],
})
export class PlayerModule {}
