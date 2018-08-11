import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  counter = 0;

  incr(): void {
    this.counter++;
  }

  decr(): void {
    this.counter--;
  }
}
