$(function () {
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
            data: [
                [0.547298825,	0.54785812675,	0.5545942115,	0.55868612725,	0.562121085],
                [0.53967549,	0.54053145775,	0.5486274905,	0.55249834975,	0.560026674],
                [0.539315045,	0.5411554255,	0.545523051,	0.5507879295,	0.553709277],
                [0.545874749,	0.550677098,	0.557441,	0.56024958325,	0.565842275],
                [0.561038884,	0.5689296165,	0.578829361,	0.59446711575,	0.598591017]
            ],
            tooltip: {
                headerFormat: '<em>Score of {point.key}</em><br/>'
            }
        }
        // , {
        //     name: 'Outlier',
        //     color: Highcharts.getOptions().colors[0],
        //     type: 'scatter',
        //     data: [ // x, y positions where 0 is the first category
        //
        //     ],
        //     marker: {
        //         fillColor: 'white',
        //         lineWidth: 1,
        //         lineColor: Highcharts.getOptions().colors[0]
        //     },
        //     tooltip: {
        //         pointFormat: 'Observation: {point.y}'
        //     }
        // }
        ]

    });
});