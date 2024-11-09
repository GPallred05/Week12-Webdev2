//use 'https://zenquotes.io/api/random'

const axios = require('axios');

function getQuote() {
    //Use axios to call API
  axios.get('https://zenquotes.io/api/random')
    .then( (result) => {
        //Log th quote with author name
      const quote = result.data[0];
      console.log(`Here's a motivational quote for you:\n"${quote.q}" - ${quote.a}`);
    })
    //Catch the error if there was one
    .catch(error => {
      console.error("Could not fetch a quote. Try again later.");
    });
}

// Call the function to get and display the quote
getQuote();
