import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BookingStore } from './actions';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    NgxsModule.forRoot([
      BookingStore,
    ], {
      developmentMode: !environment.production,
    }),
  ],
})
export class StoreModule {
}
