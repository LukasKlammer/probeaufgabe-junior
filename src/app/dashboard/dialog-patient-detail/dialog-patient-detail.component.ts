import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-patient-detail',
  templateUrl: './dialog-patient-detail.component.html',
  styleUrls: ['./dialog-patient-detail.component.scss']
})
export class DialogPatientDetailComponent implements OnInit {

  patient: any = '';
  i: number = 0;
  gender: string = '';

  constructor() { }


  ngOnInit(): void {
    this.translateGender();
  }

  /**
   * this function translates the english words to german expressions
   */
  private translateGender() {
    switch (this.patient.resource.gender) {
      case 'male':
        this.gender = 'männlich';
        break;
      case 'female':
        this.gender = 'weiblich';
        break;
      default:
        this.gender = '';
    }
  }

}
