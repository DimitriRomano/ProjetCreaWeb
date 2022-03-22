import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  img: any;
  type: any;

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
  }

  get url() {
    return `profile/${this.type}/0`
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.img = data['image'];
      this.type = data['type']
    })
  }

}
