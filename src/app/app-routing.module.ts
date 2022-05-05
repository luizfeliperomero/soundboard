import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupComponent, SidebarComponent } from './player/components';

const routes: Routes = [
  { path: '', component: GroupComponent, outlet: 'group' },
  { path: '', component: SidebarComponent, outlet: 'sidebar' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
