import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // or styles: [`h3 { color: blue}`]
})
export class AppComponent {
  name = 'first-app';
}
