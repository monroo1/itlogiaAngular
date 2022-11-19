import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PriceComponent } from './price.component';

@NgModule({
  imports: [ReactiveFormsModule],
  bootstrap: [PriceComponent],
})
export class PriceModule {}
