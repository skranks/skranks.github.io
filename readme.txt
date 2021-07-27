1. Save each screenshot as the entry is updated. Screenshots are saved in Images/Screenshots, and named after the player name. If a player changes their name, save the screenshot as their new name and delete the old one.

2. Player info is in playerList.js. First, go through and delete all 'newPlayer' instances.

3. Players are sorted alphabetically. If a player changes their name, change their name and move the entry accordingly.

4. Format is: ['screenshot location',
               'Player name' (+ newPlayer if new entry),
               Wins,
               Kills,
               Bot kills,
               Deaths,
               'KDR',
               Level,
               Date Updated (M/DD/YYYY)]