module.exports = {



  //Random Number Generator
  randomNoGenerator: function(min, max) {
    if(typeof(max) !== 'number' && typeof(min) !== 'number') {
      min = 0;  max = 1;
    }
   return (Math.random() * (max-min)) + min;
  },

  //Random Letter Generator
  randomLetters: function(length) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      let random;
      let output = '';
    
      for (let i = 1; i <= length; i++) {
        output += letters.substring(random = Math.floor(Math.random() * letters.length), random + 1);
      }
      return output;
    }



}