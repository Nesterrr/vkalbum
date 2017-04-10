'use strict';

define(() => {
	var galleryOverlay = document.querySelector('.gallery-overlay');
	var galleryOverlayImage = document.querySelector('.gallery-overlay__image');

  var likes =  document.querySelector('.likes');
  var comments =  document.querySelector('.comments');
  var date =  document.querySelector('.data');

	function Gallery(pictures, photoId) {
	}

  Gallery.prototype.setPic = (pic) => {
    this.pic = pic;

    this.rArrow = document.querySelector('.right');
    this.lArrow = document.querySelector('.left');
  }

	Gallery.prototype.show = (num, pictures) => {
    var self = this;

    function setPic(num, pictures) {
		  galleryOverlay.classList.remove('invisible');
      galleryOverlayImage.setAttribute('src', pictures.response.items[num].photo_604);
      likes.textContent = pictures.response.items[num].likes.count;
      comments.textContent = pictures.response.items[num].comments.count;

      function formatDate(date) {
        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

         var mm = date.getMonth() + 1;
         if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
      }
      var d = new Date(pictures.response.items[num].date * 1000)
      date.textContent = formatDate(d);
    }

    setPic(num, pictures);

    function closeGallery() {
      galleryOverlay.classList.add('invisible');
    }

    function next() {
      num++;
      if(num === pictures.response.items.length) {
        num = 0;
      }
      setPic(num, pictures);
    }

    function prev() {
      if(num === 0) {
        num =  + pictures.response.items.length - 1;
      }
      num--;
      setPic(num, pictures);
    }

    document.addEventListener('click', (event) => {
      event.preventDefault();
      var evt = event.target;

      if(evt.className === galleryOverlay.className) {
        closeGallery();
      }
    });

    this.rArrow.onclick = function() {
      next();
    };
    
	  document.addEventListener('keydown', (event) => {
      var evt = event.keyCode;

      if(evt === 27) {
        closeGallery();
      }
      if(evt === 37) {
        prev();
      }
      if(evt === 39) {
        next();
      }
    }); 

    this.lArrow.onclick = function() {
      prev();
    };
  };
  return new Gallery();
});
