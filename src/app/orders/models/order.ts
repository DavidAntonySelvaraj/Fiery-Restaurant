import { ItemService } from "../services/item.service.spec"

export class order{
    id:any
    orderNo:number=0 
    contactName:string=''
    orderDate:Date=new Date
    itemsOrdered:ItemService[]=[]

    orderTotal:number=0
    taxTotal:number=0
    grandTotal:number=0  

  //   constructor(id:any,orderNo: number, contactName: string, orderDate: Date, itemsOrdered: ItemService[], orderTotal: number, taxTotal: number, grandTotal: number) {
  //       this.id=id;
  //       this.orderNo = orderNo;
  //       this.contactName = contactName;
  //       this.orderDate = orderDate;
  //       this.itemsOrdered = itemsOrdered;
  //       this.orderTotal = orderTotal;
  //       this.taxTotal = taxTotal;
  //       this.grandTotal = grandTotal;
  // }
}