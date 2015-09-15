function ServerValidator ($q, $http) {
  'ngInject';

  var buildParams = function(resource, key, value) {
    var params = {};
    params[resource] = {};
    params[resource][key] = value;
    return params;
  }

  var link = function($scope, element, attrs, ngModel) {
    ngModel.$asyncValidators.serverValidator = function(title) {
      var resource = attrs.ngModel.split(".")[1]
      var key = attrs.name
      var params = buildParams(resource, key, title)
      return $http.post(`http://localhost:4000/${resource}s/validate`, params).
        then(function resolved(response){
          if (response.data.errors[key]) {
            $scope.errorMessages = response.data.errors[key]
            return $q.reject('failed server validation');
          } else {
            $scope.errorMessages = []
            return true;
          }
        });
    };
  };

  return {
    require : 'ngModel',
    link: link
  };

}

export default ServerValidator;
