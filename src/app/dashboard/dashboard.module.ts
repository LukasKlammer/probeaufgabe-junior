import { NgModule } from '@angular/core';
import { MaterialModule } from "../ui/material.module";
import { DashboardComponent } from "./dashboard.component";
import { CoreModule } from "../core/core-module";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPatientDetailComponent } from './dialog-patient-detail/dialog-patient-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    DashboardComponent,
    DialogPatientDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class DashboardModule { }
