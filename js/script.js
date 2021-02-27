/*  
Hi teacher, please review my project in Exceeds criteria, which means if I acheive 
the Meets Expectation but there are something wrong about Exceeds Expectation, please give me
a second chance to edit my code and submit again. Thanks a lot.
*/


/*
This is the database of quotes, including quote, source, citation, year and tags
*/
const quotes = [
  {
    quote: 'May the Force be with you.',
    source: 'unknown',
    citation: 'Star Wars',
    year: '1977',
    tags: 'film'
  },
  {
    quote: "There's no place like home.",
    source: 'The Wizard of Oz',
    year: '1939',
    tags: 'film'
  },
  {
    quote: "I'm the king of the world!",
    source: 'Titanic',
    year: '1997',
    tags: 'film'
  },
  {
    quote: 'The purpose of our lives is to be happy.',
    source: 'Dalai Lama',
    year: '2020',
    tags: 'life'
  },
  {
    quote: 'Life is what happens when you’re busy making other plans.',
    source: 'John Lennon',
    tags: 'life'
  },
  {
    quote: 'Get busy living or get busy dying.',
    source: 'Stephen King',
    tags: 'life'
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    source: 'Mae West',
    tags: 'life'
  },
  {
    quote: 'Get busy living or get busy dying.',
    source: 'Stephen King',
    tags: 'life'
  },
  {
    quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    source: 'Thomas A. Edison',
    tags: 'life'
  },
  {
    quote: 'If you want to live a happy life, tie it to a goal, not to people or things.',
    source: 'Albert Einstein',
    tags: 'life'
  },
  {
    quote: 'Never let the fear of striking out keep you from playing the game.',
    source: 'Babe Ruth',
    tags: 'life'
  },
  {
    quote: 'Money and success don’t change people; they merely amplify what is already there.',
    source: 'Will Smith',
    tags: 'life'
  },
  {
    quote: 'our time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
    source: 'Steve Jobs',
    tags: 'life'
  },
  {
    quote: 'Not how long, but how well you have lived is the main thing.',
    source: 'Seneca',
    tags: 'life'
  }
]

/*
getRandomQuote function create a random number based on the database length and return
a random quote from quotes database according to that number
*/
const getRandomQuote = () => {
  const num = Math.floor(Math.random() * (quotes.length))
  return quotes[num]
}

/*
printQuote use the random quote getRandomQuote returns and print every singel properties of
that quote to html page, and change the backgroundcolor when the content changes
*/
const printQuote = () => {
  const randomquote = getRandomQuote()
  let strr = `
  <p class="quote">${randomquote.quote}</p> 
  <p class="source">${randomquote.source}`

  if (randomquote.citation)
    strr += `<span class="citation" > ${randomquote.citation}</span> `
  if (randomquote.year)
    strr += `<span class="year" > ${randomquote.year}</span>`
  if (randomquote.tags)
    strr += `<span class="tags">${randomquote.tags}</span>`
  strr += `</p>`

  document.getElementById('quote-box').innerHTML = strr
  //use DOM to change the content of 'quote-box'
  document.body.style.backgroundColor = randomColor()
  //use DOM to change the backgroundcolor
}


const randomNum = () => Math.floor(Math.random() * 256)
//create random number based on rgb range(0-255)
const randomColor = () => `rgb(${randomNum()},${randomNum()},${randomNum()})`
//use the random number to create a random color

const intervalID = setInterval(printQuote, 20000)
//call printQuote function automatically once 20 seconds
//so that the content changes every 20 seconds


document.getElementById('load-quote').addEventListener("click", printQuote, false);
//use DOM to bind click button to printQuote function