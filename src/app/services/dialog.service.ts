import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingDialogComponent } from '../components/loading-dialog/loading-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialogRef: any;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialogRef = this.dialog.open(LoadingDialogComponent);
    this.dialogRef.disableClose = true;
  }

  closeDialog() {
    if (this.dialogRef != null) {
      this.dialogRef.close();
    }
  }
}
