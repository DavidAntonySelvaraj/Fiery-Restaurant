import { Routes } from '@angular/router';
import { ViewOrdersComponent } from './orders/components/view-orders/view-orders.component';
import { ViewOrderInfoComponent } from './orders/components/view-order-info/view-order-info.component';

export const routes: Routes = [

    {path:'View-Order',component:ViewOrdersComponent},
    {path:'View-Order-Info',component:ViewOrderInfoComponent}

    
];
