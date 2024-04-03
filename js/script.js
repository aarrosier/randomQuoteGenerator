/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/* 
Array of objects: 

quote:"" // Quote to display
author:"" // Quote Author
citation:"" // Optional Citation, i.e: Where Quote is from
year:"" // Optional year of publication
tag:"" // Optional tag. 

*/

const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
      citation: "Long walk to freedom",
      year: "1994",
      tags: "<i>(inspirational wisdom)</i>"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
      tags: "<i>(inspirational wisdom)</i>"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
      citation: "Beautiful Boy (Darling Boy) - Double Fantasy Album",
      year: "1980"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle"
    },
    {
      quote: "Whoever is happy will make others happy too.",
      author: "Anne Frank",
      citation: "The Diary of a young girl",
      year: "1947"
    }, 
    {
      quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "You will face many defeats in life, but never let yourself be defeated. ",
      author: "Maya Angelou",
      tags: "<i>(Inspirational wisdom)</i>"
    },
    {
      quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      author: "Helen Keller"
    },
    {
      quote: "It is better to be hated for what you are than to be loved for what you are not.",
      author: "Andre Gide"
    },
    {
      quote: "I think, therefore I am. - René Descartes",
      author: "René Descartes",
      citation: "Discourse on the method",
      year: "1637"
    },
    {
      quote: "To be, or not to be, that is the question.",
      author: "William Shakespeare",
      citation: "Hamlet",
      year: "1600"
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      author: "Albert Einstein"
    },
    {
      quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
      author: "Edmund Burke"
    }
];


/* 
The getRandomQuote() function: 

# Takes no input - Called by printQuote()
# Returns Object

  1. Generate a random number using Math.random and the length of the quotes array.
  2. Use the random number to then return the nth element from the quotes array.

*/


function getRandomQuote(){
    let random_number = Math.floor(Math.random()* quotes.length);
    return quotes[random_number];
}


/*
The printQuote() function: 

# No Input parameters - Called by event Listener. 

1. Call getRandomQuote() and set the returned object to variable, quoteObject.
2. Create a template literal to display our quote. Check if returned object, 
has citation or year property. If present, append these to the string. 
3. Once the two conditional if statements are evaluated, append </p> to end of htmlString.
4. Use document.getElementById and .innerHTML method to assign the new HTML string to quote-box div. 
*/


function printQuote() {

    let quoteObject = getRandomQuote();
    let htmlString = `<p class="quote">${quoteObject.quote}</p>
                      <p class="source">${quoteObject.author}`

    if ( quoteObject.citation ) {
      htmlString += `<span class="citation">${quoteObject.citation}</span>`;
    }
    if ( quoteObject.year ) {
      htmlString += `<span class="year">${quoteObject.year}</span>`;
    }
    if ( quoteObject.tags ) {
      htmlString += `<span class="year">${quoteObject.tags}</span>`
    }

    htmlString += "</p>";
    document.getElementById('quote-box').innerHTML = htmlString;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);