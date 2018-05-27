import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageIndexList: number[] = [];
  isLoading = true;

  constructor(private router: Router) {
    const max = 10;
    for (let i = 1; i <= max; i++) {
      this.pageIndexList.push(i);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  goPage(i: number) {
    this.router.navigate(['page', i]);
  }
}
