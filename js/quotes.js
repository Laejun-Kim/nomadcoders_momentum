const quotes = [
  {
    quote: "Success is not the destination; it's the journey.",
    author: "Ava Smith",
  },
  {
    quote: "In the midst of adversity, greatness emerges.",
    author: "Ethan Johnson",
  },
  {
    quote: "The only limit to your potential is your own imagination.",
    author: "Lily Williams",
  },
  {
    quote: "Every mistake is a stepping stone to wisdom. ",
    author: "Oliver Davis",
  },
  {
    quote:
      "Kindness is a language that the deaf can hear and the blind can see. ",
    author: "Mia Anderson",
  },
  {
    quote: "Hard work beats talent when talent doesn't work hard.",
    author: "Noah Wilson",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Sophia Martin",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Jackson Turner",
  },
  {
    quote: "Challenges are opportunities in disguise.",
    author: " Emily Clark",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
    author: "Benjamin Parker",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
