import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

ActivatedRoute

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  img: any;

  constructor(public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.img = data['image'];
    })
  }

}
