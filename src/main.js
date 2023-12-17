document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.js--input-btn').addEventListener('click', async function () {
        let button = this;
        let inputField = document.querySelector('.js--input-field');
        let inputValue = inputField.value.trim();
        let spinner = document.querySelector('.js--spinner-border');
        let controllerField = document.querySelector('.js--controller');
        controllerField.textContent = 'controller';
        let idField = document.querySelector('.js--id');
        idField.textContent = 'id';
        let resultField = document.querySelector('.js--resultField');
        let infoBlock = document.querySelector('.js--info');
        infoBlock.textContent = '';

        let regex = /^[a-zA-Z0-9/]+$/;

        if (!regex.test(inputValue) || inputValue === '') {
            resultField.textContent = 'Invalid input. Use only letters, numbers or "/".';
            return;
        }

        try {
            button.setAttribute('disabled', 'disabled');
            spinner.style.display = 'inline-block';

            let response = await fetch(`https://swapi.dev/api/${inputValue}`, {
                method: 'GET'
            })
            let responseData = await response.json();

            infoBlock.insertAdjacentHTML("beforeend", JSON.stringify(responseData, null, 2));

            controllerField.textContent = inputValue.split('/')[0];
            idField.textContent = inputValue.split('/')[1];
        } catch (error) {
            resultField.textContent = `Request error! ${error.message}`;
        } finally {
            spinner.style.display = 'none';
            button.removeAttribute('disabled');
        }
    });
});


