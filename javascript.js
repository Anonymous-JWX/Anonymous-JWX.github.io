var quotes = [
  "The best way to predict your future is to create it.<br>\
  -- Abraham Lincoln",
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
-- Aristotle",
  "Only bad designers blame their failings on the users.<br>\
-- Unknown",
  "If I tell you I'm good, you would probably think I'm boasting.<br>\
 If I tell you I'm no good, you know I'm lying.<br>\
-- Bruce Lee",
  "In theory, there's no difference between theory and practice.<br>\
 But in practice, there is.<br>\
-- Albert Einstein",
  "A journey of a thousand miles must begin with a single step.<br>\
-- LaoTzu<br><br>\
千里之行，始于足下 <br>\
-- 老子",
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
  "What you do not wish for yourself, do not do to others.<br>\
-- Confucius<br><br>\
己所不欲，勿施于人<br>\
-- 孔子",
  "A friend to everyone is a friend to no one.<br><br>\
广交友，无深交",
  "Practice makes perfect.<br><br>\
熟能生巧",
  "Rome wasn't built in a day.<br><br>\
冰冻三尺， 非一日之寒；<br>为山九仞，岂一日之功",
  "Two heads are better than one.<br><br>\
三个臭皮匠，胜过诸葛亮",
  "A teacher can show you the way, but the rest is up to you.<br><br>\
师傅领进门，修行在个人",
  "Determine your priorities and focus on them.<br>\
-- Eileen McDargh",
  "The time is always right to do what is right.<br>\
-- Martin Luther King Jr.",
  "Strive for greatness.<br>\
-- Lebron James",
  "Happiness depends upon ourselves.<br>\
-- Aristotle",
  "May your choinces reflect your hopes , not your fears.<br>\
-- Nelson Mandela",
  "Some people have sugar in their lips but venoms in their hearts.",
  "If you want to live a happy life, tie it to a goal, not to people or things.<br>\
-- Albert Einstein",
  "I like criticism. It makes you strong.<br>\
-- Lebron James",
  "Watch your thoughts for they become words.<br>\
Watch your words for they become actions.<br>\
Watch your actions for they become habits.<br>\
Watch your habits for they become character.<br>\
Watch your character for it becomes your destiny.",
  "Identity is a prison you can never escape,<br>\
but the way to redeem your past is not to run from it,<br>\
but to try to understand it, and use it as a foundation to grow.<br>\
-- Jay-Z",
];

function newQuote() {
  var randomnumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomnumber];
}
