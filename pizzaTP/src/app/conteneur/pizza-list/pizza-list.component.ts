import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Pizza } from 'src/app/shared/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  @Input() pizzas : Pizza[];

  @Output() public recup: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  recupPizza(index: number): void {
    this.recup.emit(index);
    console.log(index);
  
  }
}
