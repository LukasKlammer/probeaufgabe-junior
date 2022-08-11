import { Component } from '@angular/core';
import { PatientService } from "../core/services/patient-service";
import { Observable } from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import { DialogPatientDetailComponent } from './dialog-patient-detail/dialog-patient-detail.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  // patients$: Observable<any>;
  patients: any[] = [];


  constructor(private readonly patientService: PatientService, public dialog: MatDialog) {
    // this.patients$ = this.patientService.get();  // not more needed: we subscribe the observable, so we have no async in the
    this.patientService.get().subscribe(pat => { // the statements in {} are called everytime when data changes
      this.patients = pat.entry; // we need only the data in the entry named array, placed in the response from server
    });
  }

  openDialog(patient:any, i: number): void {
    const dialog = this.dialog.open(DialogPatientDetailComponent);
    dialog.componentInstance.patient = patient; // overgives the choosen patient to the dialog
    dialog.componentInstance.i = i; // overgives the choosen patient number to the dialog
  }
}
