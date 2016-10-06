
    $("<h3>Ready...Set...Sing...</h3>").insertAfter('h1'); 
    var arr = [];
    var count = 3;
  
    $("#sing-button").click(function() { 
      for (var i = count; i > -1; i--)  {
        if(i>1) { arr.push('<li class = "bottle">'+ i +" bottles of beer on the wall"); }
        else if(i===1){ arr.push('<li class = "bottle">'+ i +" bottle of beer on the wall"); }
        else{ arr.push('<li class = "bottle">'+ "no more bottles of beer on the wall"); }
      }; 

     var arrCounter = 0;
     var counter = 3;
     var interval = setInterval(function() {
        if( counter == -1 ) { clearInterval(interval) } 
        else { $('#bottles').append(arr[arrCounter++]);
               counter--
               console.log()
               //console.log("This has run " + arrCounter + " times")
        } 
      },1000)
    });

// after clicking button
// line 6: removed # and nothing happens on click
// line 18: removed s from bottles so nothing appears on screen
// line 19: removed one - from counter-- and now setInterval runs forever
// line 16: counter is set to 1 and output stops at 2 bottles
// line 10: missing ending > after bottle"  and before '


