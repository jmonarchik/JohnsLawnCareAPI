import { Component, OnInit, OnDestroy } from '@angular/core';
import { PizzaSize } from '../../models/pizzaSize';
import { Store } from '@ngrx/store';
import { PizzaSizeActions } from '../../actionHandlers/pizzaSize.actions';

@Component({
    selector: 'app-pizzaSizes',
    templateUrl: 'pizzaSizes.component.html',
    styleUrls: ['pizzaSizes.component.css'],
})

export class PizzaSizesComponent {
    pizzaSizes: Array<PizzaSize>;
    pizzaSizesSubscription: any;
    isPizzaSizesVisible: boolean = false;
    selectedPizzaSizes: Array<number> = [];


    constructor(private _store: Store<any>, private _pizzaSizeActions: PizzaSizeActions) { }

    public ngOnInit() {
        this.pizzaSizesSubscription = this._store.select('pizzaSize').subscribe((pizzaSizes: Array<PizzaSize>) => {
            this.pizzaSizes = pizzaSizes;
            console.log(this.pizzaSizes);
        });

        this._pizzaSizeActions.getPizzaSizes();
    }

    public ngDoCheck() {
        console.log(this.selectedPizzaSizes);
    }
    public ngOnDestroy() {
        this.pizzaSizesSubscription.unsubscribe();
    }
    public selectPizzaSize(pizzaSizeId: number): void {
        //debugger;
        const index = this.selectedPizzaSizes.indexOf(pizzaSizeId);
        if (index !== -1) {
            this.selectedPizzaSizes.splice(index, 1);
        }
        else {
            this.selectedPizzaSizes.push(pizzaSizeId);
        }
        console.log(this.selectedPizzaSizes);
    }
}
