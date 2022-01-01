var quotes = [
  "Don't worry about what anybody else is going to do. <br>\
  The best way to predict the future is to invent it.  <br>\
  -- Alan Kay",
  "Keep away from people who try to belittle your ambitions. <br>\
  Small people always do that, but the really great make you feel that you, too, <br>\
  can become great. <br>\
  -- Mark Twain",
  "To follow the path:<br>\
    look to the master,<br>\
    follow the master,<br>\
    walk with the master,<br>\
    see through the master,<br>\
    become the master.<br>\
-- Modern zen Poem",
  "Everything should be made as simple as possible, but no simpler.<br>\
-- Albert Einstein",
  "Everybody makes their own fun.<br> \
If you don't make it yourself, it ain't fun -- it's entertainment.<br>\
-- David Mamet (as relayed by Joss Whedon)",
  "Life moves pretty fast.<br>\
 If you don't stop and look around once in a while, you could miss it.<br>\
-- Ferris Bueller",
  "For the things we have to learn before we can do them,<br>\
   we learn by doing them.<br>\
-- Aristotle.",
  "Only bad designers blame their failings on the users.<br>\
-- Unknown",
  "If I tell you I'm good, you would probably think I'm boasting.<br>\
 If I tell you I'm no good, you know I'm lying.<br>\
-- Bruce Lee",
  "In theory, there's no difference between theory and practice.<br>\
 But in practice, there is.<br>\
-- Albert Einstein",
  "千里之行，始于足下 <br>\
-- 老子<br>\
A journey of a thousand miles must begin with a single step.<br>\
-- LaoTzu",
  "We are the sum of our behaviours;<br>\
 excellence therefore is not an act but a habit.<br>\
-- Aristotle",
  "However beautiful the strategy, you should occasionally look at the results.<br>\
-- Winston Churchill",
  "Only two things are infinite, the universe and human stupidity.<br>\
 And I'm not so sure about the former.<br>\
-- Albert Einstein",
  "The important thing is not to stop questioning.<br>\
-- Albert Einstein",
  "Whatever you can do, or dream you can, begin it.<br>\
Boldness has genius, power, and magic in it.<br>\
-- Goethe",
];

function newQuote() {
  var randomnumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomnumber];
}
