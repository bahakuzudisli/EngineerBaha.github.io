var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $('name').focus();
};

function displayResults() {
    var average = 0;
    var highest = 0;
    for(var i = 0; i < scores.length; i++) {
        average += scores[i];
        if(scores[i] > highest) {
            highest = scores[i];
        }
    }
    average = average / scores.length;
    
    var resultDiv = $('results');
    resultDiv.innerHTML = "<h2>Results</h2>";
    resultDiv.innerHTML += "<p>Average score is " + average.toFixed(2) + "</p>";
    resultDiv.innerHTML += "<p>High score is " + highest + "</p>";
}

function displayScores() {
    var table = $('scores_table');
    table.innerHTML = "";

    var title = $('scores_title');
    if (!title) {
        title = document.createElement('h2');
        title.id = 'scores_title';
        title.textContent = "Scores";
        title.style.color = "blue";
        table.parentNode.insertBefore(title, table);
    }

    var headerRow = document.createElement('tr');
    var nameHeader = document.createElement('th');
    var scoreHeader = document.createElement('th');

    nameHeader.textContent = "Name";
    scoreHeader.textContent = "Score";

    headerRow.appendChild(nameHeader);
    headerRow.appendChild(scoreHeader);
    table.appendChild(headerRow);

    for(var i = 0; i < names.length; i++) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        var scoreCell = document.createElement('td');

        nameCell.textContent = names[i];
        scoreCell.textContent = scores[i];

        row.appendChild(nameCell);
        row.appendChild(scoreCell);
        table.appendChild(row);
    }
}




function addScore() {
    var name = $('name').value;
    var score = parseInt($('score').value, 10);
    
    if(name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
        return;
    }
    
    names.push(name);
    scores.push(score);
    
    $('name').value = "";
    $('score').value = "";
    $('name').focus();
}
