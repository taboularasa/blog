function MainController (Restangular) {
  'ngInject';
  var basePosts = Restangular.all('posts');
  this.allPosts = basePosts.getList().$object;
  this.newPost = {};

  this.createPost = function() {
    basePosts.post(this.newPost).then(function(){
      this.allPosts = basePosts.getList().$object;
      this.newPost = {};
    }.bind(this));
  };
}

export default MainController;
