# Project Overview

## Project Description

Recreate an interactive version of [21 Ways To Say Hi](http://time.com/40910/21-ways-to-say-hello-infographic/) infographic created by Samanath Grossman and visible on Time.com

## Functionl Components

This is a breakdown of the top level functionality for final project

* Use D3 to render the world map based on the mercator() projection but other projections will be tested
* Use D3 to render standard regional views with included countries
* Use D3 to render single country views
* Include a lanuage API to dynamically translate build the translation
* Store each translation in object for cooresponding country so as not to query API a second time
* Inclue audio (if possible) of translations as some languages are too unique and\or have regional dialects that make it impossible to visually decipher
* Use Angular v1 to manage routing and dynamically build the coresponding views using templates and ng-repeat

## Helper Functions (reusable in other projects)
* canvasSize(sel) - used take in a DOM element and return it's current width/height.  This can be used for setting the width\height of the SVG's and when creating and redrawing (responsive) the D3 visuals.

* boundingBox(path,json) - used to define bounding box for an SVG so that the visual fits within the defined space without having to manually define its center, scale and translate properties.

## Additional Libraries
* [Colorbrewer](http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3) - used to pull in tested color schemes
* [Angular](https://angularjs.org/)

## JSON Data Keys
* features.properties.continent - returns continent for that country 

## jQuery Functional Requirements
 Use this section to list some, but not all, of the jQuery methods discovered while working on this project.

## Change Log
 Use this section to document what changes were made and when.

## Issues and Resolutions
 Use this section to list of all issues encountered and their resolution

####ISSUE: legWidth was undefined and boundingbox returned
1.196626578944837 [-121609.6795386975, 25103.90092276067] 
instead of...
47.50867703653491 [188, 142.4346910923981]  //this is good

####RESOLUTION: used debugger to confirm legWidth was undefined. 

The path used for boundingbox needs to have the data formated as: 
```javascript
Object {type: "FeatureCollection", features: Array[176]}
```
However when I attempted to filter for regional data .filter() method created only a new array of those regional countries but not as an object defined above. 
```javascript
[Object, Object, Object, Object, Object, Object, Object]
```

This required that I extend the regionalFeatures function to build a new obj with those properties
```javascript
     function regionFeatures(json){
        var obj = {type: "FeatureCollection",features:[]}
         obj.features = 
           json.features.filter(function(d) { 
          return d.properties.continent == "North America" })
        return obj
      }
```
####Resources: [centering a map using GeoJson](https://bl.ocks.org/mbostock/4707858)

***

####ISSUE:
####RESOLUTION:

####Additional Resources:
* [Markdown Documentation](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
