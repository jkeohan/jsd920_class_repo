var presidentObject = {
    presidents: [
        'Washington',
        'Adams',
        'Jefferson',
        'Madison',
        'Monroe',
        'Adams',
        'Jackson',
        'Van Buren',
        'Harrison',
        'Tyler',
        'Polk',
        'Taylor',
        'Fillmore',
        'Pierce',
        'Buchanan',
        'Lincoln',
        'Johnson',
        'Grant',
        'Hayes',
        'Garfield',
        'Arthur',
        'Cleveland',
        'Harrison',
        'Cleveland',
        'McKinley',
        'Roosevelt',
        'Taft',
        'Wilson',
        'Harding',
        'Coolidge',
        'Hoover',
        'Roosevelt',
        'Truman',
        'Eisenhower',
        'Kennedy',
        'Johnson',
        'Nixon',
        'Ford',
        'Carter',
        'Reagan',
        'Bush',
        'Clinton',
        'Bush',
        'Obama',
    ]
}


var list = $('#jquery-list')
presidentObject.presidents.forEach(function(d){
    var option = $("<option>").html(d)
    list.append(option)
})

var titleObj = {
    title: "Handlebars",
    description: "A HB Project"
}

var hbTitle = $('#title-template').html()
var compileTitle = Handlebars.compile(hbTitle)
var addTitleObj = compileTitle(titleObj)
var hbTitleHtml = $('#hbtitle').append(addTitleObj)

//1. grab handblebars template
var presTemplate = $("#president-template").html()
//2. complie template
var compileTemp = Handlebars.compile(presTemplate)
//3. add objs
var addObjs = compileTemp(presidentObject)
//4. append 
var hbList = $('#handlebars-list').append(addObjs)




