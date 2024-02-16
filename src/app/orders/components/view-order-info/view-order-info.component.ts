import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent {
  
  order:order={
    id: undefined,
    orderNo: 0,
    contactName: '',
    orderDate: new Date(),
    itemsOrdered: [],
    orderTotal: 0,
    taxTotal: 0,
    grandTotal: 0
  }
  constructor(private rt:ActivatedRoute,private http:OrderService){
 
   
  }
   ngOnInit(){
    let value:any
    if (typeof window !== 'undefined') {
      value = localStorage.getItem("myid");
      console.log(value); 
    }
    if (value) {
      this.http.getOrderById(value).subscribe(data =>{
        this.order=data as order;
      })
    }
  }
}
