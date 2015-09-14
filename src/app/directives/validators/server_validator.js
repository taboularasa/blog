function ServerValidator ($q, $http) {
  'ngInject';

  var link = function($scope, element, attrs, ngModel) {
    ngModel.$asyncValidators.serverValidator = function(title) {
      var key = attrs.name;
      var params = { post: {}}
      params.post[key] = title
      return $http.post("http://localhost:4000/posts/validate", params).
        then(function resolved(response){
          if (response.data.errors[key]) {
            return $q.reject(response.data.errors[key][0]);
          } else {
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
