const arrowUp = '<i class="fas fa-arrow-alt-circle-up arrow"></i>';
const arrowDown = '<i class="fas fa-arrow-alt-circle-down arrow"></i>';
const plus = '<i class="fas fa-plus-circle arrow"></i>';
const newPlayer = '&nbsp;<img class="newPlayer" src="Images/new-icon-28.png">';

const player = [
                    ['haedcase.png',
                     'haedcase',
                     '5,891',
                     '90,791',
                     '140',
                     '41,076',
                     '2.21',
                     '11',
                     ''],
                    ['Waris Ja.png',
                     'Waris Ja',
                     '4,690',
                     '60,000',
                     '459',
                     '16,211',
                     '3.70',
                     '',
                     '5/14/2021'],
                    ['grunwalski.png',
                     'grunwalski',
                     '4,337',
                     '56,381',
                     '546',
                     '25,028',
                     '2.25',
                     '',
                     ''],
                    ['Phantom.png',
                     'Phantom',
                     '3,194',
                     '51,366',
                     '716',
                     '20,585',
                     '2.50',
                     '',
                     ''],
                    ['ProMaster.png',
                     'ProMaster',
                     '2,959',
                     '46,928',
                     '2,203',
                     '21,255',
                     '2.21',
                     '13',
                     '5/16/2021'],
                    ['Muttley.png',
                     'Muttley',
                     '2,405',
                     '30,001',
                     '526',
                     '13,725',
                     '2.19',
                     '',
                     ''],
                    ['JustFlamey.png',
                     'JustFlamey',
                     '1,955',
                     '28,779',
                     '1,186',
                     '17,905',
                     '1.61',
                     '13',
                     ''],
                    ['AlphaZero.png',
                     'AlphaZero',
                     '1,875',
                     '30,000',
                     '1,704',
                     '13,400',
                     '2.24',
                     '13',
                     '5/16/2021'],
                    ['Bowser.png',
                     'Bowser',
                     '1,836',
                     '26,664',
                     '8,939',
                     '14,299',
                     '1.86',
                     '12',
                     ''],
                    ['nikita.png',
                     'nikita',
                     '1,753',
                     '21,298',
                     '1,205',
                     '11,259',
                     '1.89',
                     '',
                     ''],
                    ['Outrun.png',
                     'Outrun',
                     '1,728',
                     '29,835',
                     '1,188',
                     '12,475',
                     '2.39',
                     '',
                     ''],
                    ['TomCruise.png',
                     'TomCruise',
                     '1,596',
                     '26,075',
                     '955',
                     '12,354',
                     '2.11',
                     '10',
                     '5/14/2021'],
                    ['Jash.png',
                     'Jash',
                     '1,509',
                     '20,508',
                     '397',
                     '8,984',
                     '2.28',
                     '12',
                     '5/16/2021'],
                    ['golu.png',
                     'golu',
                     '1,468',
                     '22,268',
                     '1,477',
                     '13,637',
                     '1.63',
                     '',
                     ''],
                    ['Alfonso.png',
                     'Alfonso',
                     '1,414',
                     '18,557',
                     '1,443',
                     '6,753',
                     '2.75',
                     '',
                     ''],
                    ['MrSam.png',
                     'MrSam',
                     '1,352',
                     '22,047',
                     '1,092',
                     '8,843',
                     '2.49',
                     '',
                     ''],
                    ['bhol.png',
                     'bhol',
                     '1,305',
                     '19,412',
                     '1,784',
                     '11,716',
                     '1.66',
                     '',
                     ''],
                    ['NONAME.png',
                     'NONAME',
                     '1,305',
                     '19,412',
                     '1,784',
                     '11,716',
                     '1.65',
                     '',
                     ''],
                    ['Rafayute.png',
                     'Rafayute',
                     '1,296',
                     '18,050',
                     '611',
                     '10,642',
                     '1.70',
                     '',
                     ''],
                    ['smashking283.png',
                     'smashking283',
                     '1,285',
                     '13,895',
                     '6,119',
                     '6,622',
                     '2.10',
                     '',
                     ''],
                    ['Zacthack.png',
                     'Zacthack',
                     '1,135',
                     '15,238',
                     '267',
                     '7,593',
                     '2.01',
                     '8',
                     '5/14/2021'],
                    ['kps.png',
                     'kps',
                     '770',
                     '11,613',
                     '141',
                     '6,007',
                     '1.93',
                     '',
                     ''],
                    ['seanysean.png',
                     'seanysean',
                     '746',
                     '14,977',
                     '489',
                     '9,673',
                     '1.55',
                     '',
                     ''],
                     ['Kolider.png',
                     'Kolider',
                     '728',
                     '8,020',
                     '2,282',
                     '4,490',
                     '1.79',
                     '',
                     ''],
                    ['Forward.png',
                     'Forward',
                     '725',
                     '13,620',
                     '801',
                     '4,942',
                     '2.76',
                     '7',
                     ''],
                    ['Drew.png',
                     'Drew',
                     '678',
                     '11,490',
                     '449',
                     '7,272',
                     '1.58',
                     '8',
                     ''],
                    ['Player3480.png',
                     'Player3480',
                     '654',
                     '13,223',
                     '501',
                     '7,166',
                     '1.85',
                     '',
                     ''],
                    ['Alexander.png',
                     'Alexander',
                     '633',
                     '9,163',
                     '286',
                     '3,156',
                     '2.90',
                     '',
                     ''],
                    ['GoldenBeast.png',
                     'GoldenBeast',
                     '600',
                     '7,869',
                     '120',
                     '3,637',
                     '2.16',
                     '11',
                     '5/14/2021'],
                    ['fru.png',
                     'fru',
                     '597',
                     '8,576',
                     '259',
                     '4,867',
                     '1.76',
                     '',
                     ''],
                    ['Madzen.png',
                     'Madzen',
                     '555',
                     '10,130',
                     '289',
                     '6,982',
                     '1.45',
                     '',
                     ''],
                    ['mxmtsk.png',
                     'mxmtsk',
                     '551',
                     '6,362',
                     '302',
                     '2,591',
                     '2.46',
                     '',
                     ''],
                    ['ANCIENT.png',
                     'ANCIENT',
                     '530',
                     '6,914',
                     '36',
                     '3,542',
                     '1.95',
                     '11',
                     ''],
                    ['K1ittens.png',
                     'K1ittens',
                     '519',
                     '9,491',
                     '803',
                     '5,699',
                     '1.67',
                     '',
                     ''],
                    ['Supremo.png',
                     'Supremo',
                     '451',
                     '6,464',
                     '784',
                     '5,316',
                     '1.22',
                     '',
                     ''],
                    ['RuBiNBRR.png',
                     'RuBiNBRR',
                     '441',
                     '5,829',
                     '147',
                     '3,240',
                     '1.80',
                     '13',
                     ''],
                    ['ZePiggman.png',
                     'ZePiggman',
                     '441',
                     '7,824',
                     '191',
                     '5,607',
                     '1.40',
                     '',
                     ''],
                    ['Fubster.png',
                     'Fubster',
                     '426',
                     '8,290',
                     '60',
                     '5,657',
                     '1.47',
                     '9',
                     ''],
                    ['JustMechas.png',
                     'JustMecha\'s',
                     '395',
                     '7,127',
                     '192',
                     '4,314',
                     '1.65',
                     '10',
                     ''],
                    ['MachoAlface.png',
                     'MachoAlface',
                     '372',
                     '5,033',
                     '191',
                     '2,621',
                     '1.92',
                     '',
                     '5/14/2021'],
                    ['Piggalicious.png',
                     'Piggalicious',
                     '356',
                     '5,618',
                     '19',
                     '1,509',
                     '3.72',
                     '',
                     ''],
                    ['Pieinthesky.png',
                     'Pieinthesky',
                     '307',
                     '4,635',
                     '299',
                     '2,956',
                     '1.57',
                     '',
                     ''],
                    ['RastaQueen.png',
                     'RastaQueen',
                     '291',
                     '3,365',
                     '322',
                     '1,588',
                     '2.12',
                     '',
                     ''],
                    ['BAMerica.png',
                     'BAM\'erica',
                     '264',
                     '10,474',
                     '560',
                     '6,362',
                     '1.65',
                     '6',
                     ''],
                    ['ChickenTenderz.png',
                     'ChickenTenderz',
                     '259',
                     '3,708',
                     '107',
                     '1,734',
                     '2.14',
                     '',
                     ''],
                    ['TheCook.png',
                     'TheCook',
                     '257',
                     '3,627',
                     '195',
                     '2,946',
                     '1.23',
                     '',
                     ''],
                    ['SombreroCat1.png',
                     'SombreroCat1',
                     '243',
                     '3,402',
                     '567',
                     '2,298',
                     '1.48',
                     '',
                     ''],
                    ['SSNGHOST.png',
                     'SSNGHOST',
                     '217',
                     '2,748',
                     '115',
                     '1,596',
                     '1.72',
                     '7',
                     ''],
                    ['KI123NG.png',
                     'KI123NG',
                     '217',
                     '4,894',
                     '118',
                     '3,765',
                     '1.30',
                     '',
                     ''],
                    ['SombreroCat2.png',
                     'SombreroCat2',
                     '216',
                     '4,591',
                     '729',
                     '4,156',
                     '1.10',
                     '',
                     ''],
                    ['icybullet.png',
                     'icybullet',
                     '194',
                     '5,308',
                     '266',
                     '4,601',
                     '1.15',
                     '',
                     ''],
                    ['SumiBee.png',
                     'SumiBee' + newPlayer,
                     '183',
                     '2,225',
                     '179',
                     '1,134',
                     '1.96',
                     '',
                     '5/16/2021'],
                    ['Raamen.png',
                     'Raamen',
                     '164',
                     '2,314',
                     '158',
                     '1,175',
                     '1.97',
                     '',
                     ''],
                    ['ruzgar.png',
                     'ruzgar',
                     '157',
                     '2,049',
                     '90',
                     '1,034',
                     '1.98',
                     '8',
                     '5/14/2021'],
                    ['SnowPanda.png',
                     'SnowPanda',
                     '144',
                     '2,083',
                     '26',
                     '886',
                     '2.35',
                     '',
                     ''],
                    ['Shamrock Pig.png',
                     'Shamrock Pig',
                     '124',
                     '2,417',
                     '170',
                     '2,066',
                     '1.17',
                     '',
                     ''],
                    ['brandoom500.png',
                     'brandoom500',
                     '116',
                     '1,802',
                     '78',
                     '1,621',
                     '1.11',
                     '',
                     '5/14/2021'],
                    ['Prince of Darkness.png',
                     'Prince of Darkness',
                     '104',
                     '2,612',
                     '231',
                     '1,835',
                     '1.42',
                     '',
                     ''],
                    ['RedSmasher.png',
                     'RedSmasher',
                     '104',
                     '2,282',
                     '506',
                     '1,995',
                     '1.14',
                     '',
                     ''],
                    ['Sub2PewDiePie.png',
                     'Sub2PewDiePie',
                     '102',
                     '2,511',
                     '93',
                     '2,067',
                     '1.21',
                     '8',
                     ''],
                    ['2Fast2Furious.jpg',
                     '2Fast2Furious',
                     '94',
                     '1,754',
                     '77',
                     '1,617',
                     '1.08',
                     '',
                     ''],
                    ['Victory Valtryek.png',
                     'Victory Valtryek',
                     '89',
                     '1,946',
                     '257',
                     '1,709',
                     '1.14',
                     '',
                     ''],
                    ['Eli.png',
                     'Eli',
                     '83',
                     '1,029',
                     '7',
                     '332',
                     '3.10',
                     '',
                     ''],
                    ['PiggyXD.png',
                     'PiggyXD',
                     '69',
                     '1,499',
                     '81',
                     '1,238',
                     '1.21',
                     '',
                     ''],
                    ['Avikatron.png',
                     'Avikatron',
                     '48',
                     '1,054',
                     '11',
                     '666',
                     '1.58',
                     '',
                     ''],
                    ['Manush.png',
                     'Manush',
                     '45',
                     '1,655',
                     '6',
                     '1,147',
                     '1.44',
                     '',
                     ''],
                    ['jason.png',
                     'jason',
                     '44',
                     '1,002',
                     '37',
                     '884',
                     '1.13',
                     '',
                     ''],
                    ['Oogway.jpg',
                     'Oogway',
                     '43',
                     '1,216',
                     '7',
                     '1,193',
                     '1.02',
                     '',
                     '5/14/2021'],
                    ['MichoKing.png',
                     'MichoKing',
                     '42',
                     '1,000',
                     '17',
                     '946',
                     '1.06',
                     '',
                     '']
               ];

let rank = 1;

function fillGrid() {
    let color;

    for (let i=0; i < player.length; i++) {
        if (i % 2 == 0) {color = 'color1';}
            else {color = 'color2';}

        let markup = '<div class="number ' + color + '">' + rank + '.</div>' + 
            '<div class="box ' + color + '"><a href="Images/Screenshots/' + player[i][0] + '" class="lightbox_trigger">' + 
                '<i class="fas fa-camera"></i></a></div>' + 
            '<div class="name ' + color + '">' + player[i][1] + '</div>' + 
            '<div class="box ' + color + '">' + player[i][2] + '</div>' + 
            '<div class="box ' + color + '">' + player[i][3] + '</div>' + 
            '<div class="box ' + color + '">' + player[i][4] + '</div>' + 
            '<div class="box ' + color + '">' + player[i][5] + '</div>' + 
            '<div class="box ' + color + '">' + player[i][6] + '</div>' +
            '<div class="box ' + color + '">' + player[i][7] + '</div>' +
            '<div class="box ' + color + '">' + player[i][8] + '</div>'

    document.getElementById('mainGrid').innerHTML += markup;
    rank++;
                        }
            };