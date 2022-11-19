import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  @Input() car: any;
  @Input()
  price!: HTMLElement;
  @Input()
  scroll!: (args: any, car: any) => void;

  goScroll(someArgs: HTMLElement, car: any) {
    this.scroll(someArgs, car);
  }
}
