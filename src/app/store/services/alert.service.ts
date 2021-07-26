import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AlertService {

  constructor(
    private readonly snackBar: MatSnackBar,
    private zone: NgZone,
  ) { }

  showAlert(alert: string) {
    this.zone.run(() => {
      this.snackBar.open(
        alert,
        'ERROR',
        {
          duration: 6000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: [`alert-error`],
        },
      );
    });
  }

}