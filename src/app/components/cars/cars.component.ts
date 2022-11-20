import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  @Input()
  price!: HTMLElement;
  @Output() scroll = new EventEmitter<any>();

  goScroll({ target, car }: any) {
    this.scroll.emit({ target, car });
  }

  carsData: any;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService
      .getData(this.category)
      .subscribe((carsData) => (this.carsData = carsData));
  }

  category: string = 'sport';
  toggleCategory(category: string) {
    this.category = category;
    this.ngOnInit();
  }
}
