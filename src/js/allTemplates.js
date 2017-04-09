'use strict';

define(['./template','./gallery'], (Picture, gallery) => {
  var picturesContainer = document.querySelector('.pictures');
 
  var renderPics = (pictures) => {
    gallery.setPic(pictures);
    pictures.response.items.forEach(function(pic, i) {
    	var picElem = new Picture();
    	picElem.setData(pic);
      	picturesContainer.appendChild(picElem.addPicsToTemplate());
      	
      	picElem.addGalleryEvent(i, pictures);
    });
  };
  return renderPics;
});


