import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit, OnChanges {
  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() categories: {title: string}[];

  constructor() { }

  ngOnChanges (changes: SimpleChanges) {
    const name: SimpleChange = changes.name;
  }

  ngOnInit() {
  }

}
