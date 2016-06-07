//===========backend PALINDROME ==========

function palindrome(string) {
  var original = string.split('');
  var reverse = original.reverse().join('');
  if (reverse === string) {
    return "Palindrome!!!!";
  }
  else {
    return "Not a Palindrome.";
  }
};

//===========backend PRIME ==========
function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

//===========frontend PALINDROME==========
$(function() {
  $('form#palindrome').submit(function(event) {
    event.preventDefault();
    var word = palindrome($('#word').val());

    $('#returnResult').append(word);
    $("#result").show();
    $("#palindrome").toggle();
  });
});

//===========frontend PRIME ==========
$(function() {
  $('form#prime').submit(function(event) {
    event.preventDefault();
    var numbers = getPrimes($('#numbers').val());

    numbers.forEach(function(item) {
      $('#returnResult').append('<li>' + item + '</li>');
    });
    //$('#returnResult').append(numbers);
    $("#result").show();
    $("#prime").toggle();

  });

});
