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
  scroll!: (args: any) => void;

  goScroll(someArgs: HTMLElement) {
    this.scroll(someArgs);
  }

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = { backgroundPositionX: '0' + 0.3 * window.scrollY + 'px' };
  }
}
