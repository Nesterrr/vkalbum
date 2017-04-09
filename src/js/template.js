'use strict';

define(['./gallery'], (gallery) => {
  var template = document.querySelector('#picture-template');
  var templateContainer = 'content' in template ? template.content : template;

  var picElement = templateContainer.querySelector('.picture');

  function Picture(smallImg, galleryImg, data, likes, comments, nodeClone) {
    this.smallImg = smallImg;
    this.galleryImg = galleryImg;

    this.data = data;

    this.likes = likes;
    this.comments = comments;
    this.nodeClone = nodeClone;
  }

  Picture.prototype.setData = (pic) => {
    this.smallImg = pic.photo_130;
    this.galleryImg = pic.photo_604;

    this.data = pic.data;

    this.likes = pic.likes.count;
    this.comments = pic.comments.count;
  }

  Picture.prototype.addPicsToTemplate = () => {
    this.nodeClone = picElement.cloneNode(true);

    this.nodeLikes = this.nodeClone.querySelector('.likes');
    this.nodeComments = this.nodeClone.querySelector('.comments');

    this.nodeLikes.textContent = this.likes;
    this.nodeComments.textContent = this.comments;

    var img = new Image();
    var self = this.nodeClone;

    img.onload = (evt) => {
      var nodeImg = self.querySelector('img');

      nodeImg.src = evt.target.src;
    };

    img.onerror = () => {
      console.log('Img load error!');
    };

    img.src = this.smallImg;

    return this.nodeClone;
  }

  Picture.prototype.addGalleryEvent = (i, pictures) => {
    var self = this;
    self.nodeClone.onclick = function(event) {
        event.preventDefault();

        function wrap(i, pictures) {
          gallery.show(i, pictures)
        };
        wrap(i, pictures);
    };
  }
  return Picture;
});


