var mashUrl = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json'

var Source = function(name,url,articles) {
  this.name = name,
  this.url = url,
  this.articles = articles
}

var mashable = new Source("mashable",mashUrl)

console.log(mashable)

// var Article = function(title,img,tags,)

// var mashable = new Source('mashable',mashUrl)

// function pullJson(callback){
//   return function(url) {
//     $.getJSON(url)
//     .done(function(res) { 
//       if(callback) { return callback(res); }
//       else { console.log(res) } 
//     })
//   }
// }


