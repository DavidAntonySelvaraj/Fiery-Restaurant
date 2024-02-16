// import { HttpClient } from "@angular/common/http";
// import { OnInit } from "@angular/core";

// export class OrderModel implements OnInit {
//     orders: OrderModel[] = [];
  
//     constructor(private http: HttpClient) { }
  
//     ngOnInit() {
//       this.getOrders();
//     }
  
//     getOrders(): void {
//       this.http.get<{ orders: OrderModel[] }>('assets/db.json')
//         .subscribe(response => {
//           this.orders = response.orders;
//         });
//     }
//   }