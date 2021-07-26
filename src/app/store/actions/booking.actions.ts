import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Action, State, StateContext } from '@ngxs/store';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IHotel, IReservation } from 'src/app/shared/interfaces';
import { AlertService, BookingService } from '../services';

export class GetHotels {
  static readonly type = '[Booking] Get Hotels';
}

export class MakeReservation {
  static readonly type = '[Booking] Make Reservation';

  constructor(public payload: IReservation) { }
}

export interface BookingState {
  loading: boolean;
  hotels: IHotel[];
}

@State<BookingState>({
  name: 'booking',
  defaults: {
    loading: false,
    hotels: [],
  },
})
@Injectable()
export class BookingStore {
  constructor(
    private readonly bookingService: BookingService,
    private readonly alertService: AlertService,
    private readonly dialog: MatDialog,
  ) { }

  @Action(GetHotels)
  getHotels(ctx: StateContext<BookingState>) {
    ctx.patchState({ loading: true });
    return this.bookingService.getHotels().pipe(
      tap(hotels => {
        ctx.patchState({
          hotels,
          loading: false,
        });
      }),
      catchError(() => {
        ctx.patchState({
          hotels: [],
          loading: false,
        });
        this.alertService.showAlert('Something went wrong');
        return of(true);
      }),
    );
  };

  @Action(MakeReservation)
  makeReservation(ctx: StateContext<BookingState>, action: MakeReservation) {
    return this.bookingService.makeReservation(action.payload).pipe(
      tap(reservation => {
        this.dialog.closeAll();
        // some logic here
      }),
      catchError(() => {
        this.alertService.showAlert('Something went wrong');
        return of(true);
      }),
    );
  };

}
