import { Component, Input, OnInit,ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  isClicked: any;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  onAddToCartClick(event: MouseEvent) {
    this.isClicked = !this.isClicked;
  }


}
