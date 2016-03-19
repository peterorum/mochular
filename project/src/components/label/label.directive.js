(function() {
  angular
    .module("mochular")
    .directive("maLabel", [ labelFactory ]);

  function labelFactory() {
    let directive = {
      template: `
        <div class="ma-label">
          {{text}}
        </div>
        `,
      restrict: "E",
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
