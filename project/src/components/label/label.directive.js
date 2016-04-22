(function() {
    angular
        .module("mochular.main")
        .directive("maLabel", [ labelFactory ]);

    function labelFactory() {
        let directive = {
            templateUrl: "components/label/label.template.html",
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


