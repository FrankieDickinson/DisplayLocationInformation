
// Geocoding key: AIzaSyCHI3pt_PF-nKwz9_W5fV4h9-EDdIQ_MMk


var townList = [];
var size = 0;

var loc;
var geocode;
var map;

// Waits for the page before adding listener
window.onload = function(){
    geocoder = new google.maps.Geocoder;
    document.getElementById("submitBtn").addEventListener("click", addTown);
    console.log("loaded");


};

function addTown(){

    var long;
    var lat;
    var town = {
      // Get the document element
      name : function(){
          town.name = "";
      },
        
        //Information relating to the geocode
        geocode : {
        latitude : 0,
        longitude : 0
        }

    };

    // Increment items in the list
    size++;

    // Add item to object literal
    town.name = document.getElementById("town").value;

    // Clear text after selection
    var node = document.getElementById("town");
    node.value = "";
    node.focus();
    node.select();
    
    // Display current town to the list
    displayTown(town.name);

    // Load geocode for town
    requestGeocode(town.name);



    
}

function setMap(json){
    var geo = json.split("_");
    var latitude = geo[0];
    latitude = parseFloat(latitude);
    var long = geo[1];
    long = parseFloat(long);

    console.log(latitude + ", " + long);
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: long},
        zoom: 8
    });
}

// 
function displayTown(name){
    
    // Get reference to town list
    var list = document.getElementById("list");
    
    // Create and append new item to existing list
    var item = document.createElement("li");
    console.log(name);
    var text = document.createTextNode(name);
    item.appendChild(text);
    list.appendChild(item);
    
}

function ajax(script, func){
    if (script.length == 0) {
        console.log("no script");
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                func(this.responseText);
            }

        };
        xmlhttp.open("GET", "./php/" + script, true);
        xmlhttp.send();
    } 
}




// Call ajax function which uses curl to get a key
function requestGeocode(town){
    ajax("geocode.php?q=" + town, setMap);
        
       
}

    


