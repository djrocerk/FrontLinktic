import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/core/models/products.interface';
import { environment } from 'src/environment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) { }

  getProducts(): Observable<Products[]> {
    const url = `${environment.api}/producto`
    return this.http.get<Products[]>(url)
  }
}
