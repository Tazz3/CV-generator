import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  myForm: FormGroup | undefined;
  count: number = 1;
  degrees: any[] = [];

  degreesEdu: any[] = [
    {
      institute: '',
      degree: '',
      due_date: null,
      description: '',
    },
  ];
  tempEduObj = {
    institute: '',
    degree: '',
    due_date: null,
    description: '',
  };
  degree: string[] = [];

  private degUrl = 'https://resume.redberryinternship.ge/api/degrees';

  getDegrees() {
    return this.http.get(this.degUrl);
  }

  addCounts() {
    this.count++;

    this.degreesEdu.push(this.tempEduObj);
    let arrayAsString = JSON.stringify(this.degreesEdu);
    sessionStorage.setItem('education', arrayAsString);
    arrayAsString = sessionStorage.getItem('education');
    this.degreesEdu = JSON.parse(arrayAsString);
  }

  reFreshing() {
    sessionStorage.clear();
  }

  finish() {
    console.log(this.myForm.valid);
    sessionStorage.setItem('finish', 'true');
  }

  ngOnInit(): void {
    this.http.get(this.degUrl).subscribe((x: any) => {
      this.degrees = Object(x);
      this.degrees.forEach((element: any) => {
        this.degree.push(element['title']);
      });

      console.log(this.degree);
    });

    this.myForm = this.fb.group({
      institute: ['', [Validators.required, Validators.minLength(2)]],

      degree: ['', [Validators.required]],
      due_date: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  setToSessionEdu() {
    let arrayAsString = JSON.stringify(this.degreesEdu);
    sessionStorage.setItem('education', arrayAsString);
  }

  localItem: any = sessionStorage.getItem('page');
  curPage: number = parseInt(this.localItem);
  prevPage() {
    return sessionStorage.setItem('page', '2');
  }
}
