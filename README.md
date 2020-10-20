# Gameflix

Explore the github [project repo](https://github.com/TommyWillen/Gameflix/)

View the [github-pages](https://tommywillen.github.io/Gameflix/)

## Table of Contents

- [Project Description](#Project-Description)
    - [Collaborators and Roles](#Collaborators-and-Roles)
    - [Layout and Design](#event-listeners)
        - [Home Page](#local-storage)
        - [Results Page](#results-page)
        - [My Matches Page](#My-Matches-Page)
    - [Interest Quiz and Question Handlers](#highscores-page)
        - [Quiz Results Storage and Recall](#quiz-results-storage-and-recall)
        - [Character Class Determination](#character-class-determination)
    - [Ajax Call](#Ajax-call)
    - [My Matches Storage and Recall](#my-matches-storage-and-recall)
    - [Seen It Played It Buttons](#seen-it-played-it-buttons)
    - [Video Tutorial](#Video-Tutorial)
- [Installation](#installation)

- [Roadmap](#roadmap)

- [License](#license)

- [Contact Me](#contact-me)

- [Acknowledgements](#acknowledgements)

- [Easter Egg!](#easter-egg!)

## Project Description
![Gameflix Gif]()

### Collaborators and Roles

- Tommy: Ajax call, local storage, button handlers
- Amber:  Layout and Design for homepage and saved information
- Sandra:  Responsible for the styling  of the results page   
- Bailey: Created quiz and character roles; local storage and ajax recall; created favicon


### Layout and Design

#### Home Page  

Layout and designed Home Page using UIkit, as well as, free stock images from Freepik and Pexels. Cyberpunk inspired theme and color scheme. 

![Home Page.](assets/img/home.page.png)  

#### Results Page

Sandra fill out stuff here!

#### My Matches Page

Layout and designed MyMatches page using UIkit, as well as, free stock images from Freepik and Pexels. Cyberpunk inspired theme and color scheme. 

![MyMatches.](assets/img/mymatches.png) 

### Interest Quiz and Question Handlers

For the quiz, we created 8 different personalities: The Displaced Rage, The Adrenaline Addict, The Easy Going, The Wanderluster, The Bruh, The Puzzle, The Nostalgic Comedian, and The LiveLaughLove.

Each personality was considered a "bucket" in which we put specific categories (Play Types, Video Game Genres, Movie Genres).

The first question would narrow which gaming platform would be used in the AJAX call. Question two would narrow down the personality types by play type and helped determine which set of questions the user would be shown. There was a set of questions for each play type: single player, co-op player, multiplayer.

Tommy fill out question handlers here

#### Quiz Results Storage and Recall

Tommy fill out ajax storage here

For the AJAX recall, we used the information saved in local storage to get the "Stored-Character-Class" object. We used the information in the object to create variables (e.g. gamePlatform, gamePlayType, etc) that could be used in the API URLs.

#### Character Class Determination

Still using the "Stored-Character-Class" object from local storage, we were able to pull the name and description of the user's personality result. When the user finishes taking the quiz, they will be presented with the name of their personality along with the description.

### Ajax Call

Tommy fill out stuff here

### My Matches Storage and Recall

tommy fill out stuff here

### Seen It Played It Buttons

tommy fill out stuff here

### Video Tutorial

Click the image to view my video feature tutorial:

[![Start screen to link to youtube video]()]()

## Installation

Prerequisites\: None

Simply clone it from my repo\:

```
clone git@github.com:TommyWillen/Gameflix.git
```

## Roadmap

We would like to eventually include embeded video of the movie trailer and game trailer

## License

[License](https://github.com/TommyWillen/Gameflix/blob/main/LICENSE)

## Contact Me

Tommy Willen
- [Email](TommyAllen1215@gmail.com)
- [Github Page](https://github.com/TommyWillen)
- [LinkedIn](https://www.linkedin.com/in/tommy-willen-12867b1b3/)

Bailey Myers
- [Email](baileymyers96@gmail.com)
- [Github Page](https://github.com/baileymyers)
- [LinkedIn](https://www.linkedin.com/in/bailey-myers-9a39a3b8/)  

Amber Alex Lee
- [Email](lee.amber.alex@gmail.com)
- [Github Page](https://github.com/lee-amber-alex)
- [LinkedIn](www.linkedin.com/in/leeamberalex)


## Acknowledgements

- Dan Mont-Eton\: For the calm and patient support he provided in understanding our code and "talking us off the ledge" when I we had git/merge conflicts.