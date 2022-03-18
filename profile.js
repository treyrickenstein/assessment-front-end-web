let sayMyFavoriteColorButton = document.querySelector('#My-Favorite-Color')

sayMyFavoriteColorButton.addEventListener('mouseover', () => {
	sayMyFavoriteColorButton.style.backgroundColor = 'green';
	sayMyFavoriteColorButton.style.color = 'white';
})

sayMyFavoriteColorButton.addEventListener('mouseout', () => {
	sayMyFavoriteColorButton.style.backgroundColor = '#EFEFEF';
    sayMyFavoriteColorButton.style.color = 'green';
})