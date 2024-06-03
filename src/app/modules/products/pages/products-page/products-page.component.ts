import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Products } from 'src/app/core/models/products.interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  dataProducts: Products[] = [];
  sidebarOpen: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.dataProducts = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  toggleSidebarVisibility() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
