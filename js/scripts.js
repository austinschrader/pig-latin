$(document).ready(function(){
  $("#pigLatin").submit(function (event) {
    event.preventDefault();
    let pigLatinInput = $("#pigLatinInput").val();
    console.log(pigLatinInput);
  });
});