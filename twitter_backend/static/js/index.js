
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

        title: {
            text: null
        },

        legend: {
            enabled: false
        },

        xAxis: {
            categories: ['Sdyney', 'Melbourne', 'Perth', 'Brisbane', 'Canberra'],
            labels: {
                style: {
                    color: 'white'
                }
            },
        },

        yAxis: {
            title: {
                text: 'Scores'
            },
            labels: {
                style: {
                    color: 'white'
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
                        color: 'white'
                    }
                }
            }]
        },

        series: [{
            name: 'Observations',
            /*
            data: [
                [0.547298825,	0.54785812675,	0.5545942115,	0.55868612725,	0.562121085],
                [0.53967549,	0.54053145775,	0.5486274905,	0.55249834975,	0.560026674],
                [0.539315045,	0.5411554255,	0.545523051,	0.5507879295,	0.553709277],
                [0.545874749,	0.550677098,	0.557441,	0.56024958325,	0.565842275],
                [0.561038884,	0.5689296165,	0.578829361,	0.59446711575,	0.598591017]
            ],
            */
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