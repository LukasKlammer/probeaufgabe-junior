import { NgModule } from '@angular/core';
import { MaterialModule } from "../ui/material.module";
import { DashboardComponent } from "./dashboard.component";
import { CoreModule } from "../core/core-module";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class DashboardModule { }
