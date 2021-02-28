const quotes = [
    {
     quote:
     "The strings are usually used to store and manipulate the text data. However.",
     author:"Mustak mia"
    },
    {
     quote:
      "Strings are created by putting data inside the quotes. JavaScript and other programming. ",
      author:"rayhan Kazi"
    },
    {
     quote:
      "languages allow the users to keep the data either in double quotes.",
     author:"Ajmain Kazi"
    },
    {
     quote:
      "These single quotes and double quotes do not print with string on the web browser.",
       author:"Saif Kazi"
    },
    {
     quote:
      "But sometimes we need to print the quotes with the string as well.",
       author: "Shihab Kazi"
    }
];

    const button =  document.getElementById('button')
    button.addEventListener("click", function() {
    let random =Math.floor(Math.random()*quotes.length);
    document.getElementById('quote').textContent =quotes[random] .quote;
    document.getElementById('author').textContent = quotes[random].author;

});