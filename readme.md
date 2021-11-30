# Unofficial Smash Karts Leaderboard

https://skranks.github.io/

## Update Guide

1. Save each screenshot as the entry is updated. Screenshots are saved in Images/Screenshots as png, and named exactly the same as the player name (case sensitive). If a player changes their name, save the screenshot as their new name and delete the old one.

2. Player info is in `playerData.js`. First, go through and delete all `newEntry` object keys.

3. Players are sorted alphabetically. If a player changes their name, change their name and move the entry accordingly.

4. Format is: 
```js
[
    {
        "username": "_GojoSatoru_",     // String
        "kills": 18255,                 // Number
        "botKills": 1014,               // Number
        "deaths": 13851,                // Number
        "kdr": 1.32,                    // Number
        "wins": 659,                    // Number
        "games": 12343                  // Number, this key is not guarenteed to exist
        "newEntry": true,               // Only if this user is brand new to the leaderboard. Next leaderboard update this must be removed manually
        "level": 60,                    // Number, ignore adding key if no level has ever been given
        "lastUpdated": "11/4/2021",     // String (M/D/YYYY)
    }
]
```

A helpful tool for generating the above object for new entries can be found here: https://codepen.io/Chesswithsean/full/rNmvXWe