document.addEventListener('DOMContentLoaded', () => {
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');

  // Toggle password visibility
  togglePassword.addEventListener('click', () => {
    const isPasswordVisible = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPasswordVisible ? 'text' : 'password');

    // Toggle Font Awesome icons
    const icon = togglePassword.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
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
      <input type="text" placeholder="Create password" required />
      <div class="password-container">
        <input type="password" id="signupPassword" placeholder="Confirm password" required />
        <button type="button" id="signupTogglePassword" class="toggle-btn">
          <i class="fas fa-eye"></i>
        </button>
      </div>
      <button type="submit" class="btn">Sign Up</button>
      <p style="text-align: center; color: black;">Already have an account? <a href="#" id="loginLink">Login</a></p>
      <div class="option_container">
        <p style="color: black;" class="option_text">or</p>
      </div>
      <div class="social-buttons">
        <button class="social-btn google">Login with Google</button>
        <button class="social-btn facebook">Login with Facebook</button>
      </div>
    `;

    // Add toggle functionality for signup form password
    const signupPasswordInput = document.getElementById('signupPassword');
    const signupTogglePassword = document.getElementById('signupTogglePassword');

    signupTogglePassword.addEventListener('click', () => {
      const isPasswordVisible = signupPasswordInput.getAttribute('type') === 'password';
      signupPasswordInput.setAttribute('type', isPasswordVisible ? 'text' : 'password');

      // Toggle Font Awesome icons
      const icon = signupTogglePassword.querySelector('i');
      icon.classList.toggle('fa-eye');
      icon.classList.toggle('fa-eye-slash');
    });

    // Switch back to login form
    document.getElementById('loginLink').addEventListener('click', (e) => {
      e.preventDefault();
      location.reload();
    });
  });
});

