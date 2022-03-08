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
    return {
      color: this.variant === 'contained' ? '#F7F7F7' : this.color,
      border: this.variant === 'outlined' ? '1px solid' : 'none',
      borderColor: this.color,
      backgroundColor: this.variant === 'contained' ? this.color : 'none',
      borderRadius: this.borderRadius,
      textTransform: this.respectCase ? 'none' : 'uppercase',
      cursor: 'pointer',
      padding: '6px 8px',
      width: this.fullWidth ? 'calc(100% - 16px)' : 'fit-content',
      filter: this.hover ? 'brightness(110%)' : 'none',
      textAlign: 'center',
    };
  }
}
