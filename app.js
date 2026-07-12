// 1. Configuration constants
const CLIENT_ID = "Ov23li0svl09VYR7LwIo"; 

// 2. Trigger the redirect to GitHub
document.getElementById('github-login-btn').addEventListener('click', () => {
    // Request only basic read access to verify identity
    const scopes = 'read:user';
    
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${encodeURIComponent(scopes)}`;
    
    // Hand execution off to GitHub's secure interface
    window.location.href = githubAuthUrl;
});


const BACKEND_URL = 'https://momentum-auth-backend.onrender.com';

// 1. Trigger the GitHub handshake login flow
function loginWithGitHub() {
    const CLIENT_ID = 'YOUR_GITHUB_CLIENT_ID'; // Ov23li0svl09VYR7LwIo
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=read:user`;
}

// 2. Run this automatically when the page loads to check if a user just logged in
window.addEventListener('DOMContentLoaded', () => {
    // Grab the query parameters from the browser address bar
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        // Dynamically alter interface states on confirmation
        document.getElementById('auth-title').innerText = `Welcome, ${username}!`;
        document.getElementById('auth-subtitle').innerText = "You have successfully authenticated with Momentum Digital.";
        
        // Optional: Hide your "Continue with GitHub" button since they are logged in
        const loginBtn = document.getElementById('github-btn');
        if (loginBtn) loginBtn.style.display = 'none';
    }
});