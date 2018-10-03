function getGames() {
    document.getElementById("results").innerHTML = "";
    var req = new XMLHttpRequest();
    {
        var url = 'http://localhost:56672/api/GameStats'
        var tbl = document.getElementById("tblGames")
        tbl.innerHTML = clearTbl()
        req.open('GET', url)
        req.onload = function () {
            var list = JSON.parse(req.response)
            console.log(req.reponse)
            console.log(list)
            tbl.innerHTML = Printme(list)
            console.log(Printme(list))
        }
    }

    req.onerror = function () {
        alert('error')
    }
    req.send()
}

function get1Game() {
    var req = new XMLHttpRequest();
    var the_id = document.getElementById("gameIdtxt").value
    var tbl = document.getElementById("tblGames")
    if (the_id == "" || the_id.length == 0 || the_id == null) {
        alert("Need an ID")
    }
    else {
        document.getElementById("gameIdtxt").value = ""
        var url = 'http://localhost:56672/api/gamestats/game/' + idtxt
        console.log(idtxt)
        req.open('GET', url)
        req.onload = function () {
            var one = JSON.parse(req.response)
            console.log(one)
            document.getElementById("gameNametxt").value = one.GameName
            document.getElementById("player1txt").value = one.Player1
            document.getElementById("player2txt").value = one.Player2
            document.getElementById("whoWontxt").value = one.Who_Won
        }
        req.onerror = function () {
            alert('error')
        }
        req.send()
    }
}

function GameSearch() {
    var req = new XMLHttpRequest();
    var params = "?gameId=" + document.getElementById("gameIdtxt").value +
        "&gameName=" + document.getElementById("gameNametxt").value +
        "&player1=" + document.getElementById("player1txt").value +
        "&player2=" + document.getElementById("player2txt").value +
        "&whoWon=" + document.getElementById("whoWontxt").value 
    var tbl = document.getElementById("tblGames")
    tbl.innerHTML = clearTbl()
    document.getElementById("gameIdtxt").value = ""
    var url = 'http://localhost:56672/api/gamestats/getbyfilter/' + params
    req.open('GET', url)
    req.onload = function () {
        var one = JSON.parse(req.response)
        console.log(one)
        document.getElementById("gameNametxt").value = one.GameName
        document.getElementById("player1txt").value = one.Player1
        document.getElementById("player2txt").value = one.Player2
        document.getElementById("whoWontxt").value = one.Who_Won
    }
    req.onerror = function () {
        alert('error')
    }
    req.send()
}

function postGame() {
    var req = new XMLHttpRequest();
    var url = 'http://localhost:56672/api/GameStats/game/newgame'
    req.open('POST', url)
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
        alert('New game created! number')
        document.getElementById("gameNametxt").value = ""
        document.getElementById("player1txt").value = ""
        document.getElementById("player2txt").value = ""
        document.getElementById("whoWontxt").value = ""
    }
    req.onerror = function () {
        alert('error')
    }

    var item = {
        GameName: document.getElementById("gameNametxt").value,
        Player1: document.getElementById("player1txt").value,
        Player2: document.getElementById("player2txt").value,
        Who_Won: document.getElementById("whoWontxt").value
    }
    req.send(JSON.stringify(item));
}

function putGame() {
    var req = new XMLHttpRequest();
    var the_id = document.getElementById("gameIdtxt").value
    var url = 'http://localhost:56672/api/gamestats/game/' + the_id + '/edit'
  
    if (the_id == "" || the_id.length == 0 || the_id == null) {
        alert("Need an ID")
    }
    else { 
    req.open('PUT', url)
    req.setRequestHeader("Content-Type", "application/json")
    req.onload = function () {
        alert('Updated!')
    }
    req.onerror = function () {
        alert('error')
    }
    var game
    if (document.getElementById("gameNametxt").value != "") {
        GameName: document.getElementById("gameNametxt").value
        console.log(document.getElementById("gameNametxt").value)
    }
    else if (document.getElementById("players1txt").value != "") {
        GameName: document.getElementById("players1txt").value
        console.log(document.getElementById("players1txt").value)
    }
    else if (document.getElementById("players2txt").value != "") {
        GameName: document.getElementById("players2txt").value
        console.log(document.getElementById("players2txt").value)
    }
    else if (document.getElementById("whoWontxt").value != "") {
        GameName: document.getElementById("whoWontxt").value
        console.log(document.getElementById("whoWontxt").value)
    }
    game = {
        GameName: document.getElementById("gameNametxt").value,
        Player1: document.getElementById("player1txt").value,
        Player2: document.getElementById("player2txt").value,
        Who_Won: document.getElementById("whoWontxt").value
    };
        req.send(JSON.stringify(game));
    }
}

function deleteGame() {
    var req = new XMLHttpRequest();
    var the_id = document.getElementById("gameIdtxt").value
    if (the_id == "" || the_id.length == 0 || the_id == null) {
        alert("Need an ID")
    }
    else {
        var url = 'http://localhost:56672/api/gamestats/deletebyid/' + the_id
        req.open('DELETE', url)
        document.getElementById("gameIdtxt").value = ""
        document.getElementById("gameNametxt").value = ""
        document.getElementById("player1txt").value = ""
        document.getElementById("player2txt").value = ""
        document.getElementById("whoWontxt").value = ""
        req.onload = function () {

            alert('deleted')
        }
        req.onerror = function () {
            alert('error')
        }
        req.send()
    }
}


