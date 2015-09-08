function config ($logProvider, RestangularProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  RestangularProvider.setBaseUrl('http://localhost:4000');
  var requestInterceptor = function(elem, operation, what) {
    var retElem = elem;
    if (operation === 'post' || operation === 'put') {
        var wrapper = {};
        wrapper[what.substring(0, what.length -1)] = elem;
       retElem = wrapper;
    }
    return retElem;
  };
  RestangularProvider.addRequestInterceptor(requestInterceptor);
}

export default config;
