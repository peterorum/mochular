(function() {
    angular
        .module( "mochular.main" )
        .directive( "maChart", [ chartFactory ] );

    function chartFactory() {
        let directive = {
            templateUrl: "components/chart/chart.template.html",
            restrict: "E",
            transclude: true,
            scope: {
                text: "@"
            },
            replace: true,
            link: link
        };

        function link( scope, element /* , attrs,  controller, transcludeFn */ ) {

            Highcharts.theme = {
                colors: [ '#ebebeb', '#50B432', '#ED561B', '#DDDF00', '#24CBE5',
                    '#64E572', '#FF9655', '#FFF263', '#6AF9C4' ],
                chart: {
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1
                        },
                        stops: [
                            [ 0, 'rgb(255, 255, 255)' ],
                            [ 1, 'rgb(240, 240, 255)' ]
                        ]
                    },
                    borderWidth: 2,
                    plotBackgroundColor: 'rgba(255, 255, 255, 1.0)',
                    plotShadow: true,
                    plotBorderWidth: 0
                },
                title: {
                    style: {
                        color: '#000',
                        font: 'bold 20px "Trebuchet MS", Verdana, sans-serif'
                    }
                },
                subtitle: {
                    style: {
                        color: '#666666',
                        font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
                    }
                },
                xAxis: {
                    gridLineWidth: 0,
                    lineColor: '#000',
                    tickColor: '#000',
                    lineWidth: 0,
                    tickWidth: 0,
                    labels: {
                        style: {
                            color: '#fff',
                            font: '11px Trebuchet MS, Verdana, sans-serif'
                        }
                    },
                    title: {
                        style: {
                            color: '#333',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            fontFamily: 'Trebuchet MS, Verdana, sans-serif'

                        }
                    }
                },
                yAxis: {
                    minorTickInterval: '0',
                    lineColor: '#000',
                    lineWidth: 0,
                    tickWidth: 0,
                    tickColor: '#f00',
                    labels: {
                        style: {
                            color: '#000',
                            font: '11px Trebuchet MS, Verdana, sans-serif'
                        }
                    },
                    title: {
                        style: {
                            color: '#333',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            fontFamily: 'Trebuchet MS, Verdana, sans-serif'
                        }
                    }
                },
                legend: {
                    itemStyle: {
                        font: '9pt Trebuchet MS, Verdana, sans-serif',
                        color: 'black'

                    },
                    itemHoverStyle: {
                        color: '#039'
                    },
                    itemHiddenStyle: {
                        color: 'gray'
                    }
                },
                labels: {
                    style: {
                        color: '#99b'
                    }
                },

                navigation: {
                    buttonOptions: {
                        theme: {
                            stroke: '#CCCCCC'
                        }
                    }
                }
            };

            Highcharts.setOptions( Highcharts.theme );

            element.highcharts( {
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'View options by risk vs return'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [ '1750', '1800', '1850', '1900', '1950', '1999', '2050' ],
                    tickmarkPlacement: 'off',
                    title: {
                        enabled: true
                    }
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    labels: {
                        formatter: function() {
                            return ''; // this.value / 1000;
                        }
                    }
                },
                tooltip: {
                    shared: true,
                    valueSuffix: ''
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: '#f84610',
                        lineWidth: 4,
                        marker: {
                            lineWidth: 2,
                            lineColor: '#f84610'
                        }
                    }
                },
                series: [ {
                    name: '',
                    data: [ 502, 635, 809, 947, 1402, 3634, 5268 ]
                } ]
            } );

        }

        return directive;
    }

})();


