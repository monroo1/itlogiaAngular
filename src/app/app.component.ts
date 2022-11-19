import { PriceComponent } from './components/price/price.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  title = 'Аренда автомобилей';
  carName: string = '';

  goScroll({ target, car }: any) {
    target.scrollIntoView({ behavior: 'smooth' });
    if (car) {
      this.carName = car;
    }
  }
}
