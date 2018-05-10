$(function() {
    $.ajax({
        type: 'GET',
        async: true,
        traditional: true,
        url: '/map_aurin',
        dataType: 'json',
        data: {
            'sentiment': true
        },
        success: function(data) {
            var sentiment_data = data['sentiment_data'];

            $("#container2").highcharts({
              chart: {
                  zoomType: "xy",
                  backgroundColor: null
              },
              title: {
                  text: "Sentiment with Social Features",
                  style:{
                      color:'white',
                      fontSize:'24px'
                  }

              },
              subtitle: {
                  text: "Source: Aurin",
                  style:{
                      fontSize:'16px',
                      color:'white'

                  }

              },
              xAxis: [
                  {

                      categories: [
                          "Sdyney",
                          "Melbourne",
                          "Perth",
                          "Brisbane",
                          "Canberra"
                      ],
                      labels: {
                          style: {
                              color: 'black',
                              fontSize:'20px'
                          }
                      },
                      crosshair: true
                  }
              ],
              yAxis: [
                  {
                      // Primary yAxis
                      labels: {
                          style: {
                              color: Highcharts.getOptions().colors[1]
                          }
                      },
                      title: {
                          style: {
                              color: Highcharts.getOptions().colors[1]
                          }
                      },
                      opposite: true,
                      visible: false
                  },
                  {
                      // Secondary yAxis
                      gridLineWidth: 0,
                      title: {
                          text: "Sentiment Scores",
                          style: {
                              color: Highcharts.getOptions().colors[1],
                              fontSize:'20px'
                          }
                      },
                      labels: {
                          format: "{value}",
                          style: {
                              color: 'white',
                              fontSize:'16px'
                          }
                      },
                      min: 0.54
                  },
                  {
                      // Tertiary yAxis
                      labels: {
                          style: {
                              color: Highcharts.getOptions().colors[1]
                          }
                      },
                      opposite: true,
                      visible: false
                  },
                  {
                      // 4th yAxis
                      labels: {
                          style: {
                              color: Highcharts.getOptions().colors[1]
                          }
                      },
                      opposite: true,
                      visible: false
                  },
                  {
                      // 5th yAxis
                      labels: {
                          style: {
                              color: Highcharts.getOptions().colors[1],
                              fontSize:'18px'
                          }
                      },
                      opposite: true,
                      visible: false
                  },
                  {
                      // 6th yAxis
                      labels: {
                          style: {
                              color: Highcharts.getOptions().colors[1]
                          }
                      },
                      opposite: true,
                      visible: false
                  },
                  {
                      // 7th yAxis
                      labels: {
                          style: {
                              color: Highcharts.getOptions().colors[1]
                          }
                      },
                      opposite: true,
                      visible: false
                  }

              ],
              tooltip: {
                  shared: true
              },
              legend: {
                  layout: "vertical",
                  align: "left",
                  x: 80,
                  fontSize:'20px',
                  verticalAlign: "top",
                  y: 55,
                  floating: true,
                  backgroundColor: null
                  // (Highchartss.theme && Highcharts.theme.legendBackgroundColor) || "#ffffff"
              },
              series: [
                  {
                      name: "Sentiment Scores",
                      yAxis:1,
                      type: "column",
                      data: sentiment_data[0],
                      tooltip: {
                          valueSuffix: " "
                      },
                  },
                  {
                      name: "Bachelor's degree",
                      yAxis:0,
                      type: "spline",
                      data: sentiment_data[1],
                      marker: {
                          enabled: false
                      },
                      dashStyle: "shortdot",
                      tooltip: {
                          valueSuffix: " %"
                      },
                      visible:false
                  },
                  {
                      name: "Public Transport by Train",
                      yAxis: 2,
                      type: "spline",
                      visible:false,
                      data: sentiment_data[2],
                      tooltip: {
                          valueSuffix: " %"
                      }
                  },
                  {
                      name: "Public Transport by Bus",
                      yAxis:3,
                      type: "spline",
                      visible:false,
                      data: sentiment_data[3],
                      tooltip: {
                          valueSuffix: " %"
                      }
                  },
                  {
                      name: "Unemployment",
                      yAxis:4,
                      type: "spline",
                      visible:false,
                      data: sentiment_data[4],
                      tooltip: {
                          valueSuffix: " %"
                      }
                  },
                  {
                      name: "Internet Access at Home",
                      yAxis:5,
                      type: "spline",
                      visible:false,
                      data: sentiment_data[5],
                      tooltip: {
                          valueSuffix: " %"
                      }
                  },
                  {
                      name: "25-34 Population",
                      yAxis:6,
                      type: "spline",
                      visible:false,
                      data: sentiment_data[6],
                      tooltip: {
                          valueSuffix: " %"
                      }
                  }
              ]




            //  chart: {
           //    zoomType: 'xy'
           //  },
           //  title: {
           //    text: "Average Monthly Temperature and Rainfall in          Tokyo"
           //  },
           //  subtitle: {
           //    text: "Source: WorldClimate.com"
           //  },
           //  xAxis: [{
           //    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May',                  'Jun','Jul', 'Aug', 'Sep', 'Oct',                    'Nov', 'Dec']
           //  }],
           //  yAxis: [{ //Primary yAxis
           //    labels: {
           //      format: '{value}°C',
           //      style: {
           //        color: '#89A54E'
           //      }
           //    },
           //    title: {
           //      text: 'Temperature',
           //      style: {
           //        color: '#89A54E'
           //      }
           //    }
           //  }, {//Secondary yAxis
           //    title: {
           //      text: 'Rainfall',
           //      style: {
           //        color: '#4572A7'
           //      }
           //    },
           //    labels: {
           //      format: '{value} mm',
           //      style: {
           //        color: '#4572A7'
           //      }
           //    },
           //    opposite: true
           //  }],
           //  tooltip: {
           //    shared: true
           //  },
           //  legend: {
           //    layout: 'vertical',
           //    align: 'left',
           //    x: 120,
           //    verticalAlign: 'top',
           //    y: 100,
           //    floating: true,
           //    backgroundColor: '#FFFFFF'
           //  },
           //  series: [{
           //    name: 'Rainfall',
           //    color: '#4572A7',
           //    type: 'column',
           //    yAxis: 1,
           //    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0,              135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
           //    tooltip: {
           //      valueSuffix: ' mm'
           //    }
           //  }, {
           //    name: 'Temperature',
           //    color: '#89A54E',
           //    type: 'spline',
           //    yAxis: 0,
           //    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5,        23.3, 18.3, 13.9, 9.6],
           //    tooltip: {
           //      valueSuffix: '°C'
           //    }
           // }]
          });

        }

    });











});