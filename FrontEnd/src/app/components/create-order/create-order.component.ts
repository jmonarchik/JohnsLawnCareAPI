import { Component, OnInit, OnDestroy } from '@angular/core';
import { Topping } from '../../models/topping';
import { Store } from '@ngrx/store';
import { ToppingActions } from '../../actionHandlers/topping.actions';
import { PizzaSize } from '../../models/pizzaSize';
import { PizzaSizeActions } from '../../actionHandlers/pizzaSize.actions';


@Component({
    selector: 'app-create-order',
    templateUrl: 'create-order.component.html',
    styleUrls: ['create-order.component.css'],
})
export class CreateOrderComponent {
    toppings: Array<Topping>;
    toppingsSubscription: any;
    isToppingsTableVisible: boolean = false;
    selectedToppings: Array<number> = [];
    pizzaSizes: Array<PizzaSize>;
    pizzaSizesSubscription: any;
    isPizzaSizesVisible: boolean = false;
    selectedPizzaSizes: Array<number> = [];

    constructor(private _store: Store<any>, private _toppingActions: ToppingActions,
        private _pizzaSizeActions: PizzaSizeActions) { }

    public ngOnInit() {
        this.toppingsSubscription = this._store.select('toppings').subscribe((toppings: Array<Topping>) => {
            this.toppings = toppings;
        });
        this._toppingActions.getToppings();

        this.pizzaSizesSubscription = this._store.select('pizzaSize').subscribe((pizzaSizes: Array<PizzaSize>) => {
            this.pizzaSizes = pizzaSizes;
        });
        this._pizzaSizeActions.getPizzaSizes();
    }


    public ngDoCheck() {
        console.log(this.selectedToppings);
    }
    public ngOnDestroy() {
        this.toppingsSubscription.unsubscribe();
    }
    public selectTopping(toppingId: number): void {
        const index = this.selectedToppings.indexOf(toppingId);
        if (index !== -1) {
            this.selectedToppings.splice(index, 1);
        }
        else {
            this.selectedToppings.push(toppingId);
        }
        console.log(this.selectedToppings);
    }
}