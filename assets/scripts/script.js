$(document).ready(function () {

  let matchMeEL = $("#matchMe");

  let startQuestions = [
    {
      ques: "1)	What is your preferred gaming platform?",
      options: [
        "a. PC. ",
        "b. PlayStation 4 ",
        "c. Xbox One",
        "d. Nintendo Switch",
      ],
      answer: "",
    },

    {
      ques: "2) Do you like working/playing with others",
      options: [
        "a.	I like playing on my own against multiple people (Multiplayer)",
        "b.	I like doing my own thing (Single)",
        "c.	I like working as a team towards one goal (Co-op) ",
      ],
      answer: "",
    }
];

let singleQuestions = [
    {
        ques: "3) Out of the following, which game do you like best?",
        options: [
          "a.	Sims",
          "b.	NBA 2K",
          "c.	Civilization",
          "d.	Sonic Mania",
          "e.	Elder Scrolls: Skyrim",
        ],
        answer: "",
      },
  
      {
        ques: "4) Out of the following, which podcast do you like best?",
        options: [
          "a.	Office Ladies",
          "b.	The Joe Rogan Experience",
          "c.	The NoSleep Podcast",
          "d.	My Favorite Murder",
          "e.	High Rollers DND",
        ],
        answer: "",
      },
      {
        ques: "5)	Which would you most likely do in your free time?",
        options: [
          "a.	Hang out with friends",
          "b.	Go to the gym",
          "c.	Read a book",
          "d.	Watch a TV series with a mysterious plot line",
          "e.	Play DND",
        ],
        answer: "",
      },
  
      {
        ques: "6) What is your attention span like?",
        options: [
          "a.	I get most information from memes I see on social media",
          "b.	I pay attention to things presented in an interesting way",
          "c.	I can spend hours on the same activity, whether it’s needed or just something I want to do",
          "d.	It’s not bad, but I prefer paying attention to things that have a clear goal and are interesting or fun",
          "e.	I pay attention to things that matter to me",
        ],
        answer: "",
      },
  
      {
        ques:
          "7)	Out of the following, which fictional or non-fictional world would you rather exist in?",
        options: [
          "a. Disney universe",
          "b.	Rick and Morty universe",
          "c.	 The Victorian Era",
          "d.	 The Marvel or DC Universe",
          "e.	The Game of Thrones universe",
        ],
        answer: "",
      }
];

let multiQuestions = [
    {
        ques: "3) Out of the following, which game do you like best?",
        options: [
          "a.	Mortal Kombat",
          " b.	Apex Legends",
          "c.	Super Mario Party",
          "d.	World of Warcraft",
        ],
        answer: "",
      },
      {
        ques: "4) 	Out of the following, which podcast do you like best?",
        options: [
          "a.	The NoSleep Podcast",
          "b.	The Adventure Zone",
          "c.	Stuff You Missed In History Class",
          "d.	High Rollers DND",
        ],
        answer: "",
      },
      {
        ques: "5) Which would you most likely do in your free time?",
        options: [
          "a.	Play a video game",
          "b.	Watch a TV series with an involved plot line",
          "c.	Hang out with friends or family",
          "d.	Go on a short day trip somewhere",
        ],
        answer: "",
      },
  
      {
        ques: "6)	What is your attention span like?",
        options: [
          "a.	I pay attention to things that matter to me",
          "b.	I get most information from memes I see on social media",
          "c.	I can spend hours on the same activity, whether it’s needed or just something I want to do",
          "d.	I pay attention to things presented in an interesting way",
        ],
        answer: "",
      },
      {
        ques:
          "7)	Out of the following, which fictional or non-fictional world would you rather exist in?",
        options: [
          "a.	Rick and Morty universe",
          "b.	Star Wars",
          "c.	Disney universe",
          "d.	The Game of Thrones universe",
        ],
        answer: "",
      }
];

let coopQuestions = [
    {
        ques: "3) Out of the following, which game do you like best?",
        options: [
          "a.	Borderlands",
          " b.	Halo",
          "c.	Mario Kart",
          "d.	Rocket League",
        ],
        answer: "",
      },
      {
        ques: "4) 	Out of the following, which podcast do you like best?",
        options: [
          "a.	The NoSleep Podcast",
          "b.	The Adventure Zone",
          "c.	Stuff You Missed In History Class",
          "d.	The Joe Rogan Experience",
        ],
        answer: "",
      },
      {
        ques: "5) Which would you most likely do in your free time?",
        options: [
          "a.	Play a video game",
          "b.	Watch a TV series with an involved plot line",
          "c.	Hang out with friends or family",
          "d.	Go to the gym",
        ],
        answer: "",
      },
  
      {
        ques: "6)	What is your attention span like?",
        options: [
          "a.	I pay attention to things that matter to me",
          "b.	I get most information from memes I see on social media",
          "c.	I can spend hours on the same activity, whether it’s needed or just something I want to do",
          "d.	I pay attention to things presented in an interesting way",
        ],
        answer: "",
      },
      {
        ques:
          "7)	Out of the following, which fictional or non-fictional world would you rather exist in?",
        options: [
          "a.	Rick and Morty universe",
          "b.	Star Wars",
          "c.	Disney universe",
          "d.	The Marvel or DC universe",
        ],
        answer: "",
      }
];

  matchMeEL.on("click", function () {
 console.log("heeeelp");
      // for (let i = 0; i < questions.length; i++){
    questionEl = $("<p>" + questions.ques + "<p>");
    $("#displayQs").append(questionEl);
        
        
  
      // };

 
  }); 
});
