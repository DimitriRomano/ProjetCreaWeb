import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-double-col',
  templateUrl: './card-double-col.component.html',
  styleUrls: ['./card-double-col.component.scss']
})
export class CardDoubleColComponent {

  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() paragraphLeft?: string;
  @Input() paragraphRight?: string;
  @Input() textButton?: string;

  constructor() {
  }
}


