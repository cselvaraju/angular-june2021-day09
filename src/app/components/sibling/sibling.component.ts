import { Component, OnInit } from '@angular/core';

import { DishService } from "../../services/dish.service";

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  constructor(private dishService: DishService) { }

  // childFavDish: string = this.dishService.getFavouriteDish();
  childFavDish: string = this.dishService.favouriteDish;

  ngOnInit(): void {
    // setInterval(
    //   () => this.childFavDish = this.dishService.getFavouriteDish(),
    //   1000
    // );
  }

}
