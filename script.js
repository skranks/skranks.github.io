const newPlayer = '&nbsp;<img class="newPlayer" src="Images/new-icon-28.png">';

let rank = 1;

function fillGrid() {
    let color;

    for (let i=0; i < sortedPlayer.length; i++) {
        if (i % 2 == 0) {color = 'color1';}
            else {color = 'color2';}

        let markup = '<div class="number ' + color + '">' + rank + '.</div>' + 
            '<div class="box ' + color + '"><a href="Images/Screenshots/' + sortedPlayer[i][0] + '" class="lightbox_trigger">' + 
                '<i class="fas fa-camera"></i></a></div>' + 
            '<div class="name ' + color + '">' + sortedPlayer[i][1] + '</div>' + 
            '<div class="box ' + color + '">' + sortedPlayer[i][2] + '</div>' + 
            '<div class="box ' + color + '">' + sortedPlayer[i][3] + '</div>' + 
            '<div class="box ' + color + '">' + sortedPlayer[i][4] + '</div>' + 
            '<div class="box ' + color + '">' + sortedPlayer[i][5] + '</div>' + 
            '<div class="box ' + color + '">' + sortedPlayer[i][6] + '</div>' +
            '<div class="box ' + color + '">' + sortedPlayer[i][7] + '</div>' +
            '<div class="box ' + color + '">' + sortedPlayer[i][8] + '</div>'

    document.getElementById('mainGrid').innerHTML += markup;
    rank++;
                        }
            };