import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { order } from '../../models/order';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet,HttpClientModule],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {



  
  constructor(private service:OrderService,private rt:Router){
 
  }
  getorder:order[]=[];
 
  getOrders(){
    
    this.service.getAllOrders().subscribe((data) => {
      this.getorder=data as order[];
    })
  }
  ngOnInit() {
    let result: any
    this.service.getAllOrders().subscribe(data => {
      result = data;
      this.getorder = result;
    })
 
  }
  navigatee(id:any) {
    localStorage.setItem("myid",id )
    this.rt.navigate(['/View-Order-Info'], id)
  }
 


}
