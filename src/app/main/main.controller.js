function MainController ($log, $scope, Restangular) {
  'ngInject';

  var postsResource = Restangular.all('posts');

  this.form = function() {
    return $scope.form;
  }

  this.createPost = function() {
    postsResource.post(this.newPost).then(
      function success() {
        this.refreshPosts();
      }.bind(this)
    );
  };

  this.refreshPosts = function() {
    postsResource.getList().then(function success(posts) {
      this.allPosts = posts;
      this.form().$setPristine();
      this.newPost = { title: "", body: "" };
    }.bind(this));
  };

  this.refreshPosts();
}

export default MainController;
