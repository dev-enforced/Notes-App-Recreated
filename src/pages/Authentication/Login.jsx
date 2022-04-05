import React from 'react';
import { NavLink } from 'react-router-dom';
import "./authentication.css";
const Login = () => {
    return (
        <section className='main-container'>
            <div className="auth-wrapper flex-row flex-center">
                <div className="form-container">
                    <div className="form-header text-center">
                        <p className="form-heading-text">
                            Log In
                        </p>
                    </div>
                    <form className="auth-form">
                        <div className="form-input-container">
                            <label htmlFor="emailGiven" className="form-input-label">
                                Email Address
                            </label>
                            <input type="email" id="emailGiven" className="auth-input" placeholder='krishpatel@gmail.com' required />
                        </div>
                        <div className="form-input-container">
                            <label htmlFor="passwordGiven" className="form-input-label">
                                Password
                            </label>
                            <input type="password" id="passwordGiven" className="auth-input" placeholder='******' required />
                        </div>
                        <button type='submit' className='py-2 px-3 hero-btn hero-btn-primary'>LOG IN</button>
                    </form>
                    <div className="form-actions flex-column gentle-flex-gap flex-align-center">
                        <p>
                            <button className='px-2 py-3 hero-btn hero-btn-primary'>GUEST LOGIN</button>
                        </p>
                        <p>
                            <NavLink to="/signup" className="link-none">New To UNOTE ? Join Now</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Login };