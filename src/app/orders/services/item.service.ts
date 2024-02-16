import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/items';
  items:item[]=[]
  constructor(private http: HttpClient) { }

  getItems(): Observable<item[]> {
    return this.http.get<item[]>(this.apiUrl);
}
}