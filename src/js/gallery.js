'use strict';

define(() => {
	var galleryOverlay = document.querySelector('.gallery-overlay');
	var galleryOverlayImage = document.querySelector('.gallery-overlay-image');

  var likes =  document.querySelector('.gallery-likes');
  var comments =  document.querySelector('.gallery-comments');
  var date =  document.querySelector('.gallery-data');

	function Gallery(pictures, photoId) {
	}

  Gallery.prototype.setPic = (pic) => {
    this.pic = pic;

    this.rArrow = document.querySelector('.right-arrow');
    this.lArrow = document.querySelector('.left-arrow');
  }

	Gallery.prototype.show = (num, pictures) => {
    var self = this;

    function setPic(num, pictures) {
		  galleryOverlay.classList.remove('invisible');
      galleryOverlayImage.setAttribute('src', pictures.response.items[num].photo_604);

      likes.textContent = pictures.response.items[num].likes.count;
      comments.textContent = pictures.response.items[num].comments.count;
      date.textContent = new Date(pictures.response.items[num].date * 1000);
    }

    setPic(num, pictures);
    
    document.addEventListener('click', (event) => {
      event.preventDefault();
      var evt = event.target;

      if(evt.className === galleryOverlay.className) {
        galleryOverlay.classList.add('invisible');
        this.rArrow.onclick = null;
        this.lArrow.onclick = null;
      }
    });

    this.rArrow.onclick = function() {
      num++;
      if(num === pictures.response.items.length) {
        num = 0;
      }
      setPic(num, pictures);
    };
	
    this.lArrow.onclick = function() {
      if(num === 0) {
        num =  + pictures.response.items.length - 1;
      }
      num--;
      setPic(num, pictures);
    };
  };
  return new Gallery();
});
