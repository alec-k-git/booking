import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { IHotel, IReservation } from 'src/app/shared/interfaces';
import * as actions from '../actions/booking.actions';

@Injectable({ providedIn: 'root' })
export class BookingFacade {

  loading$ = this.store.select<boolean>(state => state.booking.loading);
  hotels$ = this.store.select<IHotel[]>(state => state.booking.hotels);

  constructor(
    private readonly store: Store,
  ) { }

  getHotels() {
    this.store.dispatch(new actions.GetHotels());
  }

  makeReservation(data: IReservation) {
    this.store.dispatch(new actions.MakeReservation(data));
  }

}
