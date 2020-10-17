$(document).ready(function () {
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
    let movieMatchesListEl = $("#movie-matches-list");
    let gameMatchesListEl = $("#game-matches-list");
    const movieGenreIds = {
        12: "Adventure",
        14: "Fantasy",
        16: "Animation",
        18: "Drama",
        27: "Horror",
        28: "Action",
        35: "Comedy",
        36: "History",
        37: "Western",
        53: "Thriller",
        80: "Crime",
        99: "Documentary",
        878: "Science Fiction",
        9648: "Mystery",
        10402: "Music",
        10749: "Romance",
        10751: "Family",
        10752: "War",
        10770: "TV Movie",
    }
    const playTypeObj = {
        7: "Multiplayer",
        18: "Co-open",
        31: "Singleplayer",
    }
    let storedMovieMatches = localStorage.getItem("movie-matches");
    let storedGameMatches = localStorage.getItem("game-matches");
    let movieMatches = [];
    let gameMatches = [];

    if (storedMovieMatches) {
        movieMatches = JSON.parse(storedMovieMatches);
    }
    if (storedGameMatches) {
        gameMatches = JSON.parse(storedGameMatches);
    }

    function displayMovieInfo() {
        let movieGenre = 878;
        let movieURL = "https://api.themoviedb.org/3/discover/movie?api_key=8f8b7c9d8d66c3bf3418011e60cf74d6&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=400&vote_average.gte=8&with_genres=" + movieGenre

        $.ajax({
            url: movieURL,
            method: "GET",
        }).then(function (responseM) {
            console.log(responseM);
            let rando = Math.floor(Math.random() * 20);
            movieNameEl.html(responseM.results[rando].title);
            moviePosterEl.attr("src", "https://image.tmdb.org/t/p/original" + responseM.results[rando].poster_path);
            console.log(responseM.results[rando].genre_ids.length)
            for (let i = 0; i < responseM.results[rando].genre_ids.length; i++) {
                for (let [key, value] of Object.entries(movieGenreIds)) {
                    if (key == responseM.results[rando].genre_ids[i]) {
                     movieGenresEl.append(value);
                    }
                }
            }
            movieOverviewEl.html(responseM.results[rando].overview);
            movieReleaseEl.html(responseM.results[rando].release_date);
            movieRatingEl.html(responseM.results[rando].vote_average);
        })
    }
displayMovieInfo();

function displayGameInfo() {
    let gameGenre = 6;
    let gamePlatform = 1;

    let gamePlayType = 31;
    let gameURL = "https://api.rawg.io/api/games?genres=" + gameGenre + "&platforms=" + gamePlatform + "&tags=" + gamePlayType + "&page_size=30"
    $.ajax({
        url: gameURL,
        method: "GET",
    }).then(function(responseG){
        console.log(responseG);
        let randa = Math.floor(Math.random() * 30);
        gameNameEl.html(responseG.results[randa].name);
        gamePosterEl.attr("src", responseG.results[randa].background_image);
        for (let i = 0; i < responseG.results[randa].genres.length; i++) {
            gameGenresEl.append(responseG.results[randa].genres[i].name + "|");
        }
        // gameGenresEl = responseG.results[randa]
        for (let i = 0; i < responseG.results[randa].tags.length; i++) {
            for (let [key, value] of Object.entries(playTypeObj)) {
                if (key == responseG.results[randa].tags[i].id) {
                 gameTagsEl.append(value + "|");
                }
            }
        }
        gameReleaseEl.html(responseG.results[randa].released);
        gameRatingEl.html(responseG.results[randa].rating);
        gamePlaytimeEl.html(responseG.results[randa].playtime);
    })
}
displayGameInfo();

$("#refresh-movie").on("click", function(){
    movieNameEl.empty();
    movieGenresEl.empty();
    movieOverviewEl.empty();
    movieReleaseEl.empty();
    movieRatingEl.empty();
    moviePosterEl.attr("src", " ");
    displayMovieInfo();
})

$("#refresh-game").on("click", function(){
    gameNameEl.empty();
    gameGenresEl.empty();
    gameTagsEl.empty();
    gameReleaseEl.empty();
    gameRatingEl.empty();
    gamePlaytimeEl.empty();
    gamePosterEl.attr("src", " ");
    displayGameInfo();
})

$("#save-movie").on("click", function(){
    movieMatches.push(movieNameEl.text());
    storedMovieMatches = JSON.stringify(movieMatches);
    localStorage.setItem("movie-matches", storedMovieMatches);
})

$("#save-game").on("click", function(){
    gameMatches.push(gameNameEl.text());
    storedGameMatches = JSON.stringify(gameMatches);
    localStorage.setItem("game-matches", storedGameMatches);
})
for (let i = 0; i < gameMatches.length; i++) {
    let gameMatchEl = $("<div>");
    gameMatchEl.attr("class", "uk-grid-small");
    gameMatchEl.attr("uk-grid", "");
    let gameMatchTextEl = $("<div>").text(gameMatches[i])
    gameMatchTextEl.attr("class", "uk-width-expand");
    gameMatchTextEl.attr("uk-leader", "fill: -");
    gameMatchTextEl.attr("data-index", i);
    let gameCloseButtonEl = $("<button>").text("Played It");
    gameCloseButtonEl.attr("class", "uk-button uk-button-default uk-button-small game-close-btn");
    gameMatchesListEl.append(gameMatchEl);
    gameMatchEl.append(gameMatchTextEl);
    gameMatchEl.append(gameCloseButtonEl);

}
for (let i = 0; i < movieMatches.length; i++) {
    let movieMatchEl = $("<div>");
    movieMatchEl.attr("class", "uk-grid-small");
    movieMatchEl.attr("uk-grid", "");
    let movieMatchTextEl = $("<div>").text(movieMatches[i]);
    movieMatchTextEl.attr("class", "uk-width-expand");
    movieMatchTextEl.attr("uk-leader", "fill: -");
    movieMatchTextEl.attr("data-index", i );
    let movieCloseButtonEl = $("<button>").text("Seen It");
    movieCloseButtonEl.attr("class", "uk-button uk-button-default uk-button-small movie-close-btn");
    movieMatchesListEl.append(movieMatchEl);
    movieMatchEl.append(movieMatchTextEl);
    movieMatchEl.append(movieCloseButtonEl);
}

$(document).on("click", ".game-close-btn", playedItClose)

function playedItClose() {
    gameMatches.splice(parseInt($(this).prev().attr("data-index")), 1);
    $(this).parent().remove();
    storedGameMatches = JSON.stringify(gameMatches);
    localStorage.setItem("game-matches", storedGameMatches);
}

$(document).on("click", ".movie-close-btn", seenItClose)

function seenItClose() {
    movieMatches.splice(parseInt($(this).prev().attr("data-index")), 1);
    $(this).parent().remove();
    storedMovieMatches = JSON.stringify(movieMatches);
    localStorage.setItem("movie-matches", storedMovieMatches);
}

})

