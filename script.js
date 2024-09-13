const statusElement = document.getElementById('status');

function updateFocusStatus() {
    if (document.hasFocus()) {
        statusElement.textContent = 'Статус фокусу: Сторінка у фокусі';
        statusElement.classList.remove('unfocused');
        statusElement.classList.add('focused');
    } else {
        statusElement.textContent = 'Статус фокусу: Сторінка не у фокусі';
        statusElement.classList.remove('focused');
        statusElement.classList.add('unfocused');
    }
}

window.addEventListener('focus', updateFocusStatus);
window.addEventListener('blur', updateFocusStatus);

updateFocusStatus();