const listOfWords = [
    "Salvation", "Seek", "Trouble", "Joy", "Unclean", "Shekel (2 POINTS)", "Beauty", 
    "Prostitute", "Mary", "House", "Law", "Kiss", "Crown", "Wrath", 
    "Son", "Hot", "Temple", "Share", "Commandment", "Lake", "Meditate", 
    "A number less than 20", "A number greater than 100", "Lord", "Courtyard",
    "Agrippa", "Correct", "Antichrist", "Dove", "Content", "Vengeance",
    "Righteous", "Ethiopia"
];

const listOfActions = [
    "Jumping Jacks",
    "Claps",
    "Finger Snaps", 
    "Steps (Run on the spot!)",
    "Say the word \"fish\"",
    "Unlock your phone",
    "Touch your elbows together",
    "Slap the desk (Not too loud!)",
    "Spin around",
    "Squats",
    "Push-ups (collectively)",
    "Tie and untie your shoelaces (collectively)",
    "Draw AMONGUS on the whiteboard (collectively)",
    "Stay silent for [verse] seconds",
    "Burpees",
    "Touch your toes",
    "Blink",
    "Send a person up to armwrestle me. If I beat you in under [verse] seconds, send the next person, if I don't, you get to move on",
    "This is a freebie, go next"
    
]

let words = [...listOfWords];
let actions = [...listOfActions];

function generate() {
    if (words.length === 0) {
        words = [...listOfWords];
    }

    if (actions.length === 0) {
        actions = [...listOfActions];
    }

    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words.splice(randomIndex, 1)[0];
    document.getElementById("wordDisplay").textContent = selectedWord;

    const randomIndex2 = Math.floor(Math.random() * actions.length);
    const selectedAction = actions.splice(randomIndex2, 1)[0];
    document.getElementById("actionDisplay").textContent = selectedAction;
}

function flashBackground() {
    document.body.classList.add('flash-bg');
    setTimeout(() => {
        document.body.classList.remove('flash-bg');
    }, 1000);
}

const button = document.getElementById("button");

button.addEventListener('click', function() {
    button.disabled = true;

    setTimeout(() => {
        button.disabled = false;
    }, 1200);
});

