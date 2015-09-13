function MainController ($log, $scope, Restangular) {
  'ngInject';

  this.form = $scope.form;
  var postsResource = Restangular.all('posts');

  this.refreshPosts = function() {
    postsResource.getList().then(function success(posts) {
      this.allPosts = posts;
      this.newPost = {
        title: "",
        body: ""
      };
    }.bind(this));
  };

  this.createPost = function() {
    postsResource.post(this.newPost).then(
      function success() {
        this.refreshPosts();
      }.bind(this),
      function failure(response) {
        _.forOwn(response.data, function(value, key) {
          this.form[key].$setValidity("server", false);
          this.form[key].$error.server = value.join(", ");
        }, this);
      }.bind(this)
    );
  };

  this.refreshPosts();
}

export default MainController;
