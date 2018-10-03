import { GameStatsService } from './../game-stats/game-stats.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../game-stats/game.model';
import { observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.css']
})
export class SearchGamesComponent implements OnInit {
  game;
  searchedName : string  = "";
  searchedPlayer1 : string  = "";
  searchedPlayer2 : string  = "";
  searchedWinner : string  = "";
  sGame : Game = new Game();
  games;
   subsGames : Subscription
  col = [ "GameID", "GameName", "Player1", "Player2", "Who_Won" ];
 
  constructor(private serviceStats : GameStatsService) { }

  ngOnInit() {
     
    this.subsGames = this.serviceStats.GetAllGamesSubs().subscribe(data => this.games = data)
    this.serviceStats.getAllGames()
  
  }

  searchBykey(inputGameID : HTMLInputElement, inputGameName : HTMLInputElement, inputPlayer1 : HTMLInputElement,  inputPlayer2 : HTMLInputElement,  inputWhoWon : HTMLInputElement){
  
    var searchedid : number = +inputGameID.value
    this.serviceStats.SearchGameByFilter(searchedid, inputGameName.value, inputPlayer1.value, inputPlayer2.value, inputWhoWon.value)
 
      
  }
}   


