const main = document.getElementById('main');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    main.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    main.classList.remove("active");
});