const textStrings = [
    'Here to read? Waste no time! Click <a href="/pages/stories">Stories</a> to get started!',
    'Join the Discord <a href="">server</a> for the latest news!',
    'Bored? Click <a href="">this</a> to visit a random page!',
    "Inspired by... I forgot actually.",
    "Will people even see this?",
    "You're here very early!",
    "Ever heard of Eyecandy? No? You will soon. :)",
    'Ever heard of Craftermine? No?! What the hell?! Check it out <a href="">here!!!</a>',
    "Have you seen all the secrets?",
    "Have you met the Banana Man?",
    "Have you seen Cog?",
    'Have you accepted the License Agreement? Click <a href="">here</a> if not.',
    "Did you know this website is managed by 9,864,213 Inkas?",
    "Don't listen to the Inka that tells terrible facts.",
    "Don't listen to the Inka that speaks in hands.",
    "There is nothing you can do in this world.",
    "There is no place to file your complaints about the website, sorry.",
    "There is no way to reach their internet.",
    "There is no way to reach their world.",
    "Never pronounce the logo as SOTO!!!",
    "Never click on the advertisements you see. Never click on the pop-ups that appear.",
    "If anything appears, it does not. You are only imagining things.",
    "If you find a page you aren't supposed to see, report it to me.",
    "If you find a page you aren't supposed to see, close your eyes and turn off your computer.",
    "Live since 2026!",
    "Good luck finding all the secrets!",
    "Everyone is welcome here!",
    "Thank you, perfect. Simply marvelous.",
    "Cog.",
    "Where is the creator when you need them the most?",
    "January 7th is a special day.",
    "January 30th is a special day.",
    "February 20th is a special day.",
    "May 5th is a special day.",
    "August 19th is a special day.",
    "August 30th is a special day.",
    "September 24th is a special day.",
    "October 19th is a special day."
]

let chosenQuoteIndex = (Math.floor(Math.random() * (textStrings.length))) //i think this has a microscopic chance to be a 38 which will throw an error

const documentQuote = document.getElementById("randomText")
console.log(textStrings[chosenQuoteIndex])
documentQuote.innerHTML = textStrings[chosenQuoteIndex]