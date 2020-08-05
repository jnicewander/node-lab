const quoteMachine = {
    quotesArray: [
        {
            quote: 'Isn\'t it a pleasure to study and practice what you have learned? Isn\'t it also great when friends visit from distant places? If one remains not annoyed when he is not understood by people around him, isn\'t he a sage?',
            author: 'Confucius'
        },
        {
            quote: 'A happy man is too satisfied with the present to dwell too much on the future.',
            author: 'Albert Einstein'
        },
        {
            quote: 'It is easy to specify the individual objects of admiration in these grand scenes; but it is not possible to give an adequate idea of the higher feelings of wonder, astonishment, and devotion, which fill and elevate the mind.',
            author: 'Charles Darwin'
        },
        {
            quote: 'You miss 100% of the shots you don\'t take. -Wayne Gretzky',
            author: 'Michael Scott'
        },
        {
            quote: 'A very great deal more truth can become known than can be proven.',
            author: 'Richard Feynman'
        },
        {
            quote: 'One can never consent to creep when one feels an impulse to soar.',
            author: 'Helen Keller'
        }
    ],
    randomQuote: (arr) => {
        let index = Math.floor(Math.random() * arr.length)
        return quoteMachine.styleItBaby(`"${arr[index].quote}" -${arr[index].author}`);
    },
    styleItBaby: (quoteStr) => {
        return `<div style='text-align: center; font-family: Arial, Helvetica, sans-serif; background-color: LightSeaGreen; padding: 2rem; margin: 15vh auto; max-width: 75vw; box-shadow: 2px 2px 8px DarkGrey'>
                    <h1 style='color: white;'>${quoteStr}</h1>
                </div>`;
    }
};

module.exports = quoteMachine;