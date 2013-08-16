Javascript Router
=================

A very simple javascript router with no dependencies.

## Usage

``` html
  <script type="text/javascript" src="/js/router.js"></script>

  <script type="text/javascript">
  
  // define routes
  var routes = [
    {
      pattern: new RegExp('http:\/\/www.bbc.co.uk\/news\/.*-([0-9]+)'),
      handler: showRelatedNews
    },
    {
      pattern: new RegExp('http:\/\/www.bbc.co.uk\/sport\/0\/.*\/([0-9]+)'),
      handler: showRelatedSports
    }
  ];

  function showRelatedNews(id) {
    // do stuff here
  }

  function showRelatedSports(id) {
    // do stuff here
  }

  var router = new Router(routes)
  router.route(document.location.href);
  </script>
```
