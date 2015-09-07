function MainController () {
  'ngInject';

  this.testModal = {
    "title": "HAHA",
    "content": "<p> hahah <b>hoho</b></p>"
  };

  this.testValue = function () {
    return Date.now();
  };
}

export default MainController;
