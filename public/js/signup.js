const usernameInput = document.querySelector('#username-signup');
const passwordInput = document.querySelector('#password-signup');
const signupBtn = document.querySelector('#signup-btn');
const loginRedirects = document.querySelector('#login-redirect');

async function singupFormHandler(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log('success');
      window.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

function loginPage() {
  window.location.replace('/login');
}

signupBtn.addEventListener('click', singupFormHandler);
loginRedirects.addEventListener('click', loginPage);