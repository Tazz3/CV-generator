import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  constructor() {}

  localItem: any = localStorage.getItem('page');
  curPage: number = parseInt(this.localItem);

  pageChange() {
    return localStorage.setItem('page', '2');
  }

  ngOnInit(): void {}
}
