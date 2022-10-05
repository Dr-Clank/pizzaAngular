import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/pizza.model';

@Component({
  selector: 'app-conteneur',
  templateUrl: './conteneur.component.html',
  styleUrls: ['./conteneur.component.css']
})

export class ConteneurComponent implements OnInit {

	public pizzas : Pizza[] = [
	new Pizza('marguerite','../../assets/margarita.jpg','La pizza Margherita est le nom d\'une spécialité culinaire traditionnelle de la ville de Naples en Italie. '),
	new Pizza('Mex','../../assets/mex.jpg','a pizza Tex-Mex, un savant mélange de ...'),
	new Pizza('4 Fromages','../../assets/fromage.jpg','Pizza quattro formaggi Italian: est une variété de pizza dans la cuisine italienne qui est garnie d\'une combinaison de quatre types de fromage'),
	];

public pizza: Pizza;

  constructor() { }

  ngOnInit() {
    this.pizza=this.pizzas[0];
  }

  updatepizza(index:number)
  {
    this.pizza=this.pizzas[index];
  }

}
