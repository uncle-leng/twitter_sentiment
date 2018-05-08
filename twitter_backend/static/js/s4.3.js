

$(function() {
    $.ajax({
        type: 'GET',
        async: true,
        traditional: true,
        url: '/user_detail',
        dataType: 'json',
        data: {
            'detail': '3'
        },
        success: function(raw_data) {
            var data = filter_result(raw_data['result']);
            var map2;
            var brooklyn = new google.maps.LatLng(47.5077, 19.0583);
            var MY_MAPTYPE_ID = 'custom_style';
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
            google.maps.event.addDomListener(window, 'load', initialize(data));

        }
    })
});















