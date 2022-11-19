import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  @Input() car: any;
  @Input()
  price!: HTMLElement;
  @Output() scroll = new EventEmitter<any>();

  goScroll(target: HTMLElement, car: any) {
    this.scroll.emit({ target, car });
  }
}
