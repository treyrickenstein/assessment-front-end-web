console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}
let sayGoogleButton = document.querySelector('#Google')

sayGoogleButton.addEventListener('mouseover', () => {
	sayGoogleButton.style.backgroundColor = 'black';
	sayGoogleButton.style.color = 'white';
})

sayGoogleButton.addEventListener('mouseout', () => {
	sayGoogleButton.style.backgroundColor = '#EFEFEF';
    sayGoogleButton.style.color = 'black';
})

let sayFriendButton = document.querySelector('#Friend')

sayFriendButton.addEventListener('mouseover', () => {
	sayFriendButton.style.backgroundColor = 'black';
	sayFriendButton.style.color = 'white';
})

sayFriendButton.addEventListener('mouseout', () => {
    sayFriendButton.style.backgroundColor = '#EFEFEF';
    sayFriendButton.style.color = 'black';
})



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);