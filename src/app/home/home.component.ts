import { Component, Inject, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  dish?: Dish;
  promotion?: Promotion;

  constructor(private dishService: DishService, 
    private promotionService: PromotionService,
    @Inject('baseURL') protected baseURL: string = '') { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe(dish => {this.dish = dish
    console.log(this.dish);});
    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
  }
}
