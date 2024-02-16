import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlaceOrderComponent } from './orders/components/place-order/place-order.component';
import { ViewOrdersComponent } from './orders/components/view-orders/view-orders.component';
import { ViewOrderInfoComponent } from './orders/components/view-order-info/view-order-info.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderService } from './orders/services/order.service';
import { ItemService } from './orders/services/item.service.spec';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet,PlaceOrderComponent,ViewOrdersComponent,ViewOrderInfoComponent,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="App Component"
}

