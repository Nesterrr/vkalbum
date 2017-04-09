'use strict';

define(['./load', './allTemplates'], (loadJSON, renderPics) => {
 	var API_URL = 'https://api.vk.com/method/photos.get?';
 	var ownerId;

 	var showButton = document.querySelector('.form-show__btn');
 	var ownreIdInput = document.querySelector('.form-show__owner-id-input');

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

    if(evt.className === 'filters__likes') {
      filterId = 'filter-popular';
      var evnt = new Event("click");
  	  showButton.dispatchEvent(evnt);
    }
    if(evt.className === 'filters__comments') {
      filterId = 'filter-discussed';
      var evnt = new Event("click");
  	  showButton.dispatchEvent(evnt);
    }
    if(evt.className === 'filters__newest') {
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


