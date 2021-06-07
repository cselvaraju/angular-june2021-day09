import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";

import { DishService } from "../../services/dish.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() favFruitFromParent: string = '';
  @Output() flowerEvent: EventEmitter<string> = new EventEmitter<string>();

  favFlower: string = '';
  favDish: string = '';

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
  }

  sendDataToParent() {
    this.flowerEvent.emit(this.favFlower);
  }

  sendDataToSibling() {
    this.dishService.setFavouriteDish(this.favDish);
  }
}
