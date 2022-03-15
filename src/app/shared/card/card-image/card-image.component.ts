import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss',]
})
export class CardImageComponent implements OnInit {

  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() paragraph?: string;
  @Input() textButton?: string;
  @Input() nameImage?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
