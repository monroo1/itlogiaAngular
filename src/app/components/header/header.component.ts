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
  scroll!: ({ target }: any) => void;

  goScroll(target: HTMLElement) {
    this.scroll({ target });
  }
}
