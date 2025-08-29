// signup-form.js

// Get form elements
const signupForm = document.getElementById('signup');
const signupMessage = document.getElementById('signup-message');

// Show/Hide Forms
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    signupMessage.innerText = '';
}

function showSignup() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    signupMessage.innerText = '';
}

// Listen for form submission
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const password2 = document.getElementById('signup-password2').value;

    // Validate passwords match
    if(password !== password2) {
        signupMessage.innerText = 'Passwords do not match';
        return;
    }

    // Load existing users from localStorage
    const users = JSON.parse(localStorage.getItem('blogapp.users') || '[]');

    // Check if email already exists
    if(users.some(u => u.email === email)) {
        signupMessage.innerText = 'Email already registered';
        return;
    }

    // Save new user
    users.push({name, email, password});
    localStorage.setItem('blogapp.users', JSON.stringify(users));

    signupMessage.style.color = 'green';
    signupMessage.innerText = 'Sign up successful! You can now login.';
    signupForm.reset();
});

// Export functions if needed
export { showLogin, showSignup };