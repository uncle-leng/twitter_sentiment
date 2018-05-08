
function filter_result1(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var x = data[i][0][0];
        var y = data[i][0][1];
        var weight = data[i][1];
        var tmp = {location: new google.maps.LatLng(x, y), weight: weight * 100};
        res.push(tmp);
    }
    return res;
}

function filter_result2(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var x = data[i][0];
        var y = data[i][1];
        res.push(new google.maps.LatLng(x, y));
    }
    return res;
}


$(function() {
    $.ajax({
        type: 'GET',
        async: true,
        traditional: true,
        url: '/user_detail',
        dataType: 'json',
        data: {
            'detail': '2'
        },
        success: function(raw_data) {

            var filtered_data1 = filter_result1(raw_data['result1']);
            var filtered_data2 = filter_result2(raw_data['result2']);
            var map1;
            var map2;
            var brooklyn = new google.maps.LatLng(47.5077, 19.0583);
            var MY_MAPTYPE_ID = 'custom_style';
            function initialize1(data) {

                var featureOpts = [
                    {
                        stylers: [
                            { hue: '#87CEFA' },
                            { visibility: 'simplified' },
                            { gamma: 0.5 },
                            { weight: 0.5 }
                        ]
                    },
                    {
                        elementType: 'labels',
                        stylers: [
                            { visibility: 'off' }
                        ]
                    },
                    {
                        featureType: 'water',
                        stylers: [
                            { color: '#0878be' }
                        ]
                    }
                ];
                var heatMapData = data;
                var addListenersOnCircle = function(polygon) {
                    google.maps.event.addListener(polygon, 'click', function (event) {
                        alert(polygon.index);
                    });
                };
                var mapOptions = {
                    zoom: 6,
                    // center: {lat: -22.75, lng: 133.79},
                    // center: {lat: -33.865143, lng: 151.209900},//Sydney
                    // center:{lat:37.774546, lng:-122.433523},
                    center:{lat:-36,lng:148},
                    mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                    },
                    mapTypeId: MY_MAPTYPE_ID
                };

                map1 = new google.maps.Map(document.getElementById('map-canvas'),
                    mapOptions);

                var styledMapOptions = {
                    name: 'Custom Style'
                };

                var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

                map1.mapTypes.set(MY_MAPTYPE_ID, customMapType);

                var heatmap = new google.maps.visualization.HeatmapLayer
                ({
                    data: heatMapData
                    // data:weighted
                });
                // heatmap.setData(weighted);
                heatmap.setMap(map1);


            }
            function initialize2(data) {
            var featureOpts = [
                {
                    stylers: [
                        { hue: '#87CEFA' },
                        { visibility: 'simplified' },
                        { gamma: 0.5 },
                        { weight: 0.5 }
                    ]
                },
                {
                    elementType: 'labels',
                    stylers: [
                        { visibility: 'off' }
                    ]
                },
                {
                    featureType: 'water',
                    stylers: [
                        { color: '#0878be' }
                    ]
                }
            ];
            var heatmapData = data;


            var addListenersOnCircle = function(polygon) {
                google.maps.event.addListener(polygon, 'click', function (event) {
                    alert(polygon.index);
                });
            };
            var mapOptions = {
                zoom: 4,
                center: {lat: -24.75, lng: 134.79},
                // center: {lat: -33.865143, lng: 151.209900},//Sydney
                // center:{lat:37.774546, lng:-122.433523},
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                },
                mapTypeId: MY_MAPTYPE_ID
            };

            map2 = new google.maps.Map(document.getElementById('map-canvas2'),
                mapOptions);

            var styledMapOptions = {
                name: 'Custom Style'
            };

            var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

            map2.mapTypes.set(MY_MAPTYPE_ID, customMapType);
            var heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapData
            });
            heatmap.setMap(map2);
        }
            google.maps.event.addDomListener(window, 'load', initialize1(filtered_data1));
            google.maps.event.addDomListener(window, 'load', initialize2(filtered_data2));

        }
    })
});






