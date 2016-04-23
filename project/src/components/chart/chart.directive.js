(function() {
    angular
        .module("mochular.main")
        .directive("maChart", [ chartFactory ]);

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

        function link( /*scope*/ ) {
        }

        return directive;
    }

})();


