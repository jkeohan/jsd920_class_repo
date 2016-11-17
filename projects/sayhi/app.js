
var url = "https://gist.githubusercontent.com/jkeohan/d77d5ab47e018defe48d54f59acefb65/raw/ff61673eff2e7bf610c5a426c5bd9ca46da2a9da/worldmap_geojson.json"
var c = d3.map()
var legMargin = {top:10,bottom:50}
function update(obj){
   obj.features.filter(function(d,i) {
    var code = d.properties.iso_a2.toLowerCase()
    var traslate;
    var url = "https://www.googleapis.com/language/translate/v2?key=AIzaSyAADudga5Cdk2QlHDWF8UAHQEy-Z_ikHw8&target=" + code + "&q=Hello"  
    $.when(ajaxCall(url)).then(doneCB, failCB);
    function doneCB(data){
      // found = true;
      c.set(d.properties.name,data.data.translations[0].translatedText)
      // obj.features[i].hello = data.data.translations[0].translatedText
      // obj.features[i].htrans = true
      d.hello = data.data.translations[0].translatedText
      d.htrans = true
      return d
    }
    function failCB(data){
       obj.features[i].hello = "";
       obj.features[i].htrans = false
    }    
    function ajaxCall(url) {
     return $.ajax(url);
    }
  });//filter
   return obj
}

// Use queue to pull the json and make the ajax call

