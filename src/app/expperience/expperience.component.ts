import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-expperience',
  templateUrl: './expperience.component.html',
  styleUrls: ['./expperience.component.css'],
})
export class ExpperienceComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      position: ['', [Validators.required, Validators.minLength(2)]],
      employer: ['', [Validators.required, Validators.minLength(2)]],
      start_date: ['', [Validators.required]],
      due_date: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.checking();
  }

  setToSession() {
    let arrayAsString = JSON.stringify(this.expArray);
    sessionStorage.setItem('myArray', arrayAsString);
  }

  myForm: FormGroup | undefined;
  count: number = 1;
  expArray: any[] = [
    {
      position: '',
      employer: '',
      start_date: null,
      due_date: null,
      description: '',
    },
  ];
  tempPosition: string;
  tempObj = {
    position: '',
    employer: '',
    start_date: null,
    due_date: null,
    description: '',
  };
  tempArray: any[] = [];
  checking() {
    console.log(this.expArray);
    console.log(this.tempObj);
  }

  reFreshing() {
    sessionStorage.clear();
  }

  reCheck() {
    let arrayAsString = sessionStorage.getItem('myArray');

    this.expArray = JSON.parse(arrayAsString);
  }

  addCount() {
    this.count++;

    this.expArray.push(this.tempObj);
    let arrayAsString = JSON.stringify(this.expArray);
    sessionStorage.setItem('myArray', arrayAsString);
    arrayAsString = sessionStorage.getItem('myArray');
    this.expArray = JSON.parse(arrayAsString);
  }

  localItem: any = sessionStorage.getItem('page');
  curPage: number = parseInt(this.localItem);

  prevPage() {
    return sessionStorage.setItem('page', '1');
  }

  nextPage() {
    sessionStorage.setItem('secondLine', 'true');
    return sessionStorage.setItem('page', '3');
  }
}
