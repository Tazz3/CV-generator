import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  localItem: any = sessionStorage.getItem('page');
  curPage: number = parseInt(this.localItem);
  prevPage() {
    return sessionStorage.setItem('page', '2');
  }
}
