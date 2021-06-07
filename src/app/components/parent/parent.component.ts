import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  favFruit: string = '';
  parentFavFruit: string = '';
  childFavFlower: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  passData2Child() {
    this.parentFavFruit = this.favFruit;
  }

  handleFlowerEvent(event: string) {
    // console.log(event);
    this.childFavFlower = event;
  }

}
