import { GameStatsService } from './../game-stats/game-stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.css']
})
export class SearchGamesComponent implements OnInit {
  game;
  games=[];
  col = [ "GameID", "GameName", "Player1", "Player2", "Who_Won" ];
 
  constructor(private serviceStats : GameStatsService) { }

  ngOnInit() {
  }

}
