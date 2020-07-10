const url = "http://localhost:3000/films/1"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

const currentFilm = document.querySelector("div#showing.ui.cards")
const poster = document.querySelector("div.four-wide-column")
const btn = document.querySelector("div.ui.orange.button")

///////// Movie Info ///////////

function fetchFlims(){
    fetch("http://localhost:3000/films/1")
      .then(resp => resp.json())
      .then(filmsData => createFilmDiv(filmsData))
      .catch(err => console.log(err))
}


function createFilmDiv(filmsData){
    poster.innerHTML = `
        <img id="poster" src=${filmsData.poster}>
    `


    currentFilm.innerHTML = `

    <div class="four wide column">
        <div class="ui cards" id="showing">

          <div class="card">
            <div id="title" class="title">${filmsData.title}</div>
            <div id="runtime" class="meta">${filmsData.runtime} minutes</div>
            <div class="content">
                <div class="description">
                    <div id="film-info">${filmsData.description}</div>
                    <span id="showtime" class="ui label">${filmsData.showtime}</span>
                    <span id="ticket-num">${filmsData.capacity - filmsData.tickets_sold} LEFT</span>
                </div>
            </div>
            <div class="extra content">
              <div class="ui orange button">Buy Ticket</div>
            </div>
          </div>
    `
/// need to add an event for button to buy tickets and decrease the num///
}

/////////////////////////////

//////// events ///////////////

btn.addEventListener("click", function(filmsData){
    event.preventDefault()

    event.target.value -= filmsData.tickets_sold && films.capacity
    if( filmsData.tickets_sold && films.capacity > filmsData.tickets_sold && films.capacity )
    {
        let soldOut = document.createElement("div");
        let soldOutDiv = document.createTextNode("Sold Out")
        soldOut.appendChild(soldOutDiv);

        let currentMovieStatus = document.querySelector("div#flim-info")
        document.body.insertBefore(soldOut, currentMovieStatus)

    }
});



//// Functions ////
fetchFlims()
