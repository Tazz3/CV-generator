import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  pageNumb: number = 1;
  sendPage(pageNum: any) {
    console.log('session storage should work');

    pageNum = pageNum.toString();
    return sessionStorage.setItem('page', pageNum);
  }
}