function getGamesJQuery() {
    var data = new PromiseGet()
    console.log("data from jauery:" + data)
    var tbl = document.getElementById("tblGames")
    tbl.innerHTML = clearTbl()
    let promise = data.fireGet()
    promise.then(
        function (data) {
            for (var i = 0; i < data.length; i++) {
                tr = '<tr>'
                tr = tr + '<td>' + data[i]['GameID'] + '</td>'
                tr = tr + '<td>' + data[i]['GameName'] + '</td>'
                tr = tr + '<td>' + data[i]['Player1'] + '</td>'
                tr = tr + '<td>' + data[i]['Player2'] + '</td>'
                tr = tr + '<td>' + data[i]['Who_Won'] + '</td>'
                console.log("this is data: " + data)
                tbl.innerHTML += tr
            }
        
        }
    )
}

function get1GameJQuery() {
    var the_id = $("#gameIdtxt").val()
    if (the_id == "" || the_id.length == 0 || the_id == null) {
        alert("Need an ID")
    }
    else {
        var data = new PromiseGet()
        let promise = data.fire1Get(the_id)
            .then(
            function (data) {
                console.log("This is one: " + data[gameID])
                one = data;
                document.getElementById("gameNametxt").value = one.GameID
                document.getElementById("gameNametxt").value = one.GameName
                document.getElementById("player1txt").value = one.Player1
                document.getElementById("player2txt").value = one.Player2
                document.getElementById("whoWontxt").value = one.Who_Won
            }
            ).fail(
            function (err) {
                console.error(err)
                alert(err + "Please enter Game ID")
                document.getElementById("gameNametxt").value = "Not Found"
                document.getElementById("player1txt").value = "Not Found"
                document.getElementById("player2txt").value = "Not Found"
                document.getElementById("whoWontxt").value = "Not Found"

            })
    }
}

function postJQueryGame() {
    var url_web_api = 'http://localhost:56672/api/GameStats/game/newgame'

    var item = {
        GameName: $("#gameNametxt").val(),
        Player1: $("#player1txt").val(),
        Player2: $("#player2txt").val(),
        Who_Won: $("#whoWontxt").val()
    }
    console.log(item)

    // JSON.stringify(item)

    var ajaxPostDataConfig = {
        type: "POST", // what is the method? post, get, put , delete
        url: url_web_api,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(item) // request http body
    }
    document.getElementById("gameNametxt").value = ""
    document.getElementById("player1txt").value = ""
    document.getElementById("player2txt").value = ""
    document.getElementById("whoWontxt").value = ""
    $.ajax(ajaxPostDataConfig).then(
        // what to do after success?
        function (data) {
            console.log("Seccess!!")
        }
    ).fail(
        // what to do on error
        function (err) {
            console.error(err)
        }
        )



}

function putGameJQuery() {
    var the_id = $("#gameIdtxt").val()
    var url_web_api = 'http://localhost:56672/api/gamestats/game/' + the_id + '/edit'
    if (the_id == "" || the_id.length == 0 || the_id == null) {
        alert("Need an ID")
    }
    else {
        var item = {
            GameID: $("#gameIdtxt").val(),
            GameName: $("#gameNametxt").val(),
            Player1: $("#player1txt").val(),
            Player2: $("#player2txt").val(),
            Who_Won: $("#whoWontxt").val(),

        }
        console.log(item)

        var ajaxPostDataConfig = {
            type: "PUT",
            url: url_web_api,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(item)
        }

        $.ajax(ajaxPostDataConfig).then(
            function (data) {
                console.log(data)
            }
        ).fail(
            function (err) {
                console.error(err)
            }
            )
    }
}

function deleteGameJQuery() {

    var the_id = $("#gameIdtxt").val()
    var url_web_api = 'http://localhost:56672/api/gamestats/deletebyid/' + the_id
    if (the_id == "" || the_id.length == 0 || the_id == null) {
        alert("Need an ID")
    }
    else {
        var ajaxPostDataConfig = {
            type: "DELETE", // what is the method? post, get, put , delete
            url: url_web_api,
        }

        $.ajax(ajaxPostDataConfig).then(
            // what to do after success?
            function (resp) {
                console.log(resp)
            }
        ).fail(
            // what to do on error
            function (err) {
                console.error(err)
            }
            )
    }
}


function clearTbl() {
    var tbl = '<table id="tblGames" class="table"> ' +
        '<tr>' +
        '<th scope="col">Game</th>' +
        '<th scope="col">Session</th>' +
        '<th scope="col">Player 1</th>' +
        '<th scope = "col" > Player 2</th> ' +
        '<th scope = "col" > Winner</th>' +
        '</tr>' +
        '</thead >' +
        '</table >';
    return tbl
}

function Printme(data) {
    var tr = clearTbl()
    if (0 < data.length) {
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            tr = tr + "<tr>";
            tr = tr + "<td>" + data[i].GameID + "</td>";
            tr = tr + "<td>" + data[i].GameName + "</td>";
            tr = tr + "<td>" + data[i].Player1 + "</td>";
            tr = tr + "<td>" + data[i].Player2 + "</td>";
            tr = tr + "<td>" + data[i].Who_Won + "</td>";
            tr = tr + "</tr>";
        }
        return tr
    }
}