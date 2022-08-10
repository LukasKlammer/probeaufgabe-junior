import { NgModule } from '@angular/core';
import { MaterialModule } from "../ui/material.module";
import { DashboardComponent } from "./dashboard.component";
import { CoreModule } from "../core/core-module";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    MatCardModule
  ]
})
export class DashboardModule { }
