'use strict';

define(['./load', './allTemplates'], (loadJSON, renderPics) => {
 	var API_URL = 'https://api.vk.com/method/photos.get?';
 	var ownerId;

 	var showButton = document.querySelector('.show');
 	var ownreIdInput = document.querySelector('.owner-id');

 	ownreIdInput.addEventListener('input', (event) => {
    event.preventDefault();
 		var evt = event.target;
 		ownerId = evt.value;
 	});

 	var filters = document.querySelector('.filters');
  var filterId = 'filter-new';

  filters.addEventListener('click', (event) => {
	  event.preventDefault();
    var evt = event.target;

    if(evt.className === 'likes') {
      filterId = 'filter-popular';
      var evnt = new Event("click");
  	  showButton.dispatchEvent(evnt);
    }
    if(evt.className === 'comments') {
      filterId = 'filter-discussed';
      var evnt = new Event("click");
  	  showButton.dispatchEvent(evnt);
    }
    if(evt.className === 'newest') {
      filterId = 'filter-new';
      var evnt = new Event("click");
  	  showButton.dispatchEvent(evnt);
    }
  });

 	showButton.addEventListener('click', (event) => {
 		event.preventDefault();
 		if(!ownerId) {
 			alert('Input owner ID!');
 		} else {
 			var imgNodes = document.querySelectorAll('.picture');
 			if(imgNodes) {
 				imgNodes.forEach((node) => {
 					node.remove();
 				});
 			}
 			loadJSON(API_URL, renderPics, ownerId, filterId);
 		}
 	});
});


