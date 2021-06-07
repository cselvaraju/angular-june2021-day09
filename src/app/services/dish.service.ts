import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  favouriteDish: string = '';

  constructor() { }

  getFavouriteDish(): string {
    return this.favouriteDish;
  }

  setFavouriteDish(dish: string) {
    this.favouriteDish = dish;
  }
}
