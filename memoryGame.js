// Toggle background lights
const toggleLights = () => {
    let cards = getCards();
    
    cards.forEach(card => {
        card.classList.toggle('bg-animation');
    });
}

//get all divs that we will use as "cards"
const getCards = () => {
    return document.querySelectorAll('.cards');
}

//returns a random ints between 1 and num, bounds included
const randomizer = (num) => {
    return Math.floor(Math.random()*num) + 1
}

//returns an array of unique random ints + one duplicate
const getRandom = (numOfPics, numOfDivs) => {

    let arr = [];
    let rand1;
    let rand2;

    while(arr.length < numOfDivs){

        let num = randomizer(numOfPics);
        if(arr.indexOf(num) === -1) arr.push(num);

    }

    do{

        rand1 = randomizer(arr.length)-1;
        rand2 = randomizer(arr.length)-1;

    } while (rand1 === rand2); //ensuring the duplicate doesnt replace the original

    let duplicate = arr[rand1]
    arr[rand2] = duplicate;

    return arr;
}

//returns an array of 10 pics. length of array depends on the number of pics in Pics folder
const getPics = (numOfDivs) => {

    let pics = [];
    let numOfPics = 10; // Pics folder has 10 pics

    let nums = getRandom(numOfPics, numOfDivs);

    for(let pic=0; pic<numOfDivs; pic++){
        pics[pic] = `url('Pics/${nums[pic]}.jpg')`
    }

    return pics;
} 

//alert user when game is finished
const gameOver = (totalMoves) => {

    setTimeout(() => {

        alert('It took you ' + totalMoves + ' moves to finish the game!');
        window.location.reload();

    }, '250');
}

//when one card is clicked, hide the others, unless if the matching 2 cards are clicked back to back
const hideCards = (divs, clickedDiv, clickedPic, lastDiv, lastPic, totalMoves) => {

    if(clickedDiv.id !== lastDiv.id && clickedPic === lastPic){

        gameOver(totalMoves);

    } else {

        for(let curr=0; curr<divs.length; curr++){
            if(divs[curr].id !== clickedDiv.id){
                divs[curr].style.backgroundImage = '';
            }
        }
    }
    
}

//Display how many moves the player has made
const displayMoves = (totalMoves) => {
    let counter = document.querySelector('#counter');
    counter.innerText = totalMoves;
}

//when each card is clicked, show pic corresponding to that card
const populateCards = (divs, pics) => {

    let clickedDiv = '';
    let clickedPic = '';
    let lastDiv = '';
    let lastPic = '';

    let totalMoves = 0;

    for (let curr=0; curr<divs.length; curr++){

        divs[curr].addEventListener('mousedown', e => {
            
            totalMoves++;
            displayMoves(totalMoves);

            clickedDiv = divs[curr];
            clickedPic = pics[curr];

            clickedDiv.style.backgroundImage = clickedPic;
            clickedDiv.style.backgroundSize = 'cover';

            hideCards(divs, clickedDiv, clickedPic, lastDiv, lastPic, totalMoves);

            lastDiv = clickedDiv;
            lastPic = clickedPic;
        });

    }

}

//start the game
const initGame = () => {
    
    let divs = getCards();
    let pics = getPics(divs.length);
    populateCards(divs, pics);
    
}
initGame();