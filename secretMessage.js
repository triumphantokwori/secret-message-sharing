const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-card').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-card').classList.add('hide');
    document.querySelector('#link-card').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encryptedMessage = btoa(input.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encryptedMessage}`;
    linkInput.select();
})