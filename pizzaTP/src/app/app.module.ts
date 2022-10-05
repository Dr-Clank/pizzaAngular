import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConteneurComponent } from './conteneur/conteneur.component';
import { HeaderComponent } from './header/header.component';
import { PizzaListComponent } from './conteneur/pizza-list/pizza-list.component';
import { PizzaDetailsComponent } from './conteneur/pizza-details/pizza-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ConteneurComponent,
    HeaderComponent,
    PizzaListComponent,
    PizzaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
