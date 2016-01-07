var request = new XMLHttpRequest();
var playerDataArray;
var recentNumberOfPlayers=0;

/**
function switchVisibility() {
    for(var i = 0; i < playerDataArray.length; ++i) {
        if(!playerDataArray[i].isFavorite)
            if(playerDataArray[i].pRow.style.display == "table-row")
                playerDataArray[i].pRow.style.display = "none";
            else
                playerDataArray[i].pRow.style.display = "table-row";
    }
} */

function switchTabs(deselected, selected) {
    if (deselected.classList.contains("selected")) {
        selected.classList.add("selected");
        deselected.classList.remove("selected");

        switchVisibility();
    }
}

function switchTabs(deselected, selected) {
    if (deselected.classList.contains("selected")) {
        selected.classList.add("selected");
        deselected.classList.remove("selected");
    }
}

function loadPlayers() {
    request.open("GET", "/AllPlayers");
    request.onreadystatechange = requestHandler;
    request.send();

    var rechts = document.getElementsByClassName("tabelleRechts")[0];
    var links = document.getElementsByClassName("tabelleLinks")[0];

    reiterRechts.addEventListener("click", function() {
        request.open("GET", "/Favorites");
        request.onreadystatechange = requestHandler;
        request.send();
        switchTabs(links, rechts);
    });

    reiterLinks.addEventListener("click", function() {
        request.open("GET", "/AllPlayers");
        request.onreadystatechange = requestHandler;
        request.send();
        switchTabs(rechts, links);
    });
}

function loadTable() {
	clearTable();
	
    for(var i = 0; i < playerDataArray.length; ++i) {
        var tableRow = document.getElementById("spielerTabelle").insertRow(i+1);

        tableRow.insertCell(0).innerHTML = playerDataArray[i].firstname + " " + playerDataArray[i].surname;
        tableRow.insertCell(1).innerHTML = playerDataArray[i].team;
        tableRow.insertCell(2).innerHTML = playerDataArray[i].headcoach;
        tableRow.insertCell(3).innerHTML = playerDataArray[i].asisstantcoach;
        tableRow.insertCell(4).innerHTML = playerDataArray[i].position;
        tableRow.insertCell(5).innerHTML = playerDataArray[i].isActive;
        tableRow.insertCell(6).innerHTML = playerDataArray[i].number;
        tableRow.insertCell(7).innerHTML = playerDataArray[i].year;
		lastNumberOfPlayers++;
    }
}


function clearTable() {
    for (var k = 0; k < lastNumberOfPlayers; ++k)
        document.getElementById("spielerTabelle").deleteRow(1);

    lastNumberOfPlayers = 0;
}

function requestHandler() {
    if ((request.readyState == 4)
        && (request.status == 200)
        && (request.responseText != null)) {
        playerDataArray = JSON.parse(request.responseText);

        loadTable();
    }
}
