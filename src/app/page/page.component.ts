import { Component, Input, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private flatlandService: FlatlandService) {
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
    this.pageInfo = null;
    const pageInfo = this.flatlandService.getMetas(id);
    if (pageInfo.loaderSource) {
      this.isLoading = true;
      this.pageInfo = pageInfo;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    } else {
      this.pageInfo = pageInfo;
    }
  }
}
