import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  defaultColor = '#90caf9';
  defaultRadius = '8px';
  @Input()
  click() {}

  @Input()
  text: string = 'button';

  @Input()
  variant: 'text' | 'contained' | 'outlined' = 'contained';

  @Input()
  disabled: boolean = false;

  @Input()
  respectCase: boolean = false;

  @Input()
  color: string = this.defaultColor;

  @Input()
  borderRadius: string = this.defaultRadius;

  @Input()
  fullWidth: boolean = false;

  hover = false;

  ngOnInit(): void {}

  get style() {
    const usedColor = CSS.supports('color', this.color)
      ? this.color
      : this.defaultColor;
    const usedBorderRadius = CSS.supports('borderRadius', this.borderRadius)
      ? this.borderRadius
      : this.defaultRadius;
    return {
      color: this.variant === 'contained' ? '#F7F7F7' : usedColor,
      border: this.variant === 'outlined' ? '1px solid' : 'none',
      borderColor: usedColor,
      backgroundColor: this.variant === 'contained' ? usedColor : 'none',
      borderRadius: usedBorderRadius,
      textTransform: this.respectCase ? 'none' : 'uppercase',
      cursor: 'pointer',
      padding: '6px 8px',
      width: 'fit-content',
      filter: this.hover ? 'brightness(110%)' : 'none',
    };
  }
}
