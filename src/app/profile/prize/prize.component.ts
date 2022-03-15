import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.scss'],
})
export class PrizeComponent implements OnInit {
  @Input()
  img = '';
  constructor() {}

  ngOnInit(): void {}
}
