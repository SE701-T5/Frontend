import React from 'react'
import './LoginPage.css'


export default function RegisterPage() {
  return (
    <>
    <div class="container" id="container">
      <div class="form-container sign-up-container">
        <form>
          <h2 className="h1 text-center mb-4">Create Account</h2>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          
          <span>or use your email for registration</span>
          <input type="email" placeholder="Email" />
          <input type="username" placeholder="Username" />
          <input type="password" placeholder="Password" />
          
          
          <button>Sign Up</button>
         
        </form>
      </div>

      <div class="overlay-container-left">
        <div class="overlay-ll">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>Please login with your personal details and start journey with us</p>
            <a href="/login">
                    <button class="ghost" id="login">Log in</button>
                  </a>
          </div>
        </div>
      </div>
    </div>
  </>
    );
}



