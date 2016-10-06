
    $("<h3>Ready...Set...Sing...</h3>").insertAfter('h1'); 
    var arr = [;

    var count = 3;
  
    ("#sing-button").click(function()  
      console.log("am i really the error?")
      for (var i = count; i > -1; i--)  
        if(i>1) { arr.push('<li class = "bottle">'+ i +" bottles of beer on the wall"); }
        else if(i===1){ arr.push('<li class = "bottle"'+ i +" bottle of beer on the wall"); }
        else{ arr.push('<li class = "bottle">'+ "no more bottles of beer on the wall"; }
      }; 

     var arrounter = 0;
     var counter = 3;
     var interval = setInterva(function() {     
        if( counter == -1 ) { clearinterval(interval) } 
        else { $('#bottles').appen(arr[arrCounter++]);
               counter--
               console.lo("This has run " + arrCounter + " times")
        } 
      },1000)
    });



