export class Topping{
    public toppingIdNumber: string;
    public toppingName: string;
    public toppingQuantity: string;
    public toppingPrice: string;

    constructor(toppingIdNumber: string, toppingName: string, toppingQuantity: string, toppingPrice: string)
    {
        this.toppingIdNumber = toppingIdNumber;
        this.toppingName = toppingName;
        this.toppingQuantity = toppingQuantity;
        this.toppingPrice = toppingPrice;
    }
}