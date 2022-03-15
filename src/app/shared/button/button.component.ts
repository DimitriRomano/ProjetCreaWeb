import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  defaultColor = '#90caf9';
  defaultRadius = '38px';
  @Input()
  click() {}

  /**
   * text displayed
   * default : button
   */
  @Input()
  text: string = 'Button';

  /**
   * variant : text, contained or outlined
   * (default : contained)
   */
  @Input()
  variant: 'text' | 'contained' | 'outlined' = 'contained';

  /**
   * font size of text
   * (default 30px)
   */
  @Input()
  fontSize = '30px';

  /**
   * padding block
   * (default 16px)
   */
  @Input()
  py = '16px';

  /**
   * padding inline
   * (default 64px)
   */
  @Input()
  px = '64px';

  /**
   * disabled
   * (default : false)
   */
  @Input()
  disabled: boolean = false;

  /**
   * if the text respect the given case or uppercase
   * (default false)
   */
  @Input()
  uppercase: boolean = false;

  /**
   * color of the button (text : "text", outlined:"border and text", contained:"background")
   * (default :#90caf9)
   */
  @Input()
  color: string = this.defaultColor;

  /**
   * borderRadius
   * (default 8px)
   */
  @Input()
  borderRadius: string = this.defaultRadius;

  /**
   * if the button must extend to maxWidth
   * (default : false)
   */
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
      textTransform: this.uppercase ? 'uppercase' : 'none',
      cursor: 'pointer',
      paddingInline: this.px,
      paddingBlock: this.py,
      width: this.fullWidth ? 'calc(100% - 16px)' : 'fit-content',
      filter: this.hover ? 'brightness(110%)' : 'none',
      textAlign: 'center',
      fontSize: this.fontSize,
    };
  }
}
