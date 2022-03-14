import React from 'react'
import './LoginPage.css'


export default function LoginPage() {
  return (
        <>
          <div class="container" id="container">
            <div class="form-container sign-in-container">
              <form>
                <h2 className="h1 text-center mb-4">Log in</h2>
                <div class="social-container">
                  <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <a href="#"  class="text-body">Forgot your password?</a>
                 
                <button>Sign In</button>
               
              </form>
            </div>

            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                
                  <p>Enter your personal details and start journey with us</p>
                  <a href="/register">
                    <button class="ghost" id="signUp">Sign Up</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}



