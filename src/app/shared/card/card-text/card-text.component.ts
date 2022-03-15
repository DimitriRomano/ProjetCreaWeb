import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss']
})
export class CardTextComponent implements OnInit {

  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() paragraph?: string;
  @Input() textButton?: string;
  @Input() image?: string;

  get style() {
    return {
      textAlign: this.paragraph ? 'left' : 'center',
      alignItems: this.paragraph ? 'start' : 'center',
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
