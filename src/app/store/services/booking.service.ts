import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHotel, IReservation } from 'src/app/shared/interfaces';
import { delay } from 'rxjs/operators';
import { DATA } from './mock-data';

@Injectable({providedIn: 'root'})
export class BookingService {

  getHotels(): Observable<IHotel[]> {
    return of(DATA).pipe(
      delay(2000),
    );
  }

  makeReservation(data: IReservation): Observable<IReservation> {
    return of(data);
  }

}