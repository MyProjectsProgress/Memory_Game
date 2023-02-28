const cardArray = [
    {
        name: 'Magdy_za3laan',
        img: 'imgs/Magdy_za3laan.png'
    },
    {
        name: 'emad',
        img: 'imgs/emad.png'
    },
    {
        name: 'sheikh_joe',
        img: 'imgs/sheikh_joe.png'
    },
    {
        name: 'som3a',
        img: 'imgs/som3a.png'
    },
    {
        name: 'mohab_hoba',
        img: 'imgs/mohab_hoba.png'
    },
    {
        name: 'sarta',
        img: 'imgs/sarta.png'
    },
    {
        name: 'miky',
        img: 'imgs/miky.png'
    },
    {
        name: 'taha',
        img: 'imgs/taha.png'
    },
    {
        name: 'kadry',
        img: 'imgs/kadry.png'
    },
    {
        name: 'Magdy_za3laan',
        img: 'imgs/Magdy_za3laan.png'
    },
    {
        name: 'emad',
        img: 'imgs/emad.png'
    },
    {
        name: 'sheikh_joe',
        img: 'imgs/sheikh_joe.png'
    },
    {
        name: 'som3a',
        img: 'imgs/som3a.png'
    },
    {
        name: 'mohab_hoba',
        img: 'imgs/mohab_hoba.png'
    },
    {
        name: 'sarta',
        img: 'imgs/sarta.png'
    },
    {
        name: 'miky',
        img: 'imgs/miky.png'
    },
    {
        name: 'taha',
        img: 'imgs/taha.png'
    },
    {
        name: 'kadry',
        img: 'imgs/kadry.png'
    },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function creatBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'imgs/click me.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
        console.log(card, i);
    };
};

creatBoard();

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTweId = cardsChosenIds[1];

    if (optionOneId === optionTweId) {
        // alert('You have clicked the same image');
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        // alert('You found a match');
        cards[optionOneId].setAttribute('src', 'imgs/white.png');
        cards[optionTweId].setAttribute('src', 'imgs/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'imgs/click me.png');
        cards[optionTweId].setAttribute('src', 'imgs/click me.png');

        // alert('Sorry, try again');
    }

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.innerHTML = "Congratulations, You have just found them all";
    } else if (cardsWon.length == 4) {
        resultDisplay.innerHTML = cardsWon.length + ' Out of 9, You have done half of your mission keep going!';
    } else {
        resultDisplay.innerHTML = cardsWon.length + ' Out of 9';
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}