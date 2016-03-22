(function() {
  angular
    .module("mochular")
    .directive("maLabel", [ labelFactory ]);

  function labelFactory() {
    let directive = {
      template: `
        <div class="ma-label">
          {{text}}
          <ng-transclude></ng-transclude>
        </div>
        `,
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
