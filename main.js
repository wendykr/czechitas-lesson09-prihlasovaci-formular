// tady je místo pro náš program

const user = {
    email: 'bartolomej.rozumbrada@gmail.com',
    password: 'vimzenicnevim',
    name: 'Bartoloměj',
}

const formElm = document.querySelector('form');
const emailElm = document.querySelector('#email-input');
const passwordElm = document.querySelector('#password-input');
const statusElm = document.querySelector('#status');

const process = (event) => {
    event.preventDefault();

    if(user.email === emailElm.value && user.password === passwordElm.value) {
        formElm.innerHTML = 'Přihlášený uživatel ' + user.name;
        console.log('OK');
    } else {
        statusElm.innerHTML = 'Neplatné přihlašovací údaje';
        passwordElm.value = '';
        console.log('KO');
    }
    console.log(user.email);
    console.log(event);
}

formElm.addEventListener('submit', process);

const validator = (event) => {
    if (emailElm.value.indexOf('@') === 0) {
        emailElm.classList.remove('warning');
        emailElm.classList.add('akcept');
        console.log('OK')
    } else if (emailElm.value === '' || emailElm.value.indexOf('@') === -1 || !emailElm.value.indexOf('@')) {
        emailElm.classList.add('warning');
        emailElm.classList.remove('akcept');
        console.log('KO');
    } else {
        emailElm.classList.remove('warning');
        emailElm.classList.add('akcept');
        console.log('OK')
    }
    console.log(event.target.value);
}

emailElm.addEventListener('input', validator);