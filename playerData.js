/* function used to generate this:

const newPlayer = '&nbsp;<img class="newPlayer" src="Images/new-icon-28.png">';
function convertOldFormatToNewFormat(oldFormat, newFormat) {
	oldFormat.forEach((data) => {
		const newData = {
			username: data[1],
			kills: data[3],
			botKills: data[4],
			deaths: data[5],
			kdr: Number(data[6]),
			wins: data[2]
		};
		if (data[1].includes(newPlayer)) {
			newData.username = data[1].replace(newPlayer, "");
			newData.newEntry = true;
		}
		if (data[0] !== newData.username + ".png") {
			newData.image = data[0]; // No longer using the image key
		}
		if (data[7]) {
			newData.level = data[7];
		}
		if (data[8]) {
			newData.lastUpdated = data[8];
		}
		newFormat.push(newData);
	});
}

oldFormat is the old massive array of arrays, newFormat is smashKartsPlayerData as seen below
*/


const smashKartsPlayerData = [{
    "username": "_GojoSatoru_",
    "kills": 18255,
    "botKills": 1014,
    "deaths": 13851,
    "kdr": 1.32,
    "wins": 659,
    "newEntry": true,
    "level": 60,
    "lastUpdated": "11/4/2021"
},
{
    "username": "007",
    "kills": 9576,
    "botKills": 61,
    "deaths": 7345,
    "kdr": 1.3,
    "wins": 301,
    "level": 18,
    "lastUpdated": "7/31/2021"
},
{
    "username": "1NF1N1TE",
    "kills": 7012,
    "botKills": 479,
    "deaths": 5065,
    "kdr": 1.38,
    "wins": 360,
    "level": 29,
    "lastUpdated": "11/4/2021"
},
{
    "username": "2Fast2Furious",
    "kills": 1754,
    "botKills": 77,
    "deaths": 1617,
    "kdr": 1.08,
    "wins": 94,
},
{
    "username": "7TAQBAQ",
    "kills": 5101,
    "botKills": 85,
    "deaths": 4565,
    "kdr": 1.12,
    "wins": 224,
    "level": 15,
    "lastUpdated": "6/16/2021"
},
{
    "username": "Aabel03",
    "kills": 2379,
    "botKills": 77,
    "deaths": 1598,
    "kdr": 1.49,
    "wins": 154,
    "level": 11,
    "lastUpdated": "5/25/2021"
},
{
    "username": "PlayerAaritSk",
    "kills": 19654,
    "botKills": 2270,
    "deaths": 14653,
    "kdr": 1.34,
    "wins": 958,
    "level": 49,
    "lastUpdated": "11/4/2021"
},
{
    "username": "AbrahamJ",
    "kills": 1005,
    "botKills": 30,
    "deaths": 921,
    "kdr": 1.09,
    "wins": 45,
    "level": 10,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Abuwardeh",
    "kills": 3991,
    "botKills": 1359,
    "deaths": 3084,
    "kdr": 1.29,
    "wins": 251,
    "level": 12,
    "lastUpdated": "5/24/2021"
},
{
    "username": "aConadatuamae",
    "kills": 28031,
    "botKills": 297,
    "deaths": 10854,
    "kdr": 2.58,
    "wins": 1956,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Adam",
    "kills": 441,
    "botKills": 66,
    "deaths": 430,
    "kdr": 1.03,
    "wins": 22,
    "level": 10,
    "lastUpdated": "8/19/2021"
},
{
    "username": "Aimbot.LeLe",
    "kills": 14670,
    "botKills": 108,
    "deaths": 8420,
    "kdr": 1.74,
    "wins": 924,
    "level": 13,
    "lastUpdated": "6/23/2021"
},
{
    "username": "Airi",
    "kills": 4161,
    "botKills": 391,
    "deaths": 2383,
    "kdr": 1.75,
    "wins": 328,
    "level": 10,
    "lastUpdated": "5/19/2021"
},
{
    "username": "AKANSHA",
    "kills": 7994,
    "botKills": 83,
    "deaths": 6961,
    "kdr": 1.15,
    "wins": 128,
    "level": 20,
    "lastUpdated": "9/9/2021"
},
{
    "username": "alejandrocuber",
    "kills": 1112,
    "botKills": 15,
    "deaths": 548,
    "kdr": 2.03,
    "wins": 78,
    "level": 12,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Alexander",
    "kills": 9163,
    "botKills": 286,
    "deaths": 3156,
    "kdr": 2.9,
    "wins": 633
},
{
    "username": "Alexplayz",
    "kills": 950,
    "botKills": 247,
    "deaths": 907,
    "kdr": 1.05,
    "wins": 50,
    "lastUpdated": "6/01/2021"
},
{
    "username": "Alfonso",
    "kills": 18557,
    "botKills": 1443,
    "deaths": 6753,
    "kdr": 2.75,
    "wins": 1414
},
{
    "username": "allstarcat",
    "kills": 7519,
    "botKills": 815,
    "deaths": 5442,
    "kdr": 1.38,
    "wins": 209,
    "lastUpdated": "5/24/2021"
},
{
    "username": "AlphaZero",
    "kills": 80270,
    "botKills": 1969,
    "deaths": 33841,
    "kdr": 2.37,
    "wins": 5032,
    "level": 60,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Amrik",
    "kills": 3816,
    "botKills": 94,
    "deaths": 2244,
    "kdr": 1.7,
    "wins": 239,
    "level": 12,
    "lastUpdated": "7/31/2021"
},
{
    "username": "ANCIENT",
    "kills": 32940,
    "botKills": 934,
    "deaths": 17279,
    "kdr": 1.91,
    "wins": 2121,
    "level": 51,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Anjel lunar_057",
    "kills": 833,
    "botKills": 207,
    "deaths": 754,
    "kdr": 1.1,
    "wins": 45,
    "level": 8,
    "lastUpdated": "5/20/2021"
},
{
    "username": "Armario",
    "kills": 1550,
    "botKills": 63,
    "deaths": 1009,
    "kdr": 1.54,
    "wins": 38,
    "level": 8,
    "lastUpdated": "5/27/2021"
},
{
    "username": "Avikatron",
    "kills": 1054,
    "botKills": 11,
    "deaths": 66,
    "kdr": 1.58,
    "wins": 48
},
{
    "username": "Ayan",
    "kills": 2074,
    "botKills": 109,
    "deaths": 1827,
    "kdr": 1.14,
    "wins": 126,
    "level": 11,
    "lastUpdated": "5/18/2021"
},
{
    "username": "AytruxThs",
    "kills": 195,
    "botKills": 2,
    "deaths": 158,
    "kdr": 1.23,
    "wins": 11,
    "level": 6,
    "lastUpdated": "5/22/2021"
},
{
    "username": "BAMerica",
    "kills": 12502,
    "botKills": 612,
    "deaths": 7270,
    "kdr": 1.72,
    "wins": 381,
    "level": 15,
    "lastUpdated": "8/27/2021"
},
{
    "username": "BazzaBingo",
    "kills": 15177,
    "botKills": 1273,
    "deaths": 9469,
    "kdr": 1.6,
    "wins": 1000,
    "level": 30,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Billy",
    "kills": 380,
    "botKills": 1,
    "deaths": 210,
    "kdr": 1.81,
    "wins": 25,
    "level": 7,
    "lastUpdated": "5/25/2021"
},
{
    "username": "BlackShadow",
    "kills": 3195,
    "botKills": 245,
    "deaths": 2168,
    "kdr": 1.47,
    "wins": 148,
    "level": 7,
    "lastUpdated": "6/09/2021"
},
{
    "username": "Bleh The Breh",
    "kills": 995,
    "botKills": 47,
    "deaths": 776,
    "kdr": 1.28,
    "wins": 65,
    "level": 13,
    "lastUpdated": "9/9/2021"
},
{
    "username": "blesses45",
    "kills": 15374,
    "botKills": 988,
    "deaths": 5957,
    "kdr": 2.58,
    "wins": 1322,
    "level": 36,
    "lastUpdated": "8/4/2021"
},
{
    "username": "BoBoiBoy",
    "kills": 11384,
    "botKills": 918,
    "deaths": 8484,
    "kdr": 1.34,
    "wins": 527,
    "level": 37,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Bonkaroo",
    "kills": 835,
    "botKills": 56,
    "deaths": 517,
    "kdr": 1.62,
    "wins": 56,
    "level": 6,
    "lastUpdated": "8/19/2021"
},
{
    "username": "boomya",
    "kills": 37957,
    "botKills": 841,
    "deaths": 14350,
    "kdr": 2.65,
    "wins": 3129,
    "level": 13,
    "lastUpdated": "6/09/2021"
},
{
    "username": "BossAngeles",
    "kills": 21107,
    "botKills": 190,
    "deaths": 12445,
    "kdr": 1.7,
    "wins": 1207,
    "level": 50,
    "lastUpdated": "11/4/2021"
},
{
    "username": "BottyMcBotFace",
    "kills": 5646,
    "botKills": 1754,
    "deaths": 5195,
    "kdr": 1.09,
    "wins": 325,
    "level": 5,
    "lastUpdated": "5/19/2021"
},
{
    "username": "Bowser",
    "kills": 60092,
    "botKills": 9228,
    "deaths": 26764,
    "kdr": 2.25,
    "wins": 4002,
    "level": 50,
    "lastUpdated": "10/17/2021"
},
{
    "username": "caterizer",
    "kills": 5511,
    "botKills": 239,
    "deaths": 4196,
    "kdr": 1.31,
    "wins": 305,
    "level": 20,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Bro Man",
    "kills": 11904,
    "botKills": 623,
    "deaths": 7642,
    "kdr": 1.56,
    "wins": 702,
    "level": 30,
    "lastUpdated": "8/4/2021"
},
{
    "username": "TheVladyBoi",
    "kills": 49954,
    "botKills": 3711,
    "deaths": 23310,
    "kdr": 2.14,
    "wins": 3277,
    "level": 53,
    "lastUpdated": "11/4/2021"
},
{
    "username": "cbc",
    "kills": 3028,
    "botKills": 195,
    "deaths": 1735,
    "kdr": 1.75,
    "wins": 208,
    "level": 4,
    "lastUpdated": "5/22/2021"
},
{
    "username": "Cepo",
    "kills": 1206,
    "botKills": 33,
    "deaths": 989,
    "kdr": 1.22,
    "wins": 53,
    "lastUpdated": "5/19/2021"
},
{
    "username": "ChefAldo",
    "kills": 3008,
    "botKills": 243,
    "deaths": 2381,
    "kdr": 1.26,
    "wins": 160,
    "lastUpdated": "6/09/2021"
},
{
    "username": "ChickenTenderz",
    "kills": 3708,
    "botKills": 107,
    "deaths": 1734,
    "kdr": 2.14,
    "wins": 259
},
{
    "username": "ChickGod",
    "kills": 371,
    "botKills": 15,
    "deaths": 237,
    "kdr": 1.57,
    "wins": 23,
    "level": 8,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Choow",
    "kills": 23254,
    "botKills": 582,
    "deaths": 13328,
    "kdr": 1.74,
    "wins": 1620,
    "level": 60,
    "lastUpdated": "10/17/2021"
},
{
    "username": "cobra kai",
    "kills": 4037,
    "botKills": 301,
    "deaths": 4845,
    "kdr": 0.83,
    "wins": 127,
    "lastUpdated": "5/18/2021"
},
{
    "username": "Coisec",
    "kills": 1709,
    "botKills": 73,
    "deaths": 933,
    "kdr": 1.83,
    "wins": 99,
    "level": 8,
    "lastUpdated": "5/18/2021"
},
{
    "username": "Cool",
    "kills": 853,
    "botKills": 104,
    "deaths": 898,
    "kdr": 0.95,
    "wins": 51,
    "level": 12,
    "lastUpdated": "10/17/2021"
},
{
    "username": "CoolOmarLuvsAnimals",
    "kills": 1125,
    "botKills": 1888,
    "deaths": 1301,
    "kdr": 0.86,
    "wins": 15,
    "level": 6,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Corpse",
    "kills": 2715,
    "botKills": 134,
    "deaths": 2337,
    "kdr": 1.16,
    "wins": 162,
    "level": 12,
    "lastUpdated": "5/22/2021"
},
{
    "username": "coucoutoul",
    "kills": 3670,
    "botKills": 1013,
    "deaths": 2214,
    "kdr": 1.66,
    "wins": 191,
    "level": 7,
    "lastUpdated": "6/16/2021"
},
{
    "username": "Cruise",
    "kills": 9148,
    "botKills": 378,
    "deaths": 6341,
    "kdr": 1.44,
    "wins": 639,
    "level": 16,
    "lastUpdated": "6/03/2021"
},
{
    "username": "Crygen",
    "kills": 3095,
    "botKills": 481,
    "deaths": 2071,
    "kdr": 1.49,
    "wins": 222,
    "level": 15,
    "lastUpdated": "8/11/2021"
},
{
    "username": "CuteBaby",
    "kills": 32455,
    "botKills": 2422,
    "deaths": 15166,
    "kdr": 2.14,
    "wins": 2492,
    "level": 43,
    "lastUpdated": "9/17/2021"
},
{
    "username": "DARK DEMON",
    "kills": 1152,
    "botKills": 23,
    "deaths": 767,
    "kdr": 1.5,
    "wins": 64,
    "lastUpdated": "6/30/2021"
},
{
    "username": "darkrai",
    "kills": 17438,
    "botKills": 254,
    "deaths": 10534,
    "kdr": 1.66,
    "wins": 500,
    "newEntry": true,
    "lastUpdated": "11/4/2021"
},
{
    "username": "DarkSheriff",
    "kills": 7116,
    "botKills": 181,
    "deaths": 4715,
    "kdr": 1.51,
    "wins": 443,
    "level": 16,
    "lastUpdated": "7/31/2021"
},
{
    "username": "DarkWarrior123",
    "kills": 4393,
    "botKills": 4146,
    "deaths": 3868,
    "kdr": 1.14,
    "wins": 181,
    "level": 7,
    "lastUpdated": "9/9/2021"
},
{
    "username": "David",
    "kills": 22715,
    "botKills": 593,
    "deaths": 10635,
    "kdr": 2.14,
    "wins": 1588,
    "level": 35,
    "lastUpdated": "11/4/2021"
},
{
    "username": "DeltaXLD",
    "kills": 467,
    "botKills": 15,
    "deaths": 508,
    "kdr": 0.92,
    "wins": 16,
    "newEntry": true,
    "level": 8,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Demetris88",
    "kills": 820,
    "botKills": 36,
    "deaths": 953,
    "kdr": 0.86,
    "wins": 19,
    "level": 11,
    "lastUpdated": "9/17/2021"
},
{
    "username": "DevilBunny",
    "kills": 23329,
    "botKills": 1750,
    "deaths": 10697,
    "kdr": 2.18,
    "wins": 1695,
    "level": 12,
    "lastUpdated": "6/16/2021"
},
{
    "username": "DevilStickman",
    "kills": 24951,
    "botKills": 1787,
    "deaths": 11439,
    "kdr": 2.18,
    "wins": 1809,
    "level": 13,
    "lastUpdated": "6/23/2021"
},
{
    "username": "DIOSITOXDYT",
    "kills": 2256,
    "botKills": 35,
    "deaths": 3469,
    "kdr": 0.65,
    "wins": 43,
    "level": 7,
    "lastUpdated": "5/31/2021"
},
{
    "username": "djsourav",
    "kills": 5268,
    "botKills": 485,
    "deaths": 5245,
    "kdr": 1,
    "wins": 189,
    "level": 25,
    "lastUpdated": "11/4/2021"
},
{
    "username": "dragonblackshade",
    "kills": 54,
    "botKills": 14,
    "deaths": 112,
    "kdr": 0.48,
    "wins": 1,
    "level": 6,
    "lastUpdated": "5/31/2021"
},
{
    "username": "DragonBlaster",
    "kills": 6184,
    "botKills": 545,
    "deaths": 4129,
    "kdr": 1.5,
    "wins": 205,
    "level": 11,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Saanvi",
    "kills": 35542,
    "botKills": 517,
    "deaths": 24016,
    "kdr": 1.48,
    "wins": 1595,
    "level": 50,
    "lastUpdated": "11/4/2021"
},
{
    "username": "DSRazor99",
    "kills": 1931,
    "botKills": 167,
    "deaths": 1481,
    "kdr": 1.3,
    "wins": 49,
    "newEntry": true,
    "level": 9,
    "lastUpdated": "11/4/2021"
},
{
    "username": "DW",
    "kills": 4896,
    "botKills": 2157,
    "deaths": 3269,
    "kdr": 1.5,
    "wins": 258,
    "level": 17,
    "lastUpdated": "7/31/2021"
},
{
    "username": "AttackFromHeaven",
    "kills": 3684,
    "botKills": 402,
    "deaths": 3048,
    "kdr": 1.21,
    "wins": 200,
    "level": 23,
    "lastUpdated": "10/17/2021"
},
{
    "username": "EE",
    "kills": 5937,
    "botKills": 34,
    "deaths": 2930,
    "kdr": 2.03,
    "wins": 470,
    "level": 15,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Eli",
    "kills": 1029,
    "botKills": 7,
    "deaths": 332,
    "kdr": 3.1,
    "wins": 83
},
{
    "username": "ElitePROgamer",
    "kills": 34870,
    "botKills": 1715,
    "deaths": 16974,
    "kdr": 2.05,
    "wins": 2431,
    "level": 50,
    "lastUpdated": "11/4/2021"
},
{
    "username": "ElJulen",
    "kills": 353,
    "botKills": 3,
    "deaths": 204,
    "kdr": 1.73,
    "wins": 22,
    "lastUpdated": "5/28/2021"
},
{
    "username": "ElsaPRO",
    "kills": 485,
    "botKills": 151,
    "deaths": 333,
    "kdr": 1.46,
    "wins": 31,
    "level": 5,
    "lastUpdated": "6/16/2021"
},
{
    "username": "Todoroki",
    "kills": 5362,
    "botKills": 394,
    "deaths": 3335,
    "kdr": 1.61,
    "wins": 362,
    "level": 23,
    "lastUpdated": "11/4/2021"
},
{
    "username": "CATwithHAT",
    "kills": 10148,
    "botKills": 531,
    "deaths": 6464,
    "kdr": 1.57,
    "wins": 754,
    "level": 32,
    "lastUpdated": "8/11/2021"
},
{
    "username": "EREDOTEI",
    "kills": 322,
    "botKills": 9,
    "deaths": 456,
    "kdr": 0.71,
    "wins": 13,
    "level": 7,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Expurgation",
    "kills": 6428,
    "botKills": 236,
    "deaths": 4205,
    "kdr": 1.53,
    "wins": 403,
    "level": 19,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Fall Teem",
    "kills": 10409,
    "botKills": 659,
    "deaths": 4435,
    "kdr": 2.35,
    "wins": 893,
    "level": 30,
    "lastUpdated": "7/27/2021"
},
{
    "username": "FancyCarrot",
    "kills": 2812,
    "botKills": 221,
    "deaths": 2396,
    "kdr": 1.17,
    "wins": 150,
    "level": 7,
    "lastUpdated": "5/21/2021"
},
{
    "username": "FantaClauss",
    "kills": 16438,
    "botKills": 396,
    "deaths": 9832,
    "kdr": 1.67,
    "wins": 1142,
    "level": 27,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Sir FuriouslyIV",
    "kills": 2374,
    "botKills": 114,
    "deaths": 2291,
    "kdr": 1.04,
    "wins": 132,
    "level": 20,
    "lastUpdated": "7/31/2021"
},
{
    "username": "AlphaOneYTsk",
    "kills": 19173,
    "botKills": 880,
    "deaths": 9875,
    "kdr": 1.94,
    "wins": 1406,
    "level": 23,
    "lastUpdated": "8/4/2021"
},
{
    "username": "FireStorm",
    "kills": 3944,
    "botKills": 248,
    "deaths": 2958,
    "kdr": 1.33,
    "wins": 164,
    "lastUpdated": "6/03/2021"
},
{
    "username": "Player2",
    "kills": 9617,
    "botKills": 263,
    "deaths": 5219,
    "kdr": 1.84,
    "wins": 612,
    "level": 26,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Forward",
    "kills": 13620,
    "botKills": 801,
    "deaths": 4942,
    "kdr": 2.76,
    "wins": 725,
    "level": 7
},
{
    "username": "FrankEpic",
    "kills": 2555,
    "botKills": 435,
    "deaths": 2093,
    "kdr": 1.22,
    "wins": 185,
    "lastUpdated": "6/23/2021"
},
{
    "username": "Fru",
    "kills": 10015,
    "botKills": 288,
    "deaths": 5594,
    "kdr": 1.79,
    "wins": 699,
    "level": 14,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Fubster",
    "kills": 35826,
    "botKills": 156,
    "deaths": 19522,
    "kdr": 1.84,
    "wins": 2276,
    "level": 60,
    "lastUpdated": "11/4/2021"
},
{
    "username": "GANPATJAAT",
    "kills": 79271,
    "botKills": 2805,
    "deaths": 43901,
    "kdr": 1.81,
    "wins": 5016,
    "level": 29,
    "lastUpdated": "8/27/2021"
},
{
    "username": "GetCoolAlready",
    "kills": 1774,
    "botKills": 72,
    "deaths": 1621,
    "kdr": 1.09,
    "wins": 88,
    "level": 14,
    "lastUpdated": "9/9/2021"
},
{
    "username": "GGE",
    "kills": 2333,
    "botKills": 297,
    "deaths": 1374,
    "kdr": 1.7,
    "wins": 189,
    "level": 10,
    "lastUpdated": "5/21/2021"
},
{
    "username": "Godzilla",
    "kills": 2575,
    "botKills": 122,
    "deaths": 1540,
    "kdr": 1.67,
    "wins": 190,
    "level": 12,
    "lastUpdated": "6/16/2021"
},
{
    "username": "GoldenBeast",
    "kills": 9822,
    "botKills": 153,
    "deaths": 4504,
    "kdr": 2.18,
    "wins": 747,
    "level": 13,
    "lastUpdated": "6/23/2021"
},
{
    "username": "GoldenBlack",
    "kills": 607,
    "botKills": 79,
    "deaths": 722,
    "kdr": 0.84,
    "wins": 18,
    "level": 9,
    "lastUpdated": "5/17/2021"
},
{
    "username": "VRISHANK",
    "kills": 59069,
    "botKills": 2662,
    "deaths": 35144,
    "kdr": 1.68,
    "wins": 3492,
    "level": 54,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Greendoggo",
    "kills": 22378,
    "botKills": 1649,
    "deaths": 10274,
    "kdr": 2.18,
    "wins": 1625,
    "level": 11,
    "lastUpdated": "6/16/2021"
},
{
    "username": "GreenLion",
    "kills": 1126,
    "botKills": 95,
    "deaths": 919,
    "kdr": 1.23,
    "wins": 55,
    "newEntry": true,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Grimreaper",
    "kills": 12679,
    "botKills": 1548,
    "deaths": 7903,
    "kdr": 1.6,
    "wins": 823,
    "level": 40,
    "lastUpdated": "10/17/2021"
},
{
    "username": "grunwalski",
    "kills": 56381,
    "botKills": 546,
    "deaths": 25028,
    "kdr": 2.25,
    "wins": 4337
},
{
    "username": "Gu1ziu",
    "kills": 971,
    "botKills": 0,
    "deaths": 413,
    "kdr": 2.35,
    "wins": 80,
    "level": 9,
    "lastUpdated": "5/31/2021"
},
{
    "username": "Guardian",
    "kills": 30437,
    "botKills": 1761,
    "deaths": 20526,
    "kdr": 1.48,
    "wins": 1500,
    "level": 60,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Hackbuster",
    "kills": 51924,
    "botKills": 3513,
    "deaths": 30441,
    "kdr": 1.71,
    "wins": 3096,
    "newEntry": true,
    "level": 60,
    "lastUpdated": "11/4/2021"
},
{
    "username": "haedcase",
    "kills": 125351,
    "botKills": 145,
    "deaths": 58473,
    "kdr": 2.14,
    "wins": 8001,
    "level": 58,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Harmlesscheese",
    "kills": 5685,
    "botKills": 298,
    "deaths": 2844,
    "kdr": 2,
    "wins": 426,
    "level": 13,
    "lastUpdated": "6/09/2021"
},
{
    "username": "Hello",
    "kills": 1030,
    "botKills": 119,
    "deaths": 847,
    "kdr": 1.22,
    "wins": 59,
    "level": 12,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Henry",
    "kills": 12827,
    "botKills": 752,
    "deaths": 6548,
    "kdr": 1.96,
    "wins": 771,
    "newEntry": true,
    "level": 37,
    "lastUpdated": "11/4/2021"
},
{
    "username": "HeXInFerN0",
    "kills": 24477,
    "botKills": 875,
    "deaths": 13124,
    "kdr": 1.87,
    "wins": 1386,
    "level": 29,
    "lastUpdated": "11/4/2021"
},
{
    "username": "hotlex",
    "kills": 8306,
    "botKills": 151,
    "deaths": 3525,
    "kdr": 2.36,
    "wins": 580,
    "level": 8,
    "lastUpdated": "6/03/2021"
},
{
    "username": "HUNGRY JACKS",
    "kills": 2947,
    "botKills": 152,
    "deaths": 2113,
    "kdr": 1.39,
    "wins": 188,
    "level": 20,
    "lastUpdated": "7/31/2021"
},
{
    "username": "hunter",
    "kills": 1687,
    "botKills": 62,
    "deaths": 1238,
    "kdr": 1.36,
    "wins": 108,
    "lastUpdated": "10/17/2021"
},
{
    "username": "icybullet",
    "kills": 5308,
    "botKills": 266,
    "deaths": 4601,
    "kdr": 1.15,
    "wins": 194
},
{
    "username": "IlmanOfficial",
    "kills": 271,
    "botKills": 10,
    "deaths": 285,
    "kdr": 0.95,
    "wins": 25,
    "lastUpdated": "6/23/2021"
},
{
    "username": "imnotpercy",
    "kills": 3231,
    "botKills": 319,
    "deaths": 1965,
    "kdr": 1.64,
    "wins": 220,
    "level": 20,
    "lastUpdated": "9/17/2021"
},
{
    "username": "IndianDream",
    "kills": 7918,
    "botKills": 815,
    "deaths": 5613,
    "kdr": 1.41,
    "wins": 349,
    "newEntry": true,
    "level": 30,
    "lastUpdated": "11/4/2021"
},
{
    "username": "IndianREDPro",
    "kills": 4508,
    "botKills": 349,
    "deaths": 3051,
    "kdr": 1.48,
    "wins": 320,
    "level": 11,
    "lastUpdated": "7/29/2021"
},
{
    "username": "insane",
    "kills": 4498,
    "botKills": 239,
    "deaths": 3664,
    "kdr": 1.23,
    "wins": 275,
    "level": 24,
    "lastUpdated": "7/27/2021"
},
{
    "username": "JackCrew22",
    "kills": 219,
    "botKills": 11,
    "deaths": 143,
    "kdr": 1.53,
    "wins": 17,
    "level": 7,
    "lastUpdated": "5/23/2021"
},
{
    "username": "JaesungTallTem",
    "kills": 1252,
    "botKills": 139,
    "deaths": 2030,
    "kdr": 0.62,
    "wins": 56,
    "level": 13,
    "lastUpdated": "6/16/2021"
},
{
    "username": "JashSK",
    "kills": 38629,
    "botKills": 436,
    "deaths": 17300,
    "kdr": 2.23,
    "wins": 2700,
    "level": 46,
    "lastUpdated": "11/4/2021"
},
{
    "username": "JeevSandhu",
    "kills": 748,
    "botKills": 530,
    "deaths": 788,
    "kdr": 0.95,
    "wins": 34,
    "level": 7,
    "lastUpdated": "5/19/2021"
},
{
    "username": "jeffonois",
    "kills": 7137,
    "botKills": 606,
    "deaths": 5386,
    "kdr": 1.33,
    "wins": 229,
    "newEntry": true,
    "level": 25,
    "lastUpdated": "11/4/2021"
},
{
    "username": "JisgoodSK",
    "kills": 12288,
    "botKills": 573,
    "deaths": 6344,
    "kdr": 1.94,
    "wins": 845,
    "level": 34,
    "lastUpdated": "11/4/2021"
},
{
    "username": "JoeTheProJr.",
    "kills": 5361,
    "botKills": 522,
    "deaths": 4048,
    "kdr": 1.32,
    "wins": 266,
    "level": 25,
    "lastUpdated": "9/9/2021"
},
{
    "username": "JustFlameys Sis",
    "kills": 22,
    "botKills": 5,
    "deaths": 13,
    "kdr": 1.69,
    "wins": 1,
    "level": 4,
    "lastUpdated": "5/20/2021"
},
{
    "username": "JustMechas",
    "kills": 7127,
    "botKills": 192,
    "deaths": 4314,
    "kdr": 1.65,
    "wins": 395,
    "level": 10
},
{
    "username": "K1ittens",
    "kills": 25435,
    "botKills": 1769,
    "deaths": 13517,
    "kdr": 1.88,
    "wins": 1677,
    "level": 38,
    "lastUpdated": "9/17/2021"
},
{
    "username": "kanishk",
    "kills": 10117,
    "botKills": 591,
    "deaths": 5352,
    "kdr": 1.89,
    "wins": 624,
    "level": 9,
    "lastUpdated": "5/18/2021"
},
{
    "username": "Karina",
    "kills": 49,
    "botKills": 3,
    "deaths": 36,
    "kdr": 1.36,
    "wins": 2,
    "level": 5,
    "lastUpdated": "5/18/2021"
},
{
    "username": "KAVINDU",
    "kills": 4380,
    "botKills": 887,
    "deaths": 3023,
    "kdr": 1.45,
    "wins": 337,
    "level": 23,
    "lastUpdated": "8/27/2021"
},
{
    "username": "JAW",
    "kills": 2599,
    "botKills": 411,
    "deaths": 1776,
    "kdr": 1.46,
    "wins": 168,
    "level": 16,
    "lastUpdated": "10/17/2021"
},
{
    "username": "KI123NG",
    "kills": 10003,
    "botKills": 203,
    "deaths": 7215,
    "kdr": 1.39,
    "wins": 483,
    "level": 22,
    "lastUpdated": "7/27/2021"
},
{
    "username": "KING",
    "kills": 2571,
    "botKills": 88,
    "deaths": 1539,
    "kdr": 1.67,
    "wins": 172,
    "level": 7,
    "lastUpdated": "6/30/2021"
},
{
    "username": "Kingsley",
    "kills": 20111,
    "botKills": 1020,
    "deaths": 11795,
    "kdr": 1.71,
    "wins": 1318,
    "newEntry": true,
    "lastUpdated": "11/4/2021"
},
{
    "username": "KingZapster",
    "kills": 3661,
    "botKills": 225,
    "deaths": 2963,
    "kdr": 1.24,
    "wins": 145,
    "level": 18,
    "lastUpdated": "11/4/2021"
},
{
    "username": "KitKatTopHat",
    "kills": 4053,
    "botKills": 715,
    "deaths": 2953,
    "kdr": 1.37,
    "wins": 263,
    "lastUpdated": "6/23/2021"
},
{
    "username": "Kolider",
    "kills": 8020,
    "botKills": 2282,
    "deaths": 4490,
    "kdr": 1.79,
    "wins": 728
},
{
    "username": "Konstantinos",
    "kills": 21979,
    "botKills": 1132,
    "deaths": 10184,
    "kdr": 2.16,
    "wins": 1510,
    "level": 36,
    "lastUpdated": "9/17/2021"
},
{
    "username": "Kotel274",
    "kills": 5387,
    "botKills": 257,
    "deaths": 2585,
    "kdr": 2.08,
    "wins": 431,
    "level": 18,
    "lastUpdated": "7/31/2021"
},
{
    "username": "kps",
    "kills": 11613,
    "botKills": 141,
    "deaths": 6007,
    "kdr": 1.93,
    "wins": 770
},
{
    "username": "LadyGripReaper",
    "kills": 15659,
    "botKills": 1121,
    "deaths": 8839,
    "kdr": 1.77,
    "wins": 1118,
    "level": 42,
    "lastUpdated": "11/4/2021"
},
{
    "username": "LamboTomST",
    "kills": 9839,
    "botKills": 589,
    "deaths": 5904,
    "kdr": 1.67,
    "wins": 592,
    "level": 25,
    "lastUpdated": "10/17/2021"
},
{
    "username": "LaSalamandra",
    "kills": 2584,
    "botKills": 57,
    "deaths": 2084,
    "kdr": 1.24,
    "wins": 130,
    "level": 11,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Levinho",
    "kills": 1916,
    "botKills": 136,
    "deaths": 1235,
    "kdr": 1.55,
    "wins": 162,
    "level": 12,
    "lastUpdated": "9/9/2021"
},
{
    "username": "LightRod",
    "kills": 84471,
    "botKills": 548,
    "deaths": 25841,
    "kdr": 3.27,
    "wins": 6267,
    "level": 40,
    "lastUpdated": "7/27/2021"
},
{
    "username": "LMAO",
    "kills": 403,
    "botKills": 113,
    "deaths": 635,
    "kdr": 0.63,
    "wins": 22,
    "lastUpdated": "5/27/2021"
},
{
    "username": "LOGAN",
    "kills": 32149,
    "botKills": 909,
    "deaths": 18830,
    "kdr": 1.71,
    "wins": 1689,
    "newEntry": true,
    "level": 59,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Lucca",
    "kills": 2852,
    "botKills": 50,
    "deaths": 1481,
    "kdr": 1.93,
    "wins": 245,
    "level": 8,
    "lastUpdated": "5/18/2021"
},
{
    "username": "Luffy",
    "kills": 955,
    "botKills": 108,
    "deaths": 951,
    "kdr": 1,
    "wins": 42,
    "level": 6,
    "lastUpdated": "5/17/2021"
},
{
    "username": "Luna",
    "kills": 8427,
    "botKills": 1378,
    "deaths": 6600,
    "kdr": 1.28,
    "wins": 660,
    "level": 23,
    "lastUpdated": "8/11/2021"
},
{
    "username": "MachoAlface",
    "kills": 5179,
    "botKills": 192,
    "deaths": 2676,
    "kdr": 1.94,
    "wins": 386,
    "level": 10,
    "lastUpdated": "5/17/2021"
},
{
    "username": "Madzen",
    "kills": 10130,
    "botKills": 289,
    "deaths": 6982,
    "kdr": 1.45,
    "wins": 55
},
{
    "username": "Magnus Carlsen",
    "kills": 11855,
    "botKills": 179,
    "deaths": 6903,
    "kdr": 1.72,
    "wins": 745,
    "level": 30,
    "lastUpdated": "8/19/2021"
},
{
    "username": "mangoboi",
    "kills": 268,
    "botKills": 238,
    "deaths": 287,
    "kdr": 0.93,
    "wins": 17,
    "level": 6,
    "lastUpdated": "5/21/2021"
},
{
    "username": "Manush",
    "kills": 1655,
    "botKills": 6,
    "deaths": 1147,
    "kdr": 1.44,
    "wins": 45
},
{
    "username": "Marks",
    "kills": 3433,
    "botKills": 162,
    "deaths": 2904,
    "kdr": 1.18,
    "wins": 169,
    "level": 20,
    "lastUpdated": "9/25/2021"
},
{
    "username": "Martan",
    "kills": 6390,
    "botKills": 138,
    "deaths": 2995,
    "kdr": 2.13,
    "wins": 400,
    "level": 10,
    "lastUpdated": "5/25/2021"
},
{
    "username": "MEE7",
    "kills": 2177,
    "botKills": 343,
    "deaths": 1712,
    "kdr": 1.27,
    "wins": 121,
    "level": 8,
    "lastUpdated": "5/18/2021"
},
{
    "username": "megatronalex",
    "kills": 4202,
    "botKills": 412,
    "deaths": 4326,
    "kdr": 0.97,
    "wins": 196,
    "level": 20,
    "lastUpdated": "11/4/2021"
},
{
    "username": "MelodyVibes",
    "kills": 4195,
    "botKills": 356,
    "deaths": 3479,
    "kdr": 1.21,
    "wins": 240,
    "level": 12,
    "lastUpdated": "6/09/2021"
},
{
    "username": "Memes",
    "kills": 449,
    "botKills": 24,
    "deaths": 310,
    "kdr": 1.45,
    "wins": 30,
    "level": 8,
    "lastUpdated": "5/18/2021"
},
{
    "username": "mercury",
    "kills": 5100,
    "botKills": 76,
    "deaths": 3296,
    "kdr": 1.55,
    "wins": 295,
    "level": 22,
    "lastUpdated": "7/27/2021"
},
{
    "username": "MermorialPigg",
    "kills": 9610,
    "botKills": 200,
    "deaths": 6701,
    "kdr": 1.43,
    "wins": 531,
    "level": 9,
    "lastUpdated": "5/21/2021"
},
{
    "username": "Mfurqaan27",
    "kills": 1580,
    "botKills": 103,
    "deaths": 1197,
    "kdr": 1.32,
    "wins": 85,
    "level": 7,
    "lastUpdated": "5/18/2021"
},
{
    "username": "MichoKing",
    "kills": 1000,
    "botKills": 17,
    "deaths": 946,
    "kdr": 1.06,
    "wins": 42
},
{
    "username": "miguelpro",
    "kills": 88,
    "botKills": 0,
    "deaths": 66,
    "kdr": 1.33,
    "wins": 0,
    "level": 1,
    "lastUpdated": "5/22/2021"
},
{
    "username": "MotionMoose",
    "kills": 13342,
    "botKills": 1444,
    "deaths": 6798,
    "kdr": 1.96,
    "wins": 1062,
    "level": 35,
    "lastUpdated": "8/19/2021"
},
{
    "username": "MrClawthoriene",
    "kills": 2391,
    "botKills": 153,
    "deaths": 1793,
    "kdr": 1.33,
    "wins": 134,
    "level": 12,
    "lastUpdated": "5/24/2021"
},
{
    "username": "Mrcoolkidgaming",
    "kills": 1158,
    "botKills": 176,
    "deaths": 824,
    "kdr": 1.41,
    "wins": 87,
    "level": 13,
    "lastUpdated": "7/31/2021"
},
{
    "username": "MrSam",
    "kills": 22047,
    "botKills": 1092,
    "deaths": 8843,
    "kdr": 2.49,
    "wins": 1352
},
{
    "username": "Muslim",
    "kills": 3126,
    "botKills": 260,
    "deaths": 2514,
    "kdr": 1.24,
    "wins": 164,
    "lastUpdated": "6/09/2021"
},
{
    "username": "Muttley",
    "kills": 66666,
    "botKills": 940,
    "deaths": 32278,
    "kdr": 2.07,
    "wins": 4971,
    "level": 39,
    "lastUpdated": "10/17/2021"
},
{
    "username": "mxmtsk",
    "kills": 6362,
    "botKills": 302,
    "deaths": 2591,
    "kdr": 2.46,
    "wins": 551
},
{
    "username": "NA",
    "kills": 30000,
    "botKills": 410,
    "deaths": 15794,
    "kdr": 1.9,
    "wins": 1511,
    "level": 50,
    "lastUpdated": "9/25/2021"
},
{
    "username": "Neon",
    "kills": 36955,
    "botKills": 586,
    "deaths": 20519,
    "kdr": 1.8,
    "wins": 2057,
    "level": 43,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Nexusdepresion",
    "kills": 1366,
    "botKills": 62,
    "deaths": 1009,
    "kdr": 1.35,
    "wins": 77,
    "level": 11,
    "lastUpdated": "7/31/2021"
},
{
    "username": "AlloyIridium",
    "kills": 509,
    "botKills": 134,
    "deaths": 444,
    "kdr": 1.15,
    "wins": 34,
    "level": 10,
    "lastUpdated": "10/17/2021"
},
{
    "username": "asmr",
    "kills": 4738,
    "botKills": 951,
    "deaths": 4532,
    "kdr": 1.05,
    "wins": 254,
    "newEntry": true,
    "lastUpdated": "11/4/2021"
},
{
    "username": "AUTIST",
    "kills": 528,
    "botKills": 34,
    "deaths": 408,
    "kdr": 1.29,
    "wins": 25,
    "newEntry": true,
    "level": 10,
    "lastUpdated": "11/4/2021"
},
{
    "username": "axelsen curry yagood",
    "kills": 8705,
    "botKills": 1070,
    "deaths": 6508,
    "kdr": 1.34,
    "wins": 350,
    "newEntry": true,
    "level": 38,
    "lastUpdated": "11/4/2021"
},
{
    "username": "nicky",
    "kills": 4213,
    "botKills": 341,
    "deaths": 4048,
    "kdr": 1.04,
    "wins": 86,
    "lastUpdated": "5/20/2021"
},
{
    "username": "NicoBustos",
    "kills": 9563,
    "botKills": 299,
    "deaths": 4895,
    "kdr": 1.95,
    "wins": 727,
    "level": 16,
    "lastUpdated": "5/18/2021"
},
{
    "username": "nicrone",
    "kills": 34993,
    "botKills": 5211,
    "deaths": 20698,
    "kdr": 1.69,
    "wins": 1481,
    "level": 30,
    "lastUpdated": "11/4/2021"
},
{
    "username": "NIGHTMARE",
    "kills": 10495,
    "botKills": 509,
    "deaths": 6474,
    "kdr": 1.62,
    "wins": 401,
    "level": 37,
    "lastUpdated": "11/4/2021"
},
{
    "username": "nikita",
    "kills": 21298,
    "botKills": 1205,
    "deaths": 11259,
    "kdr": 1.89,
    "wins": 1753
},
{
    "username": "NikoDamassa",
    "kills": 1849,
    "botKills": 50,
    "deaths": 1267,
    "kdr": 1.46,
    "wins": 134,
    "level": 11,
    "lastUpdated": "6/09/2021"
},
{
    "username": "NitroRacer",
    "kills": 12815,
    "botKills": 523,
    "deaths": 8084,
    "kdr": 1.59,
    "wins": 903,
    "level": 24,
    "lastUpdated": "8/11/2021"
},
{
    "username": "NONAME",
    "kills": 19412,
    "botKills": 1784,
    "deaths": 11716,
    "kdr": 1.65,
    "wins": 1305
},
{
    "username": "Noob21",
    "kills": 2739,
    "botKills": 82,
    "deaths": 1540,
    "kdr": 1.78,
    "wins": 186,
    "level": 8,
    "lastUpdated": "5/31/2021"
},
{
    "username": "NotANovice",
    "kills": 889,
    "botKills": 85,
    "deaths": 691,
    "kdr": 1.29,
    "wins": 48,
    "level": 10,
    "lastUpdated": "6/03/2021"
},
{
    "username": "Nought",
    "kills": 2040,
    "botKills": 127,
    "deaths": 1504,
    "kdr": 1.36,
    "wins": 111,
    "level": 9,
    "lastUpdated": "6/03/2021"
},
{
    "username": "Noura",
    "kills": 7224,
    "botKills": 644,
    "deaths": 4183,
    "kdr": 1.73,
    "wins": 609,
    "level": 16,
    "lastUpdated": "6/23/2021"
},
{
    "username": "numan",
    "kills": 608,
    "botKills": 71,
    "deaths": 909,
    "kdr": 0.67,
    "wins": 16,
    "lastUpdated": "6/30/2021"
},
{
    "username": "OingoBoingo",
    "kills": 2391,
    "botKills": 110,
    "deaths": 1464,
    "kdr": 1.63,
    "wins": 156,
    "level": 12,
    "lastUpdated": "7/31/2021"
},
{
    "username": "OkayIKnow",
    "kills": 18761,
    "botKills": 1130,
    "deaths": 12769,
    "kdr": 1.47,
    "wins": 1214,
    "level": 40,
    "lastUpdated": "7/29/2021"
},
{
    "username": "OliverD",
    "kills": 4936,
    "botKills": 546,
    "deaths": 3264,
    "kdr": 1.51,
    "wins": 305,
    "level": 24,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Oogway",
    "kills": 1622,
    "botKills": 14,
    "deaths": 1552,
    "kdr": 1.05,
    "wins": 57,
    "level": 10,
    "lastUpdated": "6/16/2021"
},
{
    "username": "OscarBumper2sk",
    "kills": 10267,
    "botKills": 976,
    "deaths": 7757,
    "kdr": 1.32,
    "wins": 247,
    "level": 33,
    "lastUpdated": "11/4/2021"
},
{
    "username": "OscarTsai",
    "kills": 12668,
    "botKills": 611,
    "deaths": 6008,
    "kdr": 2.11,
    "wins": 659,
    "level": 11,
    "lastUpdated": "6/30/2021"
},
{
    "username": "Ositos920",
    "kills": 1114,
    "botKills": 163,
    "deaths": 908,
    "kdr": 1.23,
    "wins": 54,
    "level": 10,
    "lastUpdated": "5/23/2021"
},
{
    "username": "OutRun",
    "kills": 62535,
    "botKills": 3095,
    "deaths": 22948,
    "kdr": 2.73,
    "wins": 3866,
    "level": 41,
    "lastUpdated": "11/4/2021"
},
{
    "username": "ozito",
    "kills": 6013,
    "botKills": 75,
    "deaths": 3367,
    "kdr": 1.79,
    "wins": 419,
    "level": 12,
    "lastUpdated": "7/29/2021"
},
{
    "username": "P19PRO",
    "kills": 152,
    "botKills": 8,
    "deaths": 249,
    "kdr": 0.61,
    "wins": 1,
    "lastUpdated": "9/9/2021"
},
{
    "username": "PANDA",
    "kills": 4939,
    "botKills": 472,
    "deaths": 4365,
    "kdr": 1.13,
    "wins": 114,
    "level": 31,
    "lastUpdated": "10/17/2021"
},
{
    "username": "PandaExpress1",
    "kills": 21929,
    "botKills": 72,
    "deaths": 13814,
    "kdr": 1.59,
    "wins": 1056,
    "level": 51,
    "lastUpdated": "11/4/2021"
},
{
    "username": "AlphaBro",
    "kills": 15886,
    "botKills": 549,
    "deaths": 8873,
    "kdr": 1.79,
    "wins": 975,
    "level": 42,
    "lastUpdated": "11/4/2021"
},
{
    "username": "PATEL",
    "kills": 104,
    "botKills": 30,
    "deaths": 141,
    "kdr": 0.74,
    "wins": 5,
    "level": 6,
    "lastUpdated": "9/9/2021"
},
{
    "username": "Phantom",
    "kills": 68228,
    "botKills": 759,
    "deaths": 26276,
    "kdr": 2.6,
    "wins": 4514,
    "level": 19,
    "lastUpdated": "6/30/2021"
},
{
    "username": "Pieinthesky",
    "kills": 4635,
    "botKills": 299,
    "deaths": 2956,
    "kdr": 1.57,
    "wins": 307
},
{
    "username": "Piggalicious",
    "kills": 13928,
    "botKills": 25,
    "deaths": 3299,
    "kdr": 4.22,
    "wins": 964,
    "lastUpdated": "6/09/2021"
},
{
    "username": "PiggyXD",
    "kills": 1499,
    "botKills": 81,
    "deaths": 1238,
    "kdr": 1.21,
    "wins": 69
},
{
    "username": "Pixellent",
    "kills": 3845,
    "botKills": 299,
    "deaths": 2758,
    "kdr": 1.39,
    "wins": 196,
    "level": 20,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Player3480",
    "kills": 16439,
    "botKills": 531,
    "deaths": 8598,
    "kdr": 1.91,
    "wins": 823,
    "lastUpdated": "5/18/2021"
},
{
    "username": "Player Cobra Kai",
    "kills": 20,
    "botKills": 0,
    "deaths": 13,
    "kdr": 1.54,
    "wins": 1,
    "level": 3,
    "lastUpdated": "5/18/2021"
},
{
    "username": "PlayerhafeezSK",
    "kills": 25016,
    "botKills": 827,
    "deaths": 17038,
    "kdr": 1.47,
    "wins": 1293,
    "newEntry": true,
    "level": 60,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Popsicles",
    "kills": 3255,
    "botKills": 0,
    "deaths": 898,
    "kdr": 3.62,
    "wins": 200,
    "level": 17,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Potonomicaphobia",
    "kills": 1582,
    "botKills": 58,
    "deaths": 1020,
    "kdr": 1.55,
    "wins": 111,
    "level": 11,
    "lastUpdated": "7/31/2021"
},
{
    "username": "PrimOverLorde",
    "kills": 315,
    "botKills": 403,
    "deaths": 293,
    "kdr": 1.08,
    "wins": 8,
    "level": 5,
    "lastUpdated": "5/21/2021"
},
{
    "username": "Prince of Darkness",
    "kills": 2612,
    "botKills": 231,
    "deaths": 1835,
    "kdr": 1.42,
    "wins": 104
},
{
    "username": "Pro",
    "kills": 303,
    "botKills": 51,
    "deaths": 308,
    "kdr": 0.98,
    "wins": 9,
    "level": 7,
    "lastUpdated": "5/31/2021"
},
{
    "username": "Spookster",
    "kills": 60917,
    "botKills": 2430,
    "deaths": 26658,
    "kdr": 2.29,
    "wins": 3896,
    "lastUpdated": "11/4/2021"
},
{
    "username": "punya fanyz",
    "kills": 4778,
    "botKills": 48,
    "deaths": 3608,
    "kdr": 1.32,
    "wins": 266,
    "level": 24,
    "lastUpdated": "8/19/2021"
},
{
    "username": "PWRYUTUBE",
    "kills": 9735,
    "botKills": 257,
    "deaths": 7616,
    "kdr": 1.28,
    "wins": 480,
    "level": 23,
    "lastUpdated": "7/31/2021"
},
{
    "username": "R",
    "kills": 3784,
    "botKills": 430,
    "deaths": 3470,
    "kdr": 1.09,
    "wins": 213,
    "level": 13,
    "lastUpdated": "6/16/2021"
},
{
    "username": "Raamen",
    "kills": 2314,
    "botKills": 158,
    "deaths": 1175,
    "kdr": 1.97,
    "wins": 164
},
{
    "username": "Rafayute",
    "kills": 18050,
    "botKills": 611,
    "deaths": 10642,
    "kdr": 1.7,
    "wins": 1296
},
{
    "username": "RastaQueen",
    "kills": 3978,
    "botKills": 375,
    "deaths": 1866,
    "kdr": 2.13,
    "wins": 340,
    "lastUpdated": "5/28/2021"
},
{
    "username": "sarthak",
    "kills": 48197,
    "botKills": 2580,
    "deaths": 29195,
    "kdr": 1.65,
    "wins": 2806,
    "level": 50,
    "lastUpdated": "10/17/2021"
},
{
    "username": "RedSmasher",
    "kills": 2282,
    "botKills": 506,
    "deaths": 1995,
    "kdr": 1.14,
    "wins": 104
},
{
    "username": "ReeFrogBeanzzz",
    "kills": 4179,
    "botKills": 1062,
    "deaths": 3080,
    "kdr": 1.36,
    "wins": 250,
    "level": 9,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Riptide",
    "kills": 10138,
    "botKills": 450,
    "deaths": 6533,
    "kdr": 1.55,
    "wins": 725,
    "level": 14,
    "lastUpdated": "7/31/2021"
},
{
    "username": "RocketFrog",
    "kills": 59356,
    "botKills": 436,
    "deaths": 26106,
    "kdr": 2.27,
    "wins": 4161,
    "level": 60,
    "lastUpdated": "11/4/2021"
},
{
    "username": "romesh",
    "kills": 7012,
    "botKills": 320,
    "deaths": 5374,
    "kdr": 1.3,
    "wins": 294,
    "level": 29,
    "lastUpdated": "11/4/2021"
},
{
    "username": "rorro",
    "kills": 11356,
    "botKills": 170,
    "deaths": 5762,
    "kdr": 1.97,
    "wins": 811,
    "level": 13,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Rottweiler",
    "kills": 25946,
    "botKills": 1813,
    "deaths": 11902,
    "kdr": 2.18,
    "wins": 1873,
    "level": 14,
    "lastUpdated": "6/30/2021"
},
{
    "username": "RRRRRRRRRRRRRRRRRRRRRRRRRRR",
    "kills": 6366,
    "botKills": 512,
    "deaths": 5679,
    "kdr": 1.12,
    "wins": 310,
    "level": 15,
    "lastUpdated": "7/31/2021"
},
{
    "username": "RuBiNBRR",
    "kills": 8457,
    "botKills": 179,
    "deaths": 4484,
    "kdr": 1.89,
    "wins": 643,
    "level": 15,
    "lastUpdated": "5/18/2021"
},
{
    "username": "ruthvik",
    "kills": 656,
    "botKills": 63,
    "deaths": 503,
    "kdr": 1.3,
    "wins": 41,
    "level": 8,
    "lastUpdated": "5/22/2021"
},
{
    "username": "ruzgar",
    "kills": 2049,
    "botKills": 90,
    "deaths": 1034,
    "kdr": 1.98,
    "wins": 157,
    "level": 8,
    "lastUpdated": "5/14/2021"
},
{
    "username": "Saharsh",
    "kills": 2786,
    "botKills": 183,
    "deaths": 2417,
    "kdr": 1.15,
    "wins": 122,
    "level": 18,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Saturnytive",
    "kills": 2801,
    "botKills": 50,
    "deaths": 1838,
    "kdr": 1.52,
    "wins": 133,
    "level": 7,
    "lastUpdated": "5/17/2021"
},
{
    "username": "SB007",
    "kills": 309,
    "botKills": 14,
    "deaths": 214,
    "kdr": 1.44,
    "wins": 26,
    "level": 7,
    "lastUpdated": "5/18/2021"
},
{
    "username": "seanysean",
    "kills": 55062,
    "botKills": 806,
    "deaths": 31138,
    "kdr": 1.77,
    "wins": 2996,
    "level": 60,
    "lastUpdated": "11/4/2021"
},
{
    "username": "sedlyf",
    "kills": 2046,
    "botKills": 47,
    "deaths": 807,
    "kdr": 2.54,
    "wins": 88,
    "lastUpdated": "9/9/2021"
},
{
    "username": "ShaolinMonk",
    "kills": 20995,
    "botKills": 213,
    "deaths": 8198,
    "kdr": 2.56,
    "wins": 1468,
    "level": 36,
    "lastUpdated": "10/17/2021"
},
{
    "username": "SherriffBumper",
    "kills": 33155,
    "botKills": 1952,
    "deaths": 15111,
    "kdr": 2.19,
    "wins": 2323,
    "level": 33,
    "lastUpdated": "7/29/2021"
},
{
    "username": "shuriken",
    "kills": 3132,
    "botKills": 2301,
    "deaths": 3464,
    "kdr": 0.9,
    "wins": 109,
    "newEntry": true,
    "level": 20,
    "lastUpdated": "11/4/2021"
},
{
    "username": "SilverShadow",
    "kills": 11840,
    "botKills": 857,
    "deaths": 5729,
    "kdr": 2.07,
    "wins": 799,
    "level": 11,
    "lastUpdated": "6/16/2021"
},
{
    "username": "SirBotsAlot2",
    "kills": 5209,
    "botKills": 702,
    "deaths": 2492,
    "kdr": 2.09,
    "wins": 502,
    "level": 12,
    "lastUpdated": "5/28/2021"
},
{
    "username": "SirBotsalot",
    "kills": 15881,
    "botKills": 192,
    "deaths": 8181,
    "kdr": 1.94,
    "wins": 1143,
    "level": 33,
    "lastUpdated": "9/9/2021"
},
{
    "username": "SirFartsALot",
    "kills": 7402,
    "botKills": 302,
    "deaths": 4948,
    "kdr": 1.5,
    "wins": 426,
    "level": 9,
    "lastUpdated": "5/17/2021"
},
{
    "username": "SMASH BOI",
    "kills": 7928,
    "botKills": 298,
    "deaths": 5669,
    "kdr": 1.4,
    "wins": 545,
    "level": 15,
    "lastUpdated": "5/28/2021"
},
{
    "username": "smash karts",
    "kills": 17228,
    "botKills": 672,
    "deaths": 12264,
    "kdr": 1.4,
    "wins": 887,
    "level": 40,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Smash Karts Pro",
    "kills": 21445,
    "botKills": 8548,
    "deaths": 11977,
    "kdr": 1.79,
    "wins": 1322,
    "level": 20,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Smashfarts",
    "kills": 6046,
    "botKills": 2076,
    "deaths": 3824,
    "kdr": 1.58,
    "wins": 486,
    "level": 10,
    "lastUpdated": "6/30/2021"
},
{
    "username": "SmashKarts",
    "kills": 638,
    "botKills": 4,
    "deaths": 536,
    "kdr": 1.19,
    "wins": 37,
    "level": 8,
    "lastUpdated": "5/17/2021"
},
{
    "username": "SmashKats",
    "kills": 15204,
    "botKills": 643,
    "deaths": 10116,
    "kdr": 1.5,
    "wins": 903,
    "level": 42,
    "lastUpdated": "10/17/2021"
},
{
    "username": "smashking283",
    "kills": 22531,
    "botKills": 7312,
    "deaths": 9802,
    "kdr": 2.3,
    "wins": 2069,
    "level": 17,
    "lastUpdated": "6/30/2021"
},
{
    "username": "SmashMan360",
    "kills": 19955,
    "botKills": 5315,
    "deaths": 10599,
    "kdr": 1.88,
    "wins": 1354,
    "lastUpdated": "5/19/2021"
},
{
    "username": "SmashMe",
    "kills": 40534,
    "botKills": 961,
    "deaths": 20001,
    "kdr": 2.03,
    "wins": 2899,
    "level": 30,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Smatisfaction",
    "kills": 10183,
    "botKills": 479,
    "deaths": 5102,
    "kdr": 2,
    "wins": 755,
    "lastUpdated": "7/27/2021"
},
{
    "username": "SnowPanda",
    "kills": 2083,
    "botKills": 26,
    "deaths": 886,
    "kdr": 2.35,
    "wins": 144
},
{
    "username": "SombreroCat1",
    "kills": 6906,
    "botKills": 749,
    "deaths": 4909,
    "kdr": 1.41,
    "wins": 411,
    "level": 17,
    "lastUpdated": "7/29/2021"
},
{
    "username": "SombreroCat2",
    "kills": 4591,
    "botKills": 729,
    "deaths": 4156,
    "kdr": 1.1,
    "wins": 216
},
{
    "username": "SomeBoyPlayz",
    "kills": 40099,
    "botKills": 1350,
    "deaths": 23882,
    "kdr": 1.68,
    "wins": 2594,
    "level": 38,
    "lastUpdated": "9/9/2021"
},
{
    "username": "SONICTHEDOGE",
    "kills": 358,
    "botKills": 1,
    "deaths": 291,
    "kdr": 1.23,
    "wins": 5,
    "lastUpdated": "5/27/2021"
},
{
    "username": "SophieRiane",
    "kills": 22769,
    "botKills": 1762,
    "deaths": 13994,
    "kdr": 1.63,
    "wins": 1624,
    "level": 32,
    "lastUpdated": "9/9/2021"
},
{
    "username": "SS KARTSMASHER",
    "kills": 8287,
    "botKills": 1156,
    "deaths": 5446,
    "kdr": 1.52,
    "wins": 383,
    "level": 31,
    "lastUpdated": "10/17/2021"
},
{
    "username": "SSNGHOST",
    "kills": 3352,
    "botKills": 124,
    "deaths": 1951,
    "kdr": 1.72,
    "wins": 256,
    "level": 9,
    "lastUpdated": "5/18/2021"
},
{
    "username": "AvGeekSkGeek",
    "kills": 15012,
    "botKills": 967,
    "deaths": 12337,
    "kdr": 1.22,
    "wins": 600,
    "level": 43,
    "lastUpdated": "11/4/2021"
},
{
    "username": "steve",
    "kills": 3406,
    "botKills": 97,
    "deaths": 3472,
    "kdr": 0.98,
    "wins": 135,
    "level": 20,
    "lastUpdated": "8/4/2021"
},
{
    "username": "Strange-traveller",
    "kills": 5238,
    "botKills": 259,
    "deaths": 3094,
    "kdr": 1.69,
    "wins": 351,
    "level": 14,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Sub2PewDiePie",
    "kills": 2511,
    "botKills": 93,
    "deaths": 2067,
    "kdr": 1.21,
    "wins": 102,
    "level": 8
},
{
    "username": "SUbtopercy",
    "kills": 4235,
    "botKills": 452,
    "deaths": 2579,
    "kdr": 1.64,
    "wins": 282,
    "newEntry": true,
    "level": 22,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Sukuna",
    "kills": 20471,
    "botKills": 2311,
    "deaths": 11538,
    "kdr": 1.77,
    "wins": 1176,
    "newEntry": true,
    "level": 37,
    "lastUpdated": "11/4/2021"
},
{
    "username": "DragonMaster19yt",
    "kills": 13273,
    "botKills": 1026,
    "deaths": 7944,
    "kdr": 1.67,
    "wins": 651,
    "level": 24,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Sumi",
    "kills": 7455,
    "botKills": 229,
    "deaths": 3875,
    "kdr": 1.92,
    "wins": 521,
    "level": 27,
    "lastUpdated": "11/4/2021"
},
{
    "username": "summer day",
    "kills": 10063,
    "botKills": 768,
    "deaths": 7389,
    "kdr": 1.36,
    "wins": 684,
    "level": 15,
    "lastUpdated": "6/23/2021"
},
{
    "username": "SummerBumper",
    "kills": 29451,
    "botKills": 1884,
    "deaths": 13453,
    "kdr": 2.19,
    "wins": 2089,
    "level": 28,
    "lastUpdated": "7/31/2021"
},
{
    "username": "SummerXGems",
    "kills": 1888,
    "botKills": 48,
    "deaths": 712,
    "kdr": 2.65,
    "wins": 130,
    "level": 15,
    "lastUpdated": "9/17/2021"
},
{
    "username": "SUPERCOMMANDODHRUV",
    "kills": 19668,
    "botKills": 1250,
    "deaths": 11409,
    "kdr": 1.72,
    "wins": 1296,
    "level": 39,
    "lastUpdated": "10/17/2021"
},
{
    "username": "SuperSMASHER",
    "kills": 16149,
    "botKills": 807,
    "deaths": 8298,
    "kdr": 1.95,
    "wins": 1207,
    "level": 12,
    "lastUpdated": "6/30/2021"
},
{
    "username": "Supremo",
    "kills": 6648,
    "botKills": 797,
    "deaths": 5518,
    "kdr": 1.2,
    "wins": 457,
    "level": 6,
    "lastUpdated": "11/4/2021"
},
{
    "username": "suyashsvc",
    "kills": 2116,
    "botKills": 238,
    "deaths": 1525,
    "kdr": 1.39,
    "wins": 38,
    "level": 16,
    "lastUpdated": "9/25/2021"
},
{
    "username": "Sydecar",
    "kills": 1448,
    "botKills": 15,
    "deaths": 907,
    "kdr": 1.6,
    "wins": 69,
    "level": 8,
    "lastUpdated": "6/16/2021"
},
{
    "username": "szahaa",
    "kills": 1549,
    "botKills": 65,
    "deaths": 1588,
    "kdr": 0.98,
    "wins": 70,
    "level": 17,
    "lastUpdated": "7/29/2021"
},
{
    "username": "TBNRdaamcn",
    "kills": 4390,
    "botKills": 801,
    "deaths": 3748,
    "kdr": 1.17,
    "wins": 70,
    "level": 23,
    "lastUpdated": "10/17/2021"
},
{
    "username": "TCW The Cubing Wolflyn",
    "kills": 2004,
    "botKills": 172,
    "deaths": 1206,
    "kdr": 1.66,
    "wins": 144,
    "level": 12,
    "lastUpdated": "6/23/2021"
},
{
    "username": "Tesla K",
    "kills": 13911,
    "botKills": 993,
    "deaths": 6726,
    "kdr": 2.07,
    "wins": 928,
    "level": 20,
    "lastUpdated": "8/19/2021"
},
{
    "username": "THANOS",
    "kills": 11675,
    "botKills": 1168,
    "deaths": 6001,
    "kdr": 1.95,
    "wins": 911,
    "lastUpdated": "10/17/2021"
},
{
    "username": "TheCook",
    "kills": 3627,
    "botKills": 195,
    "deaths": 2946,
    "kdr": 1.23,
    "wins": 257
},
{
    "username": "theworstplayer",
    "kills": 9089,
    "botKills": 453,
    "deaths": 6078,
    "kdr": 1.5,
    "wins": 492,
    "level": 34,
    "lastUpdated": "11/4/2021"
},
{
    "username": "xAncientNOVAx",
    "kills": 14472,
    "botKills": 750,
    "deaths": 9160,
    "kdr": 1.58,
    "wins": 956,
    "level": 36,
    "lastUpdated": "10/17/2021"
},
{
    "username": "TomCruise",
    "kills": 53341,
    "botKills": 1049,
    "deaths": 24838,
    "kdr": 2.15,
    "wins": 3150,
    "level": 52,
    "lastUpdated": "10/17/2021"
},
{
    "username": "Toreja",
    "kills": 1191,
    "botKills": 12,
    "deaths": 973,
    "kdr": 1.22,
    "wins": 53,
    "level": 10,
    "lastUpdated": "5/27/2021"
},
{
    "username": "Invincible",
    "kills": 11104,
    "botKills": 315,
    "deaths": 5751,
    "kdr": 1.93,
    "wins": 836,
    "level": 25,
    "lastUpdated": "7/31/2021"
},
{
    "username": "Venom",
    "kills": 21614,
    "botKills": 248,
    "deaths": 16015,
    "kdr": 1.35,
    "wins": 1013,
    "level": 60,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Ver24436",
    "kills": 1918,
    "botKills": 0,
    "deaths": 777,
    "kdr": 2.47,
    "wins": 176,
    "level": 1,
    "lastUpdated": "6/30/2021"
},
{
    "username": "Victory Valtryek",
    "kills": 1946,
    "botKills": 257,
    "deaths": 1709,
    "kdr": 1.14,
    "wins": 89
},
{
    "username": "Vignesh",
    "kills": 1603,
    "botKills": 163,
    "deaths": 1836,
    "kdr": 0.87,
    "wins": 57,
    "lastUpdated": "8/27/2021"
},
{
    "username": "VK",
    "kills": 41009,
    "botKills": 357,
    "deaths": 15282,
    "kdr": 2.68,
    "wins": 2804,
    "level": 56,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Waris Ja",
    "kills": 100000,
    "botKills": 596,
    "deaths": 21625,
    "kdr": 4.62,
    "wins": 7803,
    "level": 19,
    "lastUpdated": "11/4/2021"
},
{
    "username": "Wass",
    "kills": 3401,
    "botKills": 101,
    "deaths": 2454,
    "kdr": 1.39,
    "wins": 162,
    "level": 16,
    "lastUpdated": "8/27/2021"
},
{
    "username": "whatthatlol",
    "kills": 2720,
    "botKills": 167,
    "deaths": 1976,
    "kdr": 1.38,
    "wins": 116,
    "level": 19,
    "lastUpdated": "9/9/2021"
},
{
    "username": "WhyNotkeepSmashing",
    "kills": 2162,
    "botKills": 133,
    "deaths": 1442,
    "kdr": 1.5,
    "wins": 159,
    "lastUpdated": "5/17/2021"
},
{
    "username": "WIMPUS",
    "kills": 375,
    "botKills": 133,
    "deaths": 356,
    "kdr": 1.05,
    "wins": 8,
    "lastUpdated": "7/31/2021"
},
{
    "username": "wizards_wand",
    "kills": 3938,
    "botKills": 194,
    "deaths": 3479,
    "kdr": 1.13,
    "wins": 111,
    "level": 20,
    "lastUpdated": "9/9/2021"
},
{
    "username": "WorstDriver",
    "kills": 3109,
    "botKills": 62,
    "deaths": 1744,
    "kdr": 1.78,
    "wins": 198,
    "lastUpdated": "5/28/2021"
},
{
    "username": "Wrath",
    "kills": 9449,
    "botKills": 191,
    "deaths": 7707,
    "kdr": 1.23,
    "wins": 476,
    "level": 17,
    "lastUpdated": "7/31/2021"
},
{
    "username": "x3m3x",
    "kills": 7352,
    "botKills": 325,
    "deaths": 3997,
    "kdr": 1.84,
    "wins": 485,
    "level": 10,
    "lastUpdated": "5/27/2021"
},
{
    "username": "xSuperStarx",
    "kills": 19069,
    "botKills": 464,
    "deaths": 8488,
    "kdr": 2.25,
    "wins": 1325,
    "level": 37,
    "lastUpdated": "9/17/2021"
},
{
    "username": "xzjkdjn",
    "kills": 15826,
    "botKills": 552,
    "deaths": 7155,
    "kdr": 2.21,
    "wins": 1261,
    "level": 12,
    "lastUpdated": "6/23/2021"
},
{
    "username": "Yoshi",
    "kills": 15741,
    "botKills": 546,
    "deaths": 6715,
    "kdr": 2.34,
    "wins": 1285,
    "level": 13,
    "lastUpdated": "6/16/2021"
},
{
    "username": "yourdog",
    "kills": 10004,
    "botKills": 602,
    "deaths": 6137,
    "kdr": 1.63,
    "wins": 544,
    "level": 26,
    "lastUpdated": "11/4/2021"
},
{
    "username": "YOURSELF",
    "kills": 5656,
    "botKills": 272,
    "deaths": 6259,
    "kdr": 0.9,
    "wins": 231,
    "level": 13,
    "lastUpdated": "5/20/2021"
},
{
    "username": "Zacthack",
    "kills": 16326,
    "botKills": 271,
    "deaths": 8147,
    "kdr": 2,
    "wins": 1214,
    "level": 11,
    "lastUpdated": "5/31/2021"
},
{
    "username": "ZedZoff",
    "kills": 971,
    "botKills": 238,
    "deaths": 1155,
    "kdr": 0.84,
    "wins": 30,
    "level": 10,
    "lastUpdated": "5/24/2021"
},
{
    "username": "Zekkersito",
    "kills": 326,
    "botKills": 5,
    "deaths": 376,
    "kdr": 0.87,
    "wins": 11,
    "level": 8,
    "lastUpdated": "5/22/2021"
},
{
    "username": "Zeoyxl",
    "kills": 1242,
    "botKills": 456,
    "deaths": 1454,
    "kdr": 0.85,
    "wins": 40,
    "level": 11,
    "lastUpdated": "6/03/2021"
},
{
    "username": "Zoli",
    "kills": 634,
    "botKills": 104,
    "deaths": 440,
    "kdr": 1.44,
    "wins": 33,
    "lastUpdated": "5/19/2021"
}];