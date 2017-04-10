'use strict';

define(['./allTemplates'], (renderPics) => {
  var cbName = 'cb',
      API_URL = 'https://api.vk.com/method/photos.get?',
      COUNT = 50,
      ownerId = 200;

  var filters = (list, filterID) => {
    var items = list.response.items;
    switch(filterID) {
      case 'filter-popular': {
        items.sort(function(a, b){
          return b.likes.count - a.likes.count;
        });
        break;
      }
      case 'filter-new': {
        items.sort(function(a, b){
          return b.date - a.date;
        });
        break;
      }
      case 'filter-discussed': {
        items.sort(function(a, b){
        return b.comments.count - a.comments.count;
        });
        break;
      }
    }
    return list;
  }

  var loadJSON = (url, callback, ownerId, filterId) => {
    window[cbName] = function(data) {
      if(data.error) {
        alert(data.error.error_msg);
      } else {
          if(data.response.count === 0) {
            alert('User dont have any images on the wall.');
          } else {
            callback(filters(data, filterId));
          }
      }
    };

    var script = document.createElement('script');
    script.src = url + 'owner_id='+ ownerId + '&album_id=wall&extended=1&rev=1&v=5.52' + '&count=' + COUNT + '&callback=' + cbName;
    document.body.appendChild(script);
  };

  return loadJSON;
});


