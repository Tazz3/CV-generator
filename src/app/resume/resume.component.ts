import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  constructor(private router: Router) {
    this.pageCheck();
  }
  localS: any = '';

  pageNum: number | undefined;
  pageCheck() {
    this.localS = localStorage.getItem('page');
    this.pageNum = parseInt(this.localS);
  }

  ngDoCheck() {
    if (localStorage.getItem('page') !== this.localS) {
      this.pageCheck();
    }
  }

  ngOnInit(): void {
    this.pageCheck();
  }
}
