'use strict';

const f = Object.freeze;


module.exports = f({

    images: f({

        small: 'https://fcbbc.s3.amazonaws.com/images/FCBBCSmall.png',
        main: 'https://fcbbc.s3.amazonaws.com/images/FCBBC.png',
    }),

    quotes: f({

        greetings: 'Hello world, 👁 see you!▼',
        casual: 'The weather is soothing today, a great day to see the views.👁▼',
    }),
});