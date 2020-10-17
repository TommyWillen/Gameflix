let movieNameEl = $("#movie-name");
let moviePosterEl = $("#movie-poster");
let movieGenresEl = $("#movie-genres");
let movieOverviewEl = $("#movie-overview");
let movieReleaseEl = $("#movie-release");
let movieRatingEl = $("#movie-rating");
let gameNameEl = $("#game-name");
let gamePosterEl = $("#game-poster");
let gameGenresEl = $("#game-genres");
let gameTagsEl = $("#game-tags");
let gameReleaseEl = $("#game-release");
let gameRatingEl = $("#game-rating");
let gamePlaytimeEl = $("#game-playtime");

let movie = "starwars";
let game = "mariokart";

movieNameEl.text(movie);
gameNameEl.text(game);

$(".save-bttn").on("click", function (event) {
    const bttnId = event.target.id
    console.log(bttnId);
    if (bttnId === "save-movie") {
        localStorage.setItem("movieName", movie);
    }
    else if (bttnId === "save-game") {
        localStorage.setItem("gameName", game);
    }
});

$(".refresh-bttn").on("click", function (event) {
    const bttnId = event.target.id
    console.log(bttnId);
});

// console.log("js is loaded");