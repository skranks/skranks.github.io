const newPlayer = '&nbsp;<img class="newPlayer" src="Images/new-icon-28.png">';

let rank = 1;

let markup = '<div class="categories"></div>' +
    '<div class="categories"></div>' +
    '<div class="categoriesName" onclick="sortByName()"><b>Name</b></div>' +
    '<div class="categories" onclick="sortByWins()"><b>Wins</b></div>' +
    '<div class="categories" onclick="sortByKills()"><b>Kills</b></div>' +
    '<div class="categories" onclick="sortByBotKills()"><b>Bots Kills</b></div>' +
    '<div class="categories" onclick="sortByDeaths()"><b>Deaths</b></div>' +
    '<div class="categories" onclick="sortByKdr()"><b>KDR</b></div>' +
    '<div class="categories" onclick="sortByLevel()"><b>Level</b></div>' +
    '<div class="categories" onclick="sortByDate()"><b>Last Updated</b></div>';

function fillGrid() {
    let color;
    rank = 1;

    for (let i=0; i < sortedPlayer.length; i++) {
        if (i % 2 == 0) {color = 'color1';}
            else {color = 'color2';}

        let boxes = '<div class="number ' + color + '">' + rank + '.</div>' + 
            '<div class="box ' + color + '"><a href="Images/Screenshots/' + sortedPlayer[i][0] + '" class="lightbox_trigger">' + 
                '<i class="fas fa-camera"></i></a></div>' + 
            '<div class="name ' + color + '" onclick="sortByName()">' + sortedPlayer[i][1] + '</div>' + 
            '<div class="box ' + color + '" onclick="sortByWins()">' + sortedPlayer[i][2] + '</div>' + 
            '<div class="box ' + color + '" onclick="sortByKills()">' + sortedPlayer[i][3] + '</div>' + 
            '<div class="box ' + color + '" onclick="sortByBotKills()">' + sortedPlayer[i][4] + '</div>' + 
            '<div class="box ' + color + '" onclick="sortByDeaths()">' + sortedPlayer[i][5] + '</div>' + 
            '<div class="box ' + color + '" onclick="sortByKdr()">' + sortedPlayer[i][6] + '</div>' +
            '<div class="box ' + color + '" onclick="sortByLevel()">' + sortedPlayer[i][7] + '</div>' +
            '<div class="box ' + color + '" onclick="sortByDate()">' + sortedPlayer[i][8] + '</div>'

    document.getElementById('mainGrid').innerHTML += boxes;
    rank++;
                        }
            };