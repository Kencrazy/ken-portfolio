import React, { useEffect } from 'react';
import './styles.css';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import shape from '../../assets/shape.png';
import BottomNav from '../../components/bottomNav';

function Contact() {
    useEffect(() => {
        const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if (this.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
        });

        // Cleanup function to remove event listeners
        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            });
        };
    }, []);

    return (
        <>
            <div className="container3">
                <span className="big-circle"></span>
                <img src={shape} className="square" alt="" />
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">Let's get in touch</h3>
                        <p className="text">
                            Feel free to reach out to me via email or phone. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="info">
                            <div className="information">
                                <img src={email} className="icon" alt="" />
                                <p>lienquanaren@gmail.com</p>
                            </div>
                            <div className="information">
                                <img src={phone} className="icon" alt="" />
                                <p>0869081579</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form action="index.html" autoComplete="off">
                            <h3 className="title">Contact me</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" />
                                <label>Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" />
                                <label>Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" />
                                <label>Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input"></textarea>
                                <label>Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
            <BottomNav />
        </>
    );
}

export default Contact;