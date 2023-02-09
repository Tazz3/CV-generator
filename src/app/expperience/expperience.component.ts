import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expperience',
  templateUrl: './expperience.component.html',
  styleUrls: ['./expperience.component.css'],
})
export class ExpperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  localItem: any = localStorage.getItem('page');
  curPage: number = parseInt(this.localItem);

  prevPage() {
    return localStorage.setItem('page', '1');
  }

  nextPage() {
    return localStorage.setItem('page', '3');
  }
}
