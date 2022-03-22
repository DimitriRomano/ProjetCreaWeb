import { Component, Input, OnInit } from '@angular/core';
import profileJson from 'src/data/profile.json';

@Component({
  selector: 'profile-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  /**
   * type of account to display
   * (user or pro)
   * (default: user)
   */
  @Input()
  type: 'user' | 'pro' = 'user';

  /**
   * index of the user or pro inside the json
   * (default: 0)
   */
  @Input()
  id: number = 0;

  profile = profileJson;

  get infos() {
    return this.profile[this.type][this.id];
  }

  constructor() {}

  ngOnInit(): void {}
}
