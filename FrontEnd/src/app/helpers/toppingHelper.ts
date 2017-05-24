import { Topping } from '../models/topping';

export class ToppingHelper {

    public helpMe(topping: Topping): string {
        return topping.toppingName;
    }
}