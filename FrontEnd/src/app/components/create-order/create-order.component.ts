import { Component, OnInit, OnDestroy } from '@angular/core';
import { Topping } from '../../models/topping';
import { Store } from '@ngrx/store';
import { ToppingActions } from '../../actionHandlers/topping.actions';


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

    constructor(private _store: Store<any>, private _toppingActions: ToppingActions) { }

    public ngOnInit() {
        this.toppingsSubscription = this._store.select('toppings').subscribe((toppings: Array<Topping>) => {
            this.toppings = toppings;
        });

        this._toppingActions.getToppings();
    }

    public ngDoCheck() {
        console.log(this.selectedToppings);
    }
    public ngOnDestroy() {
        this.toppingsSubscription.unsubscribe();
    }
    public selectTopping(toppingId: number): void {
        //debugger;
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