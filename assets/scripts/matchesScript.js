for (let i = 0; i < gameMatches.length; i++) {
    let gameMatchEl = $("<div>");
    gameMatchEl.attr("class", "uk-grid-small");
    gameMatchEl.attr("uk-grid", "");
    let gameMatchTextEl = $("<div>").text(gameMatches[i])
    gameMatchTextEl.attr("class", "uk-width-expand");
    gameMatchTextEl.attr("uk-leader", "fill: -");
    let gameCloseButtonEl = $("<button>").text("Played It");
    gameCloseButtonEl.attr("class", "uk-button uk-button-default uk-button-small movie-close-btn");
    $("#myMatchesG").append(gameMatchesListEl);
    gameMatchesListEl.append(gameMatchEl);
    gameMatchEl.append(gameMatchTextEl);
    gameMatchEl.append(gameCloseButtonEl);

}
for (let i = 0; i < movieMatches.length; i++) {
    let movieMatchEl = $("<div>");
    movieMatchEl.attr("class", "uk-grid-small");
    movieMatchEl.attr("uk-grid", "");
    let movieMatchTextEl = $("<div>").text(movieMatches[i])
    movieMatchTextEl.attr("class", "uk-width-expand");
    movieMatchTextEl.attr("uk-leader", "fill: -");
    let movieCloseButtonEl = $("<button>").text("Seen It");
    movieCloseButtonEl.attr("class", "uk-button uk-button-default uk-button-small movie-close-btn");
    $("#myMatchesM").append(movieMatchesListEl);
    movieMatchesListEl.append(movieMatchEl);
    movieMatchEl.append(movieMatchTextEl);
    movieMatchEl.append(movieCloseButtonEl);
}