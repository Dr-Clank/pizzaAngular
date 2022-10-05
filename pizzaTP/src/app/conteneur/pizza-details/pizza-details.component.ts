import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/shared/pizza.model';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {

  @Input() pizza : Pizza;
  constructor() { }

  ngOnInit(): void {
  }

}
