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
    this.localS = sessionStorage.getItem('page');
    this.pageNum = parseInt(this.localS);
  }

  ngDoCheck() {
    if (sessionStorage.getItem('page') !== this.localS) {
      this.pageCheck();
      localStorage.clear();
    }
  }

  ngOnInit(): void {
    this.pageCheck();
  }
}
