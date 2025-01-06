document.addEventListener('DOMContentLoaded', () => {
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');

  // Toggle password visibility
  togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
  });

  // Switch to signup form
  const signupLink = document.getElementById('signupLink');
  const formTitle = document.querySelector('.form-title');
  const loginForm = document.getElementById('loginForm');

  signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    formTitle.textContent = 'Sign Up';
    loginForm.innerHTML = `
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Username" required />
      <div class="password-container">
        <input type="password" id="signupPassword" placeholder="Password" required />
        <button type="button" id="signupTogglePassword" class="toggle-btn">👁️</button>
      </div>
      <button type="submit" class="btn">Sign Up</button>
      <p>Already have an account? <a href="#" id="loginLink">Login</a></p>
    `;

    const signupPasswordInput = document.getElementById('signupPassword');
    const signupTogglePassword = document.getElementById('signupTogglePassword');

    signupTogglePassword.addEventListener('click', () => {
      const type = signupPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      signupPasswordInput.setAttribute('type', type);
      signupTogglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    document.getElementById('loginLink').addEventListener('click', (e) => {
      e.preventDefault();
      location.reload();
    });
  });
});
