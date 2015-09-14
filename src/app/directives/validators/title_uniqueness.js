function TitleUniquenessValidator ($q, $http) {
  'ngInject';

  var link = function($scope, element, attrs, ngModel) {
    ngModel.$asyncValidators.titleUnique = function(title) {
      var params = JSON.stringify({ 'title' : title });
      return $http.get(`http://localhost:4000/posts/validate?post=${params}`).
        then(function resolved(response){
          if (response.data.errors.title) {
            return $q.reject(response.data.errors.title[0]);
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

export default TitleUniquenessValidator;
