function deleteGame() {
    var req = new XMLHttpRequest();
    var the_id = document.getElementById("gameIdtxt").value
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

function deleteGameJQuery() {

    var the_id = $("#gameIdtxt").val()
    var url_web_api = 'http://localhost:56672/api/gamestats/deletebyid/' + the_id
    document.getElementById("gameIdtxt").value = ""
    document.getElementById("gameNametxt").value = ""
    document.getElementById("player1txt").value = ""
    document.getElementById("player2txt").value = ""
    document.getElementById("whoWontxt").value = ""
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