export class item{

    itemNo:number
    name:String
    quantity:number
    price:number
 
    constructor(itemNo: number, name: string, quantity: number, price: number, itemValue: number) {
        this.itemNo = itemNo;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
      }
}