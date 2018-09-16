import { Game } from './../game-stats/game.model';
import { GameStatsService } from './../game-stats/game-stats.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css']
})
export class ViewGamesComponent implements OnInit {
  game ;
  gameID : number;
  gameName : string;
  player1 : string;
  player2 : string;
  winner : string;
  games=[];
  col = [ "GameID", "GameName", "Player1", "Player2", "Who_Won" ];
  table = document.getElementById("viewtable")

  constructor(private serviceStats : GameStatsService) { 

  }

  ngOnInit() {
    this.serviceStats.getAllGames().subscribe(games => {
        this.games = games;
        console.log("onInit: ");
        
        console.log(this.games);
      });
  }
  showGame(game){
    console.log("game:")
    console.log(game)
    this.gameID = game.GameID.
    this.gameName = game.GameName
    this.player1 = game.Player1
    this.player2 = game.Player2
    this.winner = game.Who_Won
  }


  updateGame(game){      
      console.log("Update game: ");
      console.log(this.gameID);
      game.GameID = this.gameID
      game.Player1 = this.player1
      game.Player2 = this.player2
      game.Who_Won = this.winner
      game.GameName = this.gameName
 
    //console.log(game);
   this.serviceStats.PutGame(game);            
    }
 
    updateTable(game){
        this.serviceStats.getAllGames().subscribe(games => {
            this.games = games;
            console.log("updataTable Ha?");
           console.log(this.games);
          });
    }
    Refrash(){
        this.serviceStats.getAllGames().subscribe(games => {
            this.games = games;
            console.log("Refrash Ha?");
           console.log(this.games);
          });
    }

}
