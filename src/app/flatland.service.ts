import { Injectable } from '@angular/core';

const IMGBASE = 'assets/img/';

@Injectable({
  providedIn: 'root'
})
export class FlatlandService {
  constructor() {}

  getMetas(page: number) {
    const meta = METAS[page];
    this.fillMetas(meta, page);
    return meta;
  }

  private fillMetas(meta: PageInfo, pageNumber: number) {
    meta.pageNumber = pageNumber;
    if (meta.pageNumber !== 1) {
      meta.loaderSource = `${IMGBASE}loader${pageNumber}.svg`;
    } else {
      meta.light = true;
    }

    meta.imageSource = `${IMGBASE}page${pageNumber}.svg`;
  }
}

const METAS: { [index: number]: PageInfo } = {
  1: {
    title: 'World 1 : Lineland'
  },
  2: {
    title: 'World 1 : Lineland'
  },
  3: {
    title: 'World 2 : Flatland'
  },
  4: {
    title: 'World 2 : Flatland'
  },
  5: {
    title: 'World 3 : Spaceland'
  },
  6: {
    title: 'World 3 : Spaceland'
  },
  7: {
    title: 'World 3 : Spaceland'
  },
  8: {
    title: 'World 3 : Spaceland'
  },
  9: {
    title: 'World 4 : Hyperspaceland'
  },
  10: {
    title: 'World 4 : Hyperspaceland'
  }
};

export interface PageInfo {
  title: string;
  pageNumber?: number;
  loaderSource?: string;
  imageSource?: string;
  light?: boolean;
}
