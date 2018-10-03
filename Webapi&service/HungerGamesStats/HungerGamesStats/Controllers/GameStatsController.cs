using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GameService;

namespace HungerGamesStats.Controllers
{
    public class GameStatsController : ApiController
    {
       public HttpResponseMessage Get()
        {
            using (GamesStatsEntities entities = new GamesStatsEntities())
            {
                return Request.CreateResponse(HttpStatusCode.OK, entities.Games.ToList());
            }
        }

        [HttpGet]
        [Route("api/gamestats/game/{selectedid}")]
        public HttpResponseMessage GetByID(int selectedID)
        {
            using (GamesStatsEntities entities = new GamesStatsEntities())
            {
                Games result = entities.Games.FirstOrDefault(g => g.GameID.Equals(selectedID));
                if (result != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("Game Not Found!"));
                }
            }
        }

        [HttpGet]
        [Route("api/gamestats/player/{byname}")]
        public HttpResponseMessage GetByPlayer(string byname)
        {
            using (GamesStatsEntities entities = new GamesStatsEntities())
            {
                List<Games> result = entities.Games.Where(g => g.Player1.ToLower().StartsWith(byname.ToLower()) || g.Player2.ToLower().StartsWith(byname.ToLower())).ToList();
                if (result.Count > 0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("Player Not Found", byname));
                }
            }
        }

        [Route("api/gamestats/search")]
        [HttpGet]
        public HttpResponseMessage GetByFilter([FromUri]int gameId = -1, [FromUri]string gameName = null , [FromUri]string player1 = null,
            [FromUri]string player2 = null, [FromUri]string whoWon = null)
        {
            using (GamesStatsEntities entities = new GamesStatsEntities())
            {
                IQueryable<Games> query = entities.Games;

                if (gameId != -1)
                {
                    query = query.Where(g => g.GameID == gameId);
                }
                if (gameName != null)
                {
                    query = query.Where(g =>  g.GameName.ToLower().StartsWith(gameName.ToLower()));
                }
                if (player1 != null)
                {
                    query = query.Where (g => g.Player1.ToLower().StartsWith(player1.ToLower()));
                }
                if (player2 != null)
                {
                    query = query.Where(g => g.Player2.ToLower().StartsWith(player2.ToLower()));
                }
                if (whoWon != null)
                {
                    query = query.Where(g => g.Who_Won.ToLower().StartsWith(whoWon.ToLower()));
                }
                List<Games> SearchedGames = query.ToList();

                if (SearchedGames.Count > 0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, SearchedGames);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "Game Not Found");

                }
            }
        }

        [Route("api/gamestats/game/newgame")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]Games game)
        {
            using (GamesStatsEntities entities = new GamesStatsEntities())
            {
                entities.Games.Add(game);
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, new Uri(Request.RequestUri + "/" + game.GameID.ToString()));
            }
        }

        [Route("api/gamestats/game/{id}/edit")]
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]Games game)
        {
            using (GamesStatsEntities entities = new GamesStatsEntities())
            {
                Games GameToUpdate = entities.Games.FirstOrDefault(g => g.GameID == id);
                if (GameToUpdate != null)
                {
                    GameToUpdate.GameName = game.GameName;
                    GameToUpdate.Player1 = game.Player1;
                    GameToUpdate.Player2 = game.Player2;
                    GameToUpdate.Who_Won = game.Who_Won;
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, game);
                }
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, String .Format("{0} seesion number {1} was not found", game.GameName, game.GameID));
            }
        }

        [Route("api/gamestats/deletebyid/{gameid}")]
        [HttpDelete]
        public HttpResponseMessage Delete(int gameid)
        {
            using (GamesStatsEntities entities = new GamesStatsEntities())
            {
                Games game = entities.Games.FirstOrDefault(g => g.GameID == gameid);
                if (game != null)
                {
                    entities.Games.Remove(game);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, String.Format("Game Session {0} was deleted", gameid));
                }
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("Game Session {0} was not found", gameid));
            }
        }
    }
}
