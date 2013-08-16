var Router = function Router(routes) {
  this.route = function(url, handler) {
    for(var i=0;i<routes.length;i++) {
      var pattern = routes[i].pattern;
      if(pattern.test(url)){
        var matches = url.match(pattern);
        matches.shift(); // remove the first match
        routes[i].handler.apply(this, matches);
        break;
      }
    }
  }
};

