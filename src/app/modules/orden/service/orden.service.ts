import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order.interface';
import { environment } from 'src/environment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  constructor(private http: HttpClient) {}

  getOrdenes(): Observable<Order[]> {
    const url = `${environment.api}/orden`;
    return this.http.get<Order[]>(url);
  }

  postOrden(orderItems: any[]): Observable<any> {
    const url = `${environment.api}/orden`;
    return this.http.post(url, orderItems);
  }

  deleteOrden(id: number) {
    const url = `${environment.api}/orden/${id}`;
    return this.http.delete(url);
  }
}
