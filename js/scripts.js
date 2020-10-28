$(document).ready(function(){
  $("#pigLatin").submit(function (event) {
    event.preventDefault();
    let pigLatinInput = $("#pigLatinInput").val();

    function pigLatin(pigLatinInput) {
      const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];
      const vowels = ["a", "e", "i", "o", "u"];
      if (vowels.includes(pigLatinInput[0])) {
        pigLatinInput = pigLatinInput + "way";
        // console.log(pigLatinInput);
        return pigLatinInput;
      } else if (consonants.includes(pigLatinInput[0])) {
        // Method #1 using substrings
        pigLatinInput = pigLatinInput.substr(1) + pigLatinInput.substr(0,1) + "ay"
      
        // Method #2 using RegExp
        // let regExp = new RegExp(pigLatinInput[0]);
        // let consonantGone = pigLatinInput.replace(regExp, "");
        // console.log(consonantRemoved);
        console.log(pigLatinInput);
        return pigLatinInput;
        
      }
      
    };
   pigLatin(pigLatinInput);
  });
});