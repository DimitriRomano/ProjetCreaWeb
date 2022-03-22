import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  @Input()
  img = '';

  @Input()
  w = '256px';

  @Input()
  h = this.w;

  constructor() {}

  ngOnInit(): void {}
}
