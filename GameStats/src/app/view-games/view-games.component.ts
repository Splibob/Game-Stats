import { Game } from './../game-stats/game.model';
import { GameStatsService } from './../game-stats/game-stats.service';
import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { observable, Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-search-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css'],
})
export class ViewGamesComponent implements OnInit {
  uGame: Game = new Game();
  games : Game[] = []
  col = [ "GameID", "GameName", "Player1", "Player2", "Who_Won" ];
  table = document.getElementById("viewtable")
  subsGames : Subscription
  constructor(private serviceStats : GameStatsService ) { 

  }

  ngOnInit() {
  
    this.subsGames = this.serviceStats.GetAllGamesSubs().subscribe(data => this.games = data)
    this.serviceStats.getAllGames()
  }

  showGame(game){
    // console.log("chosen game:")
    // console.log(game)
    this.uGame.GameID = game.GameID
    this.uGame.GameName = game.GameName
    this.uGame.Player1 = game.Player1
    this.uGame.Player2 = game.Player2
    this.uGame.Who_Won = game.Who_Won

  }


  updateGame(){      
    this.serviceStats.PutGame(this.uGame).subscribe(
      (succses) => alert("Game updated!"),
      //console.log("YAY")
      (error) => alert("Game not updated"),
      //console.log("No YAY")
      () => this.serviceStats.getAllGames()
      
    )
    }
    
    deleteGame(){
      this.serviceStats.DeleteGameByID(this.uGame.GameID).subscribe(
        (succses) => alert("Game deleted!"),
        //console.log("YAY")
        (error) => alert("Game not deleted"),
        //console.log("No YAY")
        () => this.serviceStats.getAllGames()
        
      )
    }

}
