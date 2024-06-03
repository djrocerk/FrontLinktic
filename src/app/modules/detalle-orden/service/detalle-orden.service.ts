import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalleorder } from 'src/app/core/models/detalleOrder.interface';
import { environment } from 'src/environment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenService {

  constructor(private http: HttpClient) { }

  getDetalleOrden(id: number):Observable<Detalleorder[]> {
    const url = `${environment.api}/detalle/${id}`;
    return this.http.get<Detalleorder[]>(url);
  }
}
