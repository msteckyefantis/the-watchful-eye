'use strict';

const f = Object.freeze;


module.exports = f({

    images: f({

        main: 'https://fcbbc.s3.amazonaws.com/images/FCBBC.png',
        small: 'https://fcbbc.s3.amazonaws.com/images/FCBBCSmall.png',
    }),

    quotes: f({

        greetings: 'Hello world, 👁 see you!👁▼',
        casual: (
            'The weather is soothing today, a great day to see the views.👁▼'
        )
    }),
});