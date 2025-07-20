const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const darkToggle = document.getElementById("toggle-dark");

const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Try not to become a man of success, but rather become a man of value.",
    author: "Albert Einstein",
  },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  { text: "I can and I will. Watch me.", author: "Carrie Green" },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  {
    text: "Success is what happens after you have survived all your mistakes.",
    author: "Anora Lee",
  },
  {
    text: "Little by little, a little becomes a lot.",
    author: "Tanzanian Proverb",
  },
  { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  { text: "Stay foolish to stay sane.", author: "Maxime Lagacé" },
  { text: "When nothing goes right, go left.", author: "Unknown" },
  {
    text: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    text: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
];

function showRandomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${random.text}"`;
  authorText.textContent = `— ${random.author}`;
  twitterBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${random.text}" — ${random.author}`
  )}`;
}

newQuoteBtn.addEventListener("click", showRandomQuote);

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

// Dastlabki quote
showRandomQuote();
