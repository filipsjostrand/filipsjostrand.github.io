// Object to map days of the week to image paths
const dailyQuotes = [

  // '0
  {
    quote:
        `“You don't have to be Great to Start, \n but you have to Start to be Great.”`,
        author: "— ZiG Ziglar",
  },

  // '1

  {
    quote:
        `“Im going to make \n The rest of my life, \n The best of my life.”`,
        author: "",
  },

  // '2
  {
    quote:
        `“Every day is a new beginning, \n but there’s something especially magical about January.”`,
        author: "",
  },

  // '3
  {
    quote:
        `“To let yourself become happy again, \n can be the biggest comeback.”`,
        author: "",
  },

  // '4
  {
    quote:
        `“The most important message you make \n is to be in a good mood.”`,
        author: "— Voltaire",
  },

  // '5
  {
    quote:
        `“Don't wait for \n things to get \n easier, simpler or better. \n
        Life will always \n be complicated. \n
        Learn to be happy \n right now. \n Otherwise you'll \n run out of time”`,
        author: "",
  },

  // '6
  {
    quote:
        `“If I cannot do \n Great things, I can \n do Small things \n in a Great way.”`,
        author: "— Martin Luther King Jr.",
  },

  // '7
  {
    quote:
        `“Happiness is not something ready made. \n It comes from your own actions.”`,
        author: "— Dalai Lama",
  },

  // '8
  {
    quote:
        `“Peace begins with a smile." :)`,
        author: "— Mother Teresa",
  },

  // '9
  {
    quote:
        `“You are allowed to be both \n a masterpiece and a work in progress \n simultaneously.”`,
        author: "— Sophia Bush",
  },

  // '10
  {
    quote:
        `“Your life is your message to the world. \n Make sure it's inspiring.”`,
        author: "",
  },

  // '11
  {
    quote:
        `“Small steps every day \n lead to big changes over time.”`,
        author: "",
  },

  // '12
  {
    quote:
        `“The only limit to our realization of tomorrow \n is our doubts of today.”`,
        author: "— Franklin D. Roosevelt",
  },

  // '13
  {
    quote:
        `“You are never too old \n to set another goal \n or to dream a new dream.”`,
        author: "— C.S. Lewis",
  },

    // '14
  {
    quote:
        `“You don’t have to move mountains. \n Just take the next small step.”`,
        author: "",
  },

  // '15
  {
    quote:
        `“Joy is not in things; \n it is in us.”`,
        author: "— Richard Wagner",
  },

  // '16
  {
    quote:
        `“Be the reason someone believes \n in the goodness of people.”`,
        author: "",
  },

  // '17
  {
    quote:
        `“You are capable of amazing things. \n Don’t let doubt steal your spark.”`,
        author: "",
  },

  // '18
  {
    quote:
        `“Success is not final, \n failure is not fatal: \n It is the courage to continue that counts.”`,
        author: "— Winston Churchill",
  },

  // '19
  {
    quote:
        `“Let your smile change the world, \n but don’t let the world change your smile.”`,
        author: "",
  },

  // '20
  {
    quote:
        `“One way to predict the future \n is to affect it.”`,
        author: "",
  },

    // '21
  {
    quote:
        `“You are stronger than you think, \n braver than you believe, \n and more capable than you ever imagined.”`,
        author: "",
  },

  // '22
  {
    quote:
        `“Do something today \n that your future self will thank you for.”`,
        author: "",
  },

  // '23
  {
    quote:
        `“The sun himself is weak \n when he first rises, \n and gathers strength and courage \n as the day gets on.”`,
        author: "— Charles Dickens",
  },

  // '24
  {
    quote:
        `“how to stop time: \n - Kiss \n
        how to travel in time: \n - Read \n
        how to escape time: \n - Music \n
        how to feel time: \n - Write \n
        how to release time: \n - Breathe”`,
        author: "— Matt Haig",
  },

  // '25
  {
    quote:
        `“Don’t be pushed around by the fears in your mind. \n Be led by the dreams in your heart.”`,
        author: "— Roy T. Bennett",
  },

  // '26
  {
    quote:
        `“You don’t need permission \n to live a big, bold, beautiful life.”`,
        author: "",
  },

  // '27
  {
    quote:
        `“Act as if what you do makes a difference. \n It does.”`,
        author: "— William James",
  },

  // '28
  {
    quote:
        `“Less Force. More Flow.”`,
    author: "",
  },

  // '29
  {
    quote:
        `“Flow is hard to achieve without effort. \n Flow is not 'wasting time.”`,
    author: "— Mihaly Csikszentmihalyi",
  },

  // '30
  {
    quote:
        `“What you see and what you hear depends a great deal \n on where you are standing. \n It also depends on what sort of person you are.”`,
    author: "— C.S. Lewis",
  },

  // '31
  {
    quote:
        `“God whispers to us in our pleasures, speaks in our conscience, \n
        but shouts in our pains: it is His megaphone to rouse a deaf world.”`,
    author: "— C.S. Lewis",
  },

  // '32
  {
    quote:
        `“To love at all is to be vulnerable. \n Love anything and your heart will be wrung and possibly broken.”`,
    author: "— C.S. Lewis",
  },

  // '33
  {
    quote:
        `“In the heart of February, \n love is the warmth that defrosts even the coldest days.”`,
    author: "",
  },

  // '34
  {
    quote:
        `“The task of the modern educator is not to cut down jungles, \n but to irrigate deserts.”`,
    author: "— C.S. Lewis",
  },

  // '35
  {
    quote:
        `“Sometimes an obstacle to action, \n can be a trigger to success.”`,
    author: "",
  },

  // '36
  {
    quote:
        `“You have power over your mind—not outside events. \n Realize this, and you will find strength.”`,
    author: "— Marcus Aurelius",
  },

  // '37
  {
    quote:
        `“Waste no more time arguing what a good man should be. \n Be one.”`,
    author: "— Marcus Aurelius",
  },

  // '38
  {
    quote:
        `“If it is not right, do not do it; \n if it is not true, do not say it.”`,
    author: "— Marcus Aurelius",
  },

  // '39
  {
    quote:
        `“We suffer more often in imagination \n than in reality.”`,
    author: "— Seneca",
  },

  // '40
  {
    quote:
        `“It is not that we have a short time to live, \n but that we waste much of it.”`,
    author: "— Seneca",
  },

  // '41
  {
    quote:
        `“Difficulties strengthen the mind, \n as labor does the body.”`,
    author: "— Seneca",
  },

  // '42
  {
    quote:
        `“No man is more unhappy than he who never faces adversity; \n for he is not permitted to prove himself.”`,
    author: "— Seneca",
  },

  // '43
  {
    quote:
        `“Do to others what you would have them do to you.”`,
    author: "— Jesus",
  },

  // '44
  {
    quote:
        `“Circumstances don’t make the man; \n they only reveal him to himself.”`,
    author: "— Epictetus",
  },

  // '45
  {
    quote:
        `“First say to yourself what you would be; \n and then do what you have to do.”`,
    author: "— Epictetus",
  },

  // '46
  {
    quote:
        `“How long are you going to wait \n before you demand the best for yourself?”`,
    author: "— Epictetus",
  },

  // '47
  {
    quote:
        `“The journey of a thousand miles \n begins with a single step.”`,
    author: "— Lao Tzu",
  },

  // '48
  {
    quote:
        `“Nature does not hurry, \n yet everything is accomplished.”`,
    author: "— Lao Tzu",
  },

  // '49
  {
    quote:
        `“Love your neighbour as yourself.”`,
    author: "— Jesus",
  },

  // '50
  {
    quote:
        `“Knowing others is intelligence; \n knowing yourself is true wisdom.”`,
    author: "— Lao Tzu",
  },

  // '51
  {
    quote:
        `“Love your enemies and pray for those who persecute you.”`,
    author: "— Jesus",
  },

  // '52
  {
    quote:
        `“Our greatest glory is not in never falling, \n but in rising every time we fall.”`,
    author: "— Confucius",
  },

  // '53
  {
    quote:
        `“The man who moves a mountain \n begins by carrying away small stones.”`,
    author: "— Confucius",
  },

  // '54
  {
    quote:
        `“When we see men of a contrary character, \n we should turn inwards and examine ourselves.”`,
    author: "— Confucius",
  },

  // '55
  {
    quote:
        `“Blessed are the merciful, for they will be shown mercy.”`,
    author: "— Jesus",
  },

  // '56
  {
    quote:
        `“The truth will set you free.”`,
    author: "— Jesus",
  },

  // '57
  {
    quote:
        `“Do not judge, or you too will be judged.”`,
    author: "— Jesus",
  },

  // '58
  {
    quote:
        `“Holding on to anger is like grasping a hot coal \n with the intent of throwing it; you are the one who gets burned.”`,
    author: "— Buddha",
  },

  // '59
  {
    quote:
        `“The unexamined life \n is not worth living.”`,
    author: "— Socrates",
  },

  // '60
  {
    quote:
        `“Be kind, for everyone you meet \n is fighting a hard battle.”`,
    author: "— Socrates",
  },

  // '61
  {
    quote:
        `“He who is not a good servant \n will not be a good master.”`,
    author: "— Plato",
  },

  // '62
  {
    quote:
        `“March comes in like a lion and goes out like a lamb.”`,
    author: "",
  },

  // '63
  {
    quote:
        `“We are what we repeatedly do. \n Excellence, then, is not an act, but a habit.”`,
    author: "— Aristotle",
  },

  // '64
  {
    quote:
        `“Knowing yourself is the beginning of all wisdom.”`,
    author: "— Aristotle",
  },

  // '65
  {
    quote:
        `“Where your treasure is, there your heart will be also.”`,
    author: "— Jesus",
  },

  // '66
  {
    quote:
        `“Well begun is half done.”`,
    author: "— Aristotle",
  },

  // '67
  {
    quote:
        `“”`,
    author: "— ",
  },

  // '68
  {
    quote:
        `“In the midst of chaos, \n there is also opportunity.”`,
    author: "— Sun Tzu",
  },

  // '69
  {
    quote:
        `“All we have to decide is what to do with the time that is given us.”`,
    author: "— J.R.R. Tolkien",
  },

  // '70
  {
    quote:
        `“You've gotta dance like there's nobody watching, \n Love like you'll never be hurt, \n Sing like there's nobody listening, \n And live like it's heaven on earth.”`,
    author: "— William W. Purkey",
  },

  // '71
  {
    quote:
        `“You know you're in love when you can't fall asleep \n because reality is finally better than your dreams.”`,
    author: "— Dr. Seuss",
  },

  // '72
  {
    quote:
        `“Be the change that you wish to see in the world.”`,
    author: "— Mahatma Gandhi",
  },

  // '73
  {
    quote:
        `“If you want to know what a man's like, \n take a good look at how he treats his inferiors, \n not his equals.”`,
    author: "— J.K. Rowling",
  },

  // '74
  {
    quote:
        `“What you get by achieving your goals \n is not as important as what you become by achieving your goals.”`,
    author: "— Henry David Thoreau",
  },

  // '75
  {
    quote:
        `“Nothing great was ever achieved \n without enthusiasm.”`,
    author: "— Ralph Waldo Emerson",
  },

  // '76
  {
    quote:
        `“To be yourself in a world that is constantly trying to make you something else \n is the greatest accomplishment.”`,
    author: "— Ralph Waldo Emerson",
  },

  // '77
  {
    quote:
        `“Do not always go where the path may lead, \n go, at times, where there is no path and leave a trail.”`,
    author: "",
  },

  // '78
  {
    quote:
        `“When fighting over things, Big or Small, \n Try to be the Bigger person.”`,
    author: "— ",
  },

  // '79
  {
    quote:
        `“Keep away from those who try to belittle your ambitions. \n Small people always do that.”`,
    author: "— Mark Twain",
  },

  // '80
  {
    quote:
        `“Courage is resistance to fear, mastery of fear, \n not absence of it.”`,
    author: "— Mark Twain",
  },

  // '81
  {
    quote:
        `“The secret of getting ahead \n is getting started.”`,
    author: "— Mark Twain",
  },

  // '82
  {
    quote:
        `“Kindness is a language which the deaf can hear \n and the blind can see.”`,
    author: "— Mark Twain",
  },

  // '83
  {
    quote:
        `“There is no charm equal to tenderness of heart.”`,
    author: "— Jane Austen",
  },

  // '84
  {
    quote:
        `“Think only of the past as its remembrance gives you pleasure.”`,
    author: "— Jane Austen",
  },

  // '85
  {
    quote:
        `“We are such stuff as dreams are made on, \n and our little life is rounded with a sleep.”`,
    author: "— William Shakespeare",
  },

  // '86
  {
    quote:
        `“You are the CEO in your own life”`,
    author: "— Torkild Sköld",
  },

  // '87
  {
    quote:
        `“It always seems impossible until it’s done.”`,
    author: "— Nelson Mandela",
  },

  // '88
  {
    quote:
        `“Some are born great, some achieve greatness, \n and some have greatness thrust upon them.”`,
    author: "— William Shakespeare",
  },

  // '89
  {
    quote:
        `“He who has a why to live \n can bear almost any how.”`,
    author: "— Friedrich Nietzsche",
  },

  // '90
  {
    quote:
        `“Education is the most powerful weapon which you can use to change the world.”`,
    author: "— Nelson Mandela",
  },

  // '91
  {
    quote:
        `“The higher we soar, \n the smaller we appear to those who cannot fly.”`,
    author: "— Friedrich Nietzsche",
  },

  // '92
  {
    quote:
        `“That which does not kill us \n makes us stronger.”`,
    author: "— Friedrich Nietzsche",
  },

  // '93
  {
    quote:
        `“April is a rainbow month of sudden springtime showers, \n
        bright with golden daffodils \n and lots of pretty flowers”`,
    author: "",
  },

  // '94
  {
    quote:
        `“Patience is the companion of wisdom.”`,
    author: "— Augustine of Hippo",
  },

  // '95
  {
    quote:
        `“Hope has two beautiful daughters: \n Anger and Courage.”`,
    author: "— Augustine of Hippo",
  },

  // '96
  {
    quote:
        `“He who conquers himself \n is the mightiest warrior.”`,
    author: "— Confucius",
  },

  // '97
  {
    quote:
        `“Do what you can, with what you have, \n where you are.”`,
    author: "— Theodore Roosevelt",
  },

  // '98
  {
    quote:
        `“Believe you can \n and you’re halfway there.”`,
    author: "— Theodore Roosevelt",
  },

  // '99
  {
    quote:
        `“It is hard to fail, \n but it is worse never to have tried to succeed.”`,
    author: "— Theodore Roosevelt",
  },

  // '100
  {
    quote:
        `“Success is not final, failure is not fatal: \n it is the courage to continue that counts.”`,
    author: "— Winston Churchill",
  },

  // '101
  {
    quote:
        `“Kites rise highest against the wind— \n not with it.”`,
    author: "— Winston Churchill",
  },

  // '102
  {
    quote:
        `“A pessimist sees the difficulty in every opportunity; \n an optimist sees the opportunity in every difficulty.”`,
    author: "— Winston Churchill",
  },

  // '103
  {
    quote:
        `“Don’t walk in front of me… I may not follow \n Don’t walk behind me… I may not lead \n Walk beside me… just be my friend”`,
    author: "— Albert Camus",
  },

  // '104
  {
    quote:
        `“The best way out \n is always through.”`,
    author: "— Robert Frost",
  },

  // '105
  {
    quote:
        `“Two roads diverged in a wood, and I— \n I took the one less traveled by.”`,
    author: "— Robert Frost",
  },

  // '106
  {
    quote:
        `“If you are going through hell, \n keep going.”`,
    author: "— Winston Churchill",
  },

  // '107
  {
    quote:
        `“Fortune favors the bold.”`,
    author: "— Virgil",
  },

  // '108
  {
    quote:
        `“The only limit to our realization of tomorrow \n is our doubts of today.”`,
    author: "— Franklin D. Roosevelt",
  },

  // '109
  {
    quote:
        `“Energy and persistence \n conquer all things.”`,
    author: "— Benjamin Franklin",
  },

  // '110
  {
    quote:
        `“Well done \n is better than well said.”`,
    author: "— Benjamin Franklin",
  },

  // '111
  {
    quote:
        `“Either write something worth reading \n or do something worth writing.”`,
    author: "— Benjamin Franklin",
  },

  // '112
  {
    quote:
        `“Genius is one percent inspiration \n and ninety-nine percent perspiration.”`,
    author: "— Thomas Edison",
  },

  // '113
  {
    quote:
        `“I have not failed. \n I’ve just found 10,000 ways that won’t work.”`,
    author: "— Thomas Edison",
  },

  // '114
  {
    quote:
        `“The only way to have a friend \n is to be one.”`,
    author: "— Ralph Waldo Emerson",
  },

  // '115
  {
    quote:
        `“The measure of who we are \n is what we do with what we have.”`,
    author: "— Vince Lombardi",
  },

  // '116
  {
    quote:
        `“Perseverance is not a long race; \n it is many short races one after another.”`,
    author: "— Walter Elliot",
  },

  // '117
  {
    quote:
        `“All we have to decide is what to do \n with the time that is given us.”`,
    author: "— J. R. R. Tolkien",
  },

  // '118
  {
    quote:
        `“Not all those who wander \n are lost.”`,
    author: "— J. R. R. Tolkien",
  },

  // '119
  {
    quote:
        `“A friend is someone who knows all \n about you and still loves you.”`,
    author: "— Elbert Hubbard",
  },

  // '120
  {
    quote:
        `“We are repeatedly what we do. \n Choose well.”`,
    author: "— Anonymous",
  },

  // '121
  {
    quote:
        `“When you arise in the morning \n think of what a privilege it is to be alive, \n to think, to enjoy, to love.”`,
    author: "— Marcus Aurelius",
  },

  // '122
  {
    quote:
        `“If you want to improve, \n be content to be thought foolish and stupid.”`,
    author: "— Epictetus",
  },

  // '123
  {
    quote:
        `“And all the world is glad with May.”`,
    author: "— John Burroughs",
  },

  // '124
  {
    quote:
        `“Darkness cannot drive out darkness: only light can do that. \n
        Hate cannot drive out hate: only love can do that.”`,
    author: "— Martin Luther King Jr.",
  },

  // '125
  {
    quote:
        `“He who is brave is free.”`,
    author: "— Seneca",
  },

  // '126
  {
    quote:
        `“Be tolerant with others and strict with yourself.”`,
    author: "— Marcus Aurelius",
  },

  // '127
  {
    quote:
        `“The soul becomes dyed \n with the color of its thoughts.”`,
    author: "— Marcus Aurelius",
  },

  // '128
  {
    quote:
        `“Live as if you were to die tomorrow. \n Learn as if you were to live forever.”`,
    author: "— Mahatma Gandhi",
  },

  // '129
  {
    quote:
        `“If you are neutral in situations of injustice, \n you have chosen the side of the oppressor”`,
    author: "— Desmond Tutu",
  },

  // '130
  {
    quote:
        `“Be yourself; everyone else is already taken.”`,
    author: "— Oscar Wilde",
  },

  // '131
  {
    quote:
        `“To live is the rarest thing in the world. \n Most people exist, that is all.”`,
    author: "— Oscar Wilde",
  },

  // '132
  {
    quote:
        `“What we achieve inwardly \n can change outer reality.”`,
    author: "",
  },

  // '133
  {
    quote:
        `“We must be where Jesus would be, \n this one who was vilified \n for being the friend of sinners”`,
    author: "— Desmond Tutu",
  },

  // '134
  {
    quote:
        `“Yesterday I was clever, \n so I wanted to change the world. \n
        Today I am wise, so I am changing myself.”`,
    author: "— Rumi",
  },

  // '135
 {
    quote:
        `“Right is right, \n even if no one is doing it.”`,
    author: "— Augustine of Hippo",
  },

  // '136
  {
      quote:
          `“The beginning is the most important part of the work.”`,
      author: "— Plato",
    },

  // '137
  {
    quote:
        `“You can make anything by writing.”`,
    author: "— C.S. Lewis",
  },

  // '138
  {
    quote:
        `“Keep in mind that you can:\n - start late\n - start over\n - be unsure\n - act different\n - try and fail\n And still succeed."\n`,
        author: "— Jerry Schlichting (rephrased)",
  },

  // '139
  {
    quote:
        `“Luck is what happens \n when preparation meets opportunity.”`,
    author: "— Seneca",
  },

  // '140
  {
    quote:
        `“There are only two ways to live your life. \n
        One is as though nothing is a miracle. \n The other is as though everything is a miracle.”`,
    author: "— Albert Einstein",
  },

  // '141
  {
    quote:
        `“The future depends on what you do today.”`,
    author: "— Mahatma Gandhi",
  },

  // '142
  {
    quote:
        `“In a gentle way, you can shake the world.”`,
    author: "— Mahatma Gandhi",
  },

  // '143
  {
    quote:
        `“”`,
    author: "— ",
  },

  // '144
  {
    quote:
        `“Faith is taking the first step even when you don’t see the whole staircase.”`,
    author: "— Martin Luther King Jr.",
  },

  // '145
  {
    quote:
        `“”`,
    author: "— ",
  },

  // '146
  {
    quote:
        `“Injustice anywhere \n is a threat to justice everywhere.”`,
    author: "— Martin Luther King Jr.",
  },

  // '147
  {
    quote:
        `“Imagination is more important than knowledge. \n For knowledge is limited, \n whereas imagination embraces the entire world.”`,
    author: "— Albert Einstein",
  },

  // '148
  {
    quote:
        `“Life is like riding a bicycle. \n To keep your balance you must keep moving.”`,
    author: "— Albert Einstein",
  },

  // '149
  {
    quote:
        `“Try not to become a man of success, \n but rather try to become a man of value.”`,
    author: "— Albert Einstein",
  },

  // '150
  {
    quote:
        `“It is never too late to be what you might have been.”`,
    author: "— George Eliot",
  },

  // '151
  {
    quote:
        `“Be kind whenever possible. \n It is always possible.”`,
    author: "— Dalai Lama",
  },

  // '152
  {
    quote:
        `“For every minute you are angry \n you lose sixty seconds of happiness.”`,
    author: "— Ralph Waldo Emerson",
  },

  // '153
  {
    quote:
        `June \n "Far up in the deep blue sky, \n Great white clouds are floating by, \n All the world is dressed in green, \n Many happy birds are seen, \n Roses bright and sunshine clear, \n Show that lovely June is here.”`,
        author: "— F.G. Sanders",
  },

// '184 July

// '215 August

// '246 September

// '276 October

// '307 November

// '337 December
];
const dailyQuoteContainer = document.getElementById("daily-quote");
const dailyQuoteAuthor = document.getElementById("quote-author");

// Get todays day of the year (-1)
function getDayOfYearIndex(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1); // Jan 1
  const diffInMs = date - startOfYear;
  const oneDayMs = 1000 * 60 * 60 * 24;
  return Math.floor(diffInMs / oneDayMs); // Returns 0–364 (or 0–365 in leap years)
}

const dailyQuotesIndexMax = dailyQuotes.length;

// get random dailyQuotes Index number
function getRandomDailyQuotesIndexNumber(dailyQuotesIndexMax) {
  return Math.floor(Math.random() * dailyQuotesIndexMax);
}

function getQuoteForToday() {
  const todayIndex = getDayOfYearIndex();
  let dailyQuoteToPrint = dailyQuotes[0];

  if (!dailyQuotes[todayIndex]) {
    dailyQuoteToPrint = dailyQuotes[getRandomDailyQuotesIndexNumber(dailyQuotesIndexMax)];
  }

  else {
    dailyQuoteToPrint = dailyQuotes[todayIndex];
  }

  dailyQuoteContainer.innerText = dailyQuoteToPrint.quote;
  dailyQuoteAuthor.innerText = dailyQuoteToPrint.author;

}

getQuoteForToday();
