'use strict';

const f = Object.freeze;


module.exports = f({

    images: f({

        small: 'https://the-watchful-eye.s3.amazonaws.com/images/the-watchful-eye_small.png',
        main: 'https://the-watchful-eye.s3.amazonaws.com/images/the-watchful-eye.png',
    }),

    quotes: f({

        greetings: 'Hello world, 👁 see you!▼',
        casual: 'The weather is soothing today, a great day to see the views.👁▼',
    }),
});