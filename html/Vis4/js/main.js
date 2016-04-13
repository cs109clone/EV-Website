
var allData = [];
var centerUS = [39.8333333,-98.585522];
// Variable for the visualization instance
var chargerMap;
var chargerTypes = {

    NEMA515 : "NEMA 5-15",
    NEMA520 : "NEMA 5-20",
    NEMA1450 : "NEMA 14-50",
    J1772 :  "J1772",
    CHADEMO : "CHAdeMO",
    J1772COMBO : "SAE J1772 Combo",
    TESLA : "Tesla"
};



// Start application by loading the data
loadData();


function loadData() {

    // Hubway XML station feed
    var url = 'http://www.thehubway.com/data/stations/bikeStations.xml';
    var yql = 'https://query.yahooapis.com/v1/public/yql?q='
        + encodeURIComponent('SELECT * FROM xml WHERE url="' + url + '"')
        + '&format=json&callback=?';

    //$.getJSON(yql, function(jsonData){
    //  //console.log(jsonData);
    //    allData = jsonData.query.results.stations.station;
    //    //console.log(allData);
    //    $('#station-count').text(allData.length);

    $.getJSON('data/APIanswer-elec.json', function(data) {
        allData = data;
        $('#charger-count').text(allData.fuel_stations.length);
        console.log(allData.fuel_stations);
        createVis();
    });


    //});
    // TO-DO: LOAD DATA

}


function createVis() {
    // TO-DO: INSTANTIATE VISUALIZATION
    chargerMap = new ChargerMap('charger-map',allData.fuel_stations,centerUS);
}