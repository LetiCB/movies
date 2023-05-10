import React from "react";
import "./styles/contact-form.css";


export default function ContactForm () {

    return (
        <>
            <div className="form-container">
                    <h2>Contact us</h2>
                    <form name="contact-form">
                        <div className="form-items">
                        <input type="text" className="contact-input" name="name" placeholder="Enter your name"></input>
                        <br/><br/>
                        <input type="email" className="contact-input" name="email" placeholder="Enter your e-mail"></input>
                        <br/><br/>
                        <textarea name="mesage" className="contact-textarea" placeholder="Enter your message"></textarea>
                        <br/><br/>
                        <input type="submit" className="btn" value="send"></input>
                        </div>
                    </form>
            </div>

        </>
    )
}