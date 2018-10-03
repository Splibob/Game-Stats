function postGame() {
    var req = new XMLHttpRequest();
    var url = 'http://localhost:56672/api/GameStats'
    req.open('POST', url)
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
        alert('Created!')
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

function postJQueryGame() {
    var url_web_api = 'http://localhost:56672/api/GameStats'

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