d3.json(url,function(err, world)  {

  var allRegions = legendVals(world); 
  console.log("legendValus is: ",legendVals(world))
  var colorB = colorbrewer;
  var colors = d3.scale.ordinal().range(colorB["Paired"][7]).domain(legendKeys(world))   
  var texture = textures.lines().thicker().orientation("3/8")//.stroke("red")//.stroke(function(d) { return colors(d.properties.continent) });
  function filter(){ return { type:"FeatureCollection", features:world.features.filter(function(d) { return d.properties.name == "China" } ) }}

  
  //google translate API info
  //https://www.googleapis.com/language/translate/v2?key=AIzaSyAADudga5Cdk2QlHDWF8UAHQEy-Z_ikHw8&source=en&target=de&q=Hello%20world&q=My%20name%20is%20Jeff
  
  
 // https://www.googleapis.com/language/translate/v2?key=AIzaSyAADudga5Cdk2QlHDWF8UAHQEy-Z_ikHw8&target=de&q=Hello

  var worldMap = buildMap('#map',world)
  var legendMap = smallMulitples(legendVals(world))
  var countryMap = countryInfo(legendVals(world))

  function smallMulitples(arr) {
    var div = d3.select("#legends")
    arr.forEach(function(d){
      var wrapper = div.append("div").attr("class","legendDiv")//.on("click",function() { console.log("yes")})
      buildLegend(wrapper,d)
    })
  }

  function countryInfo(arr){
    console.log('countryInfo is: ', arr)
    var div = d3.select("#countryWrapper")
    d3.selectAll(".country").remove()
    arr.forEach(function(d){    
      d.values.forEach(function(country) { 
        var wrapper = div.append("div").attr("class","country")
         buildCountry(wrapper,country)
      })
    })
  }

  function build(sel,json,className,cb){
    var canvas = canvasSize(sel)
    var width = canvas[0] ; 
    var height = canvas[1]
    var map = d3.select(sel)
    var svg = map.append("svg").attr("width", width).attr("height", height)
    var projection = d3.geo.mercator().scale(1).translate([0,0])
    var path = d3.geo.path().projection(projection)
    var bounds = boundingBox(path,json,sel);
    projection.scale(bounds[0]).translate(bounds[1]);
    svg.attr("class", className).selectAll("path").data( function(d) { return json.features } )
    .enter().append("path").attr("d", path).attr("class",function(d) { return d.properties.continent })
    cb(svg)
  }

  var buildMap2 = build("#map",world,"world",function(svg){
    var texture = textures.lines().thicker().orientation("3/8")
    d3.select(svg).style("fill", function(d,i) {
      console.log(d)
     texture.stroke(function(){ 
      return colors(d.properties.continent)})
      svg.call(texture);
      return texture.url()
    })
  })

  function buildMap(sel,json){
    var canvas = canvasSize("#map")
    var width = canvas[0] ; console.log(canvas)
    var height = canvas[1]
    var map = d3.select(sel)
    var svg = map.append("svg").attr("width", width).attr("height", height)
    var projection = d3.geo.mercator().scale(1).translate([0,0])  //  .scale(width/2.5/Math.PI).translate([width /2 ,  height/1.4])
    // var projection = d3.geoMollweide().scale(1).translate([0,0])  //  .scale(width/2.5/Math.PI).translate([width /2 ,  height/1.4])
    var path = d3.geo.path().projection(projection)
    var bounds = boundingBox(path,json,sel);// console.log("bounds is: ",bounds)
    projection.scale(bounds[0]).translate(bounds[1]);
    // svg.attr("id", "countries").selectAll("path").data( function(d) { console.log("yes",json); return json.features } )
    svg.attr("id", "world").selectAll("path").data( function(d) { return json.features } )
    .enter().append("path").attr("d", path).attr("class",function(d) { return d.properties.continent })
      // .style("fill", function(d,i) { return texture.stroke("red").url() } ) 
    .style("fill", function(d,i) {
      var texture = textures.lines().thicker().orientation("3/8")
      .stroke(function(){return colors(d.properties.continent)})
       svg.call(texture);
       return texture.url()
     // if(i%2==0) {return texture1.url()} else { return texture2.url() }  
    } )
    
  }
   
    function buildCountry(sel,json) {
     var canvas = canvasSize(".country")
     var width = canvas[0]-100; 
     var height = canvas[1]-100
    var countryMap = sel.append('div').attr("class","countryMap")
    var svg = countryMap.append("svg").attr("width",width).attr("height",height)
    var projection = d3.geo.mercator().scale(1).translate([0,0])  //  .scale(width/2.5/Math.PI).translate([width /2 ,  height/1.4])
    var path = d3.geo.path().projection(projection)
    var b = path.bounds(json);
    var s = .95/Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
    var t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
    // var bounds = boundingBox(path,json,sel);// console.log("bounds is: ",bounds)
    projection.scale(s).translate(t);
    var path = d3.geo.path().projection(projection)
    // svg.attr("id", "countries").selectAll("path").data( function(d) { console.log("yes",json); return json.features } )
      svg.append("path")
      .datum(json)
      .attr("class", "outline")
      .attr("d", path).style("fill", function(d) { return colors(d["properties"]["continent"]) } ) 
    var countryInfo = sel.append("div").attr("class","countryInfo").datum(json)
    countryInfo.append("div").attr("class","line")
    countryInfo.append("p").attr("class","countryName").html(function(d) { 
      return d.properties.name })
    countryInfo.append("p").attr("class","countryHello").html('hello')
    countryInfo.append("p").attr("class"<"countryPeople").html("countryPeople")
    // svg.attr("id", "world").selectAll("path").datum(country)
    // .append("path").attr("d", path )
      d3.selectAll(".country").style("height","100%")
  }

d3.selectAll(".legendDiv")

   function buildLegend(sel,json){
    console.log(json)
     var canvas = canvasSize(".legendDiv")
     var width = canvas[0];
     var height = canvas[1] - legMargin.bottom;
     var leg = [width,height]
     // var legWidth = parseFloat(d3.select("#legends").node().clientWidth)
     // var legScale = d3.scale.linear().range([0,legWidth]).domain([0,5])
     var svg = sel.append("svg").attr("width", width).attr("height", height)
     var projection = d3.geo.mercator().scale(1).translate([0,0])
     var path = d3.geo.path().projection(projection)
     var jsonData = {type: "FeatureCollection",features:json.values}
     var bounds = boundingBoxLeg(path,jsonData,leg);// console.log("bounds is: ",bounds)
     projection.scale(bounds[0]).translate(bounds[1]);
     svg.attr("class", "countries").on("click",function() { console.log("yes") } )
    .selectAll("path").data( function(d) { return jsonData.features } )
    .enter().append("path").attr("d", path ).style("fill", function(d) { return colors(d["properties"]["continent"]) } )  
      .attr("class",function(d) {  return d.properties.name } )
    sel.append("p").text(json.key) 
    sel.on("click",function(d) {
      countryInfo([d]) //country info takes in an array
      console.log(json.values.map(function(d) { 
        return d.properties.name})) ; } )
  }
 function boundingBoxLeg(path,json,leg){ 
    //console.log("bounding box is: ",json,sel)
   // var canvas = canvasSize(sel); 
    var width = leg[0]
    var height = leg[1]//leg[0]/1.85; 
    var b = path.bounds(json);
    var s = .95/Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
    var t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
    return [s,t]
  }
  
  
  function boundingBox(path,json,sel){ 
    //console.log("bounding box is: ",json,sel)
    var canvas = canvasSize(sel); 
    var width = canvas[0] ; 
    var height = canvas[1]//width/1.85; 
    var b = path.bounds(json);
    var s = .95/Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
    var t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
   // console.log(s,t)
    return [s,t]
  }
  
  // function boundingBoxCountry(path,json,sel){ 
  //  // console.log("bounding box is: ",json,sel)
  //   var canvas = canvasSize(sel);
  //   var width = canvas[0] ; 
  //   var height = width/1.85;// console.log("canvas is :",canvas) 
  //   var b = path.bounds(json);
  //   var s = .95/Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
  //   var t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
  //  // console.log(b,s,t)
  //   return [s,t]
  // }
  
 
  var legendDivWidth = canvasSize("#legends")
  var legDivWidth = (legendDivWidth[0] / 7) -1
  var legDivWidth = (legendDivWidth[0] / 7) -1
  
  //legendDivs will create div's for each legend based on what allRegions returns
  var legendDivs = d3.select("#legends").selectAll(".legendDiv").data(function(d) { return allRegions }) 
  legendDivs.enter().append("div").classed("legendDiv",true).attr("width",legDivWidth)
  
  var newdivs = legendDivs.map(function(d,i) {
    return d.map(function(data,i) { 
       var region = regionFeatures(world,d[i].__data__.key)
      return region
    })
  })

  // d3.select(window).on('resize', function() { buildMap("#map",world) } )
   d3.select(window).on('resize', resize )
  
  function resize() {
    resizeMap("#map",world)
  }
  


  function resizeMap(sel,json) {
    var canvas = canvasSize("#map") ;// console.log("canvas is: ",canvas)
    var width = canvas[0] 
    var height = canvas[1]
    // update projection
    var projection = d3.geo.mercator().scale(1).translate([0,0])
    var path = d3.geo.path().projection(projection)
    var bounds = boundingBox(path,json,sel);// console.log("bounds is: ",bounds)
    projection.scale(bounds[0]).translate(bounds[1]);
    var mapSvg = d3.select("#world")
    mapSvg.style('width', width + 'px').style('height', height + 'px');
    mapSvg.selectAll('path').attr('d', path).style("fill", function(d,i) {
      var texture = textures.lines().thicker().orientation("3/8")
      .stroke(function(){
      
        return colors(d.properties.continent)})
       mapSvg.call(texture);
       return texture.url()
     // if(i%2==0) {return texture1.url()} else { return texture2.url() }  
    } )

    }
  
   d3.select("#legends").style("height","100%")
  })


function canvasSize(sel){
 // console.log("inside canvas", sel)
  var height = parseInt(d3.select(sel).node().clientHeight) 
  var width = parseInt(d3.select(sel).node().clientWidth )
  height == height
  return [width,height]
}

function legendVals(json){
    var filtered = json.features.filter(function(d){ 
      if (d.properties.name == "Fiji" || d.properties.name == "Fr. S. Antarctic Lands") {return false} else{ return true } })   
    return d3.nest().key(function(d) {  return d.properties.continent } ).entries(filtered) 
  }

function legendKeys(json) {
    var nest = d3.nest().key(function(d) { return d.properties.continent } ).entries(json.features)
    var keys = nest.map(function(d,i) { return d.key })
    return keys
}

function regions(region) {
  var data = allRegions.filter(function(d,i) { return d.key == region })[0].values;
 // console.log("inside regions: ", data)
    data.features;
  return data
}

function filterRegionData(arr,country){
  return arr.filter(function(d) { return d.name != country })
}

//regionFeatures will build a custom object for path as it needs a features property
 function regionFeatures(json,region){
    var obj = {type: "FeatureCollection",features:[]}
     obj.features = 
       json.features.filter(function(d) { 
      return d.properties.continent == region })
    return obj
  }


