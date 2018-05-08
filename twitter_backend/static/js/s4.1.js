function filter_data(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        res.push(data[i][1]);
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
            'detail': '1'
        },
        success: function(res) {
            //alert(res);
            var filtered_res = filter_data(res);
            Highcharts.chart('container4', {
            chart: {
                type: 'area'
            },
            title: {
                text: 'User Activity'
            },

            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return 2*this.value + '-' +(2*this.value+2); // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Tweeter'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                pointFormat: 'User had posted <b>{point.y:,.0f}</b> tweets'
            },
            plotOptions: {
                area: {
                    pointStart: 0,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'post',
                data: filtered_res
            }]
        });
                }
});
});





// {(6, 8): 20, (8, 10): 8, (10, 12): 19, (22, 24): 10, (12, 14): 31, (14, 16): 11, (0, 2): 10}
//{(14, 16): 265, (0, 2): 56, (18, 20): 366, (6, 8): 318, (22, 24): 334, (16, 18): 352, (8, 10): 570, (10, 12): 342, (12, 14): 251, (20, 22): 279, (4, 6): 80, (2, 4): 6}