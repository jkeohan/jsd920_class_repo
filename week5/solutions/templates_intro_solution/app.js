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

// the "$" in the "$list" variable is a convention used to indicate the variable is pointing to a jQuery object
var $jQueryList = $('#jquery-list');

// JQUERY LIST APPEND
presidentObject.presidents.forEach(function(president) {
    $jQueryList.append('<option>' + president + '</option>')
})

// TITLE TEMPLATE APPEND
var titleObj = {
    title: 'US Presidents',
    description: 'A JSD Project',
}

var titleTemplateSource = $("#title-template").html();
var compiledTitleTemplate = Handlebars.compile(titleTemplateSource);
var titleTemplate = compiledTitleTemplate(titleObj);

$('#title').append(titleTemplate)

// HANDLEBARS LISt APPEND
var presidentTemplateSource = $('#president-template').html();
var compiledPresidentTemplate = Handlebars.compile(presidentTemplateSource);
var presidentTemplate = compiledPresidentTemplate(presidentObject);

$('#handlebars-list').append(presidentTemplate);
