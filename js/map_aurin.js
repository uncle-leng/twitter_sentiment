$(function() {
  $("#container2").highcharts({
      chart: {
          zoomType: "xy",
          backgroundColor: null
      },
      title: {
          text: "Sentiment with Social Features"
      },
      subtitle: {
          text: "Source: Aurin"
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
                      color: 'black'
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
                      color: Highcharts.getOptions().colors[1]
                  }
              },
              labels: {
                  format: "{value}",
                  style: {
                      color: Highcharts.getOptions().colors[1]
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
                      color: Highcharts.getOptions().colors[1]
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
              data: [
                  0.553715383,
                  0.547910133,
                  0.545968049,
                  0.555850676,
                  0.580302439
              ],
              tooltip: {
                  valueSuffix: " "
              },
          },
          {
              name: "Bachelor",
              yAxis:0,
              type: "spline",
              data: [
                  16.9,
                  16.6,
                  14.5,
                  14.5,
                  21.3
              ],
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
              data: [
                  4.099069,
                  3.798779,
                  1.3217952,
                  1.8566793,
                  0.0345123
              ],
              tooltip: {
                  valueSuffix: " %"
              }
          },
          {
              name: "Public Transport by Bus",
              yAxis:3,
              type: "spline",
              visible:false,
              data: [
                  2.3409892,
                  0.5409695,
                  1.6689873,
                  2.4162769,
                  2.9963178
              ],
              tooltip: {
                  valueSuffix: " %"
              }
          },
          {
              name: "Unemployment",
              yAxis:4,
              type: "spline",
              visible:false,
              data: [
                  5.7,
                  5.5,
                  4.8,
                  5.9,
                  3.6
              ],
              tooltip: {
                  valueSuffix: " %"
              }
          },
          {
              name: "Internet Access at Home",
              yAxis:5,
              type: "spline",
              visible:false,
              data: [
                  76.5,
                  76.4,
                  77,
                  78.6,
                  83.2
              ],
              tooltip: {
                  valueSuffix: " %"
              }
          },
          {
              name: "25-34 Population",
              yAxis:6,
              type: "spline",
              visible:false,
              data: [
                  16,
                  16,
                  15.2,
                  15.4,
                  16.8
              ],
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
});