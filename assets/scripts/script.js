$(document).ready(function () {

  let matchMeEL = $("#matchMe");

  let questions = [
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
    },

    {
      ques: "3) Out of the following, which game do you like best?",
      options: [
        "a.	Sims (LiveLaughLove)",
        "b.	NBA 2K (Bruh)",
        "c.	Civilization (puzzle)",
        "d.	Sonic Mania (nostalgic Comedian)",
        "e.	Elder Scrolls: Skyrim (Wanderluster)",
      ],
      answer: "",
    },

    {
      ques: "4) Out of the following, which podcast do you like best?",
      options: [
        "a.	Office Ladies (LiveLaughLove)",
        "b.	The Joe Rogan Experience (Bruh)",
        "c.	The NoSleep Podcast (puzzle)",
        "d.	My Favorite Murder (nostalgic Comedian)",
        "e.	High Rollers DND (Wanderluster)",
      ],
      answer: "",
    },
    {
      ques: "5)	Which would you most likely do in your free time?",
      options: [
        "a.	Hang out with friends (LiveLaughLove)",
        "b.	Go to the gym (Bruh)",
        "c.	Read a book (puzzle)",
        "d.	Watch a TV series with a mysterious plot line (nostalgic Comedian)",
        "e.	Play DND (Wanderluster)",
      ],
      answer: "",
    },

    {
      ques: "6) What is your attention span like?",
      options: [
        "a.	I get most information from memes I see on social media (LiveLaughLove)",
        "b.	I pay attention to things presented in an interesting way (Bruh)",
        "c.	I can spend hours on the same activity, whether it’s needed or just something I want to do (puzzle)",
        "d.	It’s not bad, but I prefer paying attention to things that have a clear goal and are interesting or fun (nostalgic Comedian",
        "e.	I pay attention to things that matter to me (Wanderluster)",
      ],
      answer: "",
    },

    {
      ques:
        "7)	Out of the following, which fictional or non-fictional world would you rather exist in?",
      options: [
        "a. Disney universe (LiveLaughLove)",
        "b.	Rick and Morty universe (Bruh)",
        "c.	 The Victorian Era (puzzle)",
        "d.	 The Marvel or DC Universe (nostalgic Comedian)",
        "e.	The Game of Thrones universe (Wanderluster)",
      ],
      answer: "",
    },

    {
      ques: "8) Out of the following, which game do you like best?",
      options: [
        "a.	Mortal Kombat (Displaced rage)",
        " b.	Apex Legends (adrenaline addict)",
        "c.	Super Mario Party (easy going) ",
        "d.	World of Warcraft (Wanderluster)",
      ],
      answer: "",
    },
    {
      ques: "9) 	Out of the following, which podcast do you like best?",
      options: [
        "a.	The NoSleep Podcast (Displaced rage)",
        "b.	The Adventure Zone (adrenaline addict)",
        "c.	Stuff You Missed In History Class (easy going",
        "d.	The Joe Rogan Experience (Bruh)",
      ],
      answer: "",
    },
    {
      ques: "10) Which would you most likely do in your free time?",
      options: [
        "a.	Play a video game (Displaced rage)",
        "b.	Watch a TV series with an involved plot line (adrenaline addict)",
        "c.	Hang out with friends or family (easy going)",
        "d.	Go to the gym (Bruh)",
      ],
      answer: "",
    },

    {
      ques: "11)	What is your attention span like?",
      options: [
        "a.	I pay attention to things that matter to me (Displaced rage)",
        "b.	I get most information from memes I see on social media (adrenaline addict)",
        "c.	I can spend hours on the same activity, whether it’s needed or just something I want to do (easy going)",
        "d.	I pay attention to things presented in an interesting way (Wanderluster)",
      ],
      answer: "",
    },
    {
      ques:
        "12)	Out of the following, which fictional or non-fictional world would you rather exist in?",
      options: [
        "a.	Rick and Morty universe (Displaced rage)",
        "b.	Star Wars (adrenaline addict)",
        "c.	Disney universe (easy going)",
        "d.	The Marvel or DC universe (Bruh)",
      ],
      answer: "",
    },
    {
      ques: "13) Out of the following, which game do you like best?",
      options: [
        "a.	Mortal Kombat (Displaced rage)",
        "b.	Apex Legends (adrenaline addict)",
        "c.	Super Mario Party (easy going)",
        "d.	World of Warcraft (Wanderluster)",
      ],
      answer: "",
    },
    {
      ques: "14) Out of the following, which podcast do you like best?",
      options: [
        "a.	The NoSleep Podcast (Displaced rage)",
        "b.	The Adventure Zone (adrenaline addict)",
        "c.	Stuff You Missed In History Class (easy going)",
        "d.	High Rollers DND (Wanderluster)",
      ],
      answer: "",
    },

    {
      ques: "15) Which would you most likely do in your free time?",
      options: [
        "a.	Play a video game (Displaced rage)",
        "b.	Watch a TV series with an involved plot line (adrenaline addict)",
        "c.	Hang out with friends or family (easy going)",
        "d.	Go on a short day trip somewhere (Wanderluster)",
      ],
      answer: "",
    },
    {
      ques: "16) What is your attention span like?",
      options: [
        "a.	I pay attention to things that matter to me (Displaced rage)",
        "b.	I get most information from memes I see on social media (adrenaline addict)",
        "c.	I can spend hours on the same activity, whether it’s needed or just something I want to do (easy going)",
        "d.	I pay attention to things presented in an interesting way (Wanderluster)",
      ],
      answer: "",
    },
    {
      ques:
        "17) Out of the following, which fictional or non-fictional world would you rather exist in?",
      options: [
        "a.	Rick and Morty universe (Displaced rage)",
        "b.	Star Wars (adrenaline addict)",
        "c.	 Disney universe (easy going)",
        "d.	 The Game of Thrones universe (Wanderluster)",
      ],
      answer: "",
    },
  ];

  matchMeEL.on("click", function () {
 console.log("heeeelp");
      // for (let i = 0; i < questions.length; i++){
        let questionEl = $("<button>").text(questions[i]);
        $("displayQs").append(questionEl);
  
      // };

 
  }); 
});
