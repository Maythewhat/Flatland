import { Component, Input, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FlatlandService, PageInfo } from '../flatland.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() pageInfo: PageInfo;

  public isLoading: boolean;
  public steps: number[] = [];
  constructor(private route: ActivatedRoute, private flatlandService: FlatlandService, private router: Router) {
    for (let i = 1; i <= 10; i++) {
      this.steps.push(i);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params && params['id']) {
        this.goToPage(+params['id']);
      }
    });
  }

  goToPage(id: number) {
    if (id === 11 || id === 0) {
      this.router.navigate(['home']);
      return;
    }
    this.pageInfo = null;
    const pageInfo = this.flatlandService.getMetas(id);
    this.router.navigateByUrl('/page/' + id);

    if (pageInfo.loaderSource) {
      this.isLoading = true;
      this.pageInfo = pageInfo;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    } else {
      this.pageInfo = pageInfo;
    }
  }
}
