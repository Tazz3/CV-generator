import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  constructor(private http: HttpClient) {}
  lineValid: boolean = false;
  secondLine: boolean = false;
  finishLine: boolean = false;

  fName: any = sessionStorage.getItem('name');
  surName: any = sessionStorage.getItem('surname');
  email: any = sessionStorage.getItem('email');
  phone: any = sessionStorage.getItem('phone_number');
  aboutMe: any = sessionStorage.getItem('about_me');
  image: any = sessionStorage.getItem('image');
  arrayAsString: any = sessionStorage.getItem('myArray');
  finishedProd = {};
  finishedProds: any = {};

  experience: any[] = JSON.parse(this.arrayAsString);
  eduArrayAsString: any = sessionStorage.getItem('education');
  education: any[] = JSON.parse(this.eduArrayAsString);

  dataURItoBlob(dataURI: string) {
    const byteString = Buffer.from(dataURI.split(',')[1], 'base64').toString(
      'binary'
    );
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], { type: mimeString });
  }

  itsTime() {
    this.finishedProd['name'] = sessionStorage.getItem('name');
    this.finishedProd['surname'] = sessionStorage.getItem('surname');
    this.finishedProd['email'] = sessionStorage.getItem('email');
    this.finishedProd['phone_number'] = sessionStorage.getItem('phone_number');
    this.finishedProd['experiences'] = JSON.parse(
      sessionStorage.getItem('myArray')
    );
    this.finishedProd['educations'] = JSON.parse(
      sessionStorage.getItem('education')
    );
    const image = sessionStorage.getItem('image');

    const formData = new FormData();
    const blob = new Blob([image], { type: 'image/jpeg' });

    formData.append('image', blob, 'image.jpg');
    console.log(blob);

    console.log(formData);
    this.finishedProd['image'] = formData;
    this.finishedProd['about_me'] = sessionStorage.getItem('about_me');
    this.finishedProds = JSON.stringify(this.finishedProd);
    console.log(this.finishedProds);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post(
        'https://resume.redberryinternship.ge/api/cvs',
        this.finishedProds,
        { headers }
      )
      .subscribe(
        (data) => {
          console.log('Success!', data);
        },
        (error) => {
          console.error('Error!', error);
        }
      );
  }

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
    if (sessionStorage.getItem('phone_number') !== this.phone) {
      this.phone = sessionStorage.getItem('phone_number');
    }
    if (sessionStorage.getItem('image') !== this.image) {
      this.image = sessionStorage.getItem('image');
    }
    if (sessionStorage.getItem('about_me') !== this.aboutMe) {
      this.aboutMe = sessionStorage.getItem('about_me');
    }
    if (sessionStorage.getItem('firstLine') == 'true') {
      this.lineValid = true;
    }
    if (sessionStorage.getItem('secondLine') == 'true') {
      this.secondLine = true;
    }
    if (sessionStorage.getItem('finish') == 'true') {
      this.itsTime();
    }
    if (sessionStorage.getItem('myArray') != this.arrayAsString) {
      this.arrayAsString = sessionStorage.getItem('myArray');

      this.experience = JSON.parse(this.arrayAsString);
      console.log(this.experience[0]);
    }
    if (sessionStorage.getItem('education') != this.eduArrayAsString) {
      this.eduArrayAsString = sessionStorage.getItem('education');

      this.education = JSON.parse(this.eduArrayAsString);
      console.log(this.education);
    }
  }

  ngOnInit(): void {
    this.ngDoCheck();
  }
}
