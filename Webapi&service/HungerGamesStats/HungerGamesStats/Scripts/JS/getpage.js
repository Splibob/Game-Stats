function getGames() {
    document.getElementById("results").innerHTML = "";
    var req = new XMLHttpRequest();
     {
        var url = 'http://localhost:56672/api/GameStats'
        req.open('GET', url)
        req.onload = function () {
            var list = JSON.parse(req.response)
            console.log(req.reponse)
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                for (var field in item) {
                    document.getElementById("results").innerHTML += field +
                        " : " + item[field] + ", "
             
                }
                document.getElementById("results").innerHTML += "<br>"
            }
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
    document.getElementById("gameIdtxt").value = ""
    var url = 'http://localhost:56672/api/gamestats/game/' + the_id
    console.log(the_id)
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

function getGameJQuery() {
    document.getElementById("results").innerHTML = "";
    var data = new PromiseGet()
    let promise = data.fireGet()
    promise.then(
        function (data) {
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                for (var field in item) {
                    $('#results').append(" " + field +
                        " : " + item[field] + ", ")
                    console.log(item.field)
                }
                $('#results').append("<br>")
            }
        }
    )
}

function get1GameJQuery() {
    var the_id = $("#gameIdtxt").val()
    $.ajax({
        url: 'http://localhost:56672/api/gamestats/game/' + the_id
    }).then(
        function (data) {

            one = data;
            console.log(data)

            document.getElementById("gameNametxt").value = one.GameName
            document.getElementById("player1txt").value = one.Player1
            document.getElementById("player2txt").value = one.Player2
            document.getElementById("whoWontxt").value = one.Who_Won
        }
        ).fail(
        function (err) {
            console.error(err)
        })
}



