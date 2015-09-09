function NavbarDirective() {
  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
      testValue: '=testValue'
    },
    controller: function NavbarController() {},
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

export default NavbarDirective;
