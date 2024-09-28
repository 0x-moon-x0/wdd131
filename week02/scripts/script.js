const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const error = document.querySelector('#errorMessage');

button.addEventListener('click', function(){
    if (input.value.trim() !== '') {

        error.style.display = 'none';
        
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', function (){
            list.removeChild(li);
            input.focus();
        })

        input.value = '';
    }
    else {
        error.style.display = 'block';
    }

    input.focus();
});