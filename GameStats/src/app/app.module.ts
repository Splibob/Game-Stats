import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/Router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewGamesComponent } from './view-games/view-games.component';
import { SearchGamesComponent } from './search-games/search-games.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  //{path:'',component :AppComponent},
    {path:'games',component :ViewGamesComponent, pathMatch: "full"},
    {path:'search',component :SearchGamesComponent, pathMatch: "full"},
  
  ]

@NgModule({
  declarations: [
    AppComponent,
    ViewGamesComponent,
    SearchGamesComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
