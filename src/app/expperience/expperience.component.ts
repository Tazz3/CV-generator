import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expperience',
  templateUrl: './expperience.component.html',
  styleUrls: ['./expperience.component.css'],
})
export class ExpperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  localItem: any = sessionStorage.getItem('page');
  curPage: number = parseInt(this.localItem);

  prevPage() {
    return sessionStorage.setItem('page', '1');
  }

  nextPage() {
    return sessionStorage.setItem('page', '3');
  }
}
