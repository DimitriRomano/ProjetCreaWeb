import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
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
  color: string = '#a1ce97';

  @Input()
  borderRadius: string = '8px';

  @Input()
  fullWidth: boolean = false;

  ngOnInit(): void {}

  get style() {
    const usedColor = CSS.supports('color', this.color)
      ? this.color
      : '#a1ce97';
    const usedBorderRadius = CSS.supports('borderRadius', this.borderRadius)
      ? this.borderRadius
      : '8px';
    return {
      color: this.variant === 'contained' ? '#818181' : usedColor,
      border: this.variant === 'outlined' ? '1px solid' : 'none',
      borderColor: usedColor,
      backgroundColor: this.variant === 'contained' ? usedColor : 'none',
      borderRadius: usedBorderRadius,
      textTransform: this.respectCase ? 'none' : 'uppercase',
      cursor: 'pointer',
      padding: '6px 8px',
      width: 'fit-content',
    };
  }
}
