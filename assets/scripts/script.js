$(document).ready(function () {
    let gamePlatform;
    let gamePlayType;
    let gameGenre;
    let movieGenre;
    let LiveLaughLoveScore = 0;
    let BruhScore = 0;
    let PuzzleScore = 0;
    let NostalgicComedianScore = 0;
    let WanderlusterScore = 0;
    let DisplacedRageScore = 0;
    let AdrenalineAddictScore = 0;
    let EasyGoingScore = 0;
    let questNum = 0;
    let questRole = "";
    let matchMeEL = $("#matchMe");


    let questionOne =
    {
        ques: "1)	What is your preferred gaming platform?",
        options: {
            1: "a. Xbox One",
            4: "b. PC. ",
            7: "c. Nintendo Switch",
            18: "d. PlayStation 4 ",


        }
    }
    let questionTwo =
    {
        ques: "2) Do you like working/playing with others",
        options: {
            7: "a.	I like playing on my own against multiple people",
            18: "b.	I like working as a team towards one goal",
            31: "c.	I like doing my own thing",
            
        },
    }

    let questionSinglePlayer = [
        {
            ques: "3) Out of the following, which game do you like best?",
            options: {
                LiveLaughLove: "a.	Sims",
                Bruh: "b.	NBA 2K",
                Puzzle: "c.	Civilization",
                NostalgicComedian: "d.	Sonic Mania",
                Wanderluster: "e.	Elder Scrolls: Skyrim",
            },
        },

        {
            ques: "4) Out of the following, which podcast do you like best?",
            options: {
                LiveLaughLove: "a.	Office Ladies",
                Bruh: "b.	The Joe Rogan Experience",
                Puzzle: "c.	The NoSleep Podcast",
                NostalgicComedian: "d.	My Favorite Murder",
                Wanderluster: "e.	High Rollers DND",
            },
        },
        {
            ques: "5)	Which would you most likely do in your free time?",
            options: {
                LiveLaughLove: "a.	Hang out with friends",
                Bruh: "b.	Go to the gym",
                Puzzle: "c.	Read a book",
                NostalgicComedian: "d.	Watch a TV series with a mysterious plot line",
                Wanderluster: "e.	Play DND",
            },
        },

        {
            ques: "6) What is your attention span like?",
            options: {
                LiveLaughLove: "a.	I get most information from memes I see on social media",
                Bruh: "b.	I pay attention to things presented in an interesting way",
                Puzzle: "c.	I can spend hours on the same activity, whether it’s needed or just something I want to do",
                NostalgicComedian: "d.	It’s not bad, but I prefer paying attention to things that have a clear goal and are interesting or fun",
                Wanderluster: "e.	I pay attention to things that matter to me",
            },
        },

        {
            ques:
                "7)	Out of the following, which fictional or non-fictional world would you rather exist in?",
            options: {
                LiveLaughLove: "a. Disney universe",
                Bruh: "b.	Rick and Morty universe",
                Puzzle: "c.	 The Victorian Era",
                NostalgicComedian: "d.	 The Marvel or DC Universe",
                Wanderluster: "e.	The Game of Thrones universe",
            },
        },]

    let questionCoop = [
        {
            ques: "3) Out of the following, which game do you like best?",
            options: {
                DisplacedRage: "a.	Borderlands",
                AdrenalineAddict: " b. Halo",
                EasyGoing: "c.	Mario Kart",
                Bruh: "d.	Rocket League",
            },

        },
        {
            ques: "4) 	Out of the following, which podcast do you like best?",
            options: {
                DisplacedRage: "a.	The NoSleep Podcast",
                AdrenalineAddict: "b.	The Adventure Zone",
                EasyGoing: "c.	Stuff You Missed In History Class",
                Bruh: "d.	The Joe Rogan Experience",
            },

        },
        {
            ques: "5) Which would you most likely do in your free time?",
            options: {
                DisplacedRage: "a.	Play a video game",
                AdrenalineAddict: "b.	Watch a TV series with an involved plot line",
                EasyGoing: "c.	Hang out with friends or family",
                Bruh: "d.	Go to the gym",
            },

        },

        {
            ques: "6)	What is your attention span like?",
            options: {
                DisplacedRage: "a.	I pay attention to things that matter to me",
                AdrenalineAddict: "b.	I get most information from memes I see on social media",
                EasyGoing: "c.	I can spend hours on the same activity, whether it’s needed or just something I want to do",
                Bruh: "d.	I'd pay attention if it is cool enough",
            },

        },
        {
            ques:
                "7)	Out of the following, which fictional or non-fictional world would you rather exist in?",
            options: {
                DisplacedRage: "a.	Rick and Morty universe",
                AdrenalineAddict: "b.	Star Wars",
                EasyGoing: "c.	Disney universe",
                Bruh: "d.	The Marvel or DC universe",
            },

        },]

    let questionMultiplayer = [
        {
            ques: "3) Out of the following, which game do you like best?",
            options: {
                DisplacedRage: "a.	Mortal Kombat",
                AdrenalineAddict: "b.	Apex Legends",
                EasyGoing: "c.	Super Mario Party",
                Wanderluster: "d.	World of Warcraft",
            },

        },
        {
            ques: "4) Out of the following, which podcast do you like best?",
            options: {
                DisplacedRage: "a.	The NoSleep Podcast",
                AdrenalineAddict: "b.	The Adventure Zone",
                EasyGoing: "c.	Stuff You Missed In History Class",
                Wanderluster: "d.	High Rollers DND",
            },

        },

        {
            ques: "5) Which would you most likely do in your free time?",
            options: {
                DisplacedRage: "a.	Play a video game",
                AdrenalineAddict: "b.	Watch a TV series with an involved plot line",
                EasyGoing: "c.	Hang out with friends or family",
                Wanderluster: "d.	Go on a short day trip somewhere",
            },

        },
        {
            ques: "6) What is your attention span like?",
            options: {
                DisplacedRage: "a.	I pay attention to things that matter to me",
                AdrenalineAddict: "b.	I get most information from memes I see on social media",
                EasyGoing: "c.	I can spend hours on the same activity, whether it’s needed or just something I want to do",
                Wanderluster: "d.	I pay attention to things presented in an interesting way",
            },

        },
        {
            ques:
                "7) Out of the following, which fictional or non-fictional world would you rather exist in?",
            options: {
                DisplacedRage: "a.	Rick and Morty universe",
                AdrenalineAddict: "b.	Star Wars",
                EasyGoing: "c.	 Disney universe",
                Wanderluster: "d.	 The Game of Thrones universe",
            },

        },
    ];

    matchMeEL.on("click", function () {
        LiveLaughLoveScore = 0;
        BruhScore = 0;
        PuzzleScore = 0;
        NostalgicComedianScore = 0;
        WanderlusterScore = 0;
        DisplacedRageScore = 0;
        AdrenalineAddictScore = 0;
        EasyGoingScore = 0;
        questNum = 0;
        $("#matchMe").hide();
        //    empties the div if the user wants to start over.
        $("#displayQs").empty();
        // Change the displayQs into a div
        // this creates the element for the question
        let questionOneEl = $("<p>");
        questionOneEl.text(questionOne.ques);
        // creates an array of the object keys for the options
        let question1Keys = Object.keys(questionOne.options);
        // appends the question to the displayQs div
        let question1Values = Object.values(questionOne.options);
        $("#displayQs").append(questionOneEl);
        // creates the buttons with the data attribute of the key for later use
        console.log(questionOne.options.length);
        for (let i = 0; i < question1Values.length; i++) {
            // creates button with option text
            console.log("hi hi")
            let ques1Btn = $("<button>");
            ques1Btn.text(question1Values[i]);
            // adds uikit classes and special class for next event listener
            ques1Btn.attr("class", "uk-button-secondary uk-button-large question1-btn");
            // created data-value attribute to store the key to be saved when the specific option is clicked
            ques1Btn.attr("data-value", question1Keys[i]);
            // appends the buttons to the div
            $("#displayQs").append(ques1Btn);
        }

    });

    $(document).on("click", ".question1-btn", function () {
        gamePlatform = $(this).attr("data-value");
        console.log(gamePlatform);
        $("#displayQs").empty();

        let questionTwoEl = $("<p>");
        questionTwoEl.text(questionTwo.ques);
        // creates an array of the object keys for the options
        let question2Keys = Object.keys(questionTwo.options);
        // appends the question to the displayQs div
        let question2Values = Object.values(questionTwo.options);
        $("#displayQs").append(questionTwoEl);
        // creates the buttons with the data attribute of the key for later use
        console.log(questionTwo.options.length);
        for (let i = 0; i < question2Values.length; i++) {
            // creates button with option text
            console.log("hi hi")
            let ques2Btn = $("<button>");
            ques2Btn.text(question2Values[i]);
            // adds uikit classes and special class for next event listener
            ques2Btn.attr("class", "uk-button-secondary uk-button-large question2-btn");
            // created data-value attribute to store the key to be saved when the specific option is clicked
            ques2Btn.attr("data-value", question2Keys[i]);
            // appends the buttons to the div
            $("#displayQs").append(ques2Btn);
        }
    })

    $(document).on("click", ".question2-btn", function () {
        gamePlayType = $(this).attr("data-value");
        if (gamePlayType == 7) {
            displayMultiplayerQuestions()

        } else if (gamePlayType == 18) {
            displayCoopQuestions()

        } else if (gamePlayType == 31) {
            displaySinglePlayerQuestions()

        }
    })

    function displayMultiplayerQuestions() {
        console.log("multiplayer");
        $("#displayQs").empty();

        let questionMultiplayerEl = $("<p>");
        questionMultiplayerEl.text(questionMultiplayer[questNum].ques);
        // creates an array of the object keys for the options
        let questionMultiplayerKeys = Object.keys(questionMultiplayer[questNum].options);
        // appends the question to the displayQs div
        let questionMultiplayerValues = Object.values(questionMultiplayer[questNum].options);
        $("#displayQs").append(questionMultiplayerEl);
        // creates the buttons with the data attribute of the key for later use
        console.log(questionMultiplayer[questNum].options.length);
        for (let i = 0; i < questionMultiplayerValues.length; i++) {
            // creates button with option text
            console.log("hi hi")
            let quesMultiplayerBtn = $("<button>");
            quesMultiplayerBtn.text(questionMultiplayerValues[i]);
            // adds uikit classes and special class for next event listener
            quesMultiplayerBtn.attr("class", "uk-button-secondary uk-button-large question-multiplayer-btn");
            // created data-value attribute to store the key to be saved when the specific option is clicked
            quesMultiplayerBtn.attr("data-value", questionMultiplayerKeys[i]);
            // appends the buttons to the div
            $("#displayQs").append(quesMultiplayerBtn);
        }

    }
    function displayCoopQuestions() {
        console.log("coop");
        $("#displayQs").empty();

        let questionCoopEl = $("<p>");
        questionCoopEl.text(questionCoop[questNum].ques);
        // creates an array of the object keys for the options
        let questionCoopKeys = Object.keys(questionCoop[questNum].options);
        // appends the question to the displayQs div
        let questionCoopValues = Object.values(questionCoop[questNum].options);
        $("#displayQs").append(questionCoopEl);
        // creates the buttons with the data attribute of the key for later use
        console.log(questionCoop[questNum].options.length);
        for (let i = 0; i < questionCoopValues.length; i++) {
            // creates button with option text
            console.log("hi hi")
            let quesCoopBtn = $("<button>");
            quesCoopBtn.text(questionCoopValues[i]);
            // adds uikit classes and special class for next event listener
            quesCoopBtn.attr("class", "uk-button-secondary uk-button-large question-coop-btn");
            // created data-value attribute to store the key to be saved when the specific option is clicked
            quesCoopBtn.attr("data-value", questionCoopKeys[i]);
            // appends the buttons to the div
            $("#displayQs").append(quesCoopBtn);
        }
    }
    function displaySinglePlayerQuestions() {
        console.log("single player");
        $("#displayQs").empty();

        let questionSinglePlayerEl = $("<p>");
        questionSinglePlayerEl.text(questionSinglePlayer[questNum].ques);
        // creates an array of the object keys for the options
        let questionSinglePlayerKeys = Object.keys(questionSinglePlayer[questNum].options);
        // appends the question to the displayQs div
        let questionSinglePlayerValues = Object.values(questionSinglePlayer[questNum].options);
        $("#displayQs").append(questionSinglePlayerEl);
        // creates the buttons with the data attribute of the key for later use
        console.log(questionSinglePlayer[questNum].options.length);
        for (let i = 0; i < questionSinglePlayerValues.length; i++) {
            // creates button with option text
            console.log("hi hi")
            let quesSinglePlayerBtn = $("<button>");
            quesSinglePlayerBtn.text(questionSinglePlayerValues[i]);
            // adds uikit classes and special class for next event listener
            quesSinglePlayerBtn.attr("class", "uk-button-secondary uk-button-large question-singleplayer-btn");
            // created data-value attribute to store the key to be saved when the specific option is clicked
            quesSinglePlayerBtn.attr("data-value", questionSinglePlayerKeys[i]);
            // appends the buttons to the div
            $("#displayQs").append(quesSinglePlayerBtn);
        }
    }

    $(document).on("click", ".question-multiplayer-btn", function () {
        console.log($(this).attr("data-value"));
        if (questNum === 4) {
            finalQuizResults();
            console.log("all done!")
            console.log("displaced rage = " + DisplacedRageScore);
            console.log("Adrenaline Addict = " + AdrenalineAddictScore);
            console.log("Easy going = " + EasyGoingScore);
            console.log("Wanderluster = " + WanderlusterScore);
            // go to results page
        } else {
            if ($(this).attr("data-value") == "DisplacedRage") {
                DisplacedRageScore++
                questNum++
                displayMultiplayerQuestions()
            } else if ($(this).attr("data-value") == "AdrenalineAddict") {
                AdrenalineAddictScore++
                questNum++
                displayMultiplayerQuestions()
            } else if ($(this).attr("data-value") == "EasyGoing") {
                EasyGoingScore++
                questNum++
                displayMultiplayerQuestions()
            } else if ($(this).attr("data-value") == "Wanderluster") {
                WanderlusterScore++
                questNum++
                displayMultiplayerQuestions()
            }
        }
    })

    $(document).on("click", ".question-coop-btn", function () {
        console.log($(this).attr("data-value"));
        if (questNum === 4) {
            finalQuizResults();
            console.log("all done!")
            console.log("displaced rage = " + DisplacedRageScore);
            console.log("Adrenaline Addict = " + AdrenalineAddictScore);
            console.log("Easy going = " + EasyGoingScore);
            console.log("Bruh = " + BruhScore);
            // go to results page
        } else {
            if ($(this).attr("data-value") == "DisplacedRage") {
                DisplacedRageScore++
                questNum++
                displayCoopQuestions()
            } else if ($(this).attr("data-value") == "AdrenalineAddict") {
                AdrenalineAddictScore++
                questNum++
                displayCoopQuestions()
            } else if ($(this).attr("data-value") == "EasyGoing") {
                EasyGoingScore++
                questNum++
                displayCoopQuestions()
            } else if ($(this).attr("data-value") == "Bruh") {
                BruhScore++
                questNum++
                displayCoopQuestions()
            }
        }
    })

    $(document).on("click", ".question-singleplayer-btn", function () {
        console.log($(this).attr("data-value"));
        if (questNum === 4) {
            finalQuizResults();
            console.log("all done!")
            console.log("Live laugh love = " + LiveLaughLoveScore);
            console.log("puzzle = " + PuzzleScore);
            console.log("NostalgicComedian = " + NostalgicComedianScore);
            console.log("Bruh = " + BruhScore);
            console.log("wanderluster = " + WanderlusterScore)
            // go to results page
        } else {
            if ($(this).attr("data-value") == "LiveLaughLove") {
                LiveLaughLoveScore++
                questNum++
                displaySinglePlayerQuestions()
            } else if ($(this).attr("data-value") == "Puzzle") {
                PuzzleScore++
                questNum++
                displaySinglePlayerQuestions()
            } else if ($(this).attr("data-value") == "NostalgicComedian") {
                NostalgicComedianScore++
                questNum++
                displaySinglePlayerQuestions()
            } else if ($(this).attr("data-value") == "Bruh") {
                BruhScore++
                questNum++
                displaySinglePlayerQuestions()
            } else if ($(this).attr("data-value") == "Wanderluster") {
                console.log("oops!")
                WanderlusterScore++
                questNum++
                displaySinglePlayerQuestions()
            }
        }
    })

    function finalQuizResults() {
        let quizScoreObj = [
            {
                name: "LiveLaughLove",
                score: LiveLaughLoveScore
            },
            {
                name: "Bruh",
                score: BruhScore
            },
            {
                name: "Puzzle",
                score: PuzzleScore
            },
            {
                name: "NostalgicComedian",
                score: NostalgicComedianScore
            },
            {
                name: "Wanderluster",
                score: WanderlusterScore
            },
            {
                name: "DisplacedRage",
                score: DisplacedRageScore
            },
            {
                name: "AdrenalineAddict",
                score: AdrenalineAddictScore
            },
            {
                name: "EasyGoing",
                score: EasyGoingScore
            },
        ]
        quizScoreObj.sort(compare);
        console.log(quizScoreObj);
        if (quizScoreObj[0].name == "LiveLaughLove") {
            let resultsObj = {
                name: "LiveLaughLove",
                gameGenre: "14,40",
                movieGenre: [35, 10402, 10749],
                playType: gamePlayType,
                platform: gamePlatform,
                description: "Based on your responses, we can tell you're laid back. You like playing games and watching movies, but you're not too serious about it. You just want a movie that will make you laugh and a game that doesn't take too much time.",
            }
            let storedResultsObj = JSON.stringify(resultsObj);
            localStorage.setItem("Stored-Character-Class", storedResultsObj);
            console.log(gameGenre);
            console.log(movieGenre);
            console.log(questRole);
        } else if (quizScoreObj[0].name == "Bruh") {
            let resultsObj = {
                name: "Bruh",
                gameGenre: "1,2,15",
                movieGenre: [28, 35, 37],
                playType: gamePlayType,
                platform: gamePlatform,
                description: "Based on your responses, we can tell you like action-packed games and movies.",
            }
            let storedResultsObj = JSON.stringify(resultsObj);
            localStorage.setItem("Stored-Character-Class", storedResultsObj);
            console.log(gameGenre);
            console.log(movieGenre);
            console.log(questRole);
        } else if (quizScoreObj[0].name == "Puzzle") {
            let resultsObj = {
                name: "Puzzle",
                gameGenre: "7,10,51",
                movieGenre: [18, 80, 36, 27, 9648, 878],
                playType: gamePlayType,
                platform: gamePlatform,
                description: "Based on your responses, we can tell you like games and movies that are thought-provoking and a little puzzling. You want a game or movie that makes you think.",
            }
            let storedResultsObj = JSON.stringify(resultsObj);
            localStorage.setItem("Stored-Character-Class", storedResultsObj);
            console.log(gameGenre);
            console.log(movieGenre);
            console.log(questRole);
        } else if (quizScoreObj[0].name == "NostalgicComedian") {
            let resultsObj = {
                name: "NostalgicComedian",
                gameGenre: "11,83",
                movieGenre: [28, 35, 878, 9648],
                playType: gamePlayType,
                platform: gamePlatform,
                description: "Based on your responses, we can tell you might be a little nostalgic for the OG games. We can also tell you like comedies, maybe with a twist of mystery or sci-fi.",
            }
            let storedResultsObj = JSON.stringify(resultsObj);
            localStorage.setItem("Stored-Character-Class", storedResultsObj);
            console.log(gameGenre);
            console.log(movieGenre);
            console.log(questRole);
        } else if (quizScoreObj[0].name == "Wanderluster") {
            let resultsObj = {
                name: "Wanderluster",
                gameGenre: "3,5,51,59",
                movieGenre: [12, 18, 14, 27, 878],
                playType: gamePlayType,
                platform: gamePlatform,
                description: "Based on your results, we can tell you yearn to be anywhere but in this universe. You like adventurous plotlines in fantastical worlds.",
            }
            let storedResultsObj = JSON.stringify(resultsObj);
            localStorage.setItem("Stored-Character-Class", storedResultsObj);
            console.log(gameGenre);
            console.log(movieGenre);
            console.log(questRole);
        } else if (quizScoreObj[0].name == "DisplacedRage") {
            let resultsObj = {
                name: "DisplacedRage",
                gameGenre: "2,6,15,59",
                movieGenre: [28, 36, 27, 53, 37, 10752],
                playType: gamePlayType,
                platform: gamePlatform,
                description: "Based on your responses, we can tell that you have some buried rage that's itching to be let out. Better to let it out by playing one of these video games or watching one of these movies!",
            }
            let storedResultsObj = JSON.stringify(resultsObj);
            localStorage.setItem("Stored-Character-Class", storedResultsObj);
            console.log(gameGenre);
            console.log(movieGenre);
            console.log(questRole);
        } else if (quizScoreObj[0].name == "AdrenalineAddict") {
            let resultsObj = {
                name: "AdrenalineAddict",
                gameGenre: "3,4,59",
                movieGenre: [12, 28, 14, 53, 878, 37, 10752],
                playType: gamePlayType,
                platform: gamePlatform,
                description: "Based on your responses, we can tell you like feeling your heart nearly jump out of your chest. You'll like these games and movies that give you the action and thrills that you're seeking.",
            }
            let storedResultsObj = JSON.stringify(resultsObj);
            localStorage.setItem("Stored-Character-Class", storedResultsObj);
            console.log(gameGenre);
            console.log(movieGenre);
            console.log(questRole);
        } else if (quizScoreObj[0].name == "EasyGoing") {
            let resultsObj = {
                name: "EasyGoing",
                gameGenre: "7,17,19,28,34",
                movieGenre: [16, 99, 10751, 36, 10402],
                playType: gamePlayType,
                platform: gamePlatform,
                description: "Based on your responses, we can tell you spend a lot of time with family and friends. We picked out a movie and game that you'll want to share with them.",
            }
            let storedResultsObj = JSON.stringify(resultsObj);
            localStorage.setItem("Stored-Character-Class", storedResultsObj);
            console.log(gameGenre);
            console.log(movieGenre);
            console.log(questRole);
        }
        window.location.href = "./assets/pages/results.html";
    }

    function compare(a, b) {
        // sets the variables to scores from the chosen array
        const scoreA = a.score;
        const scoreB = b.score;
        // compares the new score from the old one to help the sort method determine the order.
        return scoreB - scoreA;
    }

});
