//get a quote at random from quotes
let max = 26; // quotes.length (max is non-inclusive, but arrays start at 0)
let rand = Math.floor(Math.random() * Math.floor(max));
console.log('generated random number: ' + rand);

// 26 Coco Chanel Quotes probably
let quotes = new Array(
    'A girl should be two things: classy and fabulous.',
    'Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening.',
    'Adornment, what a science! Beauty, what a weapon! Modesty, what elegance!',
    'The best color in the whole world is the one that looks good on you.',
    'Fashion changes, but style endures.',
    'Don’t spend time beating on a wall, hoping to transform it into a door.',
    'Elegance does not consist in putting on a new dress.',
    'In order to be irreplaceable one must always be different.',
    'My life didn’t please me, so I created my life.',
    'As long as you know men are like children, you know everything!',
    'Simplicity is the keynote of all true elegance.',
    'A woman can be overdressed but never over elegant.',
    'You can be gorgeous at thirty, charming at forty, and irresistible for the rest of your life.',
    'I only drink Champagne on two occasions, when I am in love and when I am not.',
    'If you’re sad, add more lipstick and attack.',
    'I don’t care what you think of me. I don’t think of you at all.',
    'I don’t do fashion. I am fashion.',
    'Elegance is when the inside is as beautiful as the outside.',
    'The most courageous act is still to think for yourself. Aloud.',
    'Success is often achieved by those who don\'t know that failure is inevitable.',
    'Dress shabbily and they remember the dress; dress impeccably and they remember the woman.',
    'You live but once; you might as well be amusing.',
    'Fashion has two purposes: comfort and love. Beauty comes when fashion succeeds.',
    'Elegance is refusal.',
    'It is always better to be slightly underdressed',
    'There is no time for cut-and-dry monotony. There is time for work. And time for love. That leaves no other time!',
)

let quote = quotes[rand];
console.log(quote);