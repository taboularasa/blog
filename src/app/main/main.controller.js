function MainController (Restangular) {
  'ngInject';
  var basePosts = Restangular.all('posts');
  this.allPosts = basePosts.getList().$object;
  this.newPost = {};

  this.createPost = function(userAttrs) {
    basePosts.post(userAttrs);
  };
}

export default MainController;
