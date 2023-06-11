let showPass = false;

const handlePass = () => {
    showPass = !showPass;
    const eyePassword = document.getElementById('eyePassword');
    const inputPassword = document.getElementById('password');
    inputPassword.setAttribute('type', showPass ? 'text': 'password');
    eyePassword.setAttribute('src', `img/password-${showPass ? 'off': 'on'}.svg`);
}