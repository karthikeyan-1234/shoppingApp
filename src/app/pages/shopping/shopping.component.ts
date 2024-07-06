import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  products = [
    { image: 'assets/product1.png', name: 'Product 1', price: 29.99 },
    { image: 'assets/product2.png', name: 'Product 2', price: 49.99 },
    { image: 'assets/product3.png', name: 'Product 3', price: 19.99 },
    { image: 'assets/product4.png', name: 'Product 1', price: 29.99 },
    { image: 'assets/product1.png', name: 'Product 1', price: 29.99 },
    { image: 'assets/product2.png', name: 'Product 2', price: 49.99 },
    { image: 'assets/product3.png', name: 'Product 3', price: 19.99 },
    { image: 'assets/product4.png', name: 'Product 1', price: 29.99 }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
