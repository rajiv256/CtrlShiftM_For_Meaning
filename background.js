chrome.commands.onCommand.addListener(function (command) {
	chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
	   
     var xhttp = new XMLHttpRequest();
  	  xhttp.onreadystatechange = function() {
     if (xhttp.readyState == 4 && xhttp.status == 200) {
      var o = JSON.parse(xhttp.responseText) ; 
      message = o[0]['partOfSpeech']+"\n"+o[0]['text']+"\n\n"+o[1]['partOfSpeech']+"\n"+o[1]['text'] ;
      alert( message) ; 
     
  };
  
  xhttp.open("GET", "http://api.wordnik.com/v4/word.json/"+selection+"/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", true);
  xhttp.send();
});	
}) ; 



