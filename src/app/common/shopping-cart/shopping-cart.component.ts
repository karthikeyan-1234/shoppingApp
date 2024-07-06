import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  displayedColumns: string[] = ['name', 'quantity', 'price', 'amount','remove'];
  cartItems: CartItem[] = [];
  dataSource: MatTableDataSource<CartItem>;

  constructor(public dialogRef: MatDialogRef<ShoppingCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.cartItems = data.cartItems;
      this.dataSource = new MatTableDataSource(data.cartItems);
     }

  ngOnInit(): void {
  }

  getTotal() {
    return this.dataSource.data.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }

  removeItem(item: CartItem) {
    const index = this.dataSource.data.indexOf(item);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.dataSource.data); // Refresh data source
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
