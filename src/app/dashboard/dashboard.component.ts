import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  desktop = [
    {title: 'Card 1', cols: 2, rows: 1},
    {title: 'Card 2', cols: 1, rows: 1},
    {title: 'Card 3', cols: 1, rows: 2},
    {title: 'Card 4', cols: 1, rows: 1}
  ];

  mobile = [
    {title: 'Card 1', cols: 1, rows: 1},
    {title: 'Card 2', cols: 1, rows: 1},
    {title: 'Card 3', cols: 1, rows: 1},
    {title: 'Card 4', cols: 1, rows: 1}
  ];
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return this.desktop;
      }
      return this.mobile;
    })
  );

  remove(card): void {
    this.desktop = this.desktop.filter(item => item.title != card.title);
    this.mobile = this.mobile.filter(item => item.title != card.title);
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({matches}) => {
        if (matches) {
          return this.mobile;
        }
        return this.desktop;
      })
    )
  }

  constructor(private breakpointObserver: BreakpointObserver) {

  }
}
