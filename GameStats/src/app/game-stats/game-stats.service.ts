import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameStatsService {
  
  NGames = new Subject<Game[]>()
  constructor(private http: HttpClient) {

  }
  
  // public httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  getAllGames(){
    const url = 'http://localhost:56672/api/gamestats';
    this.http.get<Game[]>(url).subscribe(data => this.NGames.next(data));
  }
  
  GetAllGamesSubs() : Observable<Game[]>{
    return this.NGames.asObservable()
  }
  getOneGame(gameID ) : Observable<Game>{
    const url = 'http://localhost:56672/api/gamestats/game/' + gameID;
    return this.http.get<Game>(url);
  }
  PutGame(game ){
    const url = 'http://localhost:56672/api/gamestats/game/' + game.GameID + '/edit';
    return this.http.put(url ,game);

  }
  PostGame(game){
   
    const url = 'http://localhost:56672/api/gamestats/game/';
    this.http.post(url ,game).subscribe( x => {});
  }

  DeleteGameByID(gameID : number) {
    const url = 'http://localhost:56672/api/gamestats/deletebyid/' + gameID;
    return this.http.delete(url)
    // this.http.delete(url).subscribe(x=> {});
  }

  SearchGameByFilter(gameID? : number, gameName? : string, player1? : string, player2? : string, who_Won? : string){
    let params : HttpParams = new HttpParams;
    
    if (gameName != null && gameName !== '') {params = params.append("gameName", gameName); }
    if (player1 != null && player1 !== '') {params = params.append("player1", player1); }
    if (player2 != null && player2 !== '') {params =  params.append("player2", player2);}
    if (who_Won != null && who_Won !== '') {params =  params.append("whoWon", who_Won); }
    console.log("this is searched")
    console.log ( params);
    
    const url = 'http://localhost:56672/api/gamestats/search';
    this.http.get<Game[]>(url, {params}).subscribe(data => this.NGames.next(data));
  }
}
