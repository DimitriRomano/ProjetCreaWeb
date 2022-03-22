import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cycle';
  get style() {
    return {
      display: 'flex',
      margin: '8px 6px',
      width: '25em',
      justifyContent: 'space-between',
    };
  }
}
