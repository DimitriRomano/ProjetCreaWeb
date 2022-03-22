import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  type: 'user' | 'pro' = 'user';

  /**
   * index of the user or pro inside the json
   * (default: 0)
   */
  id: number = 0;

  profile = profileJson;

  constructor(private route: ActivatedRoute) {

  }

  get infos() {
    return this.profile[this.type][this.id];
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.type = data['type'];
      this.id = data['id'];
    });
  }
}
