// Object to map days of the week to image paths
const dailyQuotes = [
  // '0
  {
    quote: `“You don’t have to be Great to Start, \n but you have to Start to be Great.”`,
    subtext: ``,
    author: "— ZiG Ziglar",
  },

  // '1
  {
    quote: `“Im going to make \n The rest of my life, \n The best of my life.”`,
    // subtext: ``,
    author: "— Unknown",
    subtext: ``,
    author: "",
  },

  // '2
  {
    quote: `“Every day is a new beginning, \n but there’s something especially magical about January.”`,
    subtext: ``,
    author: "",
  },

  // '3
  {
    quote: `“To let yourself become happy again, \n can be the biggest comeback.”`,
    subtext: ``,
    author: "",
  },

  // '4
  {
    quote: `“The most important message you make \n is to be in a good mood.”`,
    subtext: ``,
    author: "— Voltaire",
  },

  // '5
  {
    quote: `“Don’t wait for \n things to get \n easier, simpler or better. \n
        Life will always \n be complicated. \n
        Learn to be happy \n right now. \n Otherwise you'll \n run out of time”`,
    subtext: ``,
    author: "",
  },

  // '6
  {
    quote: `“If I cannot do \n Great things, I can \n do Small things \n in a Great way.”`,
    subtext: ``,
    author: "— Martin Luther King Jr.",
  },

  // '7
  {
    quote: `“Action may not bring happiness, \n but there is no happiness without action.”`,
    subtext: ``,
    author: "— William James",
  },

  // '8
  {
    quote: `“Peace begins with a smile." :)`,
    subtext: ``,
    author: "— Mother Teresa",
  },

  // '9
  {
    quote: `“You are allowed to be both \n a masterpiece and a work in progress \n simultaneously.”`,
    subtext: ``,
    author: "— Sophia Bush",
  },

  // '10
  {
    quote: `“Your life is your message to the world. \n Make sure it's inspiring.”`,
    subtext: ``,
    author: "",
  },

  // '11
  {
    quote: `“Small steps every day \n lead to big changes over time.”`,
    subtext: ``,
    author: "",
  },

  // '12
  {
    quote: `“The only limit to our realization of tomorrow \n is our doubts of today.”`,
    subtext: ``,
    author: "— Franklin D. Roosevelt",
  },

  // '13
  {
    quote: `“You are never too old \n to set another goal \n or to dream a new dream.”`,
    subtext: ``,
    author: "— C.S. Lewis",
  },

  // '14
  {
    quote: `“You don’t have to move mountains. \n Just take the next small step.”`,
    subtext: ``,
    author: "",
  },

  // '15
  {
    quote: `“Joy is not in things; \n it is in us.”`,
    subtext: ``,
    author: "— Richard Wagner",
  },

  // '16
  {
    quote: `“Be the reason someone believes \n in the goodness of people.”`,
    subtext: ``,
    author: "",
  },

  // '17
  {
    quote: `“You are capable of amazing things. \n Don’t let doubt steal your spark.”`,
    subtext: ``,
    author: "",
  },

  // '18
  {
    quote: `“Success is not final, \n failure is not fatal: \n It is the courage to continue that counts.”`,
    subtext: ``,
    author: "— Winston Churchill",
  },

  // '19
  {
    quote: `“Let your smile change the world, \n but don’t let the world change your smile.”`,
    subtext: ``,
    author: "",
  },

  // '20
  {
    quote: `“One way to predict the future \n is to affect it.”`,
    subtext: ``,
    author: "",
  },

  // '21
  {
    quote: `“You are stronger than you think, \n braver than you believe, \n and more capable than you ever imagined.”`,
    subtext: ``,
    author: "",
  },

  // '22
  {
    quote: `“Do something today \n that your future self will thank you for.”`,
    subtext: ``,
    author: "",
  },

  // '23
  {
    quote: `“The sun himself is weak \n when he first rises, \n and gathers strength and courage \n as the day gets on.”`,
    subtext: ``,
    author: "— Charles Dickens",
  },

  // '24
  {
    quote: `“how to stop time: \n - Kiss \n
        how to travel in time: \n - Read \n
        how to escape time: \n - Music \n
        how to feel time: \n - Write \n
        how to release time: \n - Breathe”`,
    subtext: ``,
    author: "— Matt Haig",
  },

  // '25
  {
    quote: `“Don’t be pushed around by the fears in your mind. \n Be led by the dreams in your heart.”`,
    subtext: ``,
    author: "— Roy T. Bennett",
  },

  // '26
  {
    quote: `“You don’t need permission \n to live a big, bold, beautiful life.”`,
    subtext: ``,
    author: "",
  },

  // '27
  {
    quote: `“Act as if what you do makes a difference. \n It does.”`,
    subtext: ``,
    author: "— William James",
  },

  // '28
  {
    quote: `“Less Force. More Flow.”`,
    subtext: ``,
    author: "",
  },

  // '29
  {
    quote: `“Flow is hard to achieve without effort. \n Flow is not 'wasting time.”`,
    subtext: ``,
    author: "— Mihaly Csikszentmihalyi",
  },

  // '30
  {
    quote: `“What you see and what you hear depends a great deal \n on where you are standing. \n It also depends on what sort of person you are.”`,
    subtext: ``,
    author: "— C.S. Lewis",
  },

  // '31
  {
    quote: `“God whispers to us in our pleasures, speaks in our conscience, \n
        but shouts in our pains: it is His megaphone to rouse a deaf world.”`,
    subtext: ``,
    author: "— C.S. Lewis",
  },

  // '32
  {
    quote: `“To love at all is to be vulnerable. \n Love anything and your heart will be wrung and possibly broken.”`,
    subtext: ``,
    author: "— C.S. Lewis",
  },

  // '33
  {
    quote: `“In the heart of February, \n love is the warmth that defrosts even the coldest days.”`,
    subtext: ``,
    author: "",
  },

  // '34
  {
    quote: `“The task of the modern educator is not to cut down jungles, \n but to irrigate deserts.”`,
    subtext: ``,
    author: "— C.S. Lewis",
  },

  // '35
  {
    quote: `“Sometimes an obstacle to action, \n can be a trigger to success.”`,
    subtext: ``,
    author: "",
  },

  // '36
  {
    quote: `“You have power over your mind—not outside events. \n Realize this, and you will find strength.”`,
    subtext: ``,
    author: "— Marcus Aurelius",
  },

  // '37
  {
    quote: `“Waste no more time arguing what a good man should be. \n Be one.”`,
    subtext: ``,
    author: "— Marcus Aurelius",
  },

  // '38
  {
    quote: `“If it is not right, do not do it; \n if it is not true, do not say it.”`,
    subtext: ``,
    author: "— Marcus Aurelius",
  },

  // '39
  {
    quote: `“We suffer more often in imagination \n than in reality.”`,
    subtext: ``,
    author: "— Seneca",
  },

  // '40
  {
    quote: `“It is not that we have a short time to live, \n but that we waste much of it.”`,
    subtext: ``,
    author: "— Seneca",
  },

  // '41
  {
    quote: `“Difficulties strengthen the mind, \n as labor does the body.”`,
    subtext: ``,
    author: "— Seneca",
  },

  // '42
  {
    quote: `“No man is more unhappy than he who never faces adversity; \n for he is not permitted to prove himself.”`,
    subtext: ``,
    author: "— Seneca",
  },

  // '43
  {
    quote: `“Do to others what you would have them do to you.”`,
    subtext: ``,
    author: "— Jesus",
  },

  // '44
  {
    quote: `“Circumstances don’t make the man; \n they only reveal him to himself.”`,
    subtext: ``,
    author: "— Epictetus",
  },

  // '45
  {
    quote: `“First say to yourself what you would be; \n and then do what you have to do.”`,
    subtext: ``,
    author: "— Epictetus",
  },

  // '46
  {
    quote: `“How long are you going to wait \n before you demand the best for yourself?”`,
    subtext: ``,
    author: "— Epictetus",
  },

  // '47
  {
    quote: `“The journey of a thousand miles \n begins with a single step.”`,
    subtext: ``,
    author: "— Lao Tzu",
  },

  // '48
  {
    quote: `“Nature does not hurry, \n yet everything is accomplished.”`,
    subtext: ``,
    author: "— Lao Tzu",
  },

  // '49
  {
    quote: `“Love your neighbour as yourself.”`,
    subtext: ``,
    author: "— Jesus",
  },

  // '50
  {
    quote: `“Knowing others is intelligence; \n knowing yourself is true wisdom.”`,
    subtext: ``,
    author: "— Lao Tzu",
  },

  // '51
  {
    quote: `“Love your enemies and pray for those who persecute you.”`,
    subtext: ``,
    author: "— Jesus",
  },

  // '52
  {
    quote: `“Our greatest glory is not in never falling, \n but in rising every time we fall.”`,
    subtext: ``,
    author: "— Confucius",
  },

  // '53
  {
    quote: `“The man who moves a mountain \n begins by carrying away small stones.”`,
    subtext: ``,
    author: "— Confucius",
  },

  // '54
  {
    quote: `“When we see men of a contrary character, \n we should turn inwards and examine ourselves.”`,
    subtext: ``,
    author: "— Confucius",
  },

  // '55
  {
    quote: `“Blessed are the merciful, for they will be shown mercy.”`,
    subtext: ``,
    author: "— Jesus",
  },

  // '56
  {
    quote: `“The truth will set you free.”`,
    subtext: ``,
    author: "— Jesus",
  },

  // '57
  {
    quote: `“Do not judge, or you too will be judged.”`,
    subtext: ``,
    author: "— Jesus",
  },

  // '58
  {
    quote: `“Holding on to anger is like grasping a hot coal \n with the intent of throwing it; you are the one who gets burned.”`,
    subtext: ``,
    author: "— Buddha",
  },

  // '59
  {
    quote: `“The unexamined life \n is not worth living.”`,
    subtext: ``,
    author: "— Socrates",
  },

  // '60
  {
    quote: `“Be kind, for everyone you meet \n is fighting a hard battle.”`,
    subtext: ``,
    author: "— Socrates",
  },

  // '61
  {
    quote: `“He who is not a good servant \n will not be a good master.”`,
    subtext: ``,
    author: "— Plato",
  },

  // '62
  {
    quote: `“March comes in like a lion and goes out like a lamb.”`,
    subtext: ``,
    author: "",
  },

  // '63
  {
    quote: `“We are what we repeatedly do. \n Excellence, then, is not an act, but a habit.”`,
    subtext: ``,
    author: "— Aristotle",
  },

  // '64
  {
    quote: `“Knowing yourself is the beginning of all wisdom.”`,
    subtext: ``,
    author: "— Aristotle",
  },

  // '65
  {
    quote: `“Where your treasure is, there your heart will be also.”`,
    subtext: ``,
    author: "— Jesus",
  },

  // '66
  {
    quote: `“Well begun is half done.”`,
    subtext: ``,
    author: "— Aristotle",
  },

  // '67
  {
    quote: `“If you judge people, \n you have no time to love them.”`,
    subtext: ``,
    author: "— Mother Teresa",
  },

  // '68
  {
    quote: `“In the midst of chaos, \n there is also opportunity.”`,
    subtext: ``,
    author: "— Sun Tzu",
  },

  // '69
  {
    quote: `“All we have to decide is what to do with the time that is given us.”`,
    subtext: ``,
    author: "— J.R.R. Tolkien",
  },

  // '70
  {
    quote: `“You've gotta dance like there's nobody watching, \n Love like you'll never be hurt, \n Sing like there's nobody listening, \n And live like it's heaven on earth.”`,
    subtext: ``,
    author: "— William W. Purkey",
  },

  // '71
  {
    quote: `“You know you're in love when you can't fall asleep \n
        because reality is finally better than your dreams.”`,
    subtext: ``,
    author: "— Dr. Seuss",
  },

  // '72
  {
    quote: `“Be the change that you wish to see in the world.”`,
    subtext: ``,
    author: "— Mahatma Gandhi",
  },

  // '73
  {
    quote: `“If you want to know what a man's like, \n take a good look at how he treats his inferiors, \n not his equals.”`,
    subtext: ``,
    author: "— J.K. Rowling",
  },

  // '74
  {
    quote: `“What you get by achieving your goals \n is not as important as what you become by achieving your goals.”`,
    subtext: ``,
    author: "— Henry David Thoreau",
  },

  // '75
  {
    quote: `“Nothing great was ever achieved \n without enthusiasm.”`,
    subtext: ``,
    author: "— Ralph Waldo Emerson",
  },

  // '76
  {
    quote: `“To be yourself in a world that is constantly trying to make you something else \n is the greatest accomplishment.”`,
    subtext: ``,
    author: "— Ralph Waldo Emerson",
  },

  // '77
  {
    quote: `“Do not always go where the path may lead, \n go, at times, where there is no path and leave a trail.”`,
    subtext: ``,
    author: "",
  },

  // '78
  {
    quote: `“When fighting over things, Big or Small, \n Try to be the Bigger person.”`,
    subtext: ``,
    author: "",
  },

  // '79
  {
    quote: `“Keep away from those who try to belittle your ambitions. \n Small people always do that.”`,
    subtext: ``,
    author: "— Mark Twain",
  },

  // '80
  {
    quote: `“Courage is resistance to fear, \n mastery of fear, not absence of it.”`,
    subtext: ``,
    author: "— Mark Twain",
  },

  // '81
  {
    quote: `“The secret of getting ahead \n is getting started.”`,
    subtext: ``,
    author: "— Mark Twain",
  },

  // '82
  {
    quote: `“Kindness is a language which the deaf can hear \n and the blind can see.”`,
    subtext: ``,
    author: "— Mark Twain",
  },

  // '83
  {
    quote: `“There is no charm equal to tenderness of heart.”`,
    subtext: ``,
    author: "— Jane Austen",
  },

  // '84
  {
    quote: `“Think only of the past as its remembrance gives you pleasure.”`,
    subtext: ``,
    author: "— Jane Austen",
  },

  // '85
  {
    quote: `“We are such stuff as dreams are made on, \n and our little life is rounded with a sleep.”`,
    subtext: ``,
    author: "— William Shakespeare",
  },

  // '86
  {
    quote: `“You are the CEO in your own life”`,
    subtext: ``,
    author: "— Torkild Sköld",
  },

  // '87
  {
    quote: `“It always seems impossible until it’s done.”`,
    subtext: ``,
    author: "— Nelson Mandela",
  },

  // '88
  {
    quote: `“Some are born great, some achieve greatness, \n and some have greatness thrust upon them.”`,
    subtext: ``,
    author: "— William Shakespeare",
  },

  // '89
  {
    quote: `“He who has a why to live \n can bear almost any how.”`,
    subtext: ``,
    author: "— Friedrich Nietzsche",
  },

  // '90
  {
    quote: `“Education is the most powerful weapon which you can use to change the world.”`,
    subtext: ``,
    author: "— Nelson Mandela",
  },

  // '91
  {
    quote: `“The higher we soar, \n the smaller we appear to those who cannot fly.”`,
    subtext: ``,
    author: "— Friedrich Nietzsche",
  },

  // '92
  {
    quote: `“That which does not kill us \n makes us stronger.”`,
    subtext: ``,
    author: "— Friedrich Nietzsche",
  },

  // '93
  {
    quote: `“April is a rainbow month of sudden springtime showers, \n
        bright with golden daffodils \n and lots of pretty flowers”`,
    subtext: ``,
    author: "",
  },

  // '94
  {
    quote: `“Patience is the companion of wisdom.”`,
    subtext: ``,
    author: "— Augustine of Hippo",
  },

  // '95
  {
    quote: `“Hope has two beautiful daughters: Anger and Courage. \n
        Anger at the way things are, and Courage \n to see that they do not remain as they are.”`,
    subtext: ``,
    author: "— Augustine of Hippo",
  },

  // '96
  {
    quote: `“He who conquers himself \n is the mightiest warrior.”`,
    subtext: ``,
    author: "— Confucius",
  },

  // '97
  {
    quote: `“Do what you can, with what you have, \n where you are.”`,
    subtext: ``,
    author: "— Theodore Roosevelt",
  },

  // '98
  {
    quote: `“Believe you can \n and you’re halfway there.”`,
    subtext: ``,
    author: "— Theodore Roosevelt",
  },

  // '99
  {
    quote: `“It is hard to fail, \n but it is worse never to have tried to succeed.”`,
    subtext: ``,
    author: "— Theodore Roosevelt",
  },

  // '100
  {
    quote: `“Success is not final, failure is not fatal: \n it is the courage to continue that counts.”`,
    subtext: ``,
    author: "— Winston Churchill",
  },

  // '101
  {
    quote: `“Kites rise highest against the wind— \n not with it.”`,
    subtext: ``,
    author: "— Winston Churchill",
  },

  // '102
  {
    quote: `“A pessimist sees the difficulty in every opportunity; \n an optimist sees the opportunity in every difficulty.”`,
    subtext: ``,
    author: "— Winston Churchill",
  },

  // '103
  {
    quote: `“Don’t walk in front of me… I may not follow \n Don’t walk behind me… I may not lead \n Walk beside me… just be my friend”`,
    subtext: ``,
    author: "— Albert Camus",
  },

  // '104
  {
    quote: `“The best way out \n is always through.”`,
    subtext: ``,
    author: "— Robert Frost",
  },

  // '105
  {
    quote: `“Two roads diverged in a wood, and I— \n I took the one less traveled by.”`,
    subtext: ``,
    author: "— Robert Frost",
  },

  // '106
  {
    quote: `“If you are going through hell, \n keep going.”`,
    subtext: ``,
    author: "— Winston Churchill",
  },

  // '107
  {
    quote: `“Fortune favors the bold.”`,
    subtext: ``,
    author: "— Virgil",
  },

  // '108
  {
    quote: `“The only limit to our realization of tomorrow \n is our doubts of today.”`,
    subtext: ``,
    author: "— Franklin D. Roosevelt",
  },

  // '109
  {
    quote: `“Energy and persistence \n conquer all things.”`,
    subtext: ``,
    author: "— Benjamin Franklin",
  },

  // '110
  {
    quote: `“Well done \n is better than well said.”`,
    subtext: ``,
    author: "— Benjamin Franklin",
  },

  // '111
  {
    quote: `“Either write something worth reading \n or do something worth writing.”`,
    subtext: ``,
    author: "— Benjamin Franklin",
  },

  // '112
  {
    quote: `“Genius is one percent inspiration \n and ninety-nine percent perspiration.”`,
    subtext: ``,
    author: "— Thomas Edison",
  },

  // '113
  {
    quote: `“I have not failed. \n I’ve just found 10,000 ways that won’t work.”`,
    subtext: ``,
    author: "— Thomas Edison",
  },

  // '114
  {
    quote: `“The only way to have a friend \n is to be one.”`,
    subtext: ``,
    author: "— Ralph Waldo Emerson",
  },

  // '115
  {
    quote: `“The measure of who we are \n is what we do with what we have.”`,
    subtext: ``,
    author: "— Vince Lombardi",
  },

  // '116
  {
    quote: `“Perseverance is not a long race; \n it is many short races one after another.”`,
    subtext: ``,
    author: "— Walter Elliot",
  },

  // '117
  {
    quote: `“All we have to decide is what to do \n with the time that is given us.”`,
    subtext: ``,
    author: "— J. R. R. Tolkien",
  },

  // '118
  {
    quote: `“Not all those who wander \n are lost.”`,
    subtext: ``,
    author: "— J. R. R. Tolkien",
  },

  // '119
  {
    quote: `“A friend is someone who knows all \n about you and still loves you.”`,
    subtext: ``,
    author: "— Elbert Hubbard",
  },

  // '120
  {
    quote: `“We are repeatedly what we do. \n Choose well.”`,
    subtext: ``,
    author: "— Anonymous",
  },

  // '121
  {
    quote: `“When you arise in the morning \n think of what a privilege it is to be alive, \n to think, to enjoy, to love.”`,
    subtext: ``,
    author: "— Marcus Aurelius",
  },

  // '122
  {
    quote: `“If you want to improve, \n be content to be thought foolish and stupid.”`,
    subtext: ``,
    author: "— Epictetus",
  },

  // '123
  {
    quote: `“And all the world is glad with May.”`,
    subtext: ``,
    author: "— John Burroughs",
  },

  // '124
  {
    quote: `“Darkness cannot drive out darkness: only light can do that. \n
        Hate cannot drive out hate: only love can do that.”`,
    subtext: ``,
    author: "— Martin Luther King Jr.",
  },

  // '125
  {
    quote: `“He who is brave is free.”`,
    subtext: ``,
    author: "— Seneca",
  },

  // '126
  {
    quote: `“Be tolerant with others and strict with yourself.”`,
    subtext: ``,
    author: "— Marcus Aurelius",
  },

  // '127
  {
    quote: `“The soul becomes dyed \n with the color of its thoughts.”`,
    subtext: ``,
    author: "— Marcus Aurelius",
  },

  // '128
  {
    quote: `“Live as if you were to die tomorrow. \n Learn as if you were to live forever.”`,
    subtext: ``,
    author: "— Mahatma Gandhi",
  },

  // '129
  {
    quote: `“If you are neutral in situations of injustice, \n you have chosen the side of the oppressor”`,
    subtext: ``,
    author: "— Desmond Tutu",
  },

  // '130
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    subtext: ``,
    author: "— Oscar Wilde",
  },

  // '131
  {
    quote: `“To live is the rarest thing in the world. \n Most people exist, that is all.”`,
    subtext: ``,
    author: "— Oscar Wilde",
  },

  // '132
  {
    quote: `“What we achieve inwardly \n can change outer reality.”`,
    subtext: ``,
    author: "",
  },

  // '133
  {
    quote: `“We must be where Jesus would be, \n this one who was vilified \n for being the friend of sinners”`,
    subtext: ``,
    author: "— Desmond Tutu",
  },

  // '134
  {
    quote: `“Yesterday I was clever, \n so I wanted to change the world. \n
        Today I am wise, so I am changing myself.”`,
    subtext: ``,
    author: "— Rumi",
  },

  // '135
  {
    quote: `“Right is right, \n even if no one is doing it.”`,
    subtext: ``,
    author: "— Augustine of Hippo",
  },

  // '136
  {
    quote: `“The beginning is the most important part of the work.”`,
    subtext: ``,
    author: "— Plato",
  },

  // '137
  {
    quote: `“You can make anything by writing.”`,
    subtext: ``,
    author: "— C.S. Lewis",
  },

  // '138
  {
    quote: `“Keep in mind that you can:\n - start late\n - start over\n - be unsure\n - act different\n - try and fail\n And still succeed."\n`,
    subtext: ``,
    author: "— Jerry Schlichting (rephrased)",
  },

  // '139
  {
    quote: `“Luck is what happens \n when preparation meets opportunity.”`,
    subtext: ``,
    author: "— Seneca",
  },

  // '140
  {
    quote: `“There are only two ways to live your life. \n
        One is as though nothing is a miracle. \n The other is as though everything is a miracle.”`,
    subtext: ``,
    author: "— Albert Einstein",
  },

  // '141
  {
    quote: `“The future depends on what you do today.”`,
    subtext: ``,
    author: "— Mahatma Gandhi",
  },

  // '142
  {
    quote: `“In a gentle way, you can shake the world.”`,
    subtext: ``,
    author: "— Mahatma Gandhi",
  },

  // '143
  {
    quote: `“If you can't explain it to a six year old, \n you don’t understand it yourself.”`,
    subtext: ``,
    author: "— Albert Einstein",
  },

  // '144
  {
    quote: `“Faith is taking the first step \n even when you don’t see the whole staircase.”`,
    subtext: ``,
    author: "— Martin Luther King Jr.",
  },

  // '145
  {
    quote: `“The truth is, everyone is going to hurt you. \n You just got to find the ones worth suffering for.”`,
    subtext: ``,
    author: "— Bob Marley",
  },

  // '146
  {
    quote: `“Injustice anywhere \n is a threat to justice everywhere.”`,
    subtext: ``,
    author: "— Martin Luther King Jr.",
  },

  // '147
  {
    quote: `“Imagination is more important than knowledge. \n For knowledge is limited, \n whereas imagination embraces the entire world.”`,
    subtext: ``,
    author: "— Albert Einstein",
  },

  // '148
  {
    quote: `“Life is like riding a bicycle. \n To keep your balance you must keep moving.”`,
    subtext: ``,
    author: "— Albert Einstein",
  },

  // '149
  {
    quote: `“Try not to become a man of success, \n but rather try to become a man of value.”`,
    subtext: ``,
    author: "— Albert Einstein",
  },

  // '150
  {
    quote: `“It is never too late to be \n what you might have been.”`,
    subtext: ``,
    author: "— George Eliot",
  },

  // '151
  {
    quote: `“Be kind whenever possible. \n It is always possible.”`,
    subtext: ``,
    author: "— Dalai Lama",
  },

  // '152
  {
    quote: `“For every minute you are angry \n you lose sixty seconds of happiness.”`,
    subtext: ``,
    author: "— Ralph Waldo Emerson",
  },

  // '153
  {
    quote: `June \n “Far up in the deep blue sky, \n Great white clouds are floating by, \n All the world is dressed in green, \n Many happy birds are seen, \n Roses bright and sunshine clear, \n Show that lovely June is here.”`,
    subtext: ``,
    author: "— F.G. Sanders",
  },

  // Upload to GitHub:

  // '154
  {
    quote: `“Never Stop Exploring.”`,
    subtext: ``,
    author: "— The North Face",
  },

  // '155
  {
    quote: `“We don’t stop playing because we grow old; \n we grow old because we stop playing.”`,
    subtext: ``,
    author: "— George Bernard Shaw",
  },

  // _ _ _

  // '156
  {
    quote: `“If opportunity doesn’t knock, \n build a door.”`,
    subtext: ``,
    author: "— Milton Berle",
  },

  // '157
  {
    quote: `“Happiness often sneaks in through \n a door you didn’t know you left open.”`,
    subtext: ``,
    author: "— John Barrymore",
  },

  // '158
  {
    quote: `“Trouble knocked at the door, but, hearing laughter, hurried away.”`,
    subtext: ``,
    author: "— Benjamin Franklin",
  },

  // '159
  {
    quote: `“Opportunity does not knock, it presents itself when you beat down the door.”`,
    subtext: ``,
    author: "— Kyle Chandler",
  },

  // '160
  {
    quote: `“Keep your face always toward the sunshine— \n and shadows will fall behind you.”`,
    subtext: ``,
    author: "— Walt Whitman",
  },

  // '161
  {
    quote: `“There is no "i" in team but there is in win.”`,
    subtext: ``,
    author: "— Michael Jordan",
  },

  // '162
  {
    quote: `“Limit your ‘always’ and your ‘nevers’.”`,
    subtext: ``,
    author: "— Amy Poehler",
  },

  // '163
  {
    quote: `“Nothing is impossible. \n The word itself says ‘I’m possible!’”`,
    subtext: ``,
    author: "— Audrey Hepburn",
  },

  // '164
  {
    quote: `“Try to be a rainbow in someone’s cloud.”`,
    subtext: ``,
    author: "— Maya Angelou",
  },

  // '165
  {
    quote: `“Actions speak louder than words; \n let your words teach and your actions speak.”`,
    subtext: ``,
    author: "— St Anthony",
  },

  // '166
  {
    quote: `“What lies behind us and what lies before us \n are tiny matters compared to what lies within us.”`,
    subtext: ``,
    author: "— Ralph Waldo Emerson",
  },

  // '167
  {
    quote: `“Success is getting what you want. Happiness is wanting what you get.”`,
    subtext: ``,
    author: "— Ingrid Bergman",
  },

  // '168
  {
    quote: `“Success is not final, failure is not fatal: It is the courage to continue that counts.”`,
    subtext: ``,
    author: "— Winston Churchill",
  },

  // '169
  {
    quote: `“Courage is grace under pressure.”`,
    subtext: ``,
    author: "— Ernest Hemingway",
  },

  // '170
  {
    quote: `“Keep your eyes on the stars, and your feet on the ground.”`,
    subtext: ``,
    author: "— Theodore Roosevelt",
  },

  // '171
  {
    quote: `“The only impossible journey is the one you never begin.”`,
    subtext: ``,
    author: "— Tony Robbins",
  },

  // '172
  {
    quote: `“Turn your wounds into wisdom.”`,
    subtext: ``,
    author: "— Oprah Winfrey",
  },

  // '173
  {
    quote: `“Doubt kills more dreams than failure ever will.”`,
    subtext: ``,
    author: "— Suzy Kassem",
  },

  // '174
  {
    quote: `“The best revenge is massive success.”`,
    subtext: ``,
    author: "— Frank Sinatra",
  },

  // '175
  {
    quote: `“Life is short, and it is up to you to make it sweet.”`,
    subtext: ``,
    author: "— Sarah Louise Delany",
  },

  // '176
  {
    quote: `“You miss 100% of the shots you don’t take.”`,
    subtext: ``,
    author: "— Wayne Gretzky",
  },

  // '177
  {
    quote: `“You can’t use up creativity. The more you use, the more you have.”`,
    subtext: ``,
    author: "— Maya Angelou",
  },

  // '178
  {
    quote: `“You are enough just as you are.”`,
    subtext: ``,
    author: "— Meghan Markle",
  },

  // '179
  {
    quote: `“Do one thing every day that scares you.”`,
    subtext: ``,
    author: "— Eleanor Roosevelt",
  },

  // '180
  {
    quote: `“Opportunities don’t happen, you create them.”`,
    subtext: ``,
    author: "— Chris Grosser",
  },

  // '181
  {
    quote: `“Start where you are. \n Use what you have. \n Do what you can.”`,
    subtext: ``,
    author: "— Arthur Ashe",
  },

  // '182
  {
    quote: `“Happiness is not by chance, \n but by choice.”`,
    subtext: ``,
    author: "— Jim Rohn",
  },

  // '183
  {
    quote: `“The only way to do great work \n is to love what you do.”`,
    subtext: ``,
    author: "— Steve Jobs",
  },

  // '184 July
  {
    quote: `“In July, every day feels like a celebration to life.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '185
  {
    quote: `“Success is not about being the best. It’s about always getting better.”`,
    subtext: ``,
    author: "— Behdad Sami",
  },

  // '186
  {
    quote: `“Failure will never overtake me if my determination to succeed is strong enough.”`,
    subtext: ``,
    author: "— Og Mandino",
  },

  // '187
  {
    quote: `“Don’t let fear decide your future.”`,
    subtext: ``,
    author: "— Sheryl Sandberg",
  },

  // '188
  {
    quote: `“Motivation gets you going, but discipline keeps you growing.”`,
    subtext: ``,
    author: "— John C. Maxwell",
  },

  // '189
  {
    quote: `“Little by little, one travels far.”`,
    subtext: ``,
    author: "— J.R.R. Tolkien",
  },

  // '190
  {
    quote: `“Action is the foundational key to all success.”`,
    subtext: ``,
    author: "— Pablo Picasso",
  },

  // '191
  {
    quote: `“Quality is not an act, it is a habit.”`,
    subtext: ``,
    author: "— Aristotle",
  },

  // '192
  {
    quote: `“Opportunities are usually disguised as hard work, so most people don’t recognize them.”`,
    subtext: ``,
    author: "— Ann Landers",
  },

  // '193
  {
    quote: `“If you want to lift yourself up, lift up someone else.”`,
    subtext: ``,
    author: "— Booker T. Washington",
  },

  // '194
  {
    quote: `“Success is a journey, not a destination.”`,
    subtext: ``,
    author: "— Arthur Ashe",
  },

  // '195
  {
    quote: `“The best view comes after the hardest climb.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '196
  {
    quote: `“Success is a state of mind. If you want success, start thinking of yourself as a success.”`,
    subtext: ``,
    author: "— Joyce Brothers",
  },

  // '197
  {
    quote: `“You are capable of amazing things.”`,
    subtext: ``,
    author: "",
  },

  // '198
  {
    quote: `“Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.”`,
    subtext: ``,
    author: "— Buddha",
  },

  // '199
  {
    quote: `“In the middle of every difficulty lies opportunity.”`,
    subtext: ``,
    author: "— Albert Einstein",
  },

  // '200
  {
    quote: `“Success is not a key to happiness. Happiness is a key to success.”`,
    subtext: ``,
    author: "",
  },

  // '201
  {
    quote: `“Perhaps you are overvaluing what you don’t have and undervaluing what you do.”`,
    subtext: ``,
    author: "— Jordan B. Peterson",
  },

  // '202
  {
    quote: `“An investment in knowledge pays the best interest.”`,
    subtext: ``,
    author: "— Benjamin Franklin",
  },

  // '203
  {
    quote: `“Well done is better than well said.”`,
    subtext: ``,
    author: "— Benjamin Franklin",
  },

  // '204
  {
    quote: `“Work as hard as you possibly can on at least on thing and see what happens”`,
    subtext: ``,
    author: "— Jordan B. Peterson",
  },

  // '205
  {
    quote: `“Treat yourself like somebody you are responsible for helping.”`,
    subtext: ``,
    author: "— Jordan B. Peterson",
  },

  // '206
  {
    quote: `“Make friends with people who want the best for you”`,
    subtext: ``,
    author: "— Jordan B. Peterson",
  },

  // '207
  {
    quote: `“The future belongs to those who believe in the beauty of their dreams.”`,
    subtext: ``,
    author: "— Eleanor Roosevelt",
  },

  // '208
  {
    quote: `“Compare yourself to who you were yesterday, not to who someone else is today”`,
    subtext: ``,
    author: "— Jordan B. Peterson",
  },

  // '209
  {
    quote: `“Set your house in perfect order before your criticize the world”`,
    subtext: ``,
    author: "— Jordan B. Peterson",
  },

  // '210
  {
    quote: `“The way to get started is to quit talking and begin doing.”`,
    subtext: ``,
    author: "— Walt Disney",
  },

  // '211
  {
    quote: `“Your time is limited, so don’t waste it living someone else’s life.”`,
    subtext: ``,
    author: "— Steve Jobs",
  },

  // '212
  {
    quote: `“Pursue what is meaningful (not what is expedient)”`,
    subtext: ``,
    author: "— Jordan B. Peterson",
  },

  // '213
  {
    quote: `“Tell the truth — or at least don’t lie”`,
    subtext: ``,
    author: "— Jordan B. Peterson",
  },

  // '214
  {
    quote: `“Don’t count the days, make the days count.”`,
    subtext: ``,
    author: "— Muhammad Ali",
  },

  // '215 August
  {
    quote: `“Good things are going to happen. Welcome August!”`,
    subtext: ``,
    author: "",
  },

  // '216
  {
    quote: `“Hustle beats talent when talent doesn’t hustle.”`,
    subtext: ``,
    author: "— Ross Simmonds",
  },

  // '217
  {
    quote: `“Dream big and dare to fail.”`,
    subtext: ``,
    author: "— Norman Vaughan",
  },

  // '218
  {
    quote: `“Assume that the person you are listening to might know something you don’t”`,
    subtext: ``,
    author: "— Jordan B. Peterson",
  },

  // '219
  {
    quote: `“Hardships often prepare ordinary people for an extraordinary destiny.”`,
    subtext: ``,
    author: "— C.S. Lewis",
  },

  // '220
  {
    quote: `“Success is walking from failure to failure with no loss of enthusiasm.”`,
    subtext: ``,
    author: "— Winston Churchill",
  },

  // '221
  {
    quote: `“Believe you can and you’re halfway there.”`,
    subtext: ``,
    author: "— Brené Brown",
  },

  // '222
  {
    quote: `“Think Happy, Have Fun, Stay Happy”`,
    subtext: ``,
    author: "",
  },

  // '223
  {
    quote: `“The first 50 years of childhood are always the hardest.”`,
    subtext: ``,
    author: "",
  },

  // '224
  {
    quote: `“Don’t let the fear of losing be greater than the excitement of winning.”`,
    subtext: ``,
    author: "— Robert Kiyosaki",
  },

  // '225
  {
    quote: `“It doesn’t get easier. You just get stronger.”`,
    subtext: ``,
    author: "",
  },

  // '226
  {
    quote: `“If you cannot do great things, do small things in a great way.”`,
    subtext: ``,
    author: "— Napoleon Hill",
  },

  // '227
  {
    quote: `“Go as far as you can see; when you get there, you’ll be able to see further.”`,
    subtext: ``,
    author: "— Thomas Carlyle",
  },

  // '228
  {
    quote: `“Make someone smile everyday, but never forget that you are someone too.”`,
    subtext: ``,
    author: "",
  },

  // '229
  {
    quote: `“The four hardest things to say are: \n 1. I was wrong \n 2. Please, forgive me \n 3. I need help \n 4. Worcestershire Sauce”`,
    subtext: ``,
    author: "",
  },

  // '230
  {
    quote: `“You are never too small to make a difference”`,
    subtext: ``,
    author: "— Greta Thunberg",
  },

  // '231
  {
    quote: `“If you are not willing to risk the unusual, you will have to settle for the ordinary.”`,
    subtext: ``,
    author: "— Jim Rohn",
  },

  // '232
  {
    quote: `“Success is not in what you have, but who you are.”`,
    subtext: ``,
    author: "— Bo Bennett",
  },

  // '233
  {
    quote: `“We cannot solve problems with the kind of thinking we employed when we came up with them.”`,
    subtext: ``,
    author: "— Albert Einstein",
  },

  // '234
  {
    quote: `“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.”`,
    subtext: ``,
    author: "— Henry Ford",
  },

  // '235
  {
    quote: `“Great things never come from comfort zones.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '236
  {
    quote: `“Dream it. Wish it. Do it.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '237
  {
    quote: `“Success doesn’t just find you. You have to go out and get it.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '238
  {
    quote: `“The harder you work for something, the greater you’ll feel when you achieve it.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '239
  {
    quote: `“Dream bigger. Do bigger.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '240
  {
    quote: `“Don’t stop when you’re tired. Stop when you’re done.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '241
  {
    quote: `“Wake up with determination. Go to bed with satisfaction.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '242
  {
    quote: `“Logic will get you from A to B. Imagination will take you everywhere.”`,
    subtext: ``,
    author: "— Robin Sharma",
  },

  // '243
  {
    quote: `“Little things make big days.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '244
  {
    quote: `“It’s going to be hard, but hard does not mean impossible.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '245
  {
    quote: `“Fear is a reaction. Courage is a decision.”`,
    subtext: ``,
    author: "— Winston S. Churchill Jr.",
  },

  // '246 September
  {
    quote: `“Make it a September to remember”`,
    subtext: ``,
    author: "",
  },

  // '247
  {
    quote: `“Great things are done by a series of small things brought together.”`,
    subtext: ``,
    author: "— Vincent Van Gogh",
  },

  // '248
  {
    quote: `“Not all of us can do great things. But we can do small things with great love.”`,
    subtext: ``,
    author: "— Mother Teresa",
  },

  // '249
  {
    quote: `“Whether you think you can or think you can’t, you’re right.”`,
    subtext: ``,
    author: "— Henry Ford",
  },

  // '250
  {
    quote: `“A river cuts through rock, not because of its power, but because of its persistence.”`,
    subtext: ``,
    author: "— James N. Watkins",
  },

  // '251
  {
    quote: `“Fall seven times and stand up eight.”`,
    subtext: ``,
    author: "— Japanese Proverb",
  },

  // '252
  {
    quote: `“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us”`,
    subtext: ``,
    author: "— Helen Keller",
  },

  // '253
  {
    quote: `“The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.”`,
    subtext: ``,
    author: "— Terry Pratchett",
  },

  // '254
  {
    quote: `“Be patient, some things take time.”`,
    subtext: ``,
    author: "",
  },

  // '255
  {
    quote: `“When you feel like quitting, think about why you started.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '256
  {
    quote: `“Do your best every day!!!”`,
    subtext: ``,
    author: "",
  },

  // '257
  {
    quote: `“Do not wait for leaders; do it alone, person to person.”`,
    subtext: ``,
    author: "— Mother Teresa",
  },

  // '258
  {
    quote: `“Strength does not come from winning. Your struggles develop your strengths.”`,
    subtext: ``,
    author: "— Arnold Schwarzenegger",
  },

  // '259
  {
    quote: `“You Got This!”`,
    subtext: ``,
    author: "",
  },

  // '260
  {
    quote: `“My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time.”`,
    subtext: ``,
    author: "— Steve Jobs",
  },

  // '261
  {
    quote: `“If you can dream it, you can do it.”`,
    subtext: ``,
    author: "— Walt Disney",
  },

  // '262
  {
    quote: `“Act as though it were impossible to fail.”`,
    subtext: ``,
    author: "— Dorothea Brande",
  },

  // '263
  {
    quote: `“Live to love and you love to live”`,
    subtext: ``,
    author: "",
  },

  // '264
  {
    quote: `“Its the people with the greatest reasons who achieve the most, not the most disciplined”`,
    subtext: ``,
    author: "",
  },

  // '265
  {
    quote: `“Mindset x Action + Time = Greatness”`,
    subtext: ``,
    author: "",
  },

  // '266
  {
    quote: `“Act like you expect to get into the end zone.”`,
    subtext: ``,
    author: "— Joe Paterno",
  },

  // '267
  {
    quote: `“You just can’t beat the person who never gives up.”`,
    subtext: ``,
    author: "— Babe Ruth",
  },

  // '268
  {
    quote: `“I have learned that people will forget what \n you said, people will forget what you did, \n but people will never forget how you made them feel.”`,
    subtext: ``,
    author: "— Maya Angelou",
  },

  // '269
  {
    quote: `“Do all the good you can. By all the means \n you can. In all the ways you can. In all the \n places you can. At all the times you can. To \n all the people you can. As long as ever you can.”`,
    subtext: ``,
    author: "— John Wesley",
  },

  // '270
  {
    quote: `“It is better to fail in originality than to succeed in imitation.”`,
    subtext: ``,
    author: "— Herman Melville",
  },

  // '271
  {
    quote: `“Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.”`,
    subtext: ``,
    author: "— Helen Keller",
  },

  // '272
  {
    quote: `“You must see it and believe it before you can achieve it”`,
    subtext: ``,
    author: "",
  },

  // '273
  {
    quote: `“Keep going. Everything you need will come to you at the perfect time.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '274
  {
    quote: `“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”`,
    subtext: ``,
    author: "— Steve Jobs",
  },

  // '275
  {
    quote: `“You learn more from failure than from success. Don’t let it stop you. Failure builds character.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '276 October
  {
    quote: `“Ah, Lovely October, as you usher in the season that awakens my soul, your awesome beauty compels my spirit to soar like a leaf caught in an autumn breeze and my heart to sing like a heavenly choir.”`,
    subtext: ``,
    author: "— Peggy Toney Horton",
  },

  // '277
  {
    quote: `“The road to success and the road to failure are almost exactly the same.”`,
    subtext: ``,
    author: "— Colin R. Davis",
  },

  // '278
  {
    quote: `“Experience is a hard teacher because she gives the test first, the lesson afterward.”`,
    subtext: ``,
    author: "— Vernon Sanders Law",
  },

  // '279
  {
    quote: `“Goal setting is the secret to a compelling future.”`,
    subtext: ``,
    author: "— Tony Robbins",
  },

  // '280
  {
    quote: `“Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.”`,
    subtext: ``,
    author: "— Jamie Paolinetti",
  },

  // '281
  {
    quote: `“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.”`,
    subtext: ``,
    author: "— Mister Rogers",
  },

  // '282
  {
    quote: `“I’m a great believer in luck, and I find the harder I work, the more I have of it.”`,
    subtext: ``,
    author: "— Thomas Jefferson",
  },

  // '283
  {
    quote: `“Don’t let what you cannot do interfere with what you can do.”`,
    subtext: ``,
    author: "— John Wooden",
  },

  // '284
  {
    quote: `“Nothing in the world can take the place of persistence. \n
  Talent will not; nothing is more common than unsuccessful men with talent. \n Genius will not; unrewarded genius is almost a proverb. \n Education will not; the world is full of educated derelicts. \n
  The slogan ’Press On’ has solved \n and always will solve the problems of the human race.”`,
    subtext: ``,
    author: "— Calvin Coolidge",
  },

  // '285
  {
    quote: `“I am not a product of my circumstances. I am a product of my decisions.”`,
    subtext: ``,
    author: "— Stephen R. Covey",
  },

  // '286
  {
    quote: `“Opportunity is missed by most people because it is dressed in overalls and looks like work.”`,
    subtext: ``,
    author: "— Thomas Edison",
  },

  // '287
  {
    quote: `“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. \n
  And the only way to do great work is to love what you do. \n
  If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.”`,
    subtext: ``,
    author: "— Steve Jobs",
  },

  // '288
  {
    quote: `“One time, one meeting.”`,
    subtext: ``,
    author: "— Japanese proverb",
  },

  // '289
  {
    quote: `“Today is the first day of the rest of my life”`,
    subtext: ``,
    author: "",
  },

  // '290
  {
    quote: `“Sometimes good things fall apart so better things can fall together.”`,
    subtext: ``,
    author: "",
  },

  // '291
  {
    quote: `“Making a hundred friends is not a miracle. \n The miracle is to make a single friend who will stand by your side even when hundreds are against you.”`,
    subtext: ``,
    author: "",
  },

  // '292
  {
    quote: `“Wisdom from age is better than a tortoise's shell.”`,
    subtext: ``,
    author: "— Japanese proverb",
  },

  // '293
  {
    quote: `“Don’t look for someone who will solve all your problems; look for someone who will face them with you.”`,
    subtext: ``,
    author: "",
  },

  // '294
  {
    quote: `“Don’t be afraid to give up the good to go for the great.”`,
    subtext: ``,
    author: "— John D. Rockefeller",
  },

  // '295
  {
    quote: `“Work hard in silence, let success make the noise.”`,
    subtext: ``,
    author: "— Frank Ocean",
  },

  // '296
  {
    quote: `“Even monkeys fall from trees”`,
    subtext: ``,
    author: "— Japanese proverb",
  },

  // '297
  {
    quote: `“Whatever you are, be a good one.”`,
    subtext: ``,
    author: "— Abraham Lincoln",
  },

  // '298
  {
    quote: `“When you’re up, your friends know who you are.  When you’re down, you know who your friends are.”`,
    subtext: ``,
    author: "",
  },

  // '299
  {
    quote: `“A goal without a plan is just a wish.”`,
    subtext: ``,
    author: "— Antoine de Saint-Exupéry",
  },

  // '300
  {
    quote: `“If you want something you’ve never had, you must be willing to do something you’ve never done.”`,
    subtext: ``,
    author: "— Thomas Jefferson",
  },

  // '301
  {
    quote: `“A champion is defined not by their wins but by how they can recover when they fall.”`,
    subtext: ``,
    author: "— Serena Williams",
  },

  // '302
  {
    quote: `“I am a limited edition”`,
    subtext: ``,
    author: "",
  },

  // '303
  {
    quote: `“To be interesting – be interested.”`,
    subtext: ``,
    author: "",
  },

  // '304
  {
    quote: `“Always Do Your Best”`,
    subtext: ``,
    author: "",
  },

  // '305
  {
    quote: `“I never dreamed about success, I worked for it.”`,
    subtext: ``,
    author: "— Estée Lauder",
  },

  // '306
  {
    quote: `“Don’t watch the clock; do what it does. Keep going.”`,
    subtext: ``,
    author: "— Sam Levenson",
  },

  // '307 November
  {
    quote: `“November is the month to remind us to be thankful for the many positive things happening in our life.”`,
    subtext: ``,
    author: "",
  },

  // '308
  {
    quote: `“A year from now you may wish you had started today.”`,
    subtext: ``,
    author: "— Karen Lamb",
  },

  // '309
  {
    quote: `“Some people just need a high-five. ”`,
    subtext: `\n In the face. \n With a chair. \n
          (No, actually... they too probably \n just need some love. ♡)`,
    author: "",
  },

  // '310
  {
    quote: `“The only place where success comes before work is in the dictionary.”`,
    subtext: ``,
    author: "— Vidal Sassoon",
  },

  // '311
  {
    quote: `“I intend to live forever. so far, so good.”`,
    subtext: ``,
    author: "— Steven Wright",
  },

  // '312
  {
    quote: `“Knowledge is like underwear. It is useful to have it, but not necessary to show it off.”`,
    subtext: ``,
    author: "— Bill Murray",
  },

  // '313
  {
    quote: `“Failure is simply the opportunity to begin again, this time more intelligently.”`,
    subtext: ``,
    author: "— Henry Ford",
  },

  // '314
  {
    quote: `“Wisdom comes from experience. Experience is often a result of lack of wisdom.”`,
    subtext: ``,
    author: "— Terry Pratchett",
  },

  // '315
  {
    quote: `“I’ve failed over and over and over again in my life. And that is why I succeed.”`,
    subtext: ``,
    author: "— Michael Jordan",
  },

  // '316
  {
    quote: `“Don’t let yesterday take up too much of today.”`,
    subtext: ``,
    author: "— Will Rogers",
  },

  // '317
  {
    quote: `“Sometimes I pretend to be normal. But it gets boring. So I go back to being me.”`,
    subtext: ``,
    author: "",
  },

  // '318
  {
    quote: `“If you fell down yesterday, stand up today.”`,
    subtext: ``,
    author: "— H.G. Wells",
  },

  // '319
  {
    quote: `“I’m not crazy. I prefer the term mentally hilarious.”`,
    subtext: ``,
    author: "",
  },

  // '320
  {
    quote: `“All my life I thought air was free... Until I bought a bag of chips.”`,
    subtext: ``,
    author: "",
  },

  // '321
  {
    quote: `“People say nothing is impossible, but I do nothing every day.”`,
    subtext: ``,
    author: "— Winnie the Pooh",
  },

  // '322
  {
    quote: `“What day is it?” - Pooh \n Piglet: “It’s today.” \n “My favorite day.” - Pooh`,
    subtext: ``,
    author: "— Winnie the Pooh & Piglet",
  },

  // '323
  {
    quote: `“I can and I will. Watch me.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '324
  {
    quote: `“If you want to achieve greatness stop asking for permission.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '325
  {
    quote: `“Big Mind. Big Dreams. Big Future”`,
    subtext: ``,
    author: "",
  },

  // '326
  {
    quote: `“Don’t feel bad if someone rejects you. People usually reject and ignore expensive things because they can’t afford them.”`,
    subtext: ``,
    author: "",
  },

  // '327
  {
    quote: `“Little by little, a little becomes a lot.”`,
    subtext: ``,
    author: "— Tanzanian Proverb",
  },

  // '328
  {
    quote: `“A smile is an inexpensive way to change your looks”`,
    subtext: ``,
    author: "— Charles Gordy",
  },

  // '329
  {
    quote: `“When it rains, look for rainbows. When it’s dark, look for stars.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '330
  {
    quote: `“Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.”`,
    subtext: ``,
    author: "— Christian D. Larson",
  },

  // '331
  {
    quote: `“the heart that loves is always young”`,
    subtext: ``,
    author: "— Greek proverb",
  },

  // '332
  {
    quote: `“Success doesn’t come from what you do occasionally, it comes from what you do consistently.”`,
    subtext: ``,
    author: "— Marie Forleo",
  },

  // '333
  {
    quote: `“Be comforted, dear soul! There is always light behind the clouds.”`,
    subtext: ``,
    author: "— Louisa May Alcott",
  },

  // '334
  {
    quote: `“Be so good they can’t ignore you.”`,
    subtext: ``,
    author: "— Steve Martin",
  },

  // '335
  {
    quote: `“Hustle in silence and let your success make the noise.”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '336
  {
    quote: `“If at first you don’t succeed, then skydiving definitely isn’t for you.”`,
    subtext: ``,
    author: "— Steven Wright",
  },

  // '337 December
  {
    quote: `“December has the clarity, the simplicity, and the silence you need for the best FRESH START of your life.”`,
    subtext: ``,
    author: "— Vivian Swift",
  },
  // '338
  {
    quote: `“With the new day comes new strength \n and new thoughts.”`,
    subtext: ``,
    author: "— Eleanor Roosevelt",
  },

  // '339
  {
    quote: `7 Habits: \n 1. Be Proactive, \n 2. Begin with the End in Mind, \n 3. Put First Things First, \n 4. Think Win-Win, \n 5. Seek First to Understand, \n Then to Be Understood \n 6. Synergize, \n 7. Sharpen the Saw`,
    subtext: ``,
    author: "— Stephen Covey",
  },

  // '340
  {
    quote: `“The happiest people don’t have the best of everything; they just make the best of everything”`,
    subtext: ``,
    author: "— Unknown",
  },

  // '341
  {
    quote: `“My interst is in the future, because I am going to spend the rest of my life there.”`,
    subtext: ``,
    author: "— Charles Kettering",
  },

  // '342
  {
    quote: `“Feed your faith and your doubts will starve to death.”`,
    subtext: ``,
    author: "",
  },

  // '343
  {
    quote: `“Confidence is contagious. So is a lack of confidence.”`,
    subtext: ``,
    author: "",
  },

  // '344
  {
    quote: `“Knowing and not doing, is as not knowing at all.”`,
    subtext: ``,
    author: "",
  },

  // '345
  {
    quote: `“God’s gift to us is more talent and ability than we’ll ever hope to use in our lifetime. Our gift to God is to develop as much of that talent and ability as we can in this lifetime.”`,
    subtext: ``,
    author: "— Steve Bow",
  },

  // '346
  {
    quote: `“Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed.”`,
    subtext: ``,
    author: "— Bob Riley",
  },

  // '347
  {
    quote: `“Sometimes, it is the people no one imagines \n anything of who do the things that no one can imagine”`,
    subtext: ``,
    author: "— from The Imitation Game (movie)",
  },

  // '348
  {
    quote: `“Once you replace negative thoughts with positive ones, you'll start having positive results.”`,
    subtext: ``,
    author: "— Willie Nelson",
  },

  // '349
  {
    quote: `“Correction does much, but encouragement does more.”`,
    subtext: ``,
    author: "— Johann Wolfgang von Goethe",
  },

  // '350
  {
    quote: `“A good laugh is sunshine in the house.”`,
    subtext: ``,
    author: "— William Makepeace Thackeray",
  },

  // '351
  {
    quote: `“We generate fears while we sit. We overcome them by action.”`,
    subtext: ``,
    author: "— Dr. Henry Link",
  },

  // '352
  {
    quote: `“The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm.”`,
    subtext: ``,
    author: "— Aldous Huxley",
  },

  // '353
  {
    quote: `“Ask, and it shall be given you; seek, and you shall find.”`,
    subtext: ``,
    author: "— Jesus",
  },

  // '354
  {
    quote: `“Eighty percent of success is showing up.”`,
    subtext: ``,
    author: "— Woody Allen",
  },

  // '355
  {
    quote: `“It's a wonderful thing to be optimistic. It keeps you healthy and it keeps you resilient.”`,
    subtext: ``,
    author: "— Daniel Kahneman",
  },

  // '356
  {
    quote: `“Kids don’t care what you know until they know that you care.”`,
    subtext: ``,
    author: "",
  },

  // '357
  {
    quote: `“If you want to bring out the best in people, you must see the best in them.”`,
    subtext: ``,
    author: "— Nicky Gumbel",
  },

  // '358
  {
    quote: `“Be grateful for what you have to be thankful for instead of complaining about the little things that annoy you.”`,
    subtext: ``,
    author: "— Dale Carnegie",
  },

  // '359
  {
    quote: `“Ten people, ten colors”`,
    subtext: ``,
    author: "— Japanese proverb",
  },

  // '360
  {
    quote: `“Better late than never”`,
    subtext: ``,
    author: "— Swedish proverb",
  },

  // '361
  {
    quote: `“happiness comes at the end of hardship.”`,
    subtext: ``,
    author: "— Korean proverb",
  },

  // '362
  {
    quote: `“Stay hungry, stay foolish.”`,
    subtext: ``,
    author: "— Steve Jobs",
  },

  // '363
  {
    quote: `“All progress takes place outside the comfort zone.”`,
    subtext: ``,
    author: "— Michael John Bobak",
  },

  // '364
  {
    quote: `“And now we welcome the new year. Full of things that have never been.”`,
    subtext: ``,
    author: "— Rainer Maria Rilke",
  },
];
const dailyQuoteContainer = document.getElementById("todo-quote-container");
const dailyQuoteParagraph = document.getElementById("daily-quote");
const dailyQuoteSubtext = document.getElementById("subtext");
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
    dailyQuoteToPrint =
      dailyQuotes[getRandomDailyQuotesIndexNumber(dailyQuotesIndexMax)];
  } else {
    dailyQuoteToPrint = dailyQuotes[todayIndex];
  }

  dailyQuoteParagraph.innerText = dailyQuoteToPrint.quote;
  dailyQuoteSubtext.innerText = dailyQuoteToPrint.subtext;
  dailyQuoteAuthor.innerText = dailyQuoteToPrint.author;
}

getQuoteForToday();

function getRandomDailyQuote() {
  let randomQuoteIndexNumber =
    getRandomDailyQuotesIndexNumber(dailyQuotesIndexMax);

  dailyQuoteParagraph.innerText = dailyQuotes[randomQuoteIndexNumber].quote;
  dailyQuoteSubtext.innerText = dailyQuotes[randomQuoteIndexNumber].subtext;
  dailyQuoteAuthor.innerText = dailyQuotes[randomQuoteIndexNumber].author;
}

// Get random quote when clicking inside the quote box.
dailyQuoteContainer.addEventListener("click", function (e) {
  getRandomDailyQuote();
});
