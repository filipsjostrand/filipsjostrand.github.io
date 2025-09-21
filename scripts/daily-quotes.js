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
    author: "",
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
    quote: `“What you see and what you hear depends \n a great deal on where you are standing. \n It also depends on what sort of person you are.”`,
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
    quote: `“The task of the modern educator is not to cut down jungles, but to irrigate deserts.”`,
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
    quote: `“Waste no more time arguing what a good man should be. Be one.”`,
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
    quote: `“If you want to know what a man's like, \n take a good look at how he treats his inferiors, not his equals.”`,
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
    quote: `“Kindness is a language which the deaf can hear and the blind can see.”`,
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
    quote: `“The higher we soar, the smaller we appear to those who cannot fly.”`,
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
    quote: `“The only limit to our realization of tomorrow is our doubts of today.”`,
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
    quote: `“Well done is better than well said.”`,
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
    quote: `“The only way to have a friend is to be one.”`,
    subtext: ``,
    author: "— Ralph Waldo Emerson",
  },

  // '115
  {
    quote: `“The measure of who we are is what we do with what we have.”`,
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
    quote: `“We are repeatedly what we do. Choose well.”`,
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
    author: "",
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
    author: "",
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
    author: "",
  },

  // '236
  {
    quote: `“Dream it. Wish it. Do it.”`,
    subtext: ``,
    author: "",
  },

  // '237
  {
    quote: `“Success doesn’t just find you. You have to go out and get it.”`,
    subtext: ``,
    author: "",
  },

  // '238
  {
    quote: `“The harder you work for something, the greater you’ll feel when you achieve it.”`,
    subtext: ``,
    author: "",
  },

  // '239
  {
    quote: `“Dream bigger. Do bigger.”`,
    subtext: ``,
    author: "",
  },

  // '240
  {
    quote: `“Don’t stop when you’re tired. Stop when you’re done.”`,
    subtext: ``,
    author: "",
  },

  // '241
  {
    quote: `“Wake up with determination. Go to bed with satisfaction.”`,
    subtext: ``,
    author: "",
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
    author: "",
  },

  // '244
  {
    quote: `“It’s going to be hard, but hard does not mean impossible.”`,
    subtext: ``,
    author: "",
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
    quote: `“When one door of happiness closes, another opens; 
    but often we look so long at the closed door that we do not see the one which has been opened for us”`,
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
    author: "",
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
    author: "",
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
    author: "",
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
    quote: `“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.”`,
    subtext: ``,
    author: "— Joe Girard",
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
    quote: `“Some people just need a high-five.”`,
    subtext: `\n In the face. \n With a chair. \n
          (No, actually... they too, probably \n need a lot of love. ♡)`,
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
    author: "",
  },

  // '324
  {
    quote: `“If you want to achieve greatness stop asking for permission.”`,
    subtext: ``,
    author: "",
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
    author: "",
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
    author: "",
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
    author: "— Stephen R. Covey",
  },

  // '340
  {
    quote: `“The happiest people don’t have the best of everything; they just make the best of everything”`,
    subtext: ``,
    author: "",
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

// Object to map days of the week to image paths (Bible quotes)
const bibleQuotes = [
  // '0
  {
    quote: {
      sv: [`“Den som är i Kristus är alltså en ny skapelse, det gamla är förbi, något nytt har kommit.”`],
      en: [`“Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!”`]
    },
    author: {
      sv: [`— 2 Korinthierbrevet 5:17`],
      en: [`— 2 Corinthians 5:17`]
    },
    image: "new creation_clive_kim_pexels.jpg",
    credit: "Clive Kim (Pexels.com)"
  },
  // '1
  {
    quote: {
      sv: [`“Han ger den trötte kraft och ökar den maktlöses styrka.”`],
      en: [`“He gives strength to the weary and increases the power of the weak.”`]
    },
    author: {
      sv: [`— Jesaja 40:29`],
      en: [`— Isaiah 40:29`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '2
  {
    quote: {
      sv: [`“När du drar ut i krig mot dina fiender och får se hästar och vagnar och ett folk större än du, skall du inte bli rädd för dem, ty Herren, din Gud, som förde dig upp ur Egyptens land, är med dig.”`],
      en: [`“When you go to war against your enemies and see horses and chariots and an army greater than yours, do not be afraid of them, because the Lord your God, who brought you up out of Egypt, will be with you.”`]
    },
    author: {
      sv: [`— 5 Mosebok 20:1`],
      en: [`— Deuteronomy 20:1`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '3
  {
    quote: {
      sv: [`“Men de som hoppas på Herren får ny kraft,\n de lyfter med vingar som örnar.\n De skyndar i väg utan att mattas,\n de färdas framåt utan att bli trötta.”`],
      en: [`“But those who hope in the Lord will \n renew their strength.\n They will soar on wings like eagles; \n they will run and not grow weary, \n they will walk and not be faint.”`]
    },
    author: {
      sv: [`— Jesaja 40:31`],
      en: [`— Isaiah 40:31`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '4
  {
    quote: {
      sv: [`“Jag vet vilka tankar jag har för er, säger Herren, nämligen fridens tankar och inte ofärdens för att ge er en framtid och ett hopp.”`],
      en: [`“For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.”`]
    },
    author: {
      sv: [`— Jeremia 29:11`],
      en: [`— Jeremiah 29:11`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '5
  {
    quote: {
      sv: [`“Ty den Ande som Gud har gett oss gör oss inte modlösa, utan är kraftens, kärlekens och självbehärskningens Ande.”`],
      en: [`“for God gave us a spirit not of fear but of power and love and self-control.”`]
    },
    author: {
      sv: [`— 2 Timotheosbrevet 1:7`],
      en: [`— 2 Timothy 1:7`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '6
  {
    quote: {
      sv: [`“Ni är ju födda på nytt, inte av en förgänglig säd, utan genom en oförgänglig, genom Guds levande ord som består.”`],
      en: [`“For you have been born again, not of perishable seed, but of imperishable, through the living and enduring word of God.”`]
    },
    author: {
      sv: [`— 1 Petrusbrevet 1:23`],
      en: [`— 1 Peter 1:23`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '7
  {
    quote: {
      sv: [`“Har jag inte befallt dig att vara stark och frimodig? Var då inte förskräckt eller förfärad, ty Herren, din Gud, är med dig vart än du går.”`],
      en: [`“Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.”`]
    },
    author: {
      sv: [`— Josua 1:9`],
      en: [`— Joshua 1:9`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '8
  {
    quote: {
      sv: [`“Du låter min lampa brinna klart. Herren, min Gud, gör mitt mörker ljust.”`],
      en: [`“You, Lord, keep my lamp burning; my God turns my darkness into light.”`]
    },
    author: {
      sv: [`— Psaltaren 18:29`],
      en: [`— Psalm 18:28`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '9
  {
    quote: {
      sv: [`“En psalm av David.

          Herren är min herde,
              mig skall intet fattas.
            Han låter mig vila på gröna ängar,
              han för mig till vatten där jag finner ro.
            Han vederkvicker min själ,
              han leder mig på rätta vägar
          för sitt namns skull.
            Om jag än vandrar i dödsskuggans dal,
          fruktar jag intet ont,
              ty du är med mig.
          Din käpp och stav, de tröstar mig.”`],
                en: [`“A psalm of David.

          The Lord is my shepherd, I lack nothing.
              He makes me lie down in green pastures,
          he leads me beside quiet waters,
              he refreshes my soul.
          He guides me along the right paths
              for his name’s sake.
          Even though I walk
              through the darkest valley,
          I will fear no evil,
              for you are with me;
          your rod and your staff,
              they comfort me.”`]
    },
    author: {
      sv: [`— Psaltaren 23:1-4`],
      en: [`— Psalm 23:1-4`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '10
  {
    quote: {
      sv: [`“Välsignad vare Herren,
          ty han har hört mina böner om nåd.
          Herren är min styrka och min sköld,
          på honom förtröstade mitt hjärta.
          Jag fick hjälp och mitt hjärta gläder sig.
          Jag vill tacka honom med min sång.”`],
      en: [`“The Lord is my strength and my shield;
          my heart trusts in him, and he helps me.
          My heart leaps for joy,
          and with my song I praise him.
          he Lord is the strength of his people,
          a fortress of salvation for his anointed one.”`]
    },
    author: {
      sv: [`— Psaltaren 28:7-8`],
      en: [`— Psalm 28:7-8`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '11
  {
    quote: {
      sv: [`“Men Gud bevisar sin kärlek till oss genom att Kristus dog i vårt ställe, medan vi ännu var syndare.”`],
      en: [`“But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.”`]
    },
    author: {
      sv: [`— Romarbrevet 5:8`],
      en: [`— Romans 5:8`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '12
  {
    quote: {
      sv: [`“Så har vi lärt känna den kärlek som Gud har till oss och tror på den. Gud är kärlek, och den som förblir i kärleken förblir i Gud och Gud i honom.”`],
      en: [`“And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them.”`]
    },
    author: {
      sv: [`— 1 Johannesbrevet 4:16`],
      en: [`— 1 John's Epistle 4:16`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '13
  {
    quote: {
      sv: [`“Genom honom finns ni i Kristus Jesus, som har blivit vår vishet från Gud, vår rättfärdighet, vår helighet och vår frihet.”`],
      en: [`“It is because of him that you are in Christ Jesus, who has become for us wisdom from God—that is, our righteousness, holiness and redemption.”`]
    },
    author: {
      sv: [`— 1 Korinthierbrevet 1:30`],
      en: [`— 1 Corinthians 1:30`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '14
  {
    quote: {
      sv: [`“Men var var ni frimodiga, låt inte modet falla, ty ert verk ska få sin lön.”`],
      en: [`“But as for you, be strong and do not give up, for your work will be rewarded.”`]
    },
    author: {
      sv: [`— 2 Krönikerboken 15:7`],
      en: [`— 2 Chronicles 15:7`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '15
  {
    quote: {
      sv: [`“Och Gud fullbordade på sjunde dagen det verk som han hade gjort. Och han vilade på sjunde dagen från allt sitt verk som han hade gjort.”`],
      en: [`“By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work.”`]
    },
    author: {
      sv: [`— 1 Mosebok 2:2`],
      en: [`— Genesis 2:2`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '16
  {
    quote: {
      sv: [`“Herren är min starkhet och min lovsång,
          och han blev mig till frälsning.
          Han är min Gud, jag vill ära honom,
          min faders Gud, jag vill upphöja honom.”`],
      en: [`“The Lord is my strength and my defense;
          he has become my salvation.
          He is my God, and I will praise him,
          my father’s God, and I will exalt him.”`]
    },
    author: {
      sv: [`— 2 Mosebok 15:2`],
      en: [`— Exodus 15:2`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '17
  {
    quote: {
      sv: [`“Ni ska inte stjäla eller ljuga eller begå svek mot varandra.”`],
      en: [`“Do not steal.
          “‘Do not lie.
          “‘Do not deceive one another.”`]
    },
    author: {
      sv: [`— 3 Mosebok 19:11`],
      en: [`— Leviticus 19:11`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '18
  {
    quote: {
      sv: [`“Till leviterna skall du så tala och säga: När ni av Israelse barn tar emot den tionde som jag har bestämt att ni skall få av dem som er arvedel, så skall ni av den ge en offergåva åt Herren, en tionde av tionden.
        När ni får Israels barn att ge er tionde, ska ni ge en tionde av den till Herren som ett offer.”`],
      en: [`“Speak to the Levites and say to them: ‘When you receive from the Israelites the tithe I give you as your inheritance, you must present a tenth of that tithe as the Lord’s offering.”`]
    },
    author: {
      sv: [`— 4 Mosebok 18:26`],
      en: [`— Numbers 18:26`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '19
  {
    quote: {
      sv: [`“Du ska inte missbruka Herrens, din Guds, namn, för Herren ska inte lämna den ostraffad som missbrukar hans namn.”`],
      en: [`“You shall not misuse the name of the Lord your God, for the Lord will not hold anyone guiltless who misuses his name.”`]
    },
    author: {
      sv: [`— 5 Mosebok 5:11`],
      en: [`— Deuteronomy 5:11`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '20
  {
    quote: {
      sv: [`“Allt vi behöver för liv och gudsfruktan har hans gudomliga makt skänkt oss genom kunskapen om honom som har kallat oss med sin härlighet och godhet.”`],
      en: [`“His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness.”`]
    },
    author: {
      sv: [`— 2 Petrusbrevet 1:3`],
      en: [`— 2 Peter 1:3`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '21
  {
    quote: {
      sv: [`“Gud är min starka borg, han gör min väg rak.”`],
      en: [`“It is God who arms me with strength and keeps my way secure.”`]
    },
    author: {
      sv: [`— 2 Samuelsboken 22:33`],
      en: [`— 2 Samuel 22:33`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '22
  {
    quote: {
      sv: [`“Men Herren stod vid min sida och gav mig kraft.”`],
      en: [`“But the Lord stood at my side and gave me strength.”`]
    },
    author: {
      sv: [`— 2 Timotheusbrevet 4:17`],
      en: [`— 2 Timothy 4:17`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '23
  {
    quote: {
      sv: [`“I honom är vi friköpta genom hans blod och har förlåtelse för våra synder, tack vare den rika nåd han lät flöda över oss.”`],
      en: [`“In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace.”`]
    },
    author: {
      sv: [`— Efesierbrevet 1:7`],
      en: [`— Ephesians 1:7`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '24
  {
    quote: {
      sv: [`“Gläd er alltid i Herren. Än en gång säger jag: gläd er!”`],
      en: [`“Rejoice in the Lord always. I will say it again: Rejoice!”`]
    },
    author: {
      sv: [`— Filipperbrevet 4:4`],
      en: [`— Philippians 4:4`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '25
  {
    quote: {
      sv: [`“Men andens frukter är kärlek, glädje, frid, tålamod, vänlighet, godhet, trofasthet,
        ödmjukhet och självbehärskning. Mot sådant vänder sig inte lagen.
        De som tillhör Kristus Jesus har korsfäst sitt kött med alla dess lidelser och begär.
        Om ni har andligt liv, låt oss då följa en andlig väg. Låt oss inte bli inbilska,
        inte utmana varandra, inte avundas varandra.”`],
      en: [`“But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness,
        gentleness and self-control. Against such things there is no law.
        Those who belong to Christ Jesus have crucified the flesh with its passions and desires.
        Since we live by the Spirit, let us keep in step with the Spirit.
        Let us not become conceited, provoking and envying each other.”`]
    },
    author: {
      sv: [`— Galaterbrevet 5:22-26`],
      en: [`— Galatians 5:22-26`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },


  // '26
  {
    quote: {
      sv: [`“Låt oss inte tröttna på att göra det som är rätt. När tiden är inne får vi skörda, bara vi inte ger upp. Så länge det finns tid, skall vi därför göra gott mot alla människor, framför allt mot våra trosfränder.”`],
      en: [`“Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.”`]
    },
    author: {
      sv: [`— Galaterbrevet 6:9-10`],
      en: [`— Galatians 6:9-10`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },


  // '27
  {
    quote: {
      sv: [`“Skatta er bara lyckliga, mina bröder när ni utsätts för prövningar av olika slag. Ni vet ju att om er tro består provet ger den uthållighet.”`],
      en: [`“Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.”`]
    },
    author: {
      sv: [`— Jakobsbrevet 1:2-3`],
      en: [`— James 1:2-3`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '28
  {
    quote: {
      sv: [`“Det folk som vandrar i mörkret
        ska se ett stort ljus, ja,
        över dem som bor i dödsskuggans dal
        skall ett ljus skina klart.
        Du skall göra folket talrikt,
        du skall göra dess glädje stor.
        Inför dig skall de glädja sig,
        som man fröjdar sig,
        när man utskiftar byte.”`],
      en: [`“The people walking in darkness
            have seen a great light;
        on those living in the land of deep darkness
            a light has dawned.
        You have enlarged the nation
            and increased their joy;
        they rejoice before you
            as people rejoice at the harvest,
        as warriors rejoice
            when dividing the plunder.”`]
    },
    author: {
      sv: [`— Jesaja 9:2-3`],
      en: [`— Isaiah 9:2-3`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '29
  {
    quote: {
      sv: [`“Men sök nu förlikning och frid med
        honom — därigenom skall lycka tillfalla dig.
        Ta emot undervisning av hans mun,
        och förvara hans ord i ditt hjärta.”`],
      en: [`“Submit to God and be at peace with him;
        in this way prosperity will come to you.
        Accept instruction from his mouth
        and lay up his words in your heart.”`]
    },
    author: {
      sv: [`— Job 22:21-22`],
      en: [`— Job 22:21-22`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },

  // '30
  {
    quote: {
      sv: [`“Orden träffade dem i hjärtat, och de frågade Petrus och de andra apostlarna: "Bröder, vad skall vi göra?"

        Petrus svarade: "Omvänd er och låt er alla döpas i Jesu Kristi namn, så att ni får förlåtelse för era synder. Då får ni den heliga ande som gåva. Ty löftet gäller för er och era barn och alla dem långt borta som Herren vår Gud vill kalla."”`],
      en: [`“When the people heard this, they were cut to the heart and said to Peter and the other apostles, ‘Brothers, what shall we do?’

        Peter replied, ‘Repent and be baptised, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit. 39 The promise is for you and your children and for all who are far off – for all whom the Lord our God will call.’”`]
    },
    author: {
      sv: [`— Apostlagärningarna 2:37-39`],
      en: [`— Acts 2:37-39`]
    },
    image: "jan_pixabay_pexels.jpg",
    credit: "Pixabay (Pexels.com)"
  },



  // _ _ _

  // 'Feb

  // '31
  {
    quote: {
      sv: [`“Barmhärtighet, frid och kärlek åt er i allt rikare mått.”`],
      en: [`“Mercy, peace and love be yours in abundance.”`]
    },
    author: {
      sv: [`— Judasbrevet 1:2`],
      en: [`— Jude 1:2`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '32
  {
    quote: {
      sv: [`“Herrens nåd är det att det inte är ute
        med oss, ty det är inte slut med hans
        barmhärtighet.
        Den är var morgon ny, ja, stor är din
        trofasthet.
        Herren är min del, det säger min själ
        mig. Därför vill jag hoppas på
        honom.
        Herren är god mot dem som väntar på
        honom, mot den själ som söker
        honom.
        Det är gott för en man att han får bära
        ett ok i sin ungdom.
        Må han sitta ensam och tyst, när ett
        sådant påläggs honom.
        Må han sänka sin mun i stoftet,
        kanhända finns ännu hopp.
        Må han vända kinden till åt den som
        slår honom och låta mätta sig med
        vanära.”`],
      en: [`“Because of the Lord’s great love we are not consumed,
        for his compassions never fail.
      They are new every morning;
        great is your faithfulness.
      I say to myself, ‘The Lord is my portion;
        therefore I will wait for him.’

      The Lord is good to those whose hope is in him,
        to the one who seeks him;
      t is good to wait quietly
        for the salvation of the Lord.
      It is good for a man to bear the yoke
        while he is young.

      Let him sit alone in silence,
        for the Lord has laid it on him.
      Let him bury his face in the dust –
        there may yet be hope.
      Let him offer his cheek to one who would strike him,
        and let him be filled with disgrace.”`]
    },
    author: {
      sv: [`— Klagovisorna 3:22-30`],
      en: [`— Lamentations 3:22-30`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '33
  {
    quote: {
      sv: [`“Ty ingenting är omöjligt för Gud.”`],
      en: [`“For no word from God will ever fail.”`]
    },
    author: {
      sv: [`— Lukasevangeliet 1:37`],
      en: [`— Luke 1:37`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '34
  {
    quote: {
      sv: [`“Jesus såg på dem och sade: För människor är det omöjligt, men inte för Gud. Ty för Gud är allting möjligt.”`],
      en: [`“Jesus looked at them and said, ‘With man this is impossible, but not with God; all things are possible with God.”`]
    },
    author: {
      sv: [`— Markusevangeliet 10:27`],
      en: [`— Mark 10:27`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },



  // '35
  {
    quote: {
      sv: [`“Saliga de som sörjer, de skall bli tröstade.
        Saliga de ödmjuka, de skall ärva landet.
        Saliga de som hungrar och törstar efter rättfärdigheten, de skall bli mättade.
        Saliga de barmhärtiga, de skall möta barmhärtighet.
        Saliga de renhjärtade, de skall se Gud.
        Saliga de som förföljs för rättfärdighetens skull, dem tillhör himmelriket.”`],
      en: [`“Blessed are those who mourn, for they will be comforted.
        Blessed are the meek, for they will inherit the earth.
        Blessed are those who hunger and thirst for righteousness, for they will be filled.
        Blessed are the merciful, for they will be shown mercy.
        Blessed are the pure in heart, for they will see God.
        Blessed are the peacemakers, for they will be called children of God.
        Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven”`]
    },
    author: {
      sv: [`— Matteusevangeliet 5:4-10`],
      en: [`— Matthew 5:4-10`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '36
  {
    quote: {
      sv: [`“Men jag vill skåda efter Herren, jag vill hoppas på min frälsnings Gud, min Gud ska höra mig.”`],
      en: [`“But as for me, I watch in hope for the Lord, I wait for God my Savior; my God will hear me.”`]
    },
    author: {
      sv: [`— Mika 7:7`],
      en: [`— Micah 7:7`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '37
  {
    quote: {
      sv: [`“Gå bort till myuran, du late, se hur hon gör, och bli vi.”`],
      en: [`“Go to the ant, you sluggard; consider its ways and be wise!”`]
    },
    author: {
      sv: [`— Ordspråksboken 6:6`],
      en: [`— Proverbs 6:6`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '38
  {
    quote: {
      sv: [`“Bättre är att vara två än en, ty de två får större vinning av sin möda.”`],
      en: [`“Two are better than one, because they have a good return for their labor.”`]
    },
    author: {
      sv: [`— Predikaren 4:9`],
      en: [`— Ecclesiastes 4:9`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '39
  {
    quote: {
      sv: [`“I frid ska jag lägga mig ned, och i frid skall jag somna in, ty du, Herre, låter mig bo avskild och i trygghet.”`],
      en: [`“In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.”`]
    },
    author: {
      sv: [`— Psaltaren 4:9`],
      en: [`— Psalm 4:8`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '40
  {
    quote: {
      sv: [`“Syndens lön är döden, men Guds gåva är evigt liv i Kristus Jesus, vår Herre.”`],
      en: [`“For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.”`]
    },
    author: {
      sv: [`— Romarbrevet 6:23`],
      en: [`— Romans 6:23`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '41
  {
    quote: {
      sv: [`“Så må alla dina fiender förgås, o Herre. Men de som älskar honom må likna solen, när den går upp i hjältekraft.”`],
      en: [`“So may all your enemies perish, Lord! But may all who love you be like the sun when it rises in its strength.”`]
    },
    author: {
      sv: [`— Domarboken 5:31`],
      en: [`— Judges 5:31`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '42
  {
    quote: {
      sv: [`“Och Boas kom just då dit från Betlehem. Han sade till skördemännen: Herren vare med er. De svarade honom. Herren välsigne er.”`],
      en: [`“Just then Boaz arrived from Bethlehem and greeted the harvesters, “The LORD be with you!” “The LORD bless you!” they answered.”`]
    },
    author: {
      sv: [`— Rut 2:4`],
      en: [`— Ruth 2:4`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '43
  {
    quote: {
      sv: [`“Men Herren sade till Samuel: Se inte på hans utseende och på hans högväxta gestalt, ty jag har förkastat honom.
        Ty det är inte som en människa ser. En människa ser på det som är för ögonen, men Herren ser till hjärtat.”`],
      en: [`“But the LORD said to Samuel, ’Do not consider his appearance or his height, for I have rejected him.
        The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.’”`]
    },
    author: {
      sv: [`— 1 Samuelsboken 16:7`],
      en: [`— 1 Samuel 16:7`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '44
  {
    quote: {
      sv: [`“Mina kära, låt oss älska varandra, ty kärleken kommer från Gud, och den som älskar är född av Gud och känner Gud. \n Men den som inte älskar känner inte Gud, eftersom Gud är kärlek.”`],
      en: [`“Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. \n Whoever does not love does not know God, because God is love.”`]
    },
    author: {
      sv: [`— 1 Johannesbrevet 4:7-8`],
      en: [`— 1 Johannesbrevet 4:7-8`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // Alla hjärtans dag
  // '45
  {
    quote: {
      sv: [`“Så älskade Gud världen, att han gav den sin ende son, för att de som tror på honom inte ska gå under utan ha evigt liv.”`],
      en: [`“For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.”`]
    },
    author: {
      sv: [`— Johannesevangeliet 3:16`],
      en: [`— John 3:16`]
    },
    image: "heart_nature_ave_calvar_martinez_pexels.jpg",
    credit: "Ave Calvar Martinez (Pexels.com)"
  },

  // '46
  {
    quote: {
      sv: [`“Så ge nu din tjänare ett lydigt hjärta, så att han kan vara domare för ditt folk och skilja mellan gott och ont. Ty vem förmår väl annars vara domare över detta ditt stora folk?`],
      en: [`“So give your servant a discerning heart to govern your people and to distinguish between right and wrong. For who is able to govern this great people of yours?””`]
    },
    author: {
      sv: [`— 1 Kungaboken 3:9`],
      en: [`— 1 Kings 3:9`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '47
  {
    quote: {
      sv: [`“Befall dina verk åt Herren,
          så har dina planer framgång.”`],
      en: [`“Commit to the Lord whatever you do,
          and he will establish your plans.”`]
    },
    author: {
      sv: [`— Ordspråksboken 16:3`],
      en: [`— Proverbs 16:3`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '48
  {
    quote: {
      sv: [`“Förtrösta på Herren av allt ditt hjärta,
          och förlita dig inte på ditt förstånd.
          På alla dina vägar må du tänka på honom,
          så skall han göra dina stigar jämna.”`],
      en: [`“Trust in the Lord with all your heart
          and lean not on your own understanding;
          in all your ways submit to him,
          and he will make your paths straight.”`]
    },
    author: {
      sv: [`— Ordspråksboken 3:5-6`],
      en: [`— Proverbs 3:5-6`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

  // '49
  {
    quote: {
      sv: [`“Ty, den som Gud har sänt talar Guds ord; Gud ger anden utan att mäta.”`],
      en: [`“For the one whom God has sent speaks the words of God, for God gives the Spirit without limit.”`]
    },
    author: {
      sv: [`— Johannesevangeliet 3:34`],
      en: [`— John 3:34`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

    // '50
  {
    quote: {
      sv: [`“... Jag har hört din bön, jag har sett dina tårar. Se, jag vill göra dig frisk. ...”`],
      en: [`“... I have heard your prayer and seen your tears; I will heal you. ...”`]
    },
    author: {
      sv: [`— 2 Kungaboken 20:5`],
      en: [`— 2 Kings 20:5`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
    credit: "Stijn Dikstra (Pexels.com)"
  },

    // '51
  {
    quote: {
      sv: [`“Ty Gud har inte gett oss modlöshetens ande, utan kraftens, kärlekens och självbesinningens. Skäms alltså inte för förvittnesbördet om vår Herre och inte heller för mig som är fånge för hans hans skull, utan lid för evangeliet du också med kraften från Gud. Han har räddat oss och kallat oss med en helig kallelse, inte på grund av våra gärningar utan genom sitt beslut och sin nåd, som han skänkte oss i Kristus Jesus redan före tidens början men som har blivit uppenbar nu när vår frälsare Kristus Jesus trätt fram. Han har utplånat döden och dragit liv och oförgänglighet fram i ljuset genom evangeliet,”`],
      en: [`“For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline. 8 So do not be ashamed of the testimony about our Lord or of me his prisoner. Rather, join with me in suffering for the gospel, by the power of God. 9 He has saved us and called us to a holy life – not because of anything we have done but because of his own purpose and grace. This grace was given us in Christ Jesus before the beginning of time, 10 but it has now been revealed through the appearing of our Saviour, Christ Jesus, who has destroyed death and has brought life and immortality to light through the gospel.”`]
    },
    author: {
      sv: [`— 2 Timotheus 1:7-10`],
      en: [`— 2 Timothy 1:7-10`]
    },
    image: "feb_ocean_view_stijn_dikstra_pexels",
    credit: "Stijn Dikstra (Pexels.com)"
  },

// '52
{
  quote: {
    sv: [`“Men var ni frimodiga, låt inte modet falla, ty ert verk skall få sin lön.”`],
    en: [`“But as for you, be strong and do not give up, for your work will be rewarded.”`]
  },
  author: {
    sv: [`— 2 Krönikeboken 15:7`],
    en: [`— 2 Chronicles 15:7`]
  },
  image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
  credit: "Stijn Dikstra (Pexels.com)"
},

// '53
{
  quote: {
    sv: [`“Stig upp, ty denna uppgift åligger dig, och vi vill vara med dig. Var frimodig och grip dig verket an.”`],
    en: [`“Rise up; this matter is in your hands. We will support you, so take courage and do it.”`]
  },
  author: {
    sv: [`— Esra 10:4`],
    en: [`— Ezra 10:4`]
  },
  image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
  credit: "Stijn Dikstra (Pexels.com)"
},

// '54
{
  quote: {
    sv: [`“Och han sade vidare till dem: "Gå bort och ät er bästa mat och drick ert sötaste vin, och sänd omkring gåvor av det till dem som inte hjar något tillagat åt sig,
      ty denna dag är helgad åt vår Herre. Och var inte bedrövade, ty fröjd i Herren är er starkhet."”`],
    en: [`“Nehemiah said, ‘Go and enjoy choice food and sweet drinks, and send some to those who have nothing prepared.
      This day is holy to our Lord. Do not grieve, for the joy of the Lord is your strength.’”`]
  },
  author: {
    sv: [`— Nehemja 8:10`],
    en: [`— Nehemiah 8:10`]
  },
  image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
  credit: "Stijn Dikstra (Pexels.com)"
},

// '55
{
  quote: {
    sv: [`“Nej, om du tiger stilla vid detta tillfälle, så skall nog hjälp och räddning beredas judarna från något annat håll,
      men du och din faders hus, ni skall förgöras.
      Vem vet om du inte just för en sådan tid som denna har nått kunglig värdighet.”`],
    en: [`“For if you remain silent at this time, relief and deliverance for the Jews will arise from another place,
      but you and your father’s family will perish.
      And who knows but that you have come to your royal position for such a time as this?’”`]
  },
  author: {
    sv: [`— Ester 4:14`],
    en: [`— Esther 4:14`]
  },
  image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
  credit: "Stijn Dikstra (Pexels.com)"
},

// '56
{
  quote: {
    sv: [`“Ha mig som signetring vid ditt hjärta,
      som en signetring på din arm.
    Ty kärleken är stark som döden,
      dess längtan obetvinglig som dödsriket,
    dess glöd är som eldens glöd,
      en Herrens låga är den.
    De största vatten förmår ej utsläcka kärleken,
      strömmar kan inte dränka den.
    Om någon ville ge
      alla ägodelar i sitt hus för kärleken,
      så skulle han ändå bli försmådd.”`],
    en: [`“Place me like a seal over your heart,
        like a seal on your arm;
    for love is as strong as death,
        its jealousy unyielding as the grave.
    It burns like blazing fire,
        like a mighty flame.
    Many waters cannot quench love;
        rivers cannot sweep it away.
    If one were to give
        all the wealth of one’s house for love,
        it would be utterly scorned.”`]
  },
  author: {
    sv: [`— Höga visan 8:6-7`],
    en: [`— Song of Songs 8:6-7`]
  },
  image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
  credit: "Stijn Dikstra (Pexels.com)"
},

// '57
{
  quote: {
    sv: [`“Och jag skall ge er ett nytt hjärta och låta en ny ande komma i ert bröst. Jag skall ta bort stenhjärtat ur er kropp och ge er ett hjärta av kött.”`],
    en: [`“I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.”`]
  },
  author: {
    sv: [`— Hesekiel 36:26`],
    en: [`— Ezekiel 36:26`]
  },
  image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
  credit: "Stijn Dikstra (Pexels.com)"
},

// '58
{
  quote: {
    sv: [`“Och dem som har kränkt förbundet skall han med hala ord locka till helt avfall, men de av folket, som känner Gud, skall stå fasta och hålla ut.”`],
    en: [`“With flattery he will corrupt those who have violated the covenant, but the people who know their God will firmly resist him.”`]
  },
  author: {
    sv: [`— Daniel 11:32`],
    en: [`— Daniel 11:32`]
  },
  image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
  credit: "Stijn Dikstra (Pexels.com)"
},

// '59
{
  quote: {
    sv: [`“Hos Assur skall vi ej mer söka vår frälsning,
        vi skall inte vidare stiga till häst.
    Våra händers verk skall vi
      inte mer kalla för vår Gud.
      Ty hos dig är det som den faderlöse får barmhärtighet.

    Ja, deras avfällighet vill jag hela,
      jag vill bevisa dem kärlek av hjärtat,
      ty min vrede har vänt sig ifrån dem.”`],
    en: [`“Assyria cannot save us;
        we will not mount war-horses.
    We will never again say “Our gods”
        to what our own hands have made,
        for in you the fatherless find compassion.’

    ‘I will heal their waywardness
        and love them freely,
        for my anger has turned away from them.”`]
  },
  author: {
    sv: [`— Hosea 14:4-5`],
    en: [`— Hosea 14:3-4`]
  },
  image: "feb_ocean_view_stijn_dikstra_pexels.jpg",
  credit: "Stijn Dikstra (Pexels.com)"
},

// '60
{
  quote: {
    sv: [`“Men det skall ske att var och en som åkallar Herrens namn, han skall bli frälst. ...”`],
    en: [`“And everyone who calls on the name of the Lord will be saved. ...”`]
  },
  author: {
    sv: [`— Joel 2:32`],
    en: [`— Joel 2:32`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// March
// '61
{
  quote: {
    sv: [`“Sök gott är, och inte vad ont är,
      för att ni må leva.
    Då ska Herren, herrskarkornas Gud, vara med er,
      så som ni menar honom vara.”`],
    en: [`“Seek good, not evil,
        that you may live.
    Then the Lord God Almighty will be with you,
        just as you say he is.”`]
  },
  author: {
    sv: [`— Amos 5:14`],
    en: [`— Amos 5:14`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '62
{
  quote: {
    sv: [`“Ty Herrens dag är nära
      för alla hednafolk.
    Som du har gjort, så skall man också göra mot dig,
      dina gärningar skall komma över ditt eget huvud.”`],
    en: [`“The day of the Lord is near
    for all nations.
  As you have done, it will be done to you;
    your deeds will return upon your own head.”`]
  },
  author: {
    sv: [`— Obadja 1:15`],
    en: [`— Obadiah 1:15`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '63
{
  quote: {
    sv: [`“Jag åkallade Herren i min nöd,
      och han svarade mig.
    Från dödsrikets buk ropade jag,
    och du hörde min röst.”`],
    en: [`“He said:
    ‘In my distress I called to the Lord,
        and he answered me.
    From deep in the realm of the dead I called for help,
        and you listened to my cry.”`]
  },
  author: {
    sv: [`— Jona 2:3`],
    en: [`— Jonah 2:2`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '64
{
  quote: {
    sv: [`“Herren är god,
      ett värn i nödens tid, och
    han låter vårda om dem som förtröstar på honom.”`],
    en: [`“The Lord is good,
        a refuge in times of trouble.
    He cares for those who trust in him,”`]
  },
  author: {
    sv: [`— Nahum 1:7`],
    en: [`— Nahum 1:7`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '65
{
  quote: {
    sv: [`“Se, uppblåst och
      orättrådig är dennes själ i honom,
      men den rättfärdige skall leva genom sin tro.”`],
    en: [`“‘See, the enemy is puffed up;
    his desires are not upright –
    but the righteous person will live by his faithfulness.”`]
  },
  author: {
    sv: [`— Habackuk 2:4`],
    en: [`— Habakkuk 2:4`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '66
{
  quote: {
    sv: [`“Herren, din Gud, bor i dig,
        en hjälte som kan frälsa.
    Han gläder sig över dig med lust,
      han tiger stilla i sin kärlek,
      han fröjdas över dig med jubel.”`],
    en: [`“The Lord your God is with you,
        the Mighty Warrior who saves.
    He will take great delight in you;
        in his love he will no longer rebuke you,
        but will rejoice over you with singing.’”`]
  },
  author: {
    sv: [`— Sefanja 3:17`],
    en: [`— Zephaniah 3:17`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// _ _ _

// '67
{
  quote: {
    sv: [`“Då sade Haggai, Herrens sändebud, efter Herrens uppdrag, till folket så: Jag är med er, säger Herren.”`],
    en: [`“Then Haggai, the Lord’s messenger, gave this message of the Lord to the people: ‘I am with you,’ declares the Lord.”`]
  },
  author: {
    sv: [`— Haggai 1:13`],
    en: [`— Haggai 1:13`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '68
{
  quote: {
    sv: [`“Inte genom styrka, inte genom kraft, utan genom min Ande, säger Herren Sebaot.”`],
    en: [`“Not by might nor by power, but by my Spirit,’ says the Lord Almighty.”`]
  },
  author: {
    sv: [`— Sakarja 4:6`],
    en: [`— Zechariah 4:6`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

  // '69
  {
    quote: {
      sv: [`“Vi vet att Gud på allt sätt hjälper dem som älskar honom att nå det goda, dem som han har kallat efter sin plan.”`],
      en: [`“And we know that in all things God works for the good of those who love him, who[a] have been called according to his purpose.”`]
    },
    author: {
      sv: [`— Romarbrevet 8:28`],
      en: [`— Romans 8:28`]
    },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
  },

    // '70
  {
    quote: {
      sv: [`“Och med sitt eget blod, inte med blod från bockar och kalvar, har han en gång för alla trätt in i helgedomen och vunnit befrielse åt oss för evigt.”`],
      en: [`“He did not enter by means of the blood of goats and calves; but he entered the Most Holy Place once for all by his own blood, thus obtaining[a] eternal redemption.”`]
    },
    author: {
      sv: [`— Hebreerbrevet 9:12`],
      en: [`— Hebrews 9:12`]
    },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
  },

    // '71
  {
    quote: {
      sv: [`“Därför är det ett nytt förbund som Kristus förmedlar, för att de kallade ska få det utlovade eviga arvet, sedan han dött för att befria dem från överträdelserna under det förra förbundet.”`],
      en: [`“For this reason Christ is the mediator of a new covenant, that those who are called may receive the promised eternal inheritance—now that he has died as a ransom to set them free from the sins committed under the first covenant.”`]
    },
    author: {
      sv: [`— Hebreerbrevet 9:15`],
      en: [`— Hebrews 9:15`]
    },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
  },

    // '72
  {
    quote: {
      sv: [`“Salig är den som håller ut då han prövas; när han har bestått provet skall han få det eviga livets segerkrans, som Gud har lovat dem som älskar honom. Ingen som blir prövad skall säga att det är Gud som frestar honom.”`],
      en: [`“Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.”`]
    },
    author: {
      sv: [`— Jakobsbrevet 1:12`],
      en: [`— James 1:12`]
    },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
  },

    // '73
  {
    quote: {
      sv: [`“Allt det goda vi får, varje fullkomlig gåva kommer från ovan, från himlaljusens fader, hos vilken ingen förändring sker och ingen växling mellan ljus och mörker.”`],
      en: [`“Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows. 18 He chose to give us birth through the word of truth, that we might be a kind of firstfruits of all he created.”`]
    },
    author: {
      sv: [`— Jakobsbrevet 1:17-18`],
      en: [`— James 1:17-18`]
    },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
  },

    // '74
  {
    quote: {
      sv: [`“Jag som kallar på örnen från öster,
        och från fjärran land på mitt rådsluts man.
        Vad jag har talat, det låter jag också inträffa,
        vad jag har bestämt, det sätter jag också i verket.

        Så hör nu på mig, ni övermodiga,
        ni som menar att hjälpen är långt borta.
        Se, jag låter min hjälp närma sig,
        den är ej långt borta, och min frälsning dröjer inte. ...”`],
      en: [`“Calling a bird of prey from the east,
        The man who executes My counsel, from a far country.
        Indeed I have spoken it;
        I will also bring it to pass.
        I have purposed it;
        I will also do it.

        Listen to Me, you stubborn-hearted,
        Who are far from righteousness:          I bring My righteousness near, it shall not be far off;
        My salvation shall not linger. ...”`]
    },
    author: {
      sv: [`— Jesaja 46:11-13`],
      en: [`— Isaiah 46:11-13`]
    },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
  },

      // '75
  {
    quote: {
      sv: [`“I begynnelsen fanns Ordet, och Ordet fanns hos Gud, Och Ordet var Gud. Det fanns i begynnelsen hos Gud. Allt blev till genom det, och utan det blev ingenting till av allt som finns till. I ordet var liv, och livet var människornas ljus. Och ljuset lyser i mörkret, och mörkret har inte övervunnit det.”`],
      en: [`“In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through Him, and without Him nothing was made that was made. In Him was life, and the life was the light of men. And the light shines in the darkness, and the darkness did not comprehend it”`]
    },
    author: {
      sv: [`— Johannesevangeliet 1:1-5`],
      en: [`— John 1:1-5`]
    },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
  },
      // '76
  {
    quote: {
      sv: [`“När Jesus såg det blev han förargad och sade: "Låt barnen komma hit till mig och hindra dem inte: Guds rike tillhör sådana som de. Sannerligen, den som inte tar emot Guds rike som ett barn kommer aldrig dit in." Och han tog dem i famnen, lade händerna på dem och välsignade dem.”`],
      en: [`“When Jesus saw this, he was indignant. He said to them, ‘Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these. 15 Truly I tell you, anyone who will not receive the kingdom of God like a little child will never enter it.’ 16 And he took the children in his arms, placed his hands on them and blessed them.”`]
    },
    author: {
      sv: [`— Markusevangeliet 10:14-16`],
      en: [`— Mark 10:14-16`]
    },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
  },

// '77
{
  quote: {
    sv: [`“Och Herren är den som går framför dig. Han ska vara med dig, han ska inte lämna dig eller överge dig. Du må inte frukta och inte vara förfärad.”`],
    en: [`“The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.”`]
  },
  author: {
    sv: [`— 5 Mosebok 31:8`],
    en: [`— Deuteronomy 31:8`]
  },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
},

// '78
{
  quote: {
    sv: [
      `“Vet ni inte att er kropp är ett tempel för den helige anden, som ni har inom er och som ni har fått från Gud? Ni tillhör inte er själva. Gud har köpt er och priset är betalt. Ära då Gud mer er kropp.”`
    ],
    en: [
      `“Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honour God with your bodies.”`
    ]
  },
  author: {
    sv: [`— 1 Korinthierbrevet 6:19-20`],
    en: [`— 1 Corinthians 6:19-20`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '79
{
  quote: {
    sv: [`“En gång var ni mörker, men i Herren har ni nu blivit ljus. Lev som ljusets barn — ljuset bär frukt överallt där det finns godhet, rättfärdighet och sanning — och tänk på vad Herren vill ha. Ta inte del i mörkrets ofruktbara gärningar. Mer än så, avslöja dem — vad sådant folk har för sig i skymundan är en skam till och med att tala om. Men när alltsammans avslöjas av ljuset, blir det synligt, för överallt där något blir synligt finns ljus. Därför heter det:

      "Vakna, du som sover,
          stå upp från de döda,
          och Kristus skall lysa över dig."

      Se alltså noga upp med hur ni lever, inte som ovisa människor utan som visa.”`],
    en: [`“For you were once darkness, but now you are light in the Lord. Live as children of light (for the fruit of the light consists in all goodness, righteousness and truth) and find out what pleases the Lord. Have nothing to do with the fruitless deeds of darkness, but rather expose them. It is shameful even to mention what the disobedient do in secret. But everything exposed by the light becomes visible — and everything that is illuminated becomes a light. This is why it is said:

      ‘Wake up, sleeper,
        rise from the dead,
        and Christ will shine on you.’

      Be very careful, then, how you live — not as unwise but as wise,”`]
  },
  author: {
    sv: [`— Efesierbrevet 5:8-15`],
    en: [`— Ephesians 5:8-15`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '80
{
  quote: {
    sv: [`“ty Fadern själv älskar er, eftersom ni har älskat mig och trott att jag kommer från Gud.”`],
    en: [`“No, the Father himself loves you because you have loved me and have believed that I came from God.”`]
  },
  author: {
    sv: [`— Johannesevangeliet 16:27`],
    en: [`— John 16:27`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '81
{
  quote: {
    sv: [`“Sök först Guds rike och hans rättfärdighet, så ska ni få allt det andra också.”`],
    en: [`“But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 6:33`],
    en: [`— Matthew 6:33`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '82
{
  quote: {
    sv: [`“Som hjorten längtar efter vatten,
      så längtar min själ efter dig, o Gud.”`],
    en: [`“As the deer pants for streams of water,
      so my soul pants for you, my God.”`]
  },
  author: {
    sv: [`— Psaltaren 42:1`],
    en: [`— Psalm 42:1`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '83

  {
    quote: {
      sv: [`“Verksamheterna är olika, men Gud är densamme, han som verkar i allt och överallt.

          Hos var och en framträder Anden så att den blir till nytta. Den ene får genom Anden gåvan att meddela vishet, den andre kan med samma Andes hjälp meddela kunskap. "En får tron genom Anden, en annan, genom samma Ande gåvan att bota, en annan får kraft att göra under. En får förmågan att tala profetiskt", en annan att skilja mellan olika andar. En kan tala olika slags tungotal, en annan kan tolka tungotal. Allt detta åstadkommer en och samma Ande genom att fördela sina gåvor på var och en så som den själv vill.”`],
      en: [`“There are different kinds of working, but in all of them and in everyone it is the same God at work.

          Now to each one the manifestation of the Spirit is given for the common good. To one there is given through the Spirit a message of wisdom, to another a message of knowledge by means of the same Spirit, to another faith by the same Spirit, to another gifts of healing by that one Spirit, to another miraculous powers, to another prophecy, to another distinguishing between spirits, to another speaking in different kinds of tongues, and to still another the interpretation of tongues. All these are the work of one and the same Spirit, and he distributes them to each one, just as he determines.”`]
    },
    author: {
      sv: [`— 1 Korinthierbrevet 12:6-11`],
      en: [`— 1 Corinthians 12:6-11`]
    },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
  },

  // '84
  {
    quote: {
      sv: [`“frukta inte, ty jag är med dig.
        var ej modfälld, ty jag är din Gud.
      Jag styrker dig och jag hjälper dig,
        jag håller dig uppe med min rättfärdighets högra hand.”`],
      en: [`“So do not fear, for I am with you;
          do not be dismayed, for I am your God.
      I will strengthen you and help you;
          I will uphold you with my righteous right hand.”`]
    },
    author: {
      sv: [`— Jesaja 41:10`],
      en: [`— Isaiah 41:10`]
    },
    image: "march_life_of_pix_pexels.jpg",
    credit: "Life Of Pix (Pexels.com)"
  },

// '85
{
  quote: {
    sv: [`“Om du hör Herrens, din Guds, röst och gör det som är rätt i hans ögon och lyssnar till hans bud och håller alla hans stadgar, så skall jag inte lägga på dig någon av de sjukdomar som jag lade på egyptierna, ty jag är Herren, din läkare.”`],
    en: [`“He said, ‘If you listen carefully to the Lord your God and do what is right in his eyes, if you pay attention to his commands and keep all his decrees, I will not bring on you any of the diseases I brought on the Egyptians, for I am the Lord, who heals you.’”`]
  },
  author: {
    sv: [`— 2 Mosebok 15:26`],
    en: [`— Exodus 15:26`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '86
{
  quote: {
    sv: [`“Hedra din fader och din moder, som Herren din Gud har befallt dig, för att du ska få leva länge och det ska gå dig väl i det land som Herren din Gud ger dig.”`],
    en: [`“‘Honour your father and your mother, as the Lord your God has commanded you, so that you may live long and that it may go well with you in the land the Lord your God is giving you.”`]
  },
  author: {
    sv: [`— 5 Mosebok 5:16`],
    en: [`— Deuteronomy 5:16`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '87
{
  quote: {
    sv: [`“Förstår ni inte att ni är Guds tempel och att Guds ande bor i er?”`],
    en: [`“Don’t you know that you yourselves are God’s temple and that God’s Spirit lives among you?”`]
  },
  author: {
    sv: [`— 1 Korinthierbrevet 3:16`],
    en: [`— 1 Corinthians 3:16`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '88
{
  quote: {
    sv: [`“Nåd och frid åt er i allt rikare mått genom kunskap om Gud och Jesus, vår herre.

      Ty allt som leder till liv och gudsfruktan har hans gudomliga makt skänkt oss genom kunskapen om honom som i sin härlighet och kraft har kallat oss. Han har gett oss sina stora och dyrbara löften, för att ni tack vare dem skall bli delaktiga av gudomlig natur, sedan ni kommit undan det fördärv som begäret drar med sig i denna värld.

      Sök därför med all iver att till er tro foga styrka, till styrkan kunskap, till kunskapen självbehärskning, till självbehärskningen uthållighet, till uthålligheten gudsfruktan, 'till gudsfruktan broderlig omtanke och till omtanken kärlek. Ty om allt detta finns hos er och får växa till, blir er kunskap om vår herre Jesus Kristus inte overksam utan bär frukt. Men den som saknar detta ser ingenting i sin närsynthet; han har glömt hur han blev renad från sina tidigare synder.”`],
    en: [`“Grace and peace be yours in abundance through the knowledge of God and of Jesus our Lord.

        His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness. Through these he has given us his very great and precious promises, so that through them you may participate in the divine nature, having escaped the corruption in the world caused by evil desires.

        For this very reason, make every effort to add to your faith goodness; and to goodness, knowledge; and to knowledge, self-control; and to self-control, perseverance; and to perseverance, godliness; and to godliness, mutual affection; and to mutual affection, love. For if you possess these qualities in increasing measure, they will keep you from being ineffective and unproductive in your knowledge of our Lord Jesus Christ. But whoever does not have them is short-sighted and blind, forgetting that they have been cleansed from their past sins.”`]
  },
  author: {
    sv: [`— 2 Petrusbrevet 1:2–9`],
    en: [`— 2 Peter 1:2–9`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '89
{
  quote: {
    sv: [`“Men Gud, som är rik på barmhärtighet, har älskat oss med så stor kärlek att fast vi var döda genom våra överträdelser har han gjort oss levande tillsammans med Kristus — av nåd är nu frälsta — och uppväckt oss med honom och gett os en plats i himlen genom Kristis Jesus. Därmed ville han för kommande tider visa den överväldigande rika nåden i sin godhet mot oss genom Kristus Jesus. Ty av nåd är ni frälsta genom tron, inte av er själva, Guds gåva är det. Det beror inte på gärningar, ingen skall kunna berömma sig. Vi är hans verk, skapade genom Kristus Jesus till att göra de goda gärningar som Gud från början har bestämt oss till.”`],
    en: [`“But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions — it is by grace you have been saved. And God raised us up with Christ and seated us with him in the heavenly realms in Christ Jesus, in order that in the coming ages he might show the incomparable riches of his grace, expressed in his kindness to us in Christ Jesus. For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast. For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.”`]
  },
  author: {
    sv: [`— Efesierbrevet 2:4-10`],
    en: [`— Ephesians 2:4-10`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '90
{
  quote: {
    sv: [`“Gör er inga bekymmer, utan när ni åkallar och ber, tacka då Gud och låt honom få veta alla era önskningar. Då skall Guds frid, som är långt mera värd än allt vi tänker, ge era hjärtan och era tankar skydd i Kristus Jesus.
      Och så, mina bröder: det som är sant, det som är upphöjt, rätt och rent, det som är värt att älska och akta, allt som kallas dygd och allt som förtjänar beröm, ta fasta på allt detta.”`],
    en: [`“Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.
      Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — if anything is excellent or praiseworthy — think about such things.”`]
  },
  author: {
    sv: [`— Filipperbrevet 4:6-8`],
    en: [`— Philippians 4:6-8`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// '91
{
  quote: {
    sv: [`“Tron är grunden för det vi hoppas på; den ger oss visshet om det vi inte kan se.”`],
    en: [`“Now faith is confidence in what we hope for and assurance about what we do not see.”`]
  },
  author: {
    sv: [`— Hebreerbrevet 11:1`],
    en: [`— Hebrews 11:1`]
  },
  image: "march_life_of_pix_pexels.jpg",
  credit: "Life Of Pix (Pexels.com)"
},

// april
// '92
{
  quote: {
    sv: [`“frukta inte, ty jag är med dig,
        var ej modfälld, ty jag är din Gud.
      Jag styrker dig och jag hjälper dig,
        jag håller dig uppe med min rättfärdighets högra hand.”`],
    en: [`“So do not fear, for I am with you;
        do not be dismayed, for I am your God.
      I will strengthen you and help you;
        I will uphold you with my righteous right hand.”`]
  },
  author: {
    sv: [`— Jesaja 41:10`],
    en: [`— Isaiah 41:10`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '93
{
  quote: {
    sv: [`“Om de hör på honom och underkastar sig,
      så får de framleva sina dagar i lycka
      och sina år i ljuvlig ro.”`],
    en: [`“If they obey and serve him,
    they will spend the rest of their days in prosperity
    and their years in contentment.”`]
  },
  author: {
    sv: [`— Job 36:11`],
    en: [`— Job 36:11`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '94
{
  quote: {
    sv: [`“Jag är vinstocken, ni är grenarna. Om någon är kvar i mig och jag i honom, bär han rik frukt: utan mig kan ni ingenting göra.”`],
    en: [`“I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.”`]
  },
  author: {
    sv: [`— Johannesevangeliet 15:5`],
    en: [`— John 15:5`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},



// '95
{
  quote: {
    sv: [`“Kom till mig, alla ni som är tyngda av bördor; jag skall skänka er vila. Ta på er mitt ok och lär av mig, som har ett milt och ödmjukt hjärta, så skall ni finna vila för er själ.
      Mitt ok är skonsamt och min börda är lätt.”`],
    en: [`“Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.
      For my yoke is easy and my burden is light.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 11:28-30`],
    en: [`— Matthew 11:28-30`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '96
{
  quote: {
    sv: [`“Järn ger skärpa åt järn,
      så skärper den ena människan den andra.

    Den som vårdar sitt fikonträd, han får äta dess frukt,
      och den som vårdar sig om sin herre, han kommer till ära.

    Som spegelbilden i vattnet liknar ansiktet,
    så avspeglar den ena människans hjärta den andras.”`],
    en: [`“As iron sharpens iron,
      so one person sharpens another.

    The one who guards a fig tree will eat its fruit,
      and whoever protects their master will be honored.

    As water reflects the face,
      so one’s life reflects the heart.”`]
  },
  author: {
    sv: [`— Ordspråksboken 27:17-19`],
    en: [`— Proverbs 27:17-19`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '97
{
  quote: {
    sv: [`“Ty Gud ska dra alla gärningar till doms,
      när han dömer allt vad förborgat är,
      vare sig det är gott eller ont.”`],
    en: [`“For God will bring every deed into judgment,
      including every hidden thing,
      whether it is good or evil.”`]
  },
  author: {
    sv: [`— Predikaren 12:14`],
    en: [`— Ecclesiastes 12:14`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '98
{
  quote: {
    sv: [`“När de rättfärdiga ropar, då hör Herren
      och räddar dem ur deras nöd.
      Herren är nära dem som har ett förkrossat hjärta,
      och frälser dem som har en bedrövad ande.”`],
    en: [`“The righteous cry out, and the Lord hears them;
      he delivers them from all their troubles.
      The Lord is close to the brokenhearted
      and saves those who are crushed in spirit.”`]
  },
  author: {
    sv: [`— Psaltaren 34:18-19`],
    en: [`— Psalm 34:17-18`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '99
{
  quote: {
    sv: [`“Vad innebär nu detta? Om Gud är för oss, vem kan då vara mot oss?”`],
    en: [`“What, then, shall we say in response to these things? If God is for us, who can be against us?”`]
  },
  author: {
    sv: [`— Romarbrevet 8:31`],
    en: [`— Romans 8:31`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '100
{
  quote: {
    sv: [`“Och klart är att ingen blir rättfärdig i Guds ögon genom lagen, ty den rättfärdige skall leva genom tron, och lagen bygger inte på tron: det heter ju att den som fullgör buden skall leva genom dem. Kristus har friköpt oss från lagens förbannelse genom att för vår skull ta förbannelsen på sig, som det står skrivet: Förbannad är var och en som hängs upp på en träpåle. Så skulle hedningarna genom Kristus Jesus få den välsignelse som gavs åt Abraham och vi sedan få den utlovade Anden på grund av tron.”`],
    en: [`“Clearly no one who relies on the law is justified before God, because “the righteous will live by faith.”[a] 12 The law is not based on faith; on the contrary, it says, “The person who does these things will live by them.”[b] 13 Christ redeemed us from the curse of the law by becoming a curse for us, for it is written: “Cursed is everyone who is hung on a pole.”[c] 14 He redeemed us in order that the blessing given to Abraham might come to the Gentiles through Christ Jesus, so that by faith we might receive the promise of the Spirit.”`]
  },
  author: {
    sv: [`— Galaterbrevet 3:11-14`],
    en: [`— Galatians 3:11-14`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '101
{
  quote: {
    sv: [`“Du ska inte dräpa.

      Du ska inte begå äktenskapsbrott.

      Du ska inte heller stjäla.

      Du ska inte heller bära falskt vittnesbörd mot din nästa.”`],
    en: [`“You shall not murder.

      “You shall not commit adultery.

      “You shall not steal.

      “You shall not give false testimony against your neighbor.”`]
  },
  author: {
    sv: [`— 5 Mosebok 5:17–20`],
    en: [`— Deuteronomy 5:17–20`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '102
{
  quote: {
    sv: [`“Kärleken är tålmodig och god, kärleken är inte stridslysten, inte skrytsam och inte uppblåst. Den är inte utmanande, inte självisk, den brusar inte upp, den vill ingen något ont.

      Den finner inte glädje i orätten, men gläds med sanningen. Allt bär den, allt tror den, allt hoppas den, allt uthärdar den.”`],
    en: [`“ Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.

      Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.”`]
  },
  author: {
    sv: [`— 1 Korinthierbrevet 13:4-7`],
    en: [`— 1 Corinthians 13:4-7`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '103
{
  quote: {
    sv: [`Väx till i nåd och i kunskap om vår herre och frälsare Jesus Kristus. Hans är härligheten, nu och till evighetens dag, amen”`],
    en: [`“But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be glory both now and forever! Amen.”`]
  },
  author: {
    sv: [`— 2 Petrusbrevet 3:18`],
    en: [`— 2 Peter 3:18`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '104
{
  quote: {
    sv: [`“Se till att ni förnyas i ande och förstånd och att ni klär er i den nya människan, som har skapats efter Guds bild, med den rättfärdighet och den helighet som hör sanningen till.”`],
    en: [`“You were taught, with regard to your former way of life, to put off your old self, which is being corrupted by its deceitful desires;

      to be made new in the attitude of your minds; and to put on the new self, created to be like God in true righteousness and holiness.”`]
  },
  author: {
    sv: [`— Efesierbrevet 4:23-24`],
    en: [`— Ephesians 4:22-24`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '105
{
  quote: {
    sv: [`“Och så, mina bröder, det som är sant, det som är upphöjt, rätt och rent, det som är värt att älska och akta, allt som kallas dygd och allt som förtjänar beröm, ta fasta på allt detta.”`],
    en: [`“Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.”`]
  },
  author: {
    sv: [`— Filipperbrevet 4:8`],
    en: [`— Philippians 4:8`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '106
{
  quote: {
    sv: [`“De har besegrat honom
      genom Lammets blod
      och genom sitt vittnesbörds ord.
    De älskade inte sitt liv mer än
      att de kunde gå i döden.”`],
    en: [`“They triumphed over him
      by the blood of the Lamb
      and by the word of their testimony;
    they did not love their lives so much
      as to shrink from death.”`]
  },
  author: {
    sv: [`— Uppenbarelseboken 12:11`],
    en: [`— Revelations 12:11`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '107
{
  quote: {
    sv: [`“Tänk inte på vad förr har varit, bry er inte om vad fordom har skett.

      Se jag vill göra något nytt. Redan nu visar det sig — märker ni det inte? Ja, jag ska göra en väg i öknen, och strömmar i ödemarken,”`],
    en: [`““Forget the former things;
      do not dwell on the past.

    See, I am doing a new thing!
      Now it springs up; do you not perceive it?
    I am making a way in the wilderness
      and streams in the wasteland.”`]
  },
  author: {
    sv: [`— Jesaja 43:18-19`],
    en: [`— Isaiah 43:18-19`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '108
{
  quote: {
    sv: [`“Liksom Fadern har älskat mig, så har jag älskat er. Bli kvar i min kärlek. Om ni håller mina bud, blir ni kvar i min kärlek, så som jag har hållit min faders bud och är kvar i hans kärlek.”`],
    en: [`“As the Father has loved me, so have I loved you. Now remain in my love. 10 If you keep my commands, you will remain in my love, just as I have kept my Father’s commands and remain in his love.”`]
  },
  author: {
    sv: [`— Johannesevangeliet 15:9-10`],
    en: [`— John 15:9-10`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '109
{
  quote: {
    sv: [`“Samla inte skatter här på jorden, där mal och mask förstör och tjuvar bryter sig in och stjäl. Samla skatter i himlen, där varken mal eller mask förstör och inga tjuvar bryter sig in och stjäl. Ty där din skatt är, där kommer också ditt hjärta att vara.”`],
    en: [`“Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal. For where your treasure is, there your heart will be also.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 6:19-21`],
    en: [`— Matthew 6:19-21`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '110
{
  quote: {
    sv: [`“Människofruktan har med sig snaror,
      men den som förtröstar på Herren blir beskyddad.

      Många söker en furstes välvilja,
      men av Herren får var och en sin rätt.”`],
    en: [`“Fear of man will prove to be a snare,
      but whoever trusts in the Lord is kept safe.

    Many seek an audience with a ruler,
      but it is from the Lord that one gets justice.”`]
  },
  author: {
    sv: [`— Ordspråksboken 29:25-26`],
    en: [`— Proverbs 29:25-26`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

  // Kontrollerat hit
    // x Ej Kontroll

// '111
{
  quote: {
    sv: [`“Men inte bara för dem ber jag, utan också för alla som genom deras ord tror på mig. Jag ber att de alla skall bli ett och att liksom du, fader, är i mig och jag i dig, också de skall vara i oss. Då skall världen tro på att du har sänt mig.”`],
    en: [`“My prayer is not for them alone. I pray also for those who will believe in me through their message, that all of them may be one, Father, just as you are in me and I am in you. May they also be in us so that the world may believe that you have sent me.”`]
  },
  author: {
    sv: [`— Johannesevangeliet 17:20-21`],
    en: [`— John 17:20-21`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '112
{
  quote: {
    sv: [`“Gläd er i hoppet, var uthålliga i lidandet och ihärdiga i bönen. Hjälp Guds heliga med vad de behöver, vinnlägg er om gästfrihet. Välsigna dem som förföljer er, välsigna dem och förbanna dem inte.”`],
    en: [`“Be joyful in hope, patient in affliction, faithful in prayer. Share with the Lord’s people who are in need. Practice hospitality.

    Bless those who persecute you; bless and do not curse.”`]
  },
  author: {
    sv: [`— Romarbrevet 12:12-14`],
    en: [`— Romans 12:12-14`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '113
{
  quote: {
    sv: [`“Du ska inte ha begär till din nästas hustru. Du ska inte ha begär till din nästas hus, hans åker, hans tjänare eller tjänarinna, hans oxe eller hans åsna eller något annat som tillhör din nästa.”`],
    en: [`“Neither shalt thou desire thy neighbour’s wife, neither shalt thou covet thy neighbour’s house, his field, or his manservant, or his maidservant, his ox, or his ass, or any thing that is thy neighbour’s.”`]
  },
  author: {
    sv: [`— 5 Mosebok 5:21`],
    en: [`— Deuteronomy 5:21`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '114
{
  quote: {
    sv: [`“Men genom Guds nåd är jag vad jag är, och hans nåd mot mig har inte varit förgäves.”`],
    en: [`“But by the grace of God I am what I am: and his grace which was bestowed upon me was not in vain.”`]
  },
  author: {
    sv: [`— 1 Korinthierbrevet 15:10`],
    en: [`— 1 Corinthians 15:10`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '115
{
  quote: {
    sv: [`“Lägg bort all bitterhet, häftighet och vrede, allt skrikande och förolämpande, all annan ondska.”`],
    en: [`“Let all bitterness, and wrath, and anger, and clamour, and evil speaking, be put away from you, with all malice.”`]
  },
  author: {
    sv: [`— Efesierbrevet 4:31`],
    en: [`— Ephesians 4:31`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '116
{
  quote: {
    sv: [`“Den minste ska bli en skara på tusen, den ringaste ett mäktigt folk. Jag, Herren, ska låta det ske i sin tid, när tiden är inne.”`],
    en: [`“A little one shall become a thousand, and a small one a strong nation: I the Lord will hasten it in his time.”`]
  },
  author: {
    sv: [`— Jesaja 60:22`],
    en: [`— Isaiah 60:22`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '117
{
  quote: {
    sv: [`“Och när han kommer, ska han överbevisa världen om synd och rättfärdighet och dom.”`],
    en: [`“And when he is come, he will reprove the world of sin, and of righteousness, and of judgment.”`]
  },
  author: {
    sv: [`— Johannesevangeliet 16:8`],
    en: [`— John 16:8`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '118
{
  quote: {
    sv: [`“Se på himlens fåglar. De sår inte, de skördar inte och samlar inte i lador, och ändå föder er himmelske Far dem. Är inte ni värda mycket mer än de?”`],
    en: [`“Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them. Are ye not much better than they?”`]
  },
  author: {
    sv: [`— Matteusevangeliet 6:26`],
    en: [`— Matthew 6:26`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '119
{
  quote: {
    sv: [`“Kraft och värdighet är hennes klädnad, och hon ler mot den dag som kommer.”`],
    en: [`“Strength and honour are her clothing; and she shall rejoice in time to come.”`]
  },
  author: {
    sv: [`— Ordspråksboken 31:25`],
    en: [`— Proverbs 31:25`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '120
{
  quote: {
    sv: [`“Herren gör en mans steg fasta, han gläds över hans väg.”`],
    en: [`“The steps of a good man are ordered by the Lord: and he delighteth in his way.”`]
  },
  author: {
    sv: [`— Psaltaren 37:23`],
    en: [`— Psalm 37:23`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '121
{
  quote: {
    sv: [`“Men den som har betänkligheter är dömd om han äter, eftersom det inte sker i tro. Allt som inte sker i tro är synd.”`],
    en: [`“And he that doubteth is damned if he eat, because he eateth not of faith: for whatsoever is not of faith is sin.”`]
  },
  author: {
    sv: [`— Romarbrevet 14:23`],
    en: [`— Romans 14:23`]
  },
  image: "apr_vladimir_kudinov_pexels.jpg",
  credit: "Vladimir Kudinov (Pexels.com)"
},

// '122
  {
    quote: {
      sv: [`“Saliga är ni när man skymfar och förföljer er och på allt sätt förtalar er för min skull. Gläd er och jubla, er lön blir stor i himlen. På samma sätt förföljdes ju proferterna före er tid..”`],
      en: [`“Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me. Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you..”`]
    },
    author: {
      sv: [`— Matteusevangeliet 5:11-12`],
      en: [`— Matthew 5:11-12`]
    },
    image: "may_pexels-pixabay-315998.jpg",
    credit: "Pixabay (Pexels.com)"
  },

// '123
{
  quote: {
    sv: [`“Se vilken kärlek Fadern har skänkt oss: att vi får kallas Guds barn! Och det är vi också. Världen känner oss inte, eftersom den inte har lärt känna honom.”`],
    en: [`“See what great love the Father has lavished on us, that we should be called children of God! And that is what we are. The reason the world does not know us is that it did not know him.”`]
  },
  author: {
    sv: [`— 1 Johannesbrevet 3:1`],
    en: [`— 1 John 3:1`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '124
{
  quote: {
    sv: [`“Och vad vi än ber om får vi av honom, för vi håller hans bud och gör det som han tycker om.”`],
    en: [`“And whatever we ask we receive from him, because we keep his commandments and do what pleases him.”`]
  },
  author: {
    sv: [`— 1 Johannesbrevet 3:22`],
    en: [`— 1 John 3:22`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '125
{
  quote: {
    sv: [`“Mina älskade, om Gud har älskat oss så, är också vi skyldiga att älska varandra.”`],
    en: [`“Dear friends, since God so loved us, we also ought to love one another.”`]
  },
  author: {
    sv: [`— 1 Johannesbrevet 4:11`],
    en: [`— 1 John 4:11`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '126
{
  quote: {
    sv: [`“Den som har Sonen har livet. Den som inte har Guds Son har inte livet. Detta har jag skrivit till er som tror på Guds Sons namn, för att ni ska veta att ni har evigt liv. Och detta är den tillit vi har till honom: att om vi ber om något efter hans vilja, så hör han oss.”`],
    en: [`“Whoever has the Son has life; whoever does not have the Son of God does not have life. I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life. This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.”`]
  },
  author: {
    sv: [`— 1 Johannesbrevet 5:12-14`],
    en: [`— 1 John 5:12-14`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '127
{
  quote: {
    sv: [`“Ingen annan frestelse har drabbat er än vad människor får möta. Och Gud är trofast, han ska inte tillåta att ni frestas över er förmåga. Samtidigt med frestelsen kommer han också att ge en utväg, så att ni kan härda ut.”`],
    en: [`“No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.”`]
  },
  author: {
    sv: [`— 1 Korinthierbrevet 10:13`],
    en: [`— 1 Corinthians 10:13`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},
// '128
{
  quote: {
    sv: [`“Allt bär den, allt tror den, allt hoppas den, allt uthärdar den. Kärleken upphör aldrig.”`],
    en: [`“It always protects, always trusts, always hopes, always perseveres. Love never fails.”`]
  },
  author: {
    sv: [`— 1 Korinthierbrevet 13:7-8`],
    en: [`— 1 Corinthians 13:7-8`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '129
{
  quote: {
    sv: [`“Var därför fasta och orubbliga, och ge er alltid helt åt Herrens verk. Ni vet ju att ert arbete i Herren inte är förgäves.”`],
    en: [`“Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.”`]
  },
  author: {
    sv: [`— 1 Korinthierbrevet 15:58`],
    en: [`— 1 Corinthians 15:58`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '130
{
  quote: {
    sv: [`“Ty alla Guds löften har fått sitt ja genom honom. Därför säger vi också genom honom vårt Amen, Gud till ära.”`],
    en: [`“For no matter how many promises God has made, they are ‘Yes’ in Christ. And so through him the ‘Amen’ is spoken by us to the glory of God.”`]
  },
  author: {
    sv: [`— 2 Korinthierbrevet 1:20`],
    en: [`— 2 Corinthians 1:20`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '131
{
  quote: {
    sv: [`“Herren är Anden, och där Herrens Ande är, där är frihet.”`],
    en: [`“Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom.”`]
  },
  author: {
    sv: [`— 2 Korinthierbrevet 3:17-18?`],
    en: [`— 2 Corinthians 3:17-18?`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '132
{
  quote: {
    sv: [`“Därför tappar vi inte modet. Även om vår yttre människa bryts ner, förnyas vår inre människa dag för dag. Vår kortvariga och lätta nöd ger oss en oändligt rik härlighet som väger oändligt mycket mer. Vi riktar inte blicken mot det synliga utan mot det osynliga. Det synliga är förgängligt, men det osynliga är evigt.”`],
    en: [`“Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.”`]
  },
  author: {
    sv: [`— 2 Korinthierbrevet 4:16-18`],
    en: [`— 2 Corinthians 4:16-18`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},
// '133
{
  quote: {
    sv: [`“Allt detta har sitt upphov i Gud, som har försonat oss med sig genom Kristus och ställt oss i försoningens tjänst.”`],
    en: [`“All this is from God, who reconciled us to himself through Christ and gave us the ministry of reconciliation.”`]
  },
  author: {
    sv: [`— 2 Korinthierbrevet 5:17-18?`],
    en: [`— 2 Corinthians 5:17-18?`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '134
{
  quote: {
    sv: [`“Vi lever i tro, utan att se.”`],
    en: [`“For we live by faith, not by sight.”`]
  },
  author: {
    sv: [`— 2 Korinthierbrevet 5:7`],
    en: [`— 2 Corinthians 5:7`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '135
{
  quote: {
    sv: [`“Jaebes bad till Israels Gud: ’Välsigna mig och utvidga mitt område! Var med mig och bevara mig från olycka och smärta!’ Och Gud gav honom vad han begärde.”`],
    en: [`“Jabez cried out to the God of Israel, ‘Oh, that you would bless me and enlarge my territory! Let your hand be with me, and keep me from harm so that I will be free from pain.’ And God granted his request.”`]
  },
  author: {
    sv: [`— 1 Krönikerboken 4:10`],
    en: [`— 1 Chronicles 4:10`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '136
{
  quote: {
    sv: [`“Och Gud såg på allt som han hade gjort, och se, det var mycket gott.”`],
    en: [`“God saw all that he had made, and it was very good.”`]
  },
  author: {
    sv: [`— 1 Mosebok 1:31`],
    en: [`— Genesis 1:31`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '137
{
  quote: {
    sv: [`“Finns något för svårt för Herren? Vid den bestämda tiden ska jag komma tillbaka till dig, och då ska Sara ha en son.”`],
    en: [`“Is anything too hard for the Lord? I will return to you at the appointed time next year, and Sarah will have a son.”`]
  },
  author: {
    sv: [`— 1 Mosebok 18:14`],
    en: [`— Genesis 18:14`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},
// '138
{
  quote: {
    sv: [`“Och se, jag är med dig och skall bevara dig, varthelst du går, och jag skall föra dig tillbaka till detta land; ty jag skall icke övergiva dig, till dess jag har gjort vad jag har lovat dig.”`],
    en: [`“I am with you and will watch over you wherever you go, and I will bring you back to this land. I will not leave you until I have done what I have promised you.”`]
  },
  author: {
    sv: [`— 1 Mosebok 28:15`],
    en: [`— Genesis 28:15`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '139
{
  quote: {
    sv: [`“Du skall inga andra gudar hava jämte mig.”`],
    en: [`“You shall have no other gods before me.”`]
  },
  author: {
    sv: [`— 2 Mosebok 20:3`],
    en: [`— Exodus 20:3`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '140
{
  quote: {
    sv: [`“Tänk på sabbatsdagen, så att du helgar den.”`],
    en: [`“Remember the Sabbath day by keeping it holy.”`]
  },
  author: {
    sv: [`— 2 Mosebok 20:8`],
    en: [`— Exodus 20:8`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '141
{
  quote: {
    sv: [`“Jag har gett honom förmåga att utföra allt slags arbete, och jag har lagt vishet i hjärtat på alla som är skickliga, så att de kan göra allt jag har befallt dig.”`],
    en: [`“I have given him skill to do all kinds of work, and I have put wisdom in the hearts of all the skilled workers so they may make everything I have commanded you.”`]
  },
  author: {
    sv: [`— 2 Mosebok 31:6`],
    en: [`— Exodus 31:6`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '142
{
  quote: {
    sv: [`“HERREN välsigne dig och bevare dig. HERREN låte sitt ansikte lysa över dig och vare dig nådig. HERREN vände sitt ansikte till dig och give dig frid.”`],
    en: [`“The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.”`]
  },
  author: {
    sv: [`— 4 Mosebok 6:24-26`],
    en: [`— Numbers 6:24-26`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},
// '143
{
  quote: {
    sv: [`“Dessa ord som jag i dag ger dig befallning om, skall du lägga på hjärtat. Du skall inskärpa dem hos dina barn och tala om dem när du sitter i ditt hus och när du går på vägen, när du lägger dig och när du stiger upp.”`],
    en: [`“These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.”`]
  },
  author: {
    sv: [`— 5 Mosebok 6:6-7`],
    en: [`— Deuteronomy 6:6-7`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '144
{
  quote: {
    sv: [`“Var stark och frimodig! Var inte rädd eller förskräckt, för Herren din Gud går själv med dig. Han ska inte lämna dig eller överge dig.”`],
    en: [`“Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.”`]
  },
  author: {
    sv: [`— 5 Mosebok 31:6`],
    en: [`— Deuteronomy 31:6`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '145
{
  quote: {
    sv: [`“Men ni är ett utvalt släkte, ett konungsligt prästerskap, ett heligt folk, ett Guds eget folk, för att ni skall förkunna hans härliga gärningar, han som har kallat er från mörkret till sitt underbara ljus.”`],
    en: [`“But you are a chosen people, a royal priesthood, a holy nation, God’s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.”`]
  },
  author: {
    sv: [`— 1 Petrusbrevet 2:9`],
    en: [`— 1 Peter 2:9`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '146
{
  quote: {
    sv: [`“Jag ser det som min plikt att hålla er vakna med mina påminnelser så länge jag bor i detta kroppens tält.”`],
    en: [`“I think it is right to refresh your memory as long as I live in the tent of this body.”`]
  },
  author: {
    sv: [`— 2 Petrusbrevet 1:13`],
    en: [`— 2 Peter 1:13`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '147
{
  quote: {
    sv: [`“Herren, min Gud! Du är Gud, och dina ord är sanning. Du har lovat mig dessa goda ting. Välsigna nu din tjänares hus, så att det består inför dig för evigt.”`],
    en: [`“Sovereign Lord, you are God! Your covenant is trustworthy, and you have promised these good things to your servant. Now bless the house of your servant, that it may continue forever in your sight.”`]
  },
  author: {
    sv: [`— 2 Samuelsboken 7:28-29`],
    en: [`— 2 Samuel 7:28-29`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '148
{
  quote: {
    sv: [`“I min nöd åkallade jag Herren, jag ropade till min Gud. Från sitt tempel hörde han min röst, mitt rop nådde hans öron.”`],
    en: [`“In my distress I called to the Lord; I called out to my God. From his temple he heard my voice; my cry came to his ears.”`]
  },
  author: {
    sv: [`— 2 Samuelsboken 22:7`],
    en: [`— 2 Samuel 22:7`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '149
{
  quote: {
    sv: [`“Gör allt du kan för att bestå provet inför Gud, som en arbetare som inte behöver skämmas utan rätt delar sanningens ord.”`],
    en: [`“Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth.”`]
  },
  author: {
    sv: [`— 2 Timotheusbrevet 2:15`],
    en: [`— 2 Timothy 2:15`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '150
{
  quote: {
    sv: [`“Må Kristus bo i era hjärtan genom tron, och må ni stå fasta i kärlekens rot och grund. Då ska ni tillsammans med alla de heliga kunna fatta bredden och längden och höjden och djupet, och lära känna Kristi kärlek som går långt utöver all kunskap. Så ska ni bli helt uppfyllda av Guds fullhet.”`],
    en: [`“So that Christ may dwell in your hearts through faith. And I pray that you, being rooted and established in love, may have power, together with all the Lord’s holy people, to grasp how wide and long and high and deep is the love of Christ.”`]
  },
  author: {
    sv: [`— Efesierbrevet 3:17-19`],
    en: [`— Ephesians 3:17-19`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '151
{
  quote: {
    sv: [`“Han som har börjat ett gott verk i er ska också fullborda det till Kristi Jesu dag.”`],
    en: [`“He who began a good work in you will carry it on to completion until the day of Christ Jesus.”`]
  },
  author: {
    sv: [`— Filipperbrevet 1:6`],
    en: [`— Philippians 1:6`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '152
{
  quote: {
    sv: [`“Låt det sinnelag råda hos er som också fanns hos Kristus Jesus.”`],
    en: [`“Let this mind be in you which was also in Christ Jesus.”`]
  },
  author: {
    sv: [`— Filipperbrevet 2:5`],
    en: [`— Philippians 2:5`]
  },
  image: "may_pexels-pixabay-315998.jpg",
  credit: "Pixabay (Pexels.com)"
},

// June
// '153
{
  quote: {
    sv: [`“Arbeta med fruktan och bävan på er frälsning, inte bara som när jag var hos er utan ännu mer nu när jag är långt borta. Ty det är Gud som verkar i er så att ni både i vilja och gärning förverkligar hans syfte. Gör allting utan knot och utan förbehåll.”`],
    en: [`“Continue to work out your salvation with fear and trembling, not only in my presence but much more in my absence. For it is God who works in you to will and to act in order to fulfill his good purpose. Do everything without grumbling or arguing.”`]
  },
  author: {
    sv: [`— Filipperbrevet 2:12-14`],
    en: [`— Philippians 2:12-14`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '154
{
  quote: {
    sv: [`“Men allt det som var en vinst för mig räknar jag nu som förlust för Kristi skull. Jag räknar allt som förlust jämfört med det överlägsna i att känna Kristus Jesus, min Herre.”`],
    en: [`“But whatever were gains to me I now consider loss for the sake of Christ. I consider everything a loss because of the surpassing worth of knowing Christ Jesus my Lord.”`]
  },
  author: {
    sv: [`— Filipperbrevet 3:7-8`],
    en: [`— Philippians 3:7-8`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '155
{
  quote: {
    sv: [`“Jag glömmer det som ligger bakom och sträcker mig mot det som ligger framför. Jag jagar mot målet för att vinna segerpriset, den himmelska kallelsen från Gud i Kristus Jesus.”`],
    en: [`“Forgetting what is behind and straining toward what is ahead, I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus.”`]
  },
  author: {
    sv: [`— Filipperbrevet 3:13-14`],
    en: [`— Philippians 3:13-14`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '156
{
  quote: {
    sv: [`“Alla ni som tror på Jesus Kristus och lever i gemenskap med honom är Guds barn. Om ni är döpta in i gemenskapen med Kristus, har ni ju blivit lika Kristus själv.”`],
    en: [`“So in Christ Jesus you are all children of God through faith, for all of you who were baptized into Christ have clothed yourselves with Christ.”`]
  },
  author: {
    sv: [`— Galaterbrevet 3:26-27`],
    en: [`— Galatians 3:26-27`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '157
{
  quote: {
    sv: [`“Du är inte längre slav utan son, och är du son är du också arvinge, insatt av Gud.”`],
    en: [`“So you are no longer a slave, but God’s child; and since you are his child, God has made you also an heir.”`]
  },
  author: {
    sv: [`— Galaterbrevet 4:7`],
    en: [`— Galatians 4:7`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},
// '158
{
  quote: {
    sv: [`“Bröder, vi har alltså genom Jesu blod frimodighet att gå in i det allra heligaste på den nya och levande väg som han har öppnat för oss genom förhänget, det vill säga sin kropp. Vi har en stor överstepräst över Guds hus. Låt oss därför träda fram med uppriktigt hjärta i full trosvisshet, med hjärtan renade från ont samvete och kroppar tvättade i rent vatten. Låt oss orubbligt hålla fast vid hoppets bekännelse, för han som har gett oss löftet är trofast.”`],
    en: [`“Therefore, brothers and sisters, since we have confidence to enter the Most Holy Place by the blood of Jesus, by a new and living way opened for us through the curtain, that is, his body, and since we have a great priest over the house of God, let us draw near to God with a sincere heart and with the full assurance that faith brings, having our hearts sprinkled to cleanse us from a guilty conscience and our bodies washed with pure water. Let us hold unswervingly to the hope we profess, for he who promised is faithful.”`]
  },
  author: {
    sv: [`— Hebreerbrevet 10:19-23`],
    en: [`— Hebrews 10:19-23`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '159
{
  quote: {
    sv: [`“Låt oss ge akt på varandra och sporra varandra till kärlek och goda gärningar. Och låt oss inte överge våra sammankomster, så som några brukar göra, utan i stället uppmuntra varandra, och det så mycket mer som ni ser att dagen närmar sig.”`],
    en: [`“Let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.”`]
  },
  author: {
    sv: [`— Hebreerbrevet 10:24-25`],
    en: [`— Hebrews 10:24-25`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '160
{
  quote: {
    sv: [`“Utan tro är det omöjligt att behaga Gud. Den som vill komma till honom måste tro att han finns och att han belönar dem som söker honom.”`],
    en: [`“And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.”`]
  },
  author: {
    sv: [`— Hebreerbrevet 11:6`],
    en: [`— Hebrews 11:6`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '161
{
  quote: {
    sv: [`“Låt oss därför, omgivna av en sådan sky av vittnen, lägga bort allt som tynger och särskilt synden som snärjer oss så hårt, och löpa uthålligt i det lopp vi har framför oss. Låt oss ha blicken fäst vid Jesus, trons upphovsman och fullkomnare.”`],
    en: [`“Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.”`]
  },
  author: {
    sv: [`— Hebreerbrevet 12:1-2`],
    en: [`— Hebrews 12:1-2`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '162
{
  quote: {
    sv: [`“Ödmjuka er inför Herren, så ska han upphöja er.”`],
    en: [`“Humble yourselves before the Lord, and he will lift you up.”`]
  },
  author: {
    sv: [`— Jakobsbrevet 4:10`],
    en: [`— James 4:10`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},
// '163
{
  quote: {
    sv: [`“Ni vet inte hur ert liv blir i morgon. Ni är en dimma som syns en kort stund och sedan försvinner. Ni borde säga: ’Om Herren vill får vi leva och göra det eller det.’”`],
    en: [`“You do not even know what will happen tomorrow. What is your life? You are a mist that appears for a little while and then vanishes. Instead, you ought to say, ‘If it is the Lord’s will, we will live and do this or that.’”`]
  },
  author: {
    sv: [`— Jakobsbrevet 4:14-15`],
    en: [`— James 4:14-15`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '164
{
  quote: {
    sv: [`“Trons bön ska rädda den sjuke, och Herren ska resa honom upp. Har han syndat, ska han få förlåtelse. Bekänn därför era synder för varandra och be för varandra, så att ni blir botade. En rättfärdig människas bön är verksam och har kraft.”`],
    en: [`“The prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven. Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.”`]
  },
  author: {
    sv: [`— Jakobsbrevet 5:15-16`],
    en: [`— James 5:15-16`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '165
{
  quote: {
    sv: [`“Välsignad är den man som litar till Herren, som litar helt till Herren.”`],
    en: [`“Blessed is the one who trusts in the Lord, whose confidence is in him.”`]
  },
  author: {
    sv: [`— Jeremia 17:7`],
    en: [`— Jeremiah 17:7`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '166
{
  quote: {
    sv: [`“Som leran i krukmakarens hand, så är ni i min hand.”`],
    en: [`“Like clay in the hand of the potter, so are you in my hand.”`]
  },
  author: {
    sv: [`— Jeremia 18:6`],
    en: [`— Jeremiah 18:6`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '167
{
  quote: {
    sv: [`“Ni ska kalla på mig och komma och be till mig, och jag ska lyssna på er.”`],
    en: [`“Then you will call on me and come and pray to me, and I will listen to you.”`]
  },
  author: {
    sv: [`— Jeremia 29:12`],
    en: [`— Jeremiah 29:12`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},
// '168
{
  quote: {
    sv: [`“Jag skall ge dig hälsa och läka dina sår, säger Herren, ty de har kallat dig ’den fördrivna’, ’Sion som ingen frågar efter’.”`],
    en: [`“But I will restore you to health and heal your wounds,’ declares the Lord, ‘because you are called an outcast, Zion for whom no one cares.”`]
  },
  author: {
    sv: [`— Jeremia 30:17`],
    en: [`— Jeremiah 30:17`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '169
{
  quote: {
    sv: [`“Med evig kärlek har jag älskat dig, därför har jag dragit dig till mig i trofasthet.”`],
    en: [`“I have loved you with an everlasting love; I have drawn you with unfailing kindness.”`]
  },
  author: {
    sv: [`— Jeremia 31:3`],
    en: [`— Jeremiah 31:3`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '170
{
  quote: {
    sv: [`“Kom, låt oss gå till rätta med varandra, säger Herren. Om era synder än är blodröda, skall de bli snövita, om de än är röda som scharlakan, skall de bli vita som ull.”`],
    en: [`“Come now, let us settle the matter,” says the Lord. “Though your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool.”`]
  },
  author: {
    sv: [`— Jesaja 1:18`],
    en: [`— Isaiah 1:18`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '171
{
  quote: {
    sv: [`“Gud är min frälsning, jag är trygg och utan fruktan. Herren är min styrka och min lovsång, han blev min frälsning.”`],
    en: [`“Surely God is my salvation; I will trust and not be afraid. The Lord, the Lord himself, is my strength and my defense; he has become my salvation.”`]
  },
  author: {
    sv: [`— Jesaja 12:2`],
    en: [`— Isaiah 12:2`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '172
{
  quote: {
    sv: [`“Den som är ståndaktig i sitt sinne bevarar du i frid, ty han förtröstar på dig.”`],
    en: [`“You will keep in perfect peace those whose minds are steadfast, because they trust in you.”`]
  },
  author: {
    sv: [`— Jesaja 26:3`],
    en: [`— Isaiah 26:3`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},
// '173
{
  quote: {
    sv: [`“I kommande dagar ska Jakob slå rot, Israel grönska och blomstra. De ska fylla hela världen med frukt.”`],
    en: [`“In days to come Jacob will take root, Israel will bud and blossom and fill all the world with fruit.”`]
  },
  author: {
    sv: [`— Jesaja 27:6`],
    en: [`— Isaiah 27:6`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '174
{
  quote: {
    sv: [`“Mitt folk ska bo i fridens boning, i trygga hem och i säkra viloplatser.”`],
    en: [`“My people will live in peaceful dwelling places, in secure homes, in undisturbed places of rest.”`]
  },
  author: {
    sv: [`— Jesaja 32:18`],
    en: [`— Isaiah 32:18`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '175
{
  quote: {
    sv: [`“Ty jag är Herren, din Gud, som håller dig vid din högra hand och säger till dig: Frukta inte, jag hjälper dig.”`],
    en: [`“For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.”`]
  },
  author: {
    sv: [`— Jesaja 41:13`],
    en: [`— Isaiah 41:13`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '176
{
  quote: {
    sv: [`“Jag ska föra de blinda på en väg som de inte känner, och leda dem på stigar de inte känner till. Jag ska göra mörker till ljus inför dem och krokiga vägar raka. Detta ska jag göra och inte överge dem.”`],
    en: [`“I will lead the blind by ways they have not known, along unfamiliar paths I will guide them; I will turn the darkness into light before them and make the rough places smooth. These are the things I will do; I will not forsake them.”`]
  },
  author: {
    sv: [`— Jesaja 42:16`],
    en: [`— Isaiah 42:16`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '177
{
  quote: {
    sv: [`“När du går genom vatten är jag med dig, genom strömmar ska de inte dränka dig. När du går genom eld ska du inte bli bränd, lågan ska inte skada dig.”`],
    en: [`“When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.”`]
  },
  author: {
    sv: [`— Jesaja 43:2`],
    en: [`— Isaiah 43:2`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},
// '178
{
  quote: {
    sv: [`“Frukta inte, var inte förskräckta. Har jag inte låtit er höra det och förkunnat det för länge sedan? Ni är mina vittnen. Finns det någon annan Gud än jag? Nej, det finns ingen annan klippa, jag vet ingen.”`],
    en: [`“Do not tremble, do not be afraid. Did I not proclaim this and foretell it long ago? You are my witnesses. Is there any God besides me? No, there is no other Rock; I know not one.”`]
  },
  author: {
    sv: [`— Jesaja 44:8`],
    en: [`— Isaiah 44:8`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '179
{
  quote: {
    sv: [`“Om än bergen viker bort och höjderna vacklar, ska min nåd inte vika från dig och mitt fredsförbund inte rubbas, säger Herren, din förbarmare.”`],
    en: [`“Though the mountains be shaken and the hills be removed, yet my unfailing love for you will not be shaken nor my covenant of peace be removed,” says the Lord, who has compassion on you.”`]
  },
  author: {
    sv: [`— Jesaja 54:10`],
    en: [`— Isaiah 54:10`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '180
{
  quote: {
    sv: [`“Kom, alla ni som törstar, kom hit och få vatten! Kom, även om ni inte har pengar! Köp säd och ät. Kom och köp säd utan pengar, vin och mjölk utan att betala.”`],
    en: [`“Come, all you who are thirsty, come to the waters; and you who have no money, come, buy and eat! Come, buy wine and milk without money and without cost.”`]
  },
  author: {
    sv: [`— Jesaja 55:1`],
    en: [`— Isaiah 55:1`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '181
{
  quote: {
    sv: [`“Sök Herren medan han låter sig finnas, åkalla honom medan han är nära.”`],
    en: [`“Seek the Lord while he may be found; call on him while he is near.”`]
  },
  author: {
    sv: [`— Jesaja 55:6`],
    en: [`— Isaiah 55:6`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

// '182
{
  quote: {
    sv: [`“När du ropar ska Herren svara. När du ropar: ’Här är jag!’ ska han säga: ’Jag är här.’”`],
    en: [`“Then you will call, and the Lord will answer; you will cry for help, and he will say: ‘Here am I.’”`]
  },
  author: {
    sv: [`— Jesaja 58:9`],
    en: [`— Isaiah 58:9`]
  },
  image: "jun_pexels-troy-squillaci-1303476-2521619.jpg",
  credit: "Troy Squillaci (Pexels.com)"
},

//July
// '183
{
  quote: {
    sv: [`“Herrens arm är inte för svag för att rädda, hans öra inte för dövt för att höra.”`],
    en: [`“Surely the arm of the Lord is not too short to save, nor his ear too dull to hear.”`]
  },
  author: {
    sv: [`— Jesaja 59:1`],
    en: [`— Isaiah 59:1`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '184
{
  quote: {
    sv: [`“Innan de ropar ska jag svara, medan de ännu talar ska jag höra.”`],
    en: [`“Before they call I will answer; while they are still speaking I will hear.”`]
  },
  author: {
    sv: [`— Jesaja 65:24`],
    en: [`— Isaiah 65:24`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '185
{
  quote: {
    sv: [`“Allt vad du beslutar skall gå dig väl, och ljus skall skina på dina vägar.”`],
    en: [`“What you decide on will be done, and light will shine on your ways.”`]
  },
  author: {
    sv: [`— Job 22:28`],
    en: [`— Job 22:28`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '186
{
  quote: {
    sv: [`“Jesus sade: ’Jag är uppståndelsen och livet. Den som tror på mig ska leva om han än dör, och den som lever och tror på mig ska aldrig någonsin dö. Tror du detta?’”`],
    en: [`“Jesus said, ‘I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?’”`]
  },
  author: {
    sv: [`— Johannesevangeliet 11:25-26`],
    en: [`— John 11:25-26`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '187
{
  quote: {
    sv: [`“Jesus grät.”`],
    en: [`“Jesus wept.”`]
  },
  author: {
    sv: [`— Johannesevangeliet 11:35`],
    en: [`— John 11:35`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},
// '188
{
  quote: {
    sv: [`“Och vad ni än ber om i mitt namn skall jag göra, så att Fadern blir förhärligad genom Sonen. Om ni ber om något i mitt namn skall jag göra det.”`],
    en: [`“And I will do whatever you ask in my name, so that the Father may be glorified in the Son. You may ask me for anything in my name, and I will do it.”`]
  },
  author: {
    sv: [`— Johannesevangeliet 14:13-14`],
    en: [`— John 14:13-14`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '189
{
  quote: {
    sv: [`“Men Hjälparen, den heliga anden som Fadern skall sända i mitt namn, han skall lära er allt och påminna er om allt som jag har sagt er. Frid lämnar jag kvar åt er, min frid ger jag er. Jag ger er inte det som världen ger.”`],
    en: [`“But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you. Peace I leave with you; my peace I give you. I do not give to you as the world gives.”`]
  },
  author: {
    sv: [`— Johannesevangeliet 14:26-27`],
    en: [`— John 14:26-27`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '190
{
  quote: {
    sv: [`“Men när han kommer, sanningens Ande, skall han vägleda er med hela sanningen. Han skall inte tala av sig själv, utan bara säga det han hör, och han skall förkunna för er vad som kommer.”`],
    en: [`“But when he, the Spirit of truth, comes, he will guide you into all the truth. He will not speak on his own; he will speak only what he hears, and he will tell you what is yet to come.”`]
  },
  author: {
    sv: [`— Johannesevangeliet 16:13`],
    en: [`— John 16:13`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '191
{
  quote: {
    sv: [`“Detta har jag sagt er för att ni skall ha frid i mig. I världen får ni lida, men var vid gott mod: jag har övervunnit världen.”`],
    en: [`“I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.”`]
  },
  author: {
    sv: [`— Johannesevangeliet 16:33`],
    en: [`— John 16:33`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '192
{
  quote: {
    sv: [`“Han sade till honom för tredje gången: ’Simon, Johannes son, älskar du mig?’ Petrus blev bedrövad över att Jesus för tredje gången frågade: ’Älskar du mig?’ och han svarade: ’Herre, du vet allt. Du vet att jag har dig kär.’ Jesus sade: ’För mina får på bete.’”`],
    en: [`“The third time he said to him, ‘Simon son of John, do you love me?’ Peter was hurt because Jesus asked him the third time, ‘Do you love me?’ He said, ‘Lord, you know all things; you know that I love you.’ Jesus said, ‘Feed my sheep.’”`]
  },
  author: {
    sv: [`— Johannesevangeliet 21:17`],
    en: [`— John 21:17`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},
// '193
{
  quote: {
    sv: [`“Ingen skall kunna stå dig emot i alla dina livsdagar. Såsom jag har varit med Mose, så skall jag ock vara med dig; jag skall icke lämna dig eller övergiva dig.”`],
    en: [`“No one will be able to stand against you all the days of your life. As I was with Moses, so I will be with you; I will never leave you nor forsake you.”`]
  },
  author: {
    sv: [`— Josua 1:5`],
    en: [`— Joshua 1:5`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '194
{
  quote: {
    sv: [`“Var tapper och stark! Följ troget den lag som min tjänare Mose gav dig. Vik inte av från den åt vare sig höger eller vänster, så får du framgång i allt vad du gör.”`],
    en: [`“Be strong and very courageous. Be careful to obey all the law my servant Moses gave you; do not turn from it to the right or to the left, that you may be successful wherever you go.”`]
  },
  author: {
    sv: [`— Josua 1:7`],
    en: [`— Joshua 1:7`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '195
{
  quote: {
    sv: [`“Av allt det goda som Herren hade lovat Israels folk gick inte ett enda löfte om intet. Allt gick i uppfyllelse.”`],
    en: [`“Not one of all the Lord’s good promises to Israel failed; every one was fulfilled.”`]
  },
  author: {
    sv: [`— Josua 21:45`],
    en: [`— Joshua 21:45`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '196
{
  quote: {
    sv: [`“En enda man bland er kunde jaga tusen, ty Herren, er Gud, strider för er, så som han har lovat er.”`],
    en: [`“One of you routs a thousand, because the Lord your God fights for you, just as he promised.”`]
  },
  author: {
    sv: [`— Josua 23:10`],
    en: [`— Joshua 23:10`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '197
{
  quote: {
    sv: [`“Han som kan bevara er från fall och ställa er inför sin härlighet, fläckfria och jublande — honom tillhör härlighet och majestät, styrka och makt, före all tids början, nu och i all evighet. Amen.”`],
    en: [`“To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy — to the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore! Amen.”`]
  },
  author: {
    sv: [`— Judasbrevet 24–25`],
    en: [`— Jude 24–25`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},
// '198
{
  quote: {
    sv: [`“Döm inte, så skall ni inte bli dömda. Fördöm inte, så skall ni inte bli fördömda. Förlåt, så skall ni få förlåtelse. Ge, så skall ni få. Ett gott mått, packat, skakat och rågat skall ni få i er famn. Ty med det mått som ni mäter med skall det mätas upp åt er.”`],
    en: [`“Do not judge, and you will not be judged. Do not condemn, and you will not be condemned. Forgive, and you will be forgiven. Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.”`]
  },
  author: {
    sv: [`— Lukasevangeliet 6:37–38`],
    en: [`— Luke 6:37–38`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '199
{
  quote: {
    sv: [`“En gång var Jesus på en plats där han bad. När han slutade sade en av hans lärjungar till honom: ’Herre, lär oss att be, liksom Johannes lärde sina lärjungar.’”`],
    en: [`“One day Jesus was praying in a certain place. When he finished, one of his disciples said to him, ‘Lord, teach us to pray, just as John taught his disciples.’”`]
  },
  author: {
    sv: [`— Lukasevangeliet 11:1`],
    en: [`— Luke 11:1`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '200
{
  quote: {
    sv: [`“Förlåt oss våra synder, ty också vi förlåter var och en som står i skuld till oss. Och för oss inte in i frestelse.”`],
    en: [`“Forgive us our sins, for we also forgive everyone who sins against us. And lead us not into temptation.”`]
  },
  author: {
    sv: [`— Lukasevangeliet 11:4`],
    en: [`— Luke 11:4`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '201
{
  quote: {
    sv: [`“Jag säger er: På samma sätt blir det glädje i himlen över en enda syndare som omvänder sig, mer än över nittionio rättfärdiga som inte behöver omvända sig.”`],
    en: [`“I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent.”`]
  },
  author: {
    sv: [`— Lukasevangeliet 15:7`],
    en: [`— Luke 15:7`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '202
{
  quote: {
    sv: [`“Mitt barn, du är alltid hos mig, och allt mitt är ditt. Men nu måste vi hålla fest och vara glada, för din bror var död och har fått liv igen, han var förlorad och är återfunnen.”`],
    en: [`“My son, you are always with me, and everything I have is yours. But we had to celebrate and be glad, because this brother of yours was dead and is alive again; he was lost and is found.”`]
  },
  author: {
    sv: [`— Lukasevangeliet 15:31–32`],
    en: [`— Luke 15:31–32`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},
// '203
{
  quote: {
    sv: [`“Den som är trogen i det lilla är också trogen i det stora, och den som är ohederlig i det lilla är också ohederlig i det stora.”`],
    en: [`“Whoever can be trusted with very little can also be trusted with much, and whoever is dishonest with very little will also be dishonest with much.”`]
  },
  author: {
    sv: [`— Lukasevangeliet 16:10`],
    en: [`— Luke 16:10`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '204
{
  quote: {
    sv: [`“Guds rike kommer inte så att man kan se det med ögonen. Inte heller ska man kunna säga: ’Här är det’ eller ’Där är det’. Nej, Guds rike är mitt ibland er.”`],
    en: [`“The kingdom of God is not something that can be observed, nor will people say, ‘Here it is,’ or ‘There it is,’ because the kingdom of God is in your midst.”`]
  },
  author: {
    sv: [`— Lukasevangeliet 17:20–21`],
    en: [`— Luke 17:20–21`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '205
{
  quote: {
    sv: [`“Två män gick upp till templet för att be, den ene var farisé och den andre tullindrivare. Farisén stod och bad för sig själv: ’Jag tackar dig, Gud, för att jag inte är som andra människor – tjuvar, bedragare, äktenskapsbrytare – eller som den där tullindrivaren.’ Men tullindrivaren stod långt borta och ville inte ens lyfta blicken mot himlen, utan slog sig för bröstet och sade: ’Gud, var nådig mot mig, en syndare.’”`],
    en: [`“Two men went up to the temple to pray, one a Pharisee and the other a tax collector. The Pharisee stood by himself and prayed: ‘God, I thank you that I am not like other people—robbers, evildoers, adulterers—or even like this tax collector.’ But the tax collector stood at a distance. He would not even look up to heaven, but beat his breast and said, ‘God, have mercy on me, a sinner.’”`]
  },
  author: {
    sv: [`— Lukasevangeliet 18:10–13`],
    en: [`— Luke 18:10–13`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '206
{
  quote: {
    sv: [`“När han närmade sig sluttningen av Olivberget började hela skaran av lärjungar i sin glädje prisa Gud med hög röst för alla de underverk de hade sett. De sade: ’Välsignad är han som kommer, konungen, i Herrens namn! Fred i himlen och ära i höjden!’”`],
    en: [`“When he came near the place where the road goes down the Mount of Olives, the whole crowd of disciples began joyfully to praise God in loud voices for all the miracles they had seen: ‘Blessed is the king who comes in the name of the Lord! Peace in heaven and glory in the highest!’”`]
  },
  author: {
    sv: [`— Lukasevangeliet 19:37–38`],
    en: [`— Luke 19:37–38`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '207
{
  quote: {
    sv: [`“Jesus gick ut som vanligt till Olivberget, och lärjungarna följde honom. När han kom dit sade han till dem: ’Be att ni inte kommer i frestelse.’”`],
    en: [`“Jesus went out as usual to the Mount of Olives, and his disciples followed him. On reaching the place, he said to them, ‘Pray that you will not fall into temptation.’”`]
  },
  author: {
    sv: [`— Lukasevangeliet 22:39–40`],
    en: [`— Luke 22:39–40`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},
// '208
{
  quote: {
    sv: [`“Vi har dömts med rätta, vi får vad vi har förtjänat. Men han har inte gjort något ont.” Och han sade: “Jesus, tänk på mig när du kommer med ditt rike.” Jesus svarade: “Sannerligen, redan i dag skall du vara med mig i paradiset.”`],
    en: [`“We are punished justly, for we are getting what our deeds deserve. But this man has done nothing wrong.” Then he said, “Jesus, remember me when you come into your kingdom.” Jesus answered him, “Truly I tell you, today you will be with me in paradise.”`]
  },
  author: {
    sv: [`— Lukasevangeliet 23:41–43`],
    en: [`— Luke 23:41–43`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '209
{
  quote: {
    sv: [`“Tidigt nästa morgon, medan det ännu var mörkt, gick han bort till en enslig plats, och där bad han.”`],
    en: [`“Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed.”`]
  },
  author: {
    sv: [`— Markusevangeliet 1:35`],
    en: [`— Mark 1:35`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '210
{
  quote: {
    sv: [`“Fylld av medlidande räckte Jesus ut handen, rörde vid honom och sade: ’Jag vill. Bli ren!’”`],
    en: [`“Filled with compassion, Jesus reached out his hand and touched the man. ‘I am willing,’ he said. ‘Be clean!’”`]
  },
  author: {
    sv: [`— Markusevangeliet 1:41`],
    en: [`— Mark 1:41`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '211
{
  quote: {
    sv: [`“Jesus sade till dem: ’Ni får veta hemligheten om Guds rike, men för dem utanför sker allting i liknelser.’”`],
    en: [`“He told them, ‘The secret of the kingdom of God has been given to you. But to those on the outside everything is said in parables.’”`]
  },
  author: {
    sv: [`— Markusevangeliet 4:11`],
    en: [`— Mark 4:11`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

// '212
{
  quote: {
    sv: [`“Han vaknade och talade strängt till vinden och sade till sjön: ’Tig! Var tyst!’ Då lade sig vinden, och det blev alldeles stilla.”`],
    en: [`“He got up, rebuked the wind and said to the waves, ‘Quiet! Be still!’ Then the wind died down and it was completely calm.”`]
  },
  author: {
    sv: [`— Markusevangeliet 4:39`],
    en: [`— Mark 4:39`]
  },
  image: "jul_pexels-petra-nesti-1766376-20303235.jpg",
  credit: "Petra Nesti (Pexels.com)"
},

//august
// '213
{
  quote: {
    sv: [`“Men Jesus sade genast till dem: ’Var lugna, det är jag. Var inte rädda.’”`],
    en: [`“But Jesus immediately said to them: ‘Take courage! It is I. Don’t be afraid.’”`]
  },
  author: {
    sv: [`— Markusevangeliet 6:50`],
    en: [`— Mark 6:50`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '214
{
  quote: {
    sv: [`“Därför säger jag er: Allt vad ni ber om i er bön, tro att ni har fått det, så skall det bli ert.”`],
    en: [`“Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.”`]
  },
  author: {
    sv: [`— Markusevangeliet 11:24`],
    en: [`— Mark 11:24`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '215
{
  quote: {
    sv: [`“Men han sade till dem: ’Var inte förskräckta! Ni söker Jesus från Nasaret, den korsfäste. Han har uppstått, han är inte här. Se, här är platsen där de lade honom.’”`],
    en: [`“Don’t be alarmed,” he said. “You are looking for Jesus the Nazarene, who was crucified. He has risen! He is not here. See the place where they laid him.”`]
  },
  author: {
    sv: [`— Markusevangeliet 16:6`],
    en: [`— Mark 16:6`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '216
{
  quote: {
    sv: [`“Ni är jordens salt. Men om saltet mister sin sälta, hur skall man då få det salt igen? Det duger inte till annat än att kastas bort och trampas ner av människorna.”`],
    en: [`“You are the salt of the earth. But if the salt loses its saltiness, how can it be made salty again? It is no longer good for anything, except to be thrown out and trampled underfoot.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 5:13`],
    en: [`— Matthew 5:13`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '217
{
  quote: {
    sv: [`“Ni är världens ljus. En stad som ligger på ett berg kan inte döljas.”`],
    en: [`“You are the light of the world. A town built on a hill cannot be hidden.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 5:14`],
    en: [`— Matthew 5:14`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},
// '218
{
  quote: {
    sv: [`“Så ska ni be: Vår Far i himlen, låt ditt namn bli helgat. Låt ditt rike komma. Låt din vilja ske, på jorden som i himlen. Ge oss i dag vårt dagliga bröd. Och förlåt oss våra skulder, så som vi förlåter dem som står i skuld till oss. Och för oss inte in i frestelse, utan fräls oss från det onda.”`],
    en: [`“This, then, is how you should pray: Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 6:9–13`],
    en: [`— Matthew 6:9–13`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '219
{
  quote: {
    sv: [`“Därför säger jag er: Bekymra er inte för ert liv, vad ni ska äta eller dricka, inte heller för er kropp, vad ni ska ha på er. Är inte livet mer än maten och kroppen mer än kläderna?”`],
    en: [`“Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?”`]
  },
  author: {
    sv: [`— Matteusevangeliet 6:25`],
    en: [`— Matthew 6:25`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '220
{
  quote: {
    sv: [`“Gör er därför inga bekymmer för morgondagen. Den får själv bära sina bekymmer. Var dag har nog av sin egen plåga.”`],
    en: [`“Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 6:34`],
    en: [`— Matthew 6:34`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '221
{
  quote: {
    sv: [`“Be, så ska ni få. Sök, så ska ni finna. Bulta, så ska dörren öppnas.”`],
    en: [`“Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 7:7`],
    en: [`— Matthew 7:7`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '222
{
  quote: {
    sv: [`“Allt vad ni vill att människorna ska göra för er, det ska ni också göra för dem. Detta är lagen och profeterna.”`],
    en: [`“So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 7:12`],
    en: [`— Matthew 7:12`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},
// '223
{
  quote: {
    sv: [`“Gå in genom den trånga porten. Ty den port är vid och den väg är bred som leder till fördärvet, och det är många som går in genom den. Men den port är trång och den väg är smal som leder till livet, och det är få som finner den.”`],
    en: [`“Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it. But small is the gate and narrow the road that leads to life, and only a few find it.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 7:13–14`],
    en: [`— Matthew 7:13–14`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '224
{
  quote: {
    sv: [`“Den som hör dessa mina ord och handlar efter dem är som en klok man som byggde sitt hus på berggrund. Regnet öste ner, floden kom, vindarna blåste och kastade sig mot huset, men det rasade inte, eftersom det var byggt på berggrund.”`],
    en: [`“Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its foundation on the rock.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 7:24–25`],
    en: [`— Matthew 7:24–25`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '225
{
  quote: {
    sv: [`“Säljs inte två sparvar för ett öre? Och ändå faller ingen av dem till marken utan er Faders vilja. På er är till och med alla hårstrån räknade. Var alltså inte rädda. Ni är mer värda än många sparvar.”`],
    en: [`“Are not two sparrows sold for a penny? Yet not one of them will fall to the ground outside your Father’s care. And even the very hairs of your head are all numbered. So don’t be afraid; you are worth more than many sparrows.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 10:29–31`],
    en: [`— Matthew 10:29–31`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '226
{
  quote: {
    sv: [`“Den som hör ordet och förstår det, han bär frukt: hundrafalt, sextiofalt och trettiofalt.”`],
    en: [`“The one who hears the word and understands it produces a crop, yielding a hundred, sixty or thirty times what was sown.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 13:23`],
    en: [`— Matthew 13:23`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '227
{
  quote: {
    sv: [`“Himmelriket är som en skatt som ligger gömd i en åker. En man hittar den och gömmer den igen, och i sin glädje går han och säljer allt han har och köper åkern.”`],
    en: [`“The kingdom of heaven is like treasure hidden in a field. When a man found it, he hid it again, and then in his joy went and sold all he had and bought that field.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 13:44`],
    en: [`— Matthew 13:44`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},
// '228
{
  quote: {
    sv: [`“Lyssna och förstå: Det är inte det som går in i munnen som gör människan oren, utan det som går ut ur munnen — det gör människan oren.”`],
    en: [`“Listen and understand: What goes into someone’s mouth does not defile them, but what comes out of their mouth, that is what defiles them.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 15:10–11`],
    en: [`— Matthew 15:10–11`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '229
{
  quote: {
    sv: [`“Jag är inte sänd till andra än de förlorade fåren av Israels folk.”`],
    en: [`“I was sent only to the lost sheep of Israel.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 15:24`],
    en: [`— Matthew 15:24`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '230
{
  quote: {
    sv: [`“Om någon vill följa mig, skall han förneka sig själv och ta sitt kors och följa mig. Den som vill rädda sitt liv skall mista det, men den som mister sitt liv för min skull skall finna det.”`],
    en: [`“Whoever wants to be my disciple must deny themselves and take up their cross and follow me. For whoever wants to save their life will lose it, but whoever loses their life for me will find it.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 16:24–25`],
    en: [`— Matthew 16:24–25`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '231
{
  quote: {
    sv: [`“Om ni har tro som ett senapskorn, skall ni säga till detta berg: Flytta dig härifrån dit bort, och det skall flytta sig. Ingenting skall vara omöjligt för er.”`],
    en: [`“If you have faith as small as a mustard seed, you can say to this mountain, ‘Move from here to there,’ and it will move. Nothing will be impossible for you.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 17:20`],
    en: [`— Matthew 17:20`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '232
{
  quote: {
    sv: [`“Den som ödmjukar sig som detta barn, han är den störste i himmelriket.”`],
    en: [`“Whoever humbles himself like this child is the greatest in the kingdom of heaven.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 18:4`],
    en: [`— Matthew 18:4`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},
// '233
{
  quote: {
    sv: [`“Vad tror ni: om en man har hundra får och ett av dem kommer bort, lämnar han då inte de nittionio kvar i bergen och ger sig ut och letar efter det som är borta? Och om han lyckas hitta det, sannerligen, då gläder han sig mer över det än över de nittionio som inte har kommit bort. Så är det också er himmelske Faders vilja att ingen av dessa små skall gå förlorad.”`],
    en: [`“What do you think? If a man owns a hundred sheep, and one of them wanders away, will he not leave the ninety-nine on the hills and go to look for the one that wandered off? And if he finds it, truly I tell you, he is happier about that one sheep than about the ninety-nine that did not wander off. In the same way your Father in heaven is not willing that any of these little ones should perish.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 18:12–14`],
    en: [`— Matthew 18:12–14`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '234
{
  quote: {
    sv: [`“Vidare säger jag er: allt vad två av er kommer överens om att be om här på jorden, det skall de få av min himmelske Fader. Ty där två eller tre är samlade i mitt namn är jag mitt ibland dem.”`],
    en: [`“Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven. For where two or three gather in my name, there am I with them.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 18:19–20`],
    en: [`— Matthew 18:19–20`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '235
{
  quote: {
    sv: [`“Då kom Petrus fram till honom och sade: ’Herre, hur många gånger skall min broder kunna göra orätt mot mig och ändå få förlåtelse av mig? Så mycket som sju gånger?’ Jesus svarade: ’Jag säger dig: inte sju gånger utan sjuttiosju gånger.’”`],
    en: [`“Then Peter came to Jesus and asked, ‘Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?’ Jesus answered, ‘I tell you, not seven times, but seventy-seven times.’”`]
  },
  author: {
    sv: [`— Matteusevangeliet 18:21–22`],
    en: [`— Matthew 18:21–22`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '236
{
  quote: {
    sv: [`“En man kom fram till Jesus och frågade: ’Mästare, vad skall jag göra för att få evigt liv?’ Jesus svarade: ’Om du vill gå in i livet, håll buden.’ Mannen sade: ’Vilka?’ Jesus svarade: ’Du skall inte mörda. Du skall inte begå äktenskapsbrott. Du skall inte stjäla. Du skall inte vittna falskt. Visa aktning för din far och din mor, och älska din nästa som dig själv.’ Mannen sade: ’Allt detta har jag hållit. Vad fattas mig?’ Jesus svarade: ’Om du vill vara fullkomlig, gå och sälj allt du har och ge åt de fattiga. Då får du en skatt i himlen. Kom sedan och följ mig.’”`],
    en: [`“A man came up to Jesus and asked, ‘Teacher, what good thing must I do to get eternal life?’ Jesus replied, ‘If you want to enter life, keep the commandments.’ ‘Which ones?’ he inquired. Jesus replied, ‘You shall not murder, you shall not commit adultery, you shall not steal, you shall not give false testimony, honor your father and mother, and love your neighbor as yourself.’ ‘All these I have kept,’ the young man said. ‘What do I still lack?’ Jesus answered, ‘If you want to be perfect, go, sell your possessions and give to the poor, and you will have treasure in heaven. Then come, follow me.’”`]
  },
  author: {
    sv: [`— Matteusevangeliet 19:16–21`],
    en: [`— Matthew 19:16–21`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '237
{
  quote: {
    sv: [`“Jesus såg på dem och sade: ’För människor är det omöjligt, men för Gud är allting möjligt.’”`],
    en: [`“Jesus looked at them and said, ‘With man this is impossible, but with God all things are possible.’”`]
  },
  author: {
    sv: [`— Matteusevangeliet 19:26`],
    en: [`— Matthew 19:26`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},
// '238
{
  quote: {
    sv: [`“Då sade han till en av dem: ’Min vän, jag är inte orättvis mot dig. Vi kom ju överens om en denar. Ta nu vad du skall ha och gå. Men jag vill ge den siste lika mycket som du fick. Har jag inte rätt att göra som jag vill med det som är mitt? Eller ser du med onda ögon på att jag är god?’ Så skall de sista bli först och de första sist.”`],
    en: [`“But he answered one of them, ‘Friend, I am not being unfair to you. Didn’t you agree to work for a denarius? Take your pay and go. I want to give the one who was hired last the same as I gave you. Don’t I have the right to do what I want with my own money? Or are you envious because I am generous?’ So the last will be first, and the first will be last.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 20:13–16`],
    en: [`— Matthew 20:13–16`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '239
{
  quote: {
    sv: [`“Ni vet att härskarna är herrar över sina folk och att furstarna har makten över folken. Men så är det inte hos er. Den som vill vara stor bland er skall vara de andras tjänare, och den som vill vara den främste bland er skall vara de andras slav. Så har Människosonen inte kommit för att bli tjänad utan för att tjäna och ge sitt liv till lösen för många.”`],
    en: [`“You know that the rulers of the Gentiles lord it over them, and their high officials exercise authority over them. Not so with you. Instead, whoever wants to become great among you must be your servant, and whoever wants to be first must be your slave—just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 20:25–28`],
    en: [`— Matthew 20:25–28`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '240
{
  quote: {
    sv: [`“Allt vad ni ber om i er bön, tro att ni har fått det, så skall det bli ert.”`],
    en: [`“If you believe, you will receive whatever you ask for in prayer.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 21:22`],
    en: [`— Matthew 21:22`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '241
{
  quote: {
    sv: [`“En man hade två söner. Han gick till den första och sade: ’Min son, gå och arbeta i vingården i dag.’ Han svarade: ’Jag vill inte.’ Men sedan ångrade han sig och gick. Fadern gick till den andre och sade samma sak. Han svarade: ’Ja, herre’, men han gick inte. Vem av de två gjorde faderns vilja?”`],
    en: [`“There was a man who had two sons. He went to the first and said, ‘Son, go and work today in the vineyard.’ ‘I will not,’ he answered, but later he changed his mind and went. Then the father went to the other son and said the same thing. He answered, ‘I will, sir,’ but he did not go. Which of the two did what his father wanted?”`]
  },
  author: {
    sv: [`— Matteusevangeliet 21:28–31`],
    en: [`— Matthew 21:28–31`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

// '242
{
  quote: {
    sv: [`“Har ni aldrig läst vad Gud sade till er: ’Jag är Abrahams Gud och Isaks Gud och Jakobs Gud’? Han är inte de dödas Gud utan de levandes.”`],
    en: [`“Have you not read what God said to you, ‘I am the God of Abraham, the God of Isaac, and the God of Jacob’? He is not the God of the dead but of the living.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 22:31–32`],
    en: [`— Matthew 22:31–32`]
  },
  image: "aug_pexels-pixabay-462162.jpg",
  credit: "Pixabay (Pexels.com)"
},

//sept
// '243
{
  quote: {
    sv: [`“Mästare, vilket är det största budet i lagen?” Han svarade: “Du skall älska Herren din Gud med hela ditt hjärta och med hela din själ och med hela ditt förstånd. Det är det största och första budet. Sedan kommer ett av samma slag: Du skall älska din nästa som dig själv. På dessa två bud hänger hela lagen och profeterna.”`],
    en: [`“Teacher, which is the greatest commandment in the Law?” Jesus replied: “‘Love the Lord your God with all your heart and with all your soul and with all your mind.’ This is the first and greatest commandment. And the second is like it: ‘Love your neighbor as yourself.’ All the Law and the Prophets hang on these two commandments.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 22:36–40`],
    en: [`— Matthew 22:36–40`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '244
{
  quote: {
    sv: [`“Den som är störst bland er skall vara de andras tjänare. Den som upphöjer sig skall bli förödmjukad, och den som ödmjukar sig skall bli upphöjd.”`],
    en: [`“The greatest among you will be your servant. For those who exalt themselves will be humbled, and those who humble themselves will be exalted.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 23:11–12`],
    en: [`— Matthew 23:11–12`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '245
{
  quote: {
    sv: [`“Håll er därför vakna, ty ni vet inte vilken dag er Herre kommer. Tänk på detta: om husets herre visste när på natten tjuven kom, skulle han hålla sig vaken och inte låta någon bryta sig in i hans hus. Var därför beredda också ni, ty i en stund när ni inte väntar det kommer Människosonen.”`],
    en: [`“Therefore keep watch, because you do not know on what day your Lord will come. But understand this: if the owner of the house had known at what time of night the thief was coming, he would have kept watch and would not have let his house be broken into. So you also must be ready, because the Son of Man will come at an hour when you do not expect him.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 24:42–44`],
    en: [`— Matthew 24:42–44`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '246
{
  quote: {
    sv: [`“Jag var hungrig, och ni gav mig att äta. Jag var törstig, och ni gav mig att dricka. Jag var främling, och ni tog emot mig. Jag var naken, och ni gav mig kläder. Jag var sjuk, och ni besökte mig. Jag satt i fängelse, och ni kom till mig.”`],
    en: [`“For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in, I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 25:35–36`],
    en: [`— Matthew 25:35–36`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '247
{
  quote: {
    sv: [`“Medan Jesus var i Betania hos Simon den spetälske, kom en kvinna fram till honom med en alabasterflaska dyrbar olja och hällde den över hans huvud där han låg till bords. När lärjungarna såg det blev de upprörda och sade: ’Vilket slöseri! Den kunde ha sålts för mycket pengar och getts åt de fattiga.’ Jesus märkte det och sade till dem: ’Varför oroar ni kvinnan? Hon har gjort en god gärning mot mig. Hon har hällt denna olja över min kropp i förväg för min begravning. Sannerligen, överallt i världen där detta evangelium förkunnas, skall man också berätta vad hon gjorde och komma ihåg henne.’”`],
    en: [`“While Jesus was in Bethany at the home of Simon the Leper, a woman came to him with an alabaster jar of very expensive perfume, which she poured on his head as he was reclining at the table. When the disciples saw this, they were indignant. ‘Why this waste?’ they asked. ‘This perfume could have been sold at a high price and the money given to the poor.’ Aware of this, Jesus said to them, ‘Why are you bothering this woman? She has done a beautiful thing to me. When she poured this perfume on my body, she did it to prepare me for burial. Truly I tell you, wherever this gospel is preached throughout the world, what she has done will also be told, in memory of her.’”`]
  },
  author: {
    sv: [`— Matteusevangeliet 26:6–13`],
    en: [`— Matthew 26:6–13`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},
// '248
{
  quote: {
    sv: [`“Gå därför ut och gör alla folk till lärjungar: döp dem i Faderns och Sonens och den heliga Andens namn och lär dem att hålla alla de bud jag har gett er. Och jag är med er alla dagar till tidens slut.”`],
    en: [`“Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.”`]
  },
  author: {
    sv: [`— Matteusevangeliet 28:19–20`],
    en: [`— Matthew 28:19–20`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '249
{
  quote: {
    sv: [`“Gläd dig inte över mig, du min fiende! Ty om jag än har fallit, så reser jag mig igen. Om jag än sitter i mörker, är Herren mitt ljus.”`],
    en: [`“Do not gloat over me, my enemy! Though I have fallen, I will rise. Though I sit in darkness, the Lord will be my light.”`]
  },
  author: {
    sv: [`— Mika 7:8`],
    en: [`— Micah 7:8`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '250
{
  quote: {
    sv: [`“Låt godhet och sanning ej vika ifrån dig.
      Bind dem omkring din hals,
      skriv dem på ditt hjärtas tavla,
      så skall du finna nåd och få gott förstånd,
      i Guds och människors ögon.”`],
    en: [`“Let love and faithfulness never leave you;
      bind them round your neck,
      write them on the tablet of your heart.
      Then you will win favour and a good name
      in the sight of God and man.”`]
  },
  author: {
    sv: [`— Ordspråksboken 3:3-4`],
    en: [`— Proverbs 3:3-4`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '251
{
  quote: {
    sv: [`“Min son, låt detta inte vika ifrån dina ögon,
      ta klokhet och och eftertänksamhet i akt,
      så skall de bli din själ till liv och
      bli ett smycke för din hals.
      Då skall du vandra din väg fram i trygghet, och
      din fot skall du då inte stöta. När du lägger dig,
      skall ingenting förskräcka dig och
      sedan du har lagt dig, skall du sova sött.”`],
    en: [`“My son, do not let wisdom and understanding out of your sight,
    preserve sound judgment and discretion;
    they will be life for you,
    an ornament to grace your neck.
    Then you will go on your way in safety,
    and your foot will not stumble.
    When you lie down, you will not be afraid;
    when you lie down, your sleep will be sweet.”`]
  },
  author: {
    sv: [`— Ordspråksboken 3:21-24`],
    en: [`— Proverbs 3:21-24`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '252
{
  quote: {
    sv: [`“Hör, min son, och ta emot mina ord, så skall dina levnadsår bli många. Om vishetens väg undervisar jag dig, jag leder dig på det rättas stigar. När du går skall sedan ingenting vara till hinder för dina steg, och när du löper skall du inte falla. Håll bara ständigt fast vid min tuktan, bevara henne, ty hon är ditt liv.”`],
    en: [`“Listen, my son, accept what I say, and the years of your life will be many. I instruct you in the way of wisdom and lead you along straight paths. When you walk, your steps will not be hampered; when you run, you will not stumble. Hold on to instruction, do not let it go; guard it well, for it is your life.”`]
  },
  author: {
    sv: [`— Ordspråksboken 4:10-13`],
    en: [`— Proverbs 4:10-13`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '253
{
  quote: {
    sv: [`“Ett mjukt svar stillar vrede, men ett hårt ord åstadkommer harm.”`],
    en: [`“A gentle answer turns away wrath, but a harsh word stirs up anger.”`]
  },
  author: {
    sv: [`— Ordspråksboken 15:1`],
    en: [`— Proverbs 15:1`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '254
{
  quote: {
    sv: [`“Ett glatt hjärta gör ansiktet ljust, men vid hjärtesorg är modet brutet.”`],
    en: [`“A happy heart makes the face cheerful, but heartache crushes the spirit.”`]
  },
  author: {
    sv: [`— Ordspråksboken 15:13`],
    en: [`— Proverbs 15:13`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '255
{
  quote: {
    sv: [`“En väns kärlek består alltid och en broders föds till hjälp i nöden.”`],
    en: [`“A friend loves at all times, and a brother is born for a time of adversity.”`]
  },
  author: {
    sv: [`— Ordspråksboken 17:17`],
    en: [`— Proverbs 17:17`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '256
{
  quote: {
    sv: [`“Ett glatt hjärta är en god läkedom, men ett brutet mod tar märgen ur benen.”`],
    en: [`“A cheerful heart is good medicine, but a crushed spirit dries up the bones.”`]
  },
  author: {
    sv: [`— Ordspråksboken 17:22`],
    en: [`— Proverbs 17:22`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '257
{
  quote: {
    sv: [`“Den förståndiges hjärta förvärvar kunskap, och de visas öron söker kunskap.”`],
    en: [`“An intelligent mind acquires knowledge, and the ear of the wise seeks knowledge.”`]
  },
  author: {
    sv: [`— Ordspråksboken 18:15`],
    en: [`— Proverbs 18:15`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '258
{
  quote: {
    sv: [`“Förstånd gör en människa tålmodig, och det är hennes ära att förlåta vad någon har brutit.”`],
    en: [`“One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.”`]
  },
  author: {
    sv: [`— Ordspråksboken 19:11`],
    en: [`— Proverbs 19:11`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '259
{
  quote: {
    sv: [`“Den som far efter rättfärdighet och godhet, han finner liv, rättfärdighet och ära.”`],
    en: [`“Whoever pursues righteousness and love finds life, prosperity and honor.”`]
  },
  author: {
    sv: [`— Ordspråksboken 21:21`],
    en: [`— Proverbs 21:21`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '260
{
  quote: {
    sv: [`“Riva sönder har sin tid, och sy ihop har sin tid. Tiga har sin tid, och tala har sin tid.”`],
    en: [`“A time to tear and a time to mend, a time to be silent and a time to speak.”`]
  },
  author: {
    sv: [`— Predikaren 3:7`],
    en: [`— Ecclesiastes 3:7`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '261
{
  quote: {
    sv: [`“Bevara din fot, när du går till Guds hus. Att komma dit för att höra är bättre än något slaktoffer som dårarna frambär, Ty de är oförståndiga och gör vad ont är.”`],
    en: [`“Guard your steps when you go to the house of God. Go near to listen rather than to offer the sacrifice of fools, who do not know that they do wrong.”`]
  },
  author: {
    sv: [`— Predikaren 4:16`],
    en: [`— Ecclesiastes 5:1`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '262
{
  quote: {
    sv: [`“Ja, en lott har tillfallit mig i det ljuvliga, ja ett arv som behagar mig väl. Jag vill lova Herren, ty han ger mig råd. Ännu om nätterna manar mig mitt innersta. Jag har haft Herren för mina ögonen alltid, ja, han är på min högra sida, jag skall inte vackla.”`],
    en: [`“The boundary lines have fallen for me in pleasant places; surely I have a delightful inheritance. I will praise the Lord, who counsels me; even at night my heart instructs me. I keep my eyes always on the Lord. With him at my right hand, I will not be shaken.”`]
  },
  author: {
    sv: [`— Psaltaren 16:6-8`],
    en: [`— Psalm 16:6-8`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '263
{
  quote: {
    sv: [`“Så åkallar jag nu dig, ty du, Gud, skall svara mig.
      Böj ditt öra till mig, hör mitt tal.
      Bevisa din underbara nåd, du som frälser undan motståndarna
        dem som tar sin tillflykt till din högra hand.

        Bevara mig som en ögonsten,
          beskydda mig under dina vingars skugga”`],
    en: [`“I have called upon You, for You will answer me, O God;
         Incline Your ear to me, hear my speech.
        Wondrously show Your lovingkindness,
                O Savior of those who take refuge at Your right hand
                From those who rise up against them.

        Keep me as the apple of the eye;
                Hide me in the shadow of Your wings”`]
  },
  author: {
    sv: [`— Psaltaren 17:6-9`],
    en: [`— Psalm 17:6-9`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '264
{
  quote: {
    sv: [`“Han sade:
      Hjärtligen kär har jag dig, Herre, min starkhet,

      Herre, mitt bergfäst, min borg, min räddare, min Gud, min klippa, till vilken jag tar min tillflykt, min sköld och min frälsnings horn, mitt värn.”`],
    en: [`“I love you, Lord, my strength.

  The Lord is my rock, my fortress and my deliverer;
    my God is my rock, in whom I take refuge,
    my shield[b] and the horn[c] of my salvation, my stronghold.”`]
  },
  author: {
    sv: [`— Psaltaren 18:2-3`],
    en: [`— Psalm 18:1-2`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '265
{
  quote: {
    sv: [`“Himlarna förtäljer Guds ära,
        och fästet förkunnar hans händers verk.
      Den ena dagen talar om det till den andra,
        och den ena natten kungör för den andra.”`],
    en: [`“The heavens declare the glory of God;
        the skies proclaim the work of his hands.
      Day after day they pour forth speech;
        night after night they reveal knowledge.”`]
  },
  author: {
    sv: [`— Psaltaren 19:2-3`],
    en: [`— Psalm 19:1-2`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '266
{
  quote: {
    sv: [`“Låt min muns tal behaga dig
      och mitt hjärtas tankar,
      Herre, min klippa och min förlossare.”`],
    en: [`“May these words of my mouth and this meditation of my heart
    be pleasing in your sight,
    Lord, my Rock and my Redeemer.”`]
  },
  author: {
    sv: [`— Psaltaren 19:15`],
    en: [`— Psalm 19:14`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '267
{
  quote: {
    sv: [`“Må han ge dig vad ditt hjärta begär
        och fullborda alla dina rådslag.
      Må vi få jubla över din seger
        och i vår Guds namn resa upp baneret.

      Må Herren uppfylla alla dina böner.”`],
    en: [`“May he give you the desire of your heart
        and make all your plans succeed.
      May we shout for joy over your victory
        and lift up our banners in the name of our God.

      May the Lord grant all your requests.”`]
  },
  author: {
    sv: [`— Psaltaren 20:5-6`],
    en: [`— Psalm 20:4-5`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '268
{
  quote: {
    sv: [`“Herren är mitt ljus och min frälsning,
        för vem skulle jag frukta?
      Herren är mitt livs värn,
        för vem skulle jag rädas?”`],
    en: [`“The Lord is my light and my salvation—
        whom shall I fear?
      The Lord is the stronghold of my life—
        of whom shall I be afraid?”`]
  },
  author: {
    sv: [`— Psaltaren 27:1`],
    en: [`— Psalm 27:1`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '269
{
  quote: {
    sv: [`“Ett har jag begärt av Herren,
        efter det strävar jag:
      att jag må få bo i Herrens hus
        i alla mina livsdagar,
      för att skåda Herrens ljuvlighet
        och betrakta hans tempel.”`],
    en: [`“One thing I ask from the Lord,
        this only do I seek:
      that I may dwell in the house of the Lord
        all the days of my life,
      to gaze on the beauty of the Lord
        and to seek him in his temple.”`]
  },
  author: {
    sv: [`— Psaltaren 27:4`],
    en: [`— Psalm 27:4`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '270
{
  quote: {
    sv: [`“Ni skall alltså veta att de som tror, de är söner till Abraham. Skriften förutsåg att Gud skulle göra hedningarna rättfärdiga på grund av deras tro, och därför lät den redan Abraham få budskapet: Med dig skall alla folk bli välsignade tillsammans med Abraham, som trodde.”`],
    en: [`“Understand, then, that those who have faith are children of Abraham. Scripture foresaw that God would justify the Gentiles by faith, and announced the gospel in advance to Abraham: “All nations will be blessed through you.” So those who rely on faith are blessed along with Abraham, the man of faith.”`]
  },
  author: {
    sv: [`— Galaterbrevet 3:7-9`],
    en: [`— Galatians 3:7-9`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '271
{
  quote: {
    sv: [`“Ja, Jag tror förvisso att jag skall få se Herrens goda
      i de levandes land.
    Hoppas på Herren,
      var frimodig och oförfärad i ditt hjärta,
      ja, hoppas på Herren.”`],
    en: [`“I remain confident of this:
    I will see the goodness of the Lord
    in the land of the living.
  Wait for the Lord;
    be strong and take heart
    and wait for the Lord.”`]
  },
  author: {
    sv: [`— Psaltaren 27:13-14`],
    en: [`— Psalm 27:13-14`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '272
{
  quote: {
    sv: [`“Herren ska ge makt åt sitt folk,
      Herren skall välsigna sitt folk med frid.”`],
    en: [`“The Lord gives strength to his people;
      the Lord blesses his people with peace.”`]
  },
  author: {
    sv: [`— Psaltaren 29:11`],
    en: [`— Psalm 29:11`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// '273
{
  quote: {
    sv: [`“Och Herren ska göra dig till huvud och inte till svans, du skall alltid ligga över och aldrig ligga under, om du hör Herrens, din Guds, bud, som jag i dag ger dig, för att du skall hålla och göra efter dem,”`],
    en: [`“The Lord will make you the head, not the tail. If you pay attention to the commands of the Lord your God that I give you this day and carefully follow them, you will always be at the top, never at the bottom.”`]
  },
  author: {
    sv: [`— 5 Mosebok 28:13`],
    en: [`— Deuteronomy 28:13`]
  },
  image: "sep_jahoo_clouseau_pexels.jpg",
  credit: "Jahoo Clouseau (Pexels.com)"
},

// October
// '274
{
  quote: {
    sv: [`“Ty ett ögonblick varar hans vrede,
      men hela livet hans nåd.
    Om aftonen gästar gråt,
      men om morgonen kommer jubel.’”`],
    en: [`“For his anger lasts only a moment,
    but his favor lasts a lifetime;
  weeping may stay for the night,
    but rejoicing comes in the morning.’”`]
  },
  author: {
    sv: [`— Psaltaren 30:6`],
    en: [`— Psalm 30:6`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '275
{
  quote: {
    sv: [`“Var frimodiga och oförfärade i era hjärtan,
      alla ni som sätter ert hopp till Herren.”`],
    en: [`“Be strong and take heart,
      all you who hope in the Lord.”`]
  },
  author: {
    sv: [`— Psaltaren 31:25`],
    en: [`— Psalm 31:24`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '276
{
  quote: {
    sv: [`“Du är mitt beskydd,
      för nöd bevarar du mig,
      med räddningens ljubel omger du mig, Sela.

    Jag vill lära dig och undervisa dig och lära dig om den väg du skall vandra,
      jag vill ge dig råd och låta mitt öga vaka över dig.”`],
    en: [`“You are my hiding place;
    you will protect me from trouble
    and surround me with songs of deliverance.

  I will instruct you and teach you in the way you should go;
    I will counsel you with my loving eye on you.”`]
  },
  author: {
    sv: [`— Psaltaren 32:7-8`],
    en: [`— Psalm 32:7-8`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '277
{
  quote: {
    sv: [`“Jag sökte Herren, och han svarade mig,
      och ur all min förskräckelse räddade han mig.”`],
    en: [`“I sought the Lord, and he answered me;
      he delivered me from all my fears.”`]
  },
  author: {
    sv: [`— Psaltaren 34:5`],
    en: [`— Psalm 34:4`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '278
{
  quote: {
    sv: [`“Nu blir det alltså ingen fällande dom för dem som tillhör Kristus Jesus. Ty den Andliga lag som gäller för livet i Kristus Jesus har gjort mig fri från syndens och dödens lag. Det som lagen inte kunde göra, eftersom den kom till korta inför vår köttsliga natur, det gjorde Gud. Då han lät sin egen Son bli lik en syndfull människa och sända honom som ett syndoffer, dömde han synden i människan. Därmed kunde lagens krav på rättfärdighet uppfyllas hos oss som lever efter vår ande och inte efter vår köttsliga natur. Ty de som lever efter köttet har dess sinnelag, men de som lever efter anden är andligt sinnade.

      De som lever efter sin köttsliga natur tänker på det som hör till köttet, men de som lever efter Anden tänker på det som hör till Anden. Köttets sinne är död, men Andens sinne är liv och frid.”`],
    en: [`“Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death. 3 For what the law was powerless to do because it was weakened by the flesh, God did by sending his own Son in the likeness of sinful flesh to be a sin offering. And so he condemned sin in the flesh, in order that the righteous requirement of the law might be fully met in us, who do not live according to the flesh but according to the Spirit.

      Those who live according to the flesh have their minds set on what the flesh desires; but those who live in accordance with the Spirit have their minds set on what the Spirit desires. The mind governed by the flesh is death, but the mind governed by the Spirit is life and peace.”`]
  },
  author: {
    sv: [`— Romarbrevet 8:1-6`],
    en: [`— Romans 8:1-6`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '279
{
  quote: {
    sv: [`“Förtrösta på Herren och gör vad gott är,
  bli kvar i landet och bemöda dig om redbarhet.
  och ha din lust i Herren:
    då skall skall han ge dig vad ditt hjärta begär.

  Befall din väg åt Herren och förtrösta på honom
    förtrösta på honom — han skall göra det.
  Han skall låta din rättfärdighet gå fram som ljuset, och din rätt som middagens sken.”`],
    en: [`“Trust in the Lord and do good;
    dwell in the land and enjoy safe pasture.
  Take delight in the Lord,
    and he will give you the desires of your heart.

  Commit your way to the Lord;
    trust in him and he will do this:
  He will make your righteous reward shine like the dawn,
    your vindication like the noonday sun.”`]
  },
  author: {
    sv: [`— Psaltaren 37:3-6`],
    en: [`— Psalm 37:3-6`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '280
{
  quote: {
    sv: [`“Till de rättfärdiga kommer frälsningen från Herren, han är deras värn i nödens tid.

      Herren hjälper dem och befriar dem, han befriar dem från de ogudaktiga och frälser dem, ty de tar sin tillflykt till honom.”`],
    en: [`“The salvation of the righteous comes from the Lord; he is their stronghold in time of trouble.

    The Lord helps them and delivers them; he delivers them from the wicked and saves them, because they take refuge in him.”`]
  },
  author: {
    sv: [`— Psaltaren 37:39-40`],
    en: [`— Psalm 37:39-40`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '281
{
  quote: {
    sv: [`“Och ni yngre, underordna er dem som är äldst. Men för er alla gäller: klä er i ödmjukhet mot varandra, ty Gud står emot de högmodiga, men de ödmjuka ger han nåd.

      Böj er alltså ödmjukt under Guds starka hand, så att han upphöjer er när tiden är inne,

      och kasta alla era bekymmer på honom, ty han sörjer för er.”`],
    en: [`“In the same way, you who are younger, submit yourselves to your elders. All of you, clothe yourselves with humility toward one another, because,

      “God opposes the proud
          but shows favor to the humble.”

      Humble yourselves, therefore, under God’s mighty hand, that he may lift you up in due time. Cast all your anxiety on him because he cares for you.”`]
  },
  author: {
    sv: [`— 1 Petrusbrevet 5:5-7`],
    en: [`— 1 Peter 5:5-7`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '282
{
  quote: {
    sv: [`“Varför är du så bedrövad, min själ,
      och så orolig i mig?
    Hoppas på Gud,
      ty jag skall åter få tacka honom
      för frälsning genom honom.”`],
    en: [`“Why, my soul, are you downcast?
      Why so disturbed within me?
    Put your hope in God,
      for I will yet praise him,
      my Savior and my God.”`]
  },
  author: {
    sv: [`— Psaltaren 42:6`],
    en: [`— Psalm 42:6`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '283
{
  quote: {
    sv: [`“Djup ropar till djup,
      vid dånet av dina vattenfall.
    Alla dina svallande böljor
      går fram över mig.

    Om dagen må Herren ge mig sin nåd,
    och om natten vill jag sjunga till hans ära
    och be till mitt livs Gud.”`],
    en: [`“Deep calls to deep
    in the roar of your waterfalls;
  all your waves and breakers
    have swept over me.

  By day the Lord directs his love,
    at night his song is with me—
    a prayer to the God of my life.”`]
  },
  author: {
    sv: [`— Psaltaren 42:8-9`],
    en: [`— Psalm 42:7-8`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '284
{
  quote: {
    sv: [`“Gud är vår tillflykt och vår starkhet, en hjälp i nöden, väl beprövad.”`],
    en: [`“God is our refuge and strength, an ever-present help in trouble.”`]
  },
  author: {
    sv: [`— Psaltaren 46:2`],
    en: [`— Psalm 46:1`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '285
{
  quote: {
    sv: [`“Bli stilla och besinna att jag är Gud,
      hög blir jag bland hedningarna, hög på jorden.

      Herren Sebaot är med oss,
      Jakobs Gud är vår borg. Sela.”`],
    en: [`“He says, “Be still, and know that I am God;
    I will be exalted among the nations,
    I will be exalted in the earth.”

  The Lord Almighty is with us;
    the God of Jacob is our fortress.”`]
  },
  author: {
    sv: [`— Psaltaren 46:11-12`],
    en: [`— Psalm 46:10-11`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '286
{
  quote: {
    sv: [`“Och åkalla på mig på nöden,
      så vill jag hjälpa dig, och du skall prisa mig.”`],
    en: [`“and call on me in the day of trouble;
    I will deliver you, and you will honor me.”`]
  },
  author: {
    sv: [`— Psaltaren 50:15`],
    en: [`— Psalm 50:15`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// ok Här

// '287
{
  quote: {
    sv: [`“Skapa i mig, Gud, ett rent hjärta, och ge mig på nytt en frimodig ande.”`],
    en: [`“Create in me a pure heart, O God, and renew a steadfast spirit within me.”`]
  },
  author: {
    sv: [`— Psaltaren 51:10`],
    en: [`— Psalm 51:10`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '288
{
  quote: {
    sv: [`“Kasta din börda på Herren, han skall uppehålla dig. Aldrig skall han låta den rättfärdige vackla. Men du, Gud, skall sänka dem ner i fördärvets brunn, blodtörstiga och falska män skall inte nå ens halv sina dagar. Men jag förtröstar på dig.”`],
    en: [`“Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken. But you, God, will bring down the wicked into the pit of decay; the bloodthirsty and deceitful will not live out half their days. But as for me, I trust in you.”`]
  },
  author: {
    sv: [`— Psaltaren 55:22-23`],
    en: [`— Psalm 55:22-23`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '289
{
  quote: {
    sv: [`“När jag är rädd, förtröstar jag på dig. På Gud, vars ord jag prisar, på Gud förtröstar jag och fruktar inte. Vad kan människor göra mig?”`],
    en: [`“When I am afraid, I put my trust in you. In God, whose word I praise— in God I trust and am not afraid. What can mere mortals do to me?”`]
  },
  author: {
    sv: [`— Psaltaren 56:3-4`],
    en: [`— Psalm 56:3-4`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},
// '290
{
  quote: {
    sv: [`“Min starkhet, dig vill jag lovsjunga, ty Gud är min borg, min nåderike Gud.”`],
    en: [`“You are my strength, I sing praise to you; God is my fortress, my God on whom I can rely.”`]
  },
  author: {
    sv: [`— Psaltaren 59:17`],
    en: [`— Psalm 59:17`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '291
{
  quote: {
    sv: [`“Han ensam är min klippa och min frälsning, min borg, jag skall inte vackla. Hos Gud är min frälsning och min ära, Gud är min starka klippa, min tillflykt. Lita alltid på honom, du folk, utgjut era hjärtan inför honom. Gud är vår tillflykt.”`],
    en: [`“Truly he is my rock and my salvation; he is my fortress, I will not be shaken. My salvation and my honor depend on God; he is our mighty rock, my refuge. Trust in him at all times, you people; pour out your hearts to him, for God is our refuge.”`]
  },
  author: {
    sv: [`— Psaltaren 62:6-9`],
    en: [`— Psalm 62:6-9`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '292
{
  quote: {
    sv: [`“Ty din nåd är bättre än liv, mina läppar skall prisa dig.”`],
    en: [`“Because your love is better than life, my lips will glorify you.”`]
  },
  author: {
    sv: [`— Psaltaren 63:3`],
    en: [`— Psalm 63:3`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '293
{
  quote: {
    sv: [`“Gud är vår tillflykt och vår styrka, en hjälp i nöden alltid närvarande.”`],
    en: [`“God is our refuge and strength, an ever-present help in trouble.”`]
  },
  author: {
    sv: [`— Psaltaren 73:26`],
    en: [`— Psalm 73:26`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '294
{
  quote: {
    sv: [`“Låt hjärtat inte frukta, vänd om och se på Herren, han är vår frälsning.”`],
    en: [`“Let not your heart be afraid; turn and see the Lord, He is our salvation.”`]
  },
  author: {
    sv: [`— Psaltaren 90:17`],
    en: [`— Psalm 90:17`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},
// '295
{
  quote: {
    sv: [`“Bevara mig från dem som gör ont, låt mig inte falla i deras fällor. Vänta på Herren, var stark och låt ditt hjärta ta mod.”`],
    en: [`“Keep me safe from those who do evil; let me not fall into their traps. Wait on the Lord; be strong and let your heart take courage.”`]
  },
  author: {
    sv: [`— Psaltaren 91:1`],
    en: [`— Psalm 91:1`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '296
{
  quote: {
    sv: [`“En fråga jag har begärt av Herren, och det skall jag söka: att få bo i Herrens hus alla mina dagar, att se Herrens härlighet och begrunda hans tempel.”`],
    en: [`“One thing I ask of the Lord, this I seek: to dwell in the house of the Lord all the days of my life, to gaze upon the beauty of the Lord and to seek Him in His temple.”`]
  },
  author: {
    sv: [`— Psaltaren 91:11`],
    en: [`— Psalm 91:11`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '297
{
  quote: {
    sv: [`“Låt alla som söker Gud finna honom, de som älskar honom skall inte bli besvikna.”`],
    en: [`“Let all who seek God find Him; those who love Him shall not be disappointed.”`]
  },
  author: {
    sv: [`— Psaltaren 91:14`],
    en: [`— Psalm 91:14`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '298
{
  quote: {
    sv: [`“Den som sår i vrede skördar olycka, den glade hjärtats gärning ger liv.”`],
    en: [`“He who sows in anger reaps misfortune; the work of a joyful heart gives life.”`]
  },
  author: {
    sv: [`— Psaltaren 96:11-12`],
    en: [`— Psalm 96:11-12`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '299
{
  quote: {
    sv: [`“En vän älskar alltid, och en broder föds för nöden.”`],
    en: [`“A friend loves at all times, and a brother is born for adversity.”`]
  },
  author: {
    sv: [`— Psaltaren 100:4`],
    en: [`— Psalm 100:4`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},
// '300
{
  quote: {
    sv: [`“Ett glatt hjärta gör gott som medicin, men ett förkrossat sinne torkar ut benen.”`],
    en: [`“A cheerful heart is good medicine, but a crushed spirit dries up the bones.”`]
  },
  author: {
    sv: [`— Psaltaren 103:2-5`],
    en: [`— Psalm 103:2-5`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '301
{
  quote: {
    sv: [`“Den som bygger sitt hus med rättfärdighet får lycka och frid, men den som handlar våldsamt fördärvar sitt eget hem.”`],
    en: [`“He who builds his house with righteousness finds happiness and peace, but he who acts violently destroys his own home.”`]
  },
  author: {
    sv: [`— Psaltaren 103:12`],
    en: [`— Psalm 103:12`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '302
{
  quote: {
    sv: [`“Den som tar till vara på kunskap finner liv, men den som föraktar råd lider förlust.”`],
    en: [`“He who treasures knowledge finds life, but he who despises counsel suffers loss.”`]
  },
  author: {
    sv: [`— Psaltaren 104:34`],
    en: [`— Psalm 104:34`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '303
{
  quote: {
    sv: [`“Den milda svarar lugnar vrede, men det hårda ordet väcker vrede.”`],
    en: [`“A gentle answer turns away wrath, but a harsh word stirs up anger.”`]
  },
  author: {
    sv: [`— Psaltaren 107:1`],
    en: [`— Psalm 107:1`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// '304
{
  quote: {
    sv: [`“Den som har många vänner går miste om förtroende, men en vän står honom nära i nöd.”`],
    en: [`“He who has many friends suffers lack of trust, but a friend sticks closer than a brother.”`]
  },
  author: {
    sv: [`— Psaltaren 107:29`],
    en: [`— Psalm 107:29`]
  },
  image: "oct_pexels-josh-hild-1270765-12373448.jpg",
  credit: "Josh Hild (Pexels.com)"
},

// November
// '305
{
  quote: {
    sv: [`“Du delar mitt arv med glädje, du bevarar mitt lott i trygghet. Jag vilar i frid, ty du leder mig på rätt väg.”`],
    en: [`“You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore.”`]
  },
  author: {
    sv: [`— Psaltaren 107:38`],
    en: [`— Psalms 107:38`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '306
{
  quote: {
    sv: [`“Jag ropar till dig, Herre, för du tar emot mig och lyssnar till min röst.”`],
    en: [`“I call upon you, Lord, for you hear me; incline your ear to me.”`]
  },
  author: {
    sv: [`— Psaltaren 118:24`],
    en: [`— Psalms 118:24`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '307
{
  quote: {
    sv: [`“Lev inte för pengar; nöj er med vad ni har. Gud själv har sagt:

      Jag ska aldrig överge dig,
          aldrig svika dig.

      och därför kan vi tryggt säga:

      Herren är min hjälpare, jag skall aldrig frukta.
          Vad kan en människa göra mig?”`],
    en: [`“Keep your lives free from the love of money and be content with what you have, because God has said,

      “Never will I leave you;
          never will I forsake you.”

      So we say with confidence,

      “The Lord is my helper; I will not be afraid.
          What can mere mortals do to me?”`]
  },
  author: {
    sv: [`— Hebreerbrevet 13:5-6`],
    en: [`— Hebrews 13:5-6`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '308
{
  quote: {
    sv: [`“Herren är min klippa, min borg, min räddare. Min Gud är min klippa, hos honom söker jag skydd.”`],
    en: [`“The Lord is my rock, my fortress, and my deliverer; my God is my rock, in whom I take refuge.”`]
  },
  author: {
    sv: [`— Psaltaren 119:14`],
    en: [`— Psalms 119:14`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '309
{
  quote: {
    sv: [`“Himlens himlar vittnar om Guds härlighet, himlen förkunnar hans händers verk.”`],
    en: [`“The heavens declare the glory of God, and the sky above proclaims his handiwork.”`]
  },
  author: {
    sv: [`— Psaltaren 119:50`],
    en: [`— Psalms 119:50`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '310
{
  quote: {
    sv: [`“Låt orden från min mun och tanken i mitt hjärta vara behaglig inför dig, Herre, min klippa och min frälsare.”`],
    en: [`“Let the words of my mouth and the meditation of my heart be acceptable in your sight, O Lord, my rock and my redeemer.”`]
  },
  author: {
    sv: [`— Psaltaren 119:90`],
    en: [`— Psalms 119:90`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},
// '311
{
  quote: {
    sv: [`“Må han ge dig det som ditt hjärta önskar och låta alla dina planer lyckas.”`],
    en: [`“May he grant you your heart’s desire and fulfill all your plans.”`]
  },
  author: {
    sv: [`— Psaltaren 121:1-4`],
    en: [`— Psalms 121:1-4`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '312
{
  quote: {
    sv: [`“Herren är mitt ljus och min frälsning; vem behöver jag frukta?”`],
    en: [`“The Lord is my light and my salvation; whom shall I fear?”`]
  },
  author: {
    sv: [`— Psaltaren 122:1`],
    en: [`— Psalms 122:1`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '313
{
  quote: {
    sv: [`“När de onda smider planer mot mig, litar jag på Herren.”`],
    en: [`“Though the wicked plot against me, I trust in the Lord.”`]
  },
  author: {
    sv: [`— Psaltaren 125:1`],
    en: [`— Psalms 125:1`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '314
{
  quote: {
    sv: [`“Herren bevarar min väg, leder mig på rätta stigar för sitt namns skull.”`],
    en: [`“The Lord preserves my way and guides me in paths of righteousness for his name’s sake.”`]
  },
  author: {
    sv: [`— Psaltaren 137:1 (valfritt)`],
    en: [`— Psalms 137:1 (optional)`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '315
{
  quote: {
    sv: [`“Ge mig frid, Herre, och hjälp mig stå fast i ditt löfte.”`],
    en: [`“Give me peace, Lord, and help me stand firm in your promise.”`]
  },
  author: {
    sv: [`— Psaltaren 138:3`],
    en: [`— Psalms 138:3`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '316
{
  quote: {
    sv: [`“De som väntar på Herren får ärva landet och njuta av frid.”`],
    en: [`“The salvation of the righteous comes from the Lord; he is their stronghold in time of trouble.”`]
  },
  author: {
    sv: [`— Psaltaren 139:4-10`],
    en: [`— Psalms 139:4-10`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '317
{
  quote: {
    sv: [`“Herre, du är min styrka och min klippa; jag hoppas på dig.”`],
    en: [`“Lord, you are my strength and my rock; I put my hope in you.”`]
  },
  author: {
    sv: [`— Psaltaren 139:14`],
    en: [`— Psalms 139:14`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '318
{
  quote: {
    sv: [`“Vid ditt namn lyfter jag min själ, Herre, min Gud.”`],
    en: [`“I lift up my soul to you, Lord my God.”`]
  },
  author: {
    sv: [`— Psaltaren 139:17`],
    en: [`— Psalms 139:17`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '319
{
  quote: {
    sv: [`“Hjälp mig, Herre, att hålla fast vid din väg, trots faror omkring mig.”`],
    en: [`“Help me, Lord, to hold fast to your way, even amidst dangers around me.”`]
  },
  author: {
    sv: [`— Psaltaren 143:8`],
    en: [`— Psalms 143:8`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '320
{
  quote: {
    sv: [`“Hjärtat fröjdas när man möts i vänskap, och Herren vakar över oss.”`],
    en: [`“The heart rejoices in friendship, and the Lord watches over us.”`]
  },
  author: {
    sv: [`— Psaltaren 145:17`],
    en: [`— Psalms 145:17`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},
// '321
{
  quote: {
    sv: [`“Jag älskar dig, Herre, min styrka. Herren är min klippa, min borg och min räddare.”`],
    en: [`“I love you, Lord, my strength. The Lord is my rock, my fortress, and my deliverer.”`]
  },
  author: {
    sv: [`— Psaltaren 145:18-19`],
    en: [`— Psalms 145:18-19`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '322
{
  quote: {
    sv: [`“Himlens himlar berättar om Guds ära, himlavalvet förkunnar hans händers verk.”`],
    en: [`“The heavens declare the glory of God; the skies proclaim the work of his hands.”`]
  },
  author: {
    sv: [`— Psaltaren 146:5-6`],
    en: [`— Psalms 146:5-6`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '323
{
  quote: {
    sv: [`“Mina ord och mina tankar skall vara rena inför dig, Herre.”`],
    en: [`“May my words and thoughts be pure before you, Lord.”`]
  },
  author: {
    sv: [`— Psaltaren 149:4`],
    en: [`— Psalms 149:4`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '324
{
  quote: {
    sv: [`“Må han uppfylla dina önskningar och göra att alla dina planer lyckas.”`],
    en: [`“May he grant you your heart’s desire and make all your plans succeed.”`]
  },
  author: {
    sv: [`— Romarbrevet 1:17`],
    en: [`— Romans 1:17`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '325
{
  quote: {
    sv: [`“Herren är mitt ljus och min räddning, vem skulle jag frukta?”`],
    en: [`“The Lord is my light and my salvation—whom shall I fear?”`]
  },
  author: {
    sv: [`— Romarbrevet 4:6-7`],
    en: [`— Romans 4:6-7`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},
// '326
{
  quote: {
    sv: [`“Håll dig undan från de som gör ont, för de lurar mig med sina planer.”`],
    en: [`“Turn away from those who do evil, for they plot against me.”`]
  },
  author: {
    sv: [`— Romarbrevet 8:35`],
    en: [`— Romans 8:35`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '327
{
  quote: {
    sv: [`“En sak har jag begärt av Herren, det söker jag: att få bo i Herrens hus alla dagar i mitt liv, att betrakta Herrens skönhet och begrunda hans tempel.”`],
    en: [`“One thing I ask from the Lord, this only do I seek: that I may dwell in the house of the Lord all the days of my life, to gaze on the beauty of the Lord and to seek him in his temple.”`]
  },
  author: {
    sv: [`— Romarbrevet 8:38-39`],
    en: [`— Romans 8:38-39`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '328
{
  quote: {
    sv: [`“Herren ger sina vänner fred, han omsluter dem med lycka.”`],
    en: [`“The Lord gives his friends peace; he surrounds them with happiness.”`]
  },
  author: {
    sv: [`— Romarbrevet 10:17`],
    en: [`— Romans 10:17`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '329
{
  quote: {
    sv: [`“Fröjda dig i Herren, och han skall ge dig det du begär.”`],
    en: [`“Delight yourself in the Lord, and he will give you the desires of your heart.”`]
  },
  author: {
    sv: [`— Romarbrevet 12:3`],
    en: [`— Romans 12:3`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '330
{
  quote: {
    sv: [`“Var stark och tag mod, alla ni som hoppas på Herren.”`],
    en: [`“Be strong and take heart, all you who hope in the Lord.”`]
  },
  author: {
    sv: [`— Psaltaren 12:10`],
    en: [`— Psalms 12:10`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},
// '331
{
  quote: {
    sv: [`“Du är min tillflykt, du bevarar mig från nöd, du omsluter mig med frälsningens glädje.”`],
    en: [`“You are my refuge; you preserve me from trouble, and surround me with the joy of salvation.”`]
  },
  author: {
    sv: [`— Psaltaren 15:13`],
    en: [`— Psalms 15:13`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '332
{
  quote: {
    sv: [`“Jag vill lära dig och visa dig vägen du skall gå; jag vill ge dig råd och se till dig.”`],
    en: [`“I will instruct you and show you the way you should go; I will give you counsel and watch over you.”`]
  },
  author: {
    sv: [`— Rut 2:12`],
    en: [`— Ruth 2:12`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '333
{
  quote: {
    sv: [`“Småglada hjärtan ger glädje, men ett sorgset sinne bryter ner.”`],
    en: [`“A cheerful heart brings joy, but a crushed spirit dries up the bones.”`]
  },
  author: {
    sv: [`— 2 Krönikeboken 7:14`],
    en: [`— 2 Chronicles 7:14`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// '334
{
  quote: {
    sv: [`“Smaka och se att Herren är god, lycklig är den som tar sin tillflykt till honom.”`],
    en: [`“Taste and see that the Lord is good; blessed is the one who takes refuge in him.”`]
  },
  author: {
    sv: [`— 2 Krönikeboken 16:19`],
    en: [`— 2 Chronicles 16:19`]
  },
  image: "nov_pexels-kristenmunk-2463851.jpg",
  credit: "kristen munk (Pexels.com)"
},

// December
// '335
{
  quote: {
    sv: [`“Ropa till Gud i din nöd, och han skall höra dig.”`],
    en: [`“Call to God in your distress, and He will hear you.”`]
  },
  author: {
    sv: [`— 2 Krönikeboken 16:25-29`],
    en: [`— 2 Chronicles 16:25-29`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},
// '336
{
  quote: {
    sv: [`“Var stilla inför Herren och vänta på honom; bli inte upprörd över den som lyckas i sitt liv.”`],
    en: [`“Be still before the Lord and wait for Him; do not be upset over the one who prospers in their way.”`]
  },
  author: {
    sv: [`— Esra 1:1`],
    en: [`— Ezra 1:1`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '337
{
  quote: {
    sv: [`“Men de rättfärdiga skall ärvas landet och få bo i evig frid.”`],
    en: [`“But the righteous shall inherit the land and dwell in everlasting peace.”`]
  },
  author: {
    sv: [`— Nehemja 1:11`],
    en: [`— Nehemiah 1:11`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '338
{
  quote: {
    sv: [`“Herren hjälper dem i deras nöd, han blir deras tillflykt och räddning.”`],
    en: [`“The Lord helps them in their trouble; He becomes their refuge and salvation.”`]
  },
  author: {
    sv: [`— Nehemja 8:10`],
    en: [`— Nehemiah 8:10`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '339
{
  quote: {
    sv: [`“Herre, jag vet att du hör mig, du är min styrka och min räddning.”`],
    en: [`“Lord, I know that You hear me; You are my strength and my salvation.”`]
  },
  author: {
    sv: [`— Ester 4:14`],
    en: [`— Esther 4:14`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '340
{
  quote: {
    sv: [`“Vid floden där jag finner ro, vid hans vatten finner jag styrka.”`],
    en: [`“By the river where I find rest, by His waters I find strength.”`]
  },
  author: {
    sv: [`— Höga visan 8:8`],
    en: [`— Song of Solomon 8:8`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},
// '341
{
  quote: {
    sv: [`“Jag ropar till Gud, min klippa; varför glömmer du mig?”`],
    en: [`“I cry to God, my rock; why have You forgotten me?”`]
  },
  author: {
    sv: [`— Höga visan 4:13-14`],
    en: [`— Song of Solomon 4:13-14`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '342
{
  quote: {
    sv: [`“Gud är vår tillflykt och styrka, en hjälp i nöden som alltid är nära.”`],
    en: [`“God is our refuge and strength, an ever-present help in trouble.”`]
  },
  author: {
    sv: [`— Hesekiel 36:26`],
    en: [`— Ezekiel 36:26`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '343
{
  quote: {
    sv: [`“Därför behöver vi inte frukta, även om jorden skakar och bergen faller i havets djup.”`],
    en: [`“Therefore we do not need to fear, even if the earth shakes and the mountains fall into the depths of the sea.”`]
  },
  author: {
    sv: [`— Hesekiel 37:5`],
    en: [`— Ezekiel 37:5`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '344
{
  quote: {
    sv: [`“Vattnet brusar, bergen skakar, men Herren i Sion är vår hjälp.”`],
    en: [`“The waters roar, the mountains tremble, but the Lord in Zion is our help.”`]
  },
  author: {
    sv: [`— Daniel 11:32`],
    en: [`— Daniel 11:32`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '345
{
  quote: {
    sv: [`“Ring till mig på nödsdagar, jag skall rädda dig och du skall prisa mig.”`],
    en: [`“Call upon Me in the day of trouble; I will rescue you, and you shall glorify Me.”`]
  },
  author: {
    sv: [`— Hosea 4:14`],
    en: [`— Hosea 4:14`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '346
{
  quote: {
    sv: [`“Skapa i mig ett rent hjärta, o Gud, och förnya en stadig ande inom mig.”`],
    en: [`“And everyone who calls
        on the name of the Lord will be saved;
    for on Mount Zion and in Jerusalem
        there will be deliverance,
        as the Lord has said,
    even among the survivors
        whom the Lord calls.”`]
  },
  author: {
    sv: [`— Joel 2:32`],
    en: [`— Joel 2:32`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '347
{
  quote: {
    sv: [`“Kasta din börda på Herren, han skall försörja dig; han skall aldrig låta den rättfärdige vackla.”`],
    en: [`“Cast your burden upon the Lord, He shall sustain you; He shall never let the righteous be moved.”`]
  },
  author: {
    sv: [`— Amos 5:14`],
    en: [`— Amos 5:14`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '348
{
  quote: {
    sv: [`“Sätt ditt hopp till Herren, håll fast vid hans väg, och han skall upphöja dig.”`],
    en: [`“Place your hope in the Lord, hold fast to His way, and He shall exalt you.”`]
  },
  author: {
    sv: [`— Obadja 1:15`],
    en: [`— Obadiah 1:15`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '349
{
  quote: {
    sv: [`“Fruktas Herren är början till vishet; alla som följer hans väg har ett gott förstånd.”`],
    en: [`“The fear of the Lord is the beginning of wisdom; all who follow His way have good understanding.”`]
  },
  author: {
    sv: [`— Jona 1:17`],
    en: [`— Jonah 1:17`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '350
{
  quote: {
    sv: [`“Herren är min klippa, min borg och min räddare; min Gud, min tillflykt, i honom förtröstade jag.”`],
    en: [`“The Lord is my rock, my fortress, and my deliverer; my God, my refuge, in Him I trust.”`]
  },
  author: {
    sv: [`— Nahum 1:7`],
    en: [`— Nahum 1:7`  ]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '351
{
  quote: {
    sv: [`“När jag är rädd, sätter jag mitt förtroende till dig.”`],
    en: [`“When I am afraid, I put my trust in You.”`]
  },
  author: {
    sv: [`— Habackuk 2:4`],
    en: [`— Habakkuk 2:4`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '352
{
  quote: {
    sv: [`“Jag förtröstar på Gud, jag gläder mig, jag sjunger till hans namn.”`],
    en: [`“I trust in God, I rejoice, I sing praises to His name.”`]
  },
  author: {
    sv: [`— Habackuk 3:18`],
    en: [`— Habakkuk 3:18`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '353
{
  quote: {
    sv: [`“Rädda mig, o Gud, från mina fiender; skydda mig från dem som står emot mig.”`],
    en: [`“Deliver me, O God, from my enemies; protect me from those who rise against me.”`]
  },
  author: {
    sv: [`— Sefanja 3:17`],
    en: [`— Zephaniah 3:17`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '354
{
  quote: {
    sv: [`“Men jag skall sjunga om din styrka, varje morgon lovsjunga din nåd.”`],
    en: [`“But I will sing of Your strength, every morning I will praise Your steadfast love.”`]
  },
  author: {
    sv: [`— Haggai 1:13`],
    en: [`— Haggai 1:13`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '355
{
  quote: {
    sv: [`“Gud är min styrka, jag förtröstar på honom och hans nåd skall vara min glädje.”`],
    en: [`“God is my strength, I trust in Him, and His grace shall be my joy.”`]
  },
  author: {
    sv: [`— Haggai 2:4-5`],
    en: [`— Haggai 2:4-5`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '356
{
  quote: {
    sv: [`“Han är min klippa och min frälsning, min befästning; jag skall inte vackla.”`],
    en: [`“Then he said to me, “This is the word of the Lord to Zerubbabel, saying, ‘Not by might nor by power, but by My Spirit,’ says the Lord of armies.”`]
  },
  author: {
    sv: [`— Sakarja 2:8`],
    en: [`— Zechariah 2:8`]

  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '357
{
  quote: {
    sv: [`“Endast hos Gud finner jag stillhet; mitt hopp kommer från honom.”`],
    en: [`“Only in God is my soul at rest; my hope comes from Him.”`]
  },
  author: {
    sv: [`— Sakarja 4:6`],
    en: [`— Zechariah 4:6`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '358
{
  quote: {
    sv: [`“Lita på honom vid alla tider, folket, utgjut era hjärtan inför honom; Gud är vår tillflykt.”`],
    en: [`“Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.”`]
  },
  author: {
    sv: [`— Malaki 3:10`],
    en: [`— Malachi 3:10`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '359
{
  quote: {
    sv: [`“Många säger: ’Vem kan ge oss gott?’ Herre, låt ditt ansikte lysa över oss.”`],
    en: [`“Many ask, ‘Who can show us good?’ Lord, let Your face shine upon us.”`]
  },
  author: {
    sv: [`— Apostlagärningarna 20:35`],
    en: [`— Acts 20:35`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '360
{
  quote: {
    sv: [`“Gud är vår styrka och vår tillflykt i alla tider.”`],
    en: [`“God is our strength and refuge at all times.”`]
  },
  author: {
    sv: [`— Kolosserbrevet 3:12`],
    en: [`— Colossians 3:12`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},
// '361
{
  quote: {
    sv: [`“Må Herren låta oss se hans verk, och må han bevara hans härlighet över oss. Må Herren ge oss sin välvilja varje dag och bevara vårt verk.”`],
    en: [`“May the Lord show us His works, and may He preserve His glory over us. May the Lord give us His favor each day and sustain our work.”`]
  },
  author: {
    sv: [`— Kolosserbrevet 3:4`],
    en: [`— Colossians 3:4`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '362
{
  quote: {
    sv: [`“Den som bor i den Högstes skydd, under den Allsmäktiges skugga, han säger till Herren: ’Min tillflykt och min borg, min Gud, som jag förtröstar på.’”`],
    en: [`“He who dwells in the shelter of the Most High, under the shadow of the Almighty, says to the Lord: ‘My refuge and my fortress, my God, in whom I trust.’”`]
  },
  author: {
    sv: [`— Kolosserbrevet 3:16`],
    en: [`— Colossians 3:16`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '363
{
  quote: {
    sv: [`“Han skall ge sina änglar befallning om dig, att de bevarar dig på alla dina vägar.”`],
    en: [`“He shall command His angels concerning you, to guard you in all your ways.”`]
  },
  author: {
    sv: [`— Kolosserbrevet 3:23-24`],
    en: [`— Colossians 4:23-24`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},

// '364
{
  quote: {
    sv: [`“De skall bära dig på händer, så att du inte stöter din fot mot någon sten.”`],
    en: [`“They shall lift you up in their hands, so that you will not strike your foot against a stone.”`]
  },
  author: {
    sv: [`— Kolosserbrevet 3:4`],
    en: [`— Colossians 3:4`]
  },
  image: "dec_pexels-sandzoutdoor-15406472.jpg",
  credit: "Sandz Outdoor (Pexels.com)"
},
];

// General quotes
const dailyQuoteContainer = document.getElementById("daily-general-quote-container");
const dailyQuoteParagraph = document.getElementById("daily-general-quote");
const dailyQuoteSubtext = document.getElementById("subtext");
const dailyQuoteAuthor = document.getElementById("general-quote-author");

// Get todays day of the year (-1)
function getDayOfYearIndex(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1); // Jan 1
  const diffInMs = date - startOfYear;
  const oneDayMs = 1000 * 60 * 60 * 24;
  return Math.floor(diffInMs / oneDayMs); // Returns 0–364 (or 0–365 in leap years)
}

const dailyQuotesIndexMax = dailyQuotes.length;
const dailyBibleQuotesIndexMax = bibleQuotes.length;

// get random dailyQuotes Index number
function getRandomDailyQuotesIndexNumber(dailyQuotesIndexMax) {
  return Math.floor(Math.random() * dailyQuotesIndexMax);
}

var todayIndex = getDayOfYearIndex();

function getQuoteForToday() {
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

// Bible quotes
var bibleQuoteContainerIcon = document.getElementById("quote-container-icon");
const dailyBibleQuoteContainer = document.getElementById("daily-bible-quote-container");
const dailyBibleBlockQuote = document.getElementById("bible-block-quote");
const dailyBibleQuoteParagraph = document.getElementById("daily-bible-quote");
const dailyBibleQuoteAuthor = document.getElementById("bible-quote-author");
const dailyBibleQuoteCredit = document.getElementById("bible-quote-credit");

let currentBibleQuote = bibleQuotes[todayIndex]

dailyBibleBlockQuote.style.backgroundImage = `url('./media/img/${currentBibleQuote.image}')`;
dailyBibleBlockQuote.style.backgroundSize = "cover";       // make it cover
dailyBibleBlockQuote.style.backgroundRepeat = "no-repeat"; // prevent tiling
dailyBibleBlockQuote.style.backgroundPosition = "center";  // center the image
dailyBibleBlockQuote.style.backgroundColor = "rgba(0,0,0,0.1)";
dailyBibleBlockQuote.style.backgroundBlendMode = "darken";

languageSelectElement.addEventListener('change', function() {

  dailyBibleQuoteParagraph.innerText = currentBibleQuote.quote[sessionStorage.getItem("languageVariable")];
  dailyBibleQuoteAuthor.innerText = currentBibleQuote.author[sessionStorage.getItem("languageVariable")];
});

// Get random bible quote when clicking inside the quote box.

function getRandomDailyBibleQuote() {
  let randomBibleQuoteIndexNumber = getRandomDailyQuotesIndexNumber(dailyBibleQuotesIndexMax);

  currentBibleQuote = bibleQuotes[randomBibleQuoteIndexNumber];

  dailyBibleQuoteParagraph.innerText = currentBibleQuote.quote[sessionStorage.getItem("languageVariable")];
  dailyBibleQuoteAuthor.innerText = currentBibleQuote.author[sessionStorage.getItem("languageVariable")];
  dailyBibleBlockQuote.style.backgroundImage = `url('./media/img/${currentBibleQuote.image}')`;
}

dailyBibleQuoteContainer.addEventListener("click", function (e) {
  getRandomDailyBibleQuote();
});


  // Get Bible quote when clicking on pidgeon icon
  bibleQuoteContainerIcon.addEventListener("click", function () {
    if (dailyBibleQuoteContainer.style.opacity === "0" || dailyBibleQuoteContainer.style.opacity === "") {
      dailyBibleQuoteContainer.style.display = "flex";
      dailyBibleQuoteParagraph.style.opacity = "0";
      dailyBibleQuoteAuthor.style.opacity = "0";
      dailyBibleQuoteContainer.style.opacity = "1";
      bibleQuoteContainerIcon.style.opacity = "0.8"
      dailyBibleQuoteCredit.style.display = "flex";
      dailyBibleQuoteCredit.style.opacity = "0";
      dailyBibleQuoteCredit.innerHTML = `<div>${bibleQuotes[todayIndex].credit}</div>`;        
      dailyBibleQuoteCredit.style.marginBottom = "0px";
  
    // Hide credit text after 1.9 seconds
      setTimeout(() => {
      dailyBibleQuoteCredit.style.marginBottom = "-17px";
    }, 500);
  
      setTimeout(() => {
      dailyBibleQuoteCredit.style.opacity = "1";
  
    }, 550);
  
    setTimeout(() => {
      dailyBibleQuoteParagraph.style.opacity = "1"
      dailyBibleQuoteAuthor.style.opacity = "1"
    }, 1000);
  
    setTimeout(() => {
      dailyBibleQuoteCredit.style.opacity = "0";
    }, 1900);
  
    setTimeout(() => {
      dailyBibleQuoteCredit.style.marginBottom = "0px";
      dailyBibleQuoteCredit.style.transition = "margin-bottom 0.4s ease";
    }, 2100);
  
    } else {
      dailyBibleQuoteCredit.style.display = "none";
      bibleQuoteContainerIcon.style.opacity = "0.3"
      dailyBibleQuoteContainer.style.opacity = "0";
      dailyBibleQuoteContainer.style.display = "none";
    }
  });
  
  dailyBibleQuoteParagraph.innerText = currentBibleQuote.quote[sessionStorage.getItem("languageVariable")];
  dailyBibleQuoteAuthor.innerText = currentBibleQuote.author[sessionStorage.getItem("languageVariable")];
  dailyBibleBlockQuote.style.backgroundImage = `url('./media/img/${currentBibleQuote.image}')`;

  function getBibleQuoteForToday() {

  let dailyBibleQuoteToPrint = bibleQuotes[0];

    console.log("bibleQuotes[todayIndex] = ", bibleQuotes[todayIndex]);

  if (!bibleQuotes[todayIndex]) {
    dailyBibleQuoteToPrint =
      bibleQuotes[getRandomDailyQuotesIndexNumber(dailyQuotesIndexMax)];
  } else {
    dailyBibleQuoteToPrint = bibleQuotes[todayIndex];
  }

  dailyBibleQuoteParagraph.innerText = dailyBibleQuoteToPrint.quote
  dailyBibleQuoteAuthor.innerText = dailyBibleQuoteToPrint.author;
}
