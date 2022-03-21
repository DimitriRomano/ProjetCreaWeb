import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-connection-choices',
  templateUrl: './connection-choices.component.html',
  styleUrls: ['./connection-choices.component.scss']
})
export class ConnectionChoicesComponent implements OnInit {

  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() textButton?: string;

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

}
