
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000/orders';

  order:order[]=[]

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<order[]> {
    return this.http.get<order[]>(this.apiUrl);
  }

  getOrderById(id:any): Observable<order> {
    return this.http.get<order>(`${this.apiUrl}/${id}`);
  }
}