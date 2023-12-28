import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<p>product works!</p>`,
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    console.log('product');
  }
}
