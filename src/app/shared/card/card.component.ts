import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  backgroundColor = '';

  @Input()
  height = '90%';

  @Input()
  width = '';

  @Input()
  margin = '1rem 2rem';

  constructor() {}

  ngOnInit(): void {}

  get style() {
    return {
      display: 'flex',
      justifyContent: 'center',
      margin: this.margin,
      boxShadow: '0px 10px 20px #74747429',
      borderRadius: 4,
      width: this.width,
      height: this.height,
    };
  }
}
