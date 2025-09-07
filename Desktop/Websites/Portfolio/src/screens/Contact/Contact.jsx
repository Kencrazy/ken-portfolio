import React, { useRef, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import shape from '../../assets/shape.png';
import { useLocation } from 'react-router';

function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState('');
    const location = useLocation();
    const { title } = location.state || {};

    console.log(title)

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

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            });
        };
    }, []);

    const sendEmail = () => {
        const form = formRef.current;
        const name = form.name.value.trim();
        const emailInput = form.email.value.trim();
        const phone = form.phone.value.trim();
        let message = form.message.value.trim();

        if (!name || !emailInput || !message) {
            setStatus('Please fill in all required fields.');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
            setStatus('Please enter a valid email address.');
            return;
        }

        // Append the title to the message if it exists
        if (title) {
            message = `Project: ${title}\n\n${message}`;
        }

        // Update the message field in the form before sending
        form.message.value = message;

        emailjs.sendForm(
            'service_yov2ugm',
            'template_ru68607',
            formRef.current,
            'F5_GmGdWEyv72pOU5'
        ).then(
            () => {
                setStatus('Message sent successfully! I will contact you soon.');
                formRef.current.reset();
                const inputs = formRef.current.querySelectorAll(".input");
                inputs.forEach((input) => input.parentNode.classList.remove("focus"));
            },
            () => {
                setStatus('Failed to send message. Please try again.');
            }
        );
    };

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
                                <img src={email} className="icon" alt="Email icon" />
                                <p>astreamer377@gmail.com</p>
                            </div>
                            <div className="information">
                                <img src={phone} className="icon" alt="Phone icon" />
                                <p>0862887787</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form ref={formRef} autoComplete="off">
                            <h3 className="title">Contact me {title ? `about ${title}` : ''}</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" required />
                                <label>Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" required />
                                <label>Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" pattern="[0-9]*" />
                                <label>Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input" required></textarea>
                                <label>Message</label>
                                <span>Message</span>
                            </div>
                            <button type="button" onClick={sendEmail} className="btn">
                                Send
                            </button>
                            {status && (
                                <p className={`mt-2 ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;