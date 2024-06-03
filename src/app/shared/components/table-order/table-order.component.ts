import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order.interface';
import { OrdenService } from 'src/app/modules/orden/service/orden.service';

@Component({
  selector: 'app-table-order',
  templateUrl: './table-order.component.html',
  styleUrls: ['./table-order.component.scss'],
})
export class TableOrderComponent {
  @Input() orders: Order[] = [];

  constructor(private router: Router, private ordenService: OrdenService) {}

  verMas(idPedido: number) {
    this.router.navigate(['/home/order/detalle', idPedido]);
  }

  deleteOrder(idPedido: number) {

    this.ordenService.deleteOrden(idPedido).subscribe({
      next: () => {
        this.orders = this.orders.filter((order) => order.idPedido!== idPedido);
        //console.log(this.orders);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
