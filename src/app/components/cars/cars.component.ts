import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  carsData = [
    {
      image: '1.png',
      name: 'Lamborghini Huracan Spyder',
      gear: 'полный',
      engine: '5.2',
      places: 2,
    },
    {
      image: '2.png',
      name: 'Chevrolet Corvette',
      gear: 'полный',
      engine: '6.2',
      places: 2,
    },
    {
      image: '3.png',
      name: 'Ferrari California',
      gear: 'полный',
      engine: '3.9',
      places: 4,
    },
    {
      image: '4.png',
      name: 'Lamborghini Urus',
      gear: 'полный',
      engine: '4.0',
      places: 5,
    },
    {
      image: '5.png',
      name: 'Audi R8',
      gear: 'полный',
      engine: '5.2',
      places: 2,
    },
    {
      image: '6.png',
      name: 'Chevrolet Camaro',
      gear: 'полный',
      engine: '2.0',
      places: 4,
    },
  ];
}
