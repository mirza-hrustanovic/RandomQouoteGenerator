const quotes = [
  {
    name: "Franklin D. Roosevelt",
    quote:
      "When you reach the end of your rope, tie a knot in it and hang on. ",
  },
  {
    name: "Robert Louis Stevenson",
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant. ",
  },
  {
    name: "Benjamin Franklin",
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn. ",
  },
  {
    name: " Aristotle",
    quote:
      "It is during our darkest moments that we must focus to see the light. ",
  },
  {
    name: " Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
  },
  {
    name: " Steve Jobs",
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",
  },
  {
    name: " Walt Disney",
    quote: "The way to get started is to quit talking and begin doing. ",
  },
  {
    name: " James Cameron",
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",
  },
  {
    name: " John Lennon",
    quote: "Life is what happens when you're busy making other plans. ",
  },
  {
    name: " Ralph Waldo Emerson",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail. ",
  },
];

const qouteBtn = document.querySelector("#quoteBtn");
const allQuotes = document.querySelector("#quotes");
const author = document.querySelector("#author");

qouteBtn.addEventListener("click", displayQuote);
function displayQuote() {
  let numerOfQuotes = Math.floor(Math.random() * quotes.length);
  allQuotes.innerHTML = quotes[numerOfQuotes].quote;
  author.innerHTML = quotes[numerOfQuotes].name;
}
