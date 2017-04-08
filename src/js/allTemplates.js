'use strict';

define(['./template'], (addPicsToTemplate) => {
  // Блок внутри которого будут добавлены картинки
  var picturesContainer = document.querySelector('.pictures');
 
  var renderPics = (pictures) => {
    pictures.response.items.forEach(function(pic) {
      picturesContainer.appendChild(addPicsToTemplate(pic));
    });
  };
  return renderPics;
});


