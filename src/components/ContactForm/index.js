import React, {useState} from "react";
import "./styles/contact-form.css";
import { saveFormData } from "../../redux/slices/form/formSlice";
import { useDispatch, useSelector } from "react-redux";



export default function ContactForm () {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveFormData(formData));
        // Clear the form data after submiting
    setFormData({
        name: '',
        email: '',
        message: ''
      });
      };

      let formfullofdata = useSelector((store)=> store.form.data)
      console.log(formfullofdata)


    return (
        <>
            <div className="form-container">
                    <h2>Contact us</h2>
                    <form name="contact-form" onSubmit={handleSubmit}>
                        <div className="form-items">
                        <input type="text" className="contact-input" name="name" placeholder="Enter your name"
                            value={formData.name} onChange={handleChange}></input>
                        <br/><br/>
                        <input type="email" className="contact-input" name="email" placeholder="Enter your e-mail" 
                            value={formData.email} onChange={handleChange}></input>
                        <br/><br/>
                        <textarea name="message" className="contact-textarea" placeholder="Enter your message" 
                            value={formData.message} onChange={handleChange}></textarea>
                        <br/><br/>
                        <input type="submit" className="btn" value="send"></input>
                        </div>
                    </form>
            </div>

        </>
    )
}