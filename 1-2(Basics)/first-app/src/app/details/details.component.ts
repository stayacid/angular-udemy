import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  show: boolean = true;
  clicked: number = 0;
  clickedLog: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleShow() {
    this.show = !this.show;
    this.clickedLog.push(++this.clicked);
  }
}
