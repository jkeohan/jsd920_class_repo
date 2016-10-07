
   $("<h3>Ready...Set...Sing...</h3>").insertAfter('h1'); 
    var arr = [];
    var count = 3;

    $("#sing-button").click(function() {     
      for(var i = count; i > -1; i--){
        if(i>1) { arr.push('<li class = "bottle">'+ i +" bottles of beer on the wall"); }
        else if(i===1){ arr.push('<li class = "bottle">'+ i +" bottle of beer on the wall"); }
        else{ arr.push('<li class = "bottle">'+ "no more bottles of beer on the wall"); }
      }; 
     var arrCounter = 0  
     var interval = setInterval(function() {
      var counter = 3;
        if( counter == -1 ) { clearInterval(interval) }
        else { $('#bottles').html(arr[arrCounter++]);
               counter--
               console.log("This has run " + arrCounter + " times")
        } 
      },1000)
    });

// counter = 3 needs to be placed outside of setInterval as 
// line 15: it will be reset to 3 every time setInterval is run
// line 17: .html() method should be replaced with .append()



