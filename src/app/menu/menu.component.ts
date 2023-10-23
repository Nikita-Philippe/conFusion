import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
    dishes = DISHES;
    selectedDish : Dish = DISHES[0];

    constructor(private dishService: DishService) { }

    ngOnInit(): void {
        this.dishes = this.dishService.getDishes();
    }

    onSelect(dish: Dish) {
        this.selectedDish = dish;
    }
}
