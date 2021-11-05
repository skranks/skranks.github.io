let rank = 1;

let markup = '<div class="categoriesLeft"></div>' +
    '<div class="categories"></div>' +
    '<div class="categoriesName"><b>Name &nbsp;</b><i class="fas fa-caret-square-up arrow" onclick="sortByNameUp()"></i>&nbsp' +
    '<i class="fas fa-caret-square-down arrow" onclick="sortByNameDown()"></i></div>' +
    '<div class="categories"><b>Wins&nbsp;</b><i class="fas fa-caret-square-up arrow" onclick="sortByWinsUp()"></i>&nbsp' +
    '<i class="fas fa-caret-square-down arrow" onclick="sortByWinsDown()"></i></div>' +
    '<div class="categories"><b>Kills&nbsp;</b><i class="fas fa-caret-square-up arrow" onclick="sortByKillsUp()"></i>&nbsp' +
    '<i class="fas fa-caret-square-down arrow" onclick="sortByKillsDown()"></i></div>' +
    '<div class="categories"><b>Bots Kills&nbsp;</b><i class="fas fa-caret-square-up arrow" onclick="sortByBotKillsUp()"></i>&nbsp' +
    '<i class="fas fa-caret-square-down arrow" onclick="sortByBotKillsDown()"></i></div>' +
    '<div class="categories"><b>Deaths&nbsp;</b><i class="fas fa-caret-square-up arrow" onclick="sortByDeathsUp()"></i>&nbsp' +
    '<i class="fas fa-caret-square-down arrow" onclick="sortByDeathsDown()"></i></div>' +
    '<div class="categories"><b>KDR&nbsp;</b><i class="fas fa-caret-square-up arrow" onclick="sortByKdrUp()"></i>&nbsp' +
    '<i class="fas fa-caret-square-down arrow" onclick="sortByKdrDown()"></i></div>' +
    '<div class="categories"><b>Level&nbsp;</b><i class="fas fa-caret-square-up arrow" onclick="sortByLevelUp()"></i>&nbsp' +
    '<i class="fas fa-caret-square-down arrow" onclick="sortByLevelDown()"></i></div>' +
    '<div class="categoriesRight"><b>Last Updated&nbsp;</b><i class="fas fa-caret-square-up arrow" onclick="sortByDateUp()"></i>&nbsp' +
    '<i class="fas fa-caret-square-down arrow" onclick="sortByDateDown()"></i></div>';

function fillGrid() {
    let color;
    rank = 1;
    let boxes = '';

    for (let i=0; i < sortedPlayer.length; i++) {
        if (i % 2 == 0) {color = 'color1';}
            else {color = 'color2';}
            const playerData = sortedPlayer[i];
            if(i + 1 == sortedPlayer.length) {
                boxes += '<div class="numberBottom ' + color + '">' + rank + '.</div>' + 
                '<div class="boxBottom ' + color + '"><a href="Images/Screenshots/' + playerData.username + '.png' + '" class="lightbox_trigger">' + 
                    '<i class="fas fa-camera"></i></a></div>' + 
                '<div class="nameBottom ' + color + '" onclick="sortByNameUp()">' + playerData.username + (playerData.newEntry ? newPlayer : '') + '</div>' + 
                '<div class="boxBottom ' + color + '" onclick="sortByWinsUp()">' + playerData.wins + '</div>' + 
                '<div class="boxBottom ' + color + '" onclick="sortByKillsUp()">' + playerData.kills + '</div>' + 
                '<div class="boxBottom ' + color + '" onclick="sortByBotKillsUp()">' + playerData.botKills + '</div>' + 
                '<div class="boxBottom ' + color + '" onclick="sortByDeathsUp()">' + playerData.deaths + '</div>' + 
                '<div class="boxBottom ' + color + '" onclick="sortByKdrUp()">' + playerData.kdr.toFixed(2) + '</div>' +
                '<div class="boxBottom ' + color + '" onclick="sortByLevelUp()">' + (playerData.level ? playerData.level : '?') + '</div>' + 
                '<div class="boxRightBottom ' + color + '" onclick="sortByDateUp()">' + (playerData.lastUpdated ? playerData.lastUpdated : '?') + '</div>';
            } else {
                boxes += '<div class="number ' + color + '">' + rank + '.</div>' + 
                '<div class="box ' + color + '"><a href="Images/Screenshots/' + playerData.username + '.png' + '" class="lightbox_trigger">' + 
                    '<i class="fas fa-camera"></i></a></div>' + 
                '<div class="name ' + color + '" onclick="sortByNameUp()">' + playerData.username + (playerData.newEntry ? newPlayer : '') + '</div>' + 
                '<div class="box ' + color + '" onclick="sortByWinsUp()">' + playerData.wins + '</div>' + 
                '<div class="box ' + color + '" onclick="sortByKillsUp()">' + playerData.kills + '</div>' + 
                '<div class="box ' + color + '" onclick="sortByBotKillsUp()">' + playerData.botKills + '</div>' + 
                '<div class="box ' + color + '" onclick="sortByDeathsUp()">' + playerData.deaths + '</div>' + 
                '<div class="box ' + color + '" onclick="sortByKdrUp()">' + playerData.kdr.toFixed(2) + '</div>' +
                '<div class="box ' + color + '" onclick="sortByLevelUp()">' + (playerData.level ? playerData.level : '?') + '</div>' + 
                '<div class="boxRight ' + color + '" onclick="sortByDateUp()">' + (playerData.lastUpdated ? playerData.lastUpdated : '?') + '</div>';
            }

            rank++;
        }
        document.getElementById('mainGrid').innerHTML = markup + boxes;
    lightboxReset();
            }

function lightboxReset() {
    $('.lightbox_trigger').click(function(e) {
                                 
        //prevent default action (hyperlink)
        e.preventDefault();
         
        //Get clicked link href
        var image_href = $(this).attr("href");
         
        /*  
        If the lightbox window HTML already exists in document, 
        change the img src to to match the href of whatever link was clicked
         
        If the lightbox window HTML doesn't exists, create it and insert it.
        (This will only happen the first time around)
        */
         
        if ($('#lightbox').length > 0) { // #lightbox exists
             
            //place href as img src value
            $('#content').html('<img src="' + image_href + '" />');
             
            //show lightbox window - you could use .show('fast') for a transition
            $('#lightbox').show();
        }
         
        else { //#lightbox does not exist - create and insert (runs 1st time only)
             
            //create HTML markup for lightbox window
            var lightbox = 
            '<div id="lightbox">' +
                '<p>Click on image to close<br></p>' +
                '<div id="content">' + //insert clicked link's href into img src
                    '<img src="' + image_href +'" />' +
                '</div>' +    
            '</div>';
                 
            //insert lightbox HTML into page
            $('body').append(lightbox);
        }
    })
}

sortByWinsUp();
