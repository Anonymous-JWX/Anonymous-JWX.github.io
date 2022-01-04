var quotes = [
  '"The best way to predict your future is to create it."<br>\
  -- Abraham Lincoln',
  '"Keep away from people who try to belittle your ambitions. <br>\
  Small people always do that, but the really great make you feel that you, too, <br>\
  can become great." <br>\
  -- Mark Twain',
  '"To follow the path:<br>\
    look to the master,<br>\
    follow the master,<br>\
    walk with the master,<br>\
    see through the master,<br>\
    become the master."<br>\
-- Modern zen Poem',
  '"Everything should be made as simple as possible, but no simpler."<br>\
-- Albert Einstein',
  "\"Everybody makes their own fun.<br> \
If you don't make it yourself, it ain't fun -- it's entertainment.\"<br>\
-- David Mamet (as relayed by Joss Whedon)",
  '"Life moves pretty fast.<br>\
 If you don\'t stop and look around once in a while, you could miss it."<br>\
-- Ferris Bueller',
  '"For the things we have to learn before we can do them,<br>\
   we learn by doing them."<br>\
-- Aristotle',
  '"Only bad designers blame their failings on the users."<br>\
-- Unknown',
  "\"If I tell you I'm good, you would probably think I'm boasting.<br>\
 If I tell you I'm no good, you know I'm lying.\"<br>\
-- Bruce Lee",
  '"In theory, there\'s no difference between theory and practice.<br>\
 But in practice, there is."<br>\
-- Albert Einstein',
  '"A journey of a thousand miles must begin with a single step."<br>\
-- LaoTzu<br><br>\
“千里之行，始于足下” <br>\
-- 老子',
  '"We are the sum of our behaviours;<br>\
 excellence therefore is not an act but a habit."<br>\
-- Aristotle',
  '"However beautiful the strategy, you should occasionally look at the results."<br>\
-- Winston Churchill',
  '"Only two things are infinite, the universe and human stupidity.<br>\
 And I\'m not so sure about the former."<br>\
-- Albert Einstein',
  '"The important thing is not to stop questioning."<br>\
-- Albert Einstein',
  '"Whatever you can do, or dream you can, begin it.<br>\
Boldness has genius, power, and magic in it."<br>\
-- Goethe',
  '"What you do not wish for yourself, do not do to others."<br>\
-- Confucius<br><br>\
“己所不欲，勿施于人”<br>\
-- 孔子',
  "A friend to all is a friend to none.<br><br>\
广交友，无深交",
  "Practice makes perfect.<br><br>\
熟能生巧",
  "Rome wasn't built in a day.<br><br>\
冰冻三尺， 非一日之寒；<br>为山九仞，岂一日之功",
  "Two heads are better than one.<br><br>\
三个臭皮匠，胜过诸葛亮",
  "A teacher can show you the way, but the rest is up to you.<br><br>\
师傅领进门，修行在个人",
  '"Determine your priorities and focus on them."<br>\
-- Eileen McDargh',
  '"The time is always right to do what is right."<br>\
-- Martin Luther King Jr.',
  '"Strive for greatness."<br>\
-- Lebron James',
  '"Happiness depends upon ourselves."<br>\
-- Aristotle',
  '"May your choices reflect your hopes , not your fears."<br>\
-- Nelson Mandela',
  "Some people have sugar in their lips but venoms in their hearts.",
  'If you want to live a happy life, tie it to a goal, not to people or things."<br>\
-- Albert Einstein',
  '"I like criticism. It makes you strong."<br>\
-- Lebron James',
  "Watch your thoughts for they become words.<br>\
Watch your words for they become actions.<br>\
Watch your actions for they become habits.<br>\
Watch your habits for they become character.<br>\
Watch your character for it becomes your destiny.",
  '"Identity is a prison you can never escape,<br>\
but the way to redeem your past is not to run from it,<br>\
but to try to understand it, and use it as a foundation to grow."<br>\
-- Jay-Z',
  '"I fear not the man who has practiced 10, 000 kicks once,<br>\
but I fear the man who has practiced one kick 10, 000 times."<br>\
-- Bruce Lee',
  '"Everybody has goals, aspirations or whatever, <br>\
and everybody has been at a point in their life where nobody believed in them."<br>\
-- Eminem',
  '"You\'ve got enemies?<br>\
Good, that means you actually stood up for something."<br>\
-- Eminem ',
  '"Love is just a word, but you bring it definition."<br>\
-- Eminem',
  "\"Trust is hard to come by.<br>\
That's why my circle is small and tight.<br>\
I'm kind of funny about making new friends\".<br>\
-- Eminem",
  '"If you\'re going through hell, keep going."<br>\
-- Winston Churchill',
  '"In three words I can sum up everything I\'ve learned about life:<br>\
<strong>It goes on.</strong>"<br>\
-- Robert Frost',
  '"Success is not final, failure is not fatal;<br>\
It is the courage to continue that counts."<br>\
-- Winston Churchill',
  "Once you've accepted your flaws, no one can use them against you.",
  "Don't count the days, make the days count.<br>\
-- Muhammad Ali",
  '"Science is what you know. Philosophy is what you don\'t know."<br>\
-- Bertrand Russell',
  '"The successful warrior is the average man, with laser-like focus."<br>\
-- Bruce Lee',
  '"The best way out is always through."<br>\
-- Robert Frost',
  '"He who angers you conquers you."',
  '"Through discipline comes freedom."<br>\
-- Aristotle',
  '"Knowing yourself is the beginning of all wisdom<br>"\
-- Aristotle',
  '"Wishing to be friends is quick work, but friendship is a slow-ripening fruit."<br>\
-- Aristotle',
  '"I count him braver who overcomes his desires than him who conquers his enemies;<br>\
for the hardest vicroty is over self."<br>\
-- Aristotle',
  '"True friedship is when two friends can walk in opposite directions,<br>\
yet remain side by side."<br>\
-- Josh Grayson',
  "A true friend accepts who you are,<br>\
but also helps you become who you should be.",
  "A good friend knows all your stories.<br>\
A best friend helped you create them.",
  "Rare as is true love,<br>\
true friendship is rarer.",
  '"Many people will walk in and out of your life,<br>\
but only true friends will leave footptints in your heart."<br>\
-- Eleanor Roosevelt',
  "A true friend is someone who sees the pain in your eyes<br>\
while everyone else believes the smile on your face.",
  "Friendship is born at that moment when one person says to another:<br>\
'What! You too? I thought I was the only one.'",
];
// 57

function newQuote() {
  var randomnumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[56];
}
