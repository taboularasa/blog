function ServerError() {
  let directive = {
    restrict: 'A',
    require: '?ngModel',
    link: link
  };

  return directive;
}

function link(scope, element, attrs, controller) {
  element.on("change", function(){
    scope.apply(function(){
      controller.$setValidity("server", true);
    });
  });
}

export default ServerError;
