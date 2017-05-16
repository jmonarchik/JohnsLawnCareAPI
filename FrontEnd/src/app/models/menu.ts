export class Menu {
    public pizzaSize: string;
    public pizzaSizePrice: string;
    public pizzaTopping: string;
    public pizzaToppingPrice: string;

    constructor(pizzaSize: string, pizzaSizePrice: string, pizzaTopping: string,  pizzaToppingPrice: string)
    {
        this.pizzaSize = pizzaSize;
        this.pizzaSizePrice = pizzaSizePrice;
        this.pizzaTopping = pizzaTopping;
        this.pizzaToppingPrice = pizzaToppingPrice;
    }
}
