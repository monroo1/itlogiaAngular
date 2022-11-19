import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  main!: HTMLElement;
  @Input()
  cars!: HTMLElement;
  @Input()
  price!: HTMLElement;
  @Input()
  scroll!: (args: any) => void;

  goScroll(someArgs: HTMLElement) {
    this.scroll(someArgs);
  }
}
