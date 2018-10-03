


function putGame() {
    var req = new XMLHttpRequest();
    var the_id = document.getElementById("gameIdtxt").value
    var url = 'http://localhost:56672/api/gamestats/game/' + the_id +'/edit'
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
    game = {
        GameName: document.getElementById("gameNametxt").value,
        Player1: document.getElementById("player1txt").value ,
        Player2: document.getElementById("player2txt").value,
        Who_Won: document.getElementById("whoWontxt").value
    };
    req.send(JSON.stringify(game));
}



function putGameJQuery() {
    var the_id = $("#gameIdtxt").val()
    var url_web_api = 'http://localhost:56672/api/gamestats/game/' + the_id + '/edit'

    var item = {
        GameID: $("#gameIdtxt").val(),
        GameName: $("#gameNametxt").val(),
        Player1: $("#player1txt").val(),
        Player2: $("#player2txt").val(),
        Who_Won: $("#whoWontxt").val(),

    }
    console.log(item)

    // JSON.stringify(item)

    var ajaxPostDataConfig = {
        type: "PUT", // what is the method? post, get, put , delete
        url: url_web_api,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(item) // request http body
    }

    $.ajax(ajaxPostDataConfig).then(
        // what to do after success?
        function (data) {
            console.log(data)
        }
    ).fail(
        // what to do on error
        function (err) {
            console.error(err)
        }
        )
}