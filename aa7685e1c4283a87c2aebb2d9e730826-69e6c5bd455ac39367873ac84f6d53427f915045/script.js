const emojiField = document.querySelector('.emoji-area__emoji');

/**
* Sets the innerHTML of the emojiField element.
* @param {String} emoji string data to be rendered.
*/
function setEmoji(emoji) {
        emojiField.innerHTML = emoji;
}

/**
* Handles and retreives a random emoji.
* Makes a fetch request to the ranmoji api.
*/
function getRandom() {
  fetch('https://ranmoji.herokuapp.com/emojis/api/v.1.0/')
    .then(response => {
      response.json().then(data => {
        // console.log('data', data)
        setEmoji(data.emoji)
      })
    });
}


getRandom();
