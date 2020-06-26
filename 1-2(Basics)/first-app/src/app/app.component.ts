import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // or selector: '[app-servers],
  // or selector: '.app-servers,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // or styles: [`h3 { color: blue}`]
})
export class AppComponent {
  name = 'first-app';
}
