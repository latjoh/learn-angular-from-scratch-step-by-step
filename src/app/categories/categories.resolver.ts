import { Injectable } from '@angular/core';

import { CategoriesService } from "../services/categories.service";

@Injectable()
export class CategoriesResolver  {

  constructor(
    private categoriesService: CategoriesService
  ) { }

  resolve() {
    return new Promise((resolve, reject) => {

      let breadcrumbs = [
        { url: '/', label: 'Categories' }
      ];

      //get categories from local json file
      this.categoriesService.getCategories()
      .then(
        categories => {
          return resolve({
            categories: categories,
            breadcrumbs: breadcrumbs
          });
        },
        err => {
          return resolve(null);
        }
      )
    });
  }
}
