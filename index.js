'use strict';

const f = Object.freeze;


module.exports = f({

    images: f({

        main: 'https://fcbbc.s3.amazonaws.com/images/FCBBC.png',
        small: 'https://fcbbc.s3.amazonaws.com/images/FCBBCSmall.png',
    }),

    quotes: f({

        greetings: 'Hello world, 👁 see you!▼',
        casual: 'The weather is soothing today, a great day to see the views.👁▼',
        optimistic: 'All people, no matter what race, religion, sexuality, gender, nationality, ability, age, or any other characteristics should be accepted, and their customs should be accepted too, the world can work that way, we can see things 👁 to 👁 simply by talking about it. One thing is for sure, 👁 accept you!👁▼',
    }),
});