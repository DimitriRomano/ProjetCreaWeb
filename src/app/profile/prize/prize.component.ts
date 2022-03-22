import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.scss'],
})
export class PrizeComponent implements OnInit {
  @Input()
  img = '';

  @Input()
  locked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  get style() {
    return {
      div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '99px',
        height: '93px',
        overflow: 'hidden',
        padding: '1rem',
        background: this.locked ? '#F8F8F8' : 'white',
      },
      img: {
        display: this.locked ? 'none' : 'default',
        maxWidth: '45.26px',
        maxHeight: '45.26px',
        minWidth: '41px',
        minHeight: '41px',
      },
    };
  }
}
