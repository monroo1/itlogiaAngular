import {
  Component,
  Input,
  HostListener,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnChanges {
  @Input() carName: string = '';

  priceForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    this.priceForm.patchValue({ car: this.carName });
  }

  onSubmit() {
    if (this.priceForm.valid) {
      alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время!');
      this.priceForm.reset();
    }
  }

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {
      transform:
        'translate3d(' +
        (e.clientX * 0.3) / 8 +
        'px,' +
        (e.clientY * 0.3) / 8 +
        'px,0px)',
    };
  }
}
