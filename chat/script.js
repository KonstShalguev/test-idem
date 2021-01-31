const inputField = document.querySelector('.chat__input-field');
const chatButton = document.querySelector('.chat__button');
const messageArea = document.querySelector('.chat__messages-wrapper');

function sendMessage(text) {
	const message = document.createElement('div');
	message.classList.add('message');
	message.classList.add('chat__message');
	message.classList.add('message_status_sent');

	message.insertAdjacentHTML('afterbegin',
		`
			<img src="./images/avatar.png" class="message__avatar message__avatar_status_sent">
			<div class="message__border-text message__border-text_status_sent">
				<p class="message__text"></p>
			</div>
		`);

	const messageText = message.querySelector('.message__text');
	messageText.textContent = text;

	return message;
}

chatButton.addEventListener('click', function () {
	if(inputField.value !== ''){
		messageArea.appendChild(sendMessage(inputField.value));
		messageArea.scrollTop = messageArea.scrollHeight;
		inputField.value = '';
	}
});