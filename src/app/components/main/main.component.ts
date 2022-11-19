import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input()
  cars!: HTMLElement;
  @Input()
  scroll!: ({ target }: any) => void;
  goScroll(target: HTMLElement) {
    this.scroll({ target });
  }

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = { backgroundPositionX: '0' + 0.3 * window.scrollY + 'px' };
  }
}
