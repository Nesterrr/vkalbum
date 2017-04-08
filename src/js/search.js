'use strict';

define(['./load', './allTemplates'], (loadJSON, renderPics) => {
 	var API_URL = 'https://api.vk.com/method/photos.get?';
 	var ownerId;

 	var showButton = document.querySelector('.show');
 	var ownreIdInput = document.querySelector('.owner-id');

 	ownreIdInput.addEventListener('input', (event) => {
 		var evt = event.target;
 		ownerId = evt.value;
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
 			loadJSON(API_URL, renderPics, ownerId);

 			
 		}
 	});
});


