import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  constructor() {}
  lineValid: boolean = false;

  fName: any = sessionStorage.getItem('name');
  surName: any = sessionStorage.getItem('surname');
  email: any = sessionStorage.getItem('email');
  phone: any = sessionStorage.getItem('phone-number');
  aboutMe: any = sessionStorage.getItem('about-me');
  image: any = sessionStorage.getItem('image');
  ngDoCheck() {
    if (sessionStorage.getItem('name') !== this.fName) {
      this.fName = sessionStorage.getItem('name');
    }
    if (sessionStorage.getItem('surname') !== this.surName) {
      this.surName = sessionStorage.getItem('surname');
    }
    if (sessionStorage.getItem('email') !== this.email) {
      this.email = sessionStorage.getItem('email');
    }
    if (sessionStorage.getItem('phone-number') !== this.phone) {
      this.phone = sessionStorage.getItem('phone-number');
    }
    if (sessionStorage.getItem('image') !== this.image) {
      this.image = sessionStorage.getItem('image');
    }
    if (sessionStorage.getItem('about-me') !== this.aboutMe) {
      this.aboutMe = sessionStorage.getItem('about-me');
    }
    if (sessionStorage.getItem('firstLine') == 'true') {
      this.lineValid = true;
    }
  }

  ngOnInit(): void {
    this.ngDoCheck();
  }
}
