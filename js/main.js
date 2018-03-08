//when the user searches a keyword, it shows what type of software dev jobs they can get

function getFont(){
  var apiKey = "AIzaSyA4Zb2FdXZNSZiC9hP9LDXnS5o5DAHQLdc";
  var keywordInput= $("#keyword").val();
  var apiURL = "https://www.googleapis.com/webfonts/v1/webfonts?key=" + apiKey //+ "&variants=" + keywordInput;

    $.ajax({

         url: apiURL,
         success: function(response){

           response.items.forEach(function(item){
             $("#fontName").append("<li>"+item.family+"</li>")
           })
         },
         error: function(r){
           console.log(r);
         }
    })
}
function getFontLink(){
  var apiKey = "AIzaSyA4Zb2FdXZNSZiC9hP9LDXnS5o5DAHQLdc";
  var keywordInput= $("#keyword").val();
  var apiURL = "https://www.googleapis.com/webfonts/v1/webfonts?key=" + apiKey //+ "&variants=" + keywordInput;

    $.ajax({

         url: apiURL,
         success: function(response){

           response.items.forEach(function(item){
               if(item.family === keywordInput){
                 $("ul li").remove();
                 console.log(item.family)
                 console.log(item.files.italic)
                 console.log(item.files.regular)
                $("h2").append(item.family)
                 $("ul").append("<li>"+"Regular"+"<a href='#'>"+item.files.regular+"</a>"+"</li>"+"<li>"+"Italic"+"<a href='#'>"+item.files.italic+"</a>"+"</li>");
               }
           })
         },
         error: function(r){
           console.log(r);
         }
    })
}

var fontsArray = [];
$("fontLink").val("");
$("#fontSubmit").on("click", function(e){
  e.preventDefault();
  getFont();
})


$("#submit").on("click", function(e){
  e.preventDefault();
 getFontLink();
})
