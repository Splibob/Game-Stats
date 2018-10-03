
function game(GameID, GameName, Player1, Player2, Who_Won) {
    this.GameID  = GameID
    this.GameName = GameName
    this.Player1 = Player1
    this.Player2 = Player2
    this.Who_Won = Who_Won
}
class PromiseGet {

    constructor(mock) {
        var _mock
        if (document.getElementById('btnRealServer').checked) {
            this.mock = 'Real Server'
        }
        else if ((document.getElementById('btnPromise').checked)) {
            this.mock = 'Promise'
        }
        else if ((document.getElementById('btnNJS').checked)) {
            this.mock = 'NodeJS'
        }
    }

    fireGet() {
        if (this.mock == 'Real Server') {
            var promise = $.ajax({
                url: 'http://localhost:56672/api/GameStats'
            })
            return promise
        }
        else if(this.mock == 'Promise') {
            var proGames = new Promise(function (
                resolve,
                reject) 
            {

                var proGames = [new game(1, "Taki", "Yohad", "Shlomi", "Yohad"), new game(2, "Taki", "Dave", "Shlomi", "Shlomi"), new game(3, "Taki", "Dave", "Yohad", "Dave")]
             //   console.log("this is proGame: " + proGames)
                setTimeout(() => { resolve(proGames) }, 5000);
                resolve(proGames) 
              
            }
            )
            return proGames
        }
        else if (this.mock == 'NodeJS') {
            var promise = $.ajax({
                url: 'http://localhost:3001/rest/v1/gamestats/get' 
            })
            return promise;
        }
    }



    fire1Get(the_id) {
        if (this.mock == 'Real Server') {
        var promise = $.ajax({
            url: 'http://localhost:56672/api/gamestats/game/' + the_id  
        })
        return promise
    }
        else if(this.mock == 'Promise') {
            var promise = new Promise(function (
            resolve,
            reject) {

                var promise = [new game(1, "Taki", "Yohad", "Shlomi", "Yohad")]
            //   console.log("this is proGame: " + proGames)
                setTimeout(() => { resolve(promise) }, 5000);
                resolve(promise)

        }
        )
            return promise
    }
        else if(this.mock == 'NodeJS') {
        var promise = $.ajax({
            url: 'http://localhost:3001/rest/v1/gamestats/get'
        })
        return promise;
    }
}

}