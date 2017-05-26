import { Component, OnInit, OnDestroy } from '@angular/core';
import { Topping } from '../../models/topping';
import { Store } from '@ngrx/store';
import { ToppingActions } from '../../actionHandlers/topping.actions';

@Component({
    selector: 'app-toppings',
    templateUrl: 'toppings.component.html',
    styles: [``],
})
export class ToppingsComponent implements OnInit, OnDestroy {
    toppings: Array<Topping>;
    toppingsSubscription: any;
    isUpdateToppingVisible: boolean = false;
    isChangeToppingNameVisible: boolean = false;
    isDeleteToppingVisible: boolean = false;
    isAddToppingVisible: boolean = false;
    isGetToppingsVisible: boolean = false;

    constructor(private _store: Store<any>, private _toppingActions: ToppingActions) { }

    public ngOnInit() {
        this.toppingsSubscription = this._store.select('toppings').subscribe((toppings: Array<Topping>) => {
            this.toppings = toppings;
        });
        this._toppingActions.getToppings();
    }

    public ngOnDestroy() {
        this.toppingsSubscription.unsubscribe();
    }

    private updateTopping(): void {
        this.isUpdateToppingVisible = !this.isUpdateToppingVisible;
    }

    private changeToppingName(): void {
        this.isChangeToppingNameVisible = !this.isChangeToppingNameVisible;
    }

    private deleteTopping(): void {
        this.isDeleteToppingVisible = !this.isDeleteToppingVisible;
    }

    private addTopping(): void {
        this.isAddToppingVisible = !this.isAddToppingVisible;
    }

    private getToppings(): void {
        this.isGetToppingsVisible = !this.isGetToppingsVisible;
        this._toppingActions.getToppings();
    }
}