export class Topping{
    public toppingName: string;
    public toppingQuantity: string;
    public toppingPrice: string;

    constructor(toppingName: string, toppingQuantity: string, toppingPrice: string)
    {
        this.toppingName = toppingName;
        this.toppingQuantity = toppingQuantity;
        this.toppingPrice = toppingPrice;
    }
}