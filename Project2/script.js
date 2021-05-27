// Get DOM Elements
const container = document.querySelector('.container');
// We only want those seats who are in row only
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total'); 
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

// console.log(ticketPrice);

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // const seatsIndex = [...selectedSeats].map(function(seat) {
    //     return [...seats].indexOf(seat)
    // });
                                // OR
                        // Using ARROW Function
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log(seatsIndex);
    const selectedSeatsCount = selectedSeats.length;
    // console.log(selectedSeatsCount);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    // Example of Local Storage (application => localstorage)
    // localStorage.setItem('name', 'Ahmed Raza Attari');
}

// Save the movie data to local storage
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    // console.log(selectedSeats);
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// EVENT LISTENERS
// 1. Event Listener for Container to check for click on Seats
container.addEventListener('click', e => {
    // console.log("clicked");
    // console.log(e.target);
    // ! is ka matlab ke opposite hoga jo b statement he
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))  {
        // e.target.classList.add('selected');
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

// 2. Event Listener for Movie select
// jub hum dosre value per jye ge to is Event ko hum 'change' kete he
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    // console.log(e.target.selectedIndex, e.target.value);
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// Initial count and total price
updateSelectedCount();



