import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from 'src/app/common/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cartItems = [
    { name: 'Product 1', quantity: 2, price: 50, image: 'assets/product1.png' },
    { name: 'Product 2', quantity: 1, price: 30, image: 'assets/product2.png' },
    { name: 'Product 3', quantity: 3, price: 20, image: 'assets/product3.png' }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openShoppingCart(): void {
    const dialogRef = this.dialog.open(ShoppingCartComponent, {
      width: '400px',
      data: { cartItems: this.cartItems }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
