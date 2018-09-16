import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameStatsService {
  
  
  constructor(private http: HttpClient) {

  }
  
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllGames() : Observable<Game[]>{
    const url = 'http://localhost:56672/api/gamestats';
    return this.http.get<Game[]>(url);
  }

  getOneGame(gameID ) : Observable<Game>{
    const url = 'http://localhost:56672/api/gamestats/game/' + gameID;
    return this.http.get<Game>(url);
  }
  PutGame(game ){
  // PutGame(gameIDtxt, gameNametxt, player1txt, player2txt, winnertxt ){
    // var game ={
    //   GameID : gameIDtxt,
    //   GameName : gameNametxt,
    //   Player1 : player1txt,
    //   Player2 : player2txt,
    //   Who_Won : winnertxt
    // }
    //console.log("put " + game.Player1);
    
    const url = 'http://localhost:56672/api/gamestats/game/' + game.GameID + '/edit';
    this.http.put(url ,game , this.httpOptions).subscribe( x => {});
  }
  PostGame(game){
   
    const url = 'http://localhost:56672/api/gamestats/game/';
    this.http.post(url ,game , this.httpOptions).subscribe( x => {});
  }

  FinishHim(gameID : number) {
    const url = 'http://localhost:56672/api/gamestats/deletebyid/' + gameID;
    this.http.delete(url).subscribe(x=> {});
  }
}
