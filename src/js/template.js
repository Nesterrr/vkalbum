'use strict';

define(() => {
  // Шаблон
  var template = document.querySelector('#picture-template');
  var templateContainer = 'content' in template ? template.content : template;

  var picElement = templateContainer.querySelector('.picture');

  var addPicsToTemplate = (pic) => {
    var nodeClone = picElement.cloneNode(true);

    var img = new Image();

    img.onload = (evt) => {
      var nodeImg = nodeClone.querySelector('img');

      nodeImg.src = evt.target.src;
    };

    img.onerror = () => {
      console.log('Img load error!');
    };

    img.src = pic.photo_604;

    return nodeClone;
  }
  return addPicsToTemplate; 
});


