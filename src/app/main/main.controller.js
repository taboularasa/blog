function MainController (Restangular) {
  'ngInject';
  var postsResource = Restangular.all('posts');

  this.refreshPosts = function() {
    postsResource.getList().then(function success(posts) {
      this.allPosts = posts;
      this.newPost = {};
    }.bind(this));
  };

  this.createPost = function() {
    postsResource.post(this.newPost).then(function success(){
      this.refreshPosts();
    }.bind(this));
  };

  this.refreshPosts()
}

export default MainController;
