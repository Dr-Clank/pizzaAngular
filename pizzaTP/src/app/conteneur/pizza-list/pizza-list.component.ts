import { Component, OnInit, Input, Output} from '@angular/core';
import { Pizza } from 'src/app/shared/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  @Input() pizzas : Pizza[];

  constructor() { }

  ngOnInit(): void {
  }
}
