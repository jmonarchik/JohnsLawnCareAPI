export class Order{
    public orderLocation: string;
    public orderIdNumber: string;
    public orderPizzas: string;
    public orderStatus: string;
    public orderName: string;
    public orderPrice: string;
    public orderPhoneNumber: string;
    public orderTime: string;

    constructor(orderLocation: string, orderIdNumber: string, orderPizzas: string, orderStatus: string,
    orderName: string, orderPrice: string, orderPhoneNumber: string, orderTime: string)
    {
        this.orderLocation = orderLocation;
        this.orderIdNumber = orderIdNumber;
        this.orderPizzas = orderPizzas;
        this.orderStatus = orderStatus;
        this.orderName = orderName;
        this.orderPrice = orderPrice;
        this.orderPhoneNumber = orderPhoneNumber;
        this.orderTime = orderTime;
    }
}