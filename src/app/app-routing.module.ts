import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsContainer } from './booking/hotels/hotels.container';

const routes: Routes = [
  {
    path: '',
    component: HotelsContainer,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
