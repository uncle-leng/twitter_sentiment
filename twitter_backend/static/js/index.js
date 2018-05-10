
function generate_row(row_data) {
    var res = [];
    row_data.sort(function(a, b) {return a - b;});
    res.push(row_data[0]);
    res.push((row_data[7] - row_data[0]) * 0.25 + row_data[0]);
    res.push((row_data[5] + row_data[6]) * 0.5);
    res.push((row_data[7] - row_data[0]) * 0.75 + row_data[0]);
    res.push(row_data[7]);
    return res;
}


function get_box_chart_data(origin_data) {
    var res = [];
    for (var i = 0; i < origin_data.length; i++) {
        res.push(generate_row(origin_data[i]));
    }
    return res;
}



$(function () {
    $.ajax({
        type: 'GET',
        async: true,
        traditional: true,
        url: '/cities',
        dataType: 'json',
        data: {
            'sentiment': true
        },

        success: function(data) {
            //alert(data);
            var tmp = data['sentiment_data'];
            var chart_data = get_box_chart_data(tmp);


            $('#container').highcharts({

        chart: {
            type: 'boxplot',
            backgroundColor: null

        },
        event:{
            height:'120%'
        },

        title: {
            text: null
        },


        xAxis: {
            categories: ['Sdyney', 'Melbourne', 'Perth', 'Brisbane', 'Canberra'],
            labels: {
                style: {
                    color: 'black',
                    fontSize:'22px'

                }
            }
        },

        yAxis: {
            title: {
                text: 'Scores',
                fontSize:'22px'
            },
            labels: {
                style: {
                    color: 'black',
                    fontSize:'22px'
                }
            },
            plotLines: [{
                value: 0.556749336,
                color: 'red',
                width: 1,
                label: {
                    text: 'Theoretical mean: 0.56',
                    align: 'center',
                    style: {
                        color: 'white',
                        fontSize:'20px'
                    }
                }
            }]
        },

        series: [{
            name: 'Observations',

            data: chart_data,
            tooltip: {
                headerFormat: '<em>Score of {point.key}</em><br/>'
            }
        }
        ]
    });
        }

    })


});