const cardArray = [
    {
        name: 'Magdy',
        img: 'imgs/Magdy_za3laan.png'
    },
    {
        name: 'Ahmed Emad Omda',
        img: 'imgs/emad.png'
    },
    {
        name: 'Sheikh Joe',
        img: 'imgs/sheikh_joe.png'
    },
    {
        name: 'Esmail',
        img: 'imgs/som3a.png'
    },
    {
        name: 'Mohab Ballona',
        img: 'imgs/mohab_hoba.png'
    },
    {
        name: 'El Sarta',
        img: 'imgs/sarta.png'
    },
    {
        name: 'Mickey Mouce',
        img: 'imgs/miky.png'
    },
    {
        name: 'White',
        img: 'imgs/white.png'
    },
    // {
    //     name: 'magdy',
    //     img: 'imgs/Magdy za3laan.png'
    // }
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function creatBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'imgs/click me.png');
        card.setAttribute('data-id', i);
        gridDisplay.appendChild(card);
        console.log(card, i);
    };
};

creatBoard();