import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-service-home',
  templateUrl: './service-home.component.html',
  styleUrls: ['./service-home.component.scss']
})
export class ServiceHomeComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

}
