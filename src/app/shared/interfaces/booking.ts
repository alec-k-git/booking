interface IBaseBooking {
  id: number;
  from: string;
  to: string;
}

export interface IHotel extends IBaseBooking {
  capacity: number;
  price: number;
}

export interface IReservation extends IBaseBooking {
  name: string;
}
