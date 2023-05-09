import React from "react";
import "./styles/footer.css";


export default function Footer() {
    

    return (
        <>
            <div className="footer-container">
                <div className="social-media">
                    <div><i className="fa-brands fa-facebook icons"></i></div>
                    <div><i className="fa-brands fa-instagram icons"></i></div>
                    <div><i className="fa-brands fa-youtube icons"></i></div>
                    <div><i className="fa-brands fa-whatsapp icons"></i></div>
                    <div><i className="fa-brands fa-twitter icons"></i></div>
                    <div><i className="fa-solid fa-envelope"></i></div>
                </div>
                <div className="copyright">The Open Movie Database | API by Brian Fritz</div>
            </div>
        </>
    )
}
