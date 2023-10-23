import { Component, OnInit } from '@angular/core';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
    ngOnInit(): void {
    }

    dishes = DISHES;
    selectedDish = DISHES[0];

}
