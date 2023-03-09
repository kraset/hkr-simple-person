import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nice-list',
  templateUrl: './nice-list.component.html',
  styleUrls: ['./nice-list.component.scss']
})
export class NiceListComponent implements OnInit {

  @Input() color = '1';
  @Input() titleOfList = 'Unknown list';
  @Input() listOfItems = ['item 1', 'item 2', 'item 3'];
  backgroundColorClass = '';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColorClass = 'bg-color-'+this.color;
  }

}
