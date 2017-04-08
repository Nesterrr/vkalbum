'use strict';

define(['./allTemplates'], (renderPics) => {
  var cbName = 'cb',
      API_URL = 'https://api.vk.com/method/photos.get?',
      COUNT = 50,
      ownerId = 200;

  var loadJSON = (url, callback, ownerId) => {
    window[cbName] = function(data) {
      if(data.error) {
        alert(data.error.error_msg);
      } else {
          if(data.response.count === 0) {
            alert('User dont have any images on the wall.');
          } else {
            callback(data);
          }
      }
      
    };

    var script = document.createElement('script');
    script.src = url + 'owner_id='+ ownerId + '&album_id=wall&extended=1&v=5.52' + '&count=' + COUNT + '&callback=' + cbName;
    document.body.appendChild(script);
  };

  return loadJSON;
});


