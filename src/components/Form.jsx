// global fbq

import { useState } from 'react';
import FormImage from '../assets/images/Contact/Group 2.png';
import axios from 'axios';

const Form = () => {

    const [isFormSent, setFormSent] = useState(false);
    
    const auto_grow = () => {
        let element = document.getElementById("message_textarea")
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }

    const formSubmit = async (e)=>{
        e.preventDefault();
        const tracking = await JSON.parse(localStorage.getItem("tracking"));
        const formData = new FormData(e.target);
        const { full_name, email, phone_number, layout, move_in_date, message} = Object.fromEntries(formData);
        const data = {
            full_name,
            phone_number,
            email,
            source: '2339nostrand.com',
            layout,
            move_in_date,
            message,
            tracking,
        };
        axios.post('https://www.exrny.com/api/leads/', data).finally(() => {
            e.target.reset()
            setFormSent(true);
            // fbq('trackCustom', 'contactFormSubmit');
        })
    }
    const placeholderRemove = (e) => {
        if(e.target.value){
            e.target.placeholder = "";
        }
    }
    return (
        <section className="form-image" id="form">
           <div className="inner">
                <div className="content">
                    <div className="form">
                    <form
                        onSubmit={formSubmit}
                        id='main_form'
                    >
                    {
                    isFormSent
                        ? (
                        <div
                           className='thankyou'
                        >
                            <h2 data-aos="fade-left">
                                Thank you!
                            </h2>
                            <p data-aos="fade-left">
                                We’ll be in touch
                            </p>
                        </div>
                        )
                        : (
                            <>
                                <input class="form-control-input full-name" type="text" placeholder="Full Name*" name="full_name" required/>
                                <input class="form-control-input email" type="email" placeholder="Email address*" name="email" required/>
                                <input class="form-control-input phone" type="tel" placeholder="Phone number*" name="phone_number" pattern="[0-9\-]*" required/>
                                <div className="select-wrap">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"></path> </g></svg>
                                    <select class="form-control-input layout" name="layout" required>
                                        <option id='PH' value="" disabled selected>Desired layout*</option>
                                        <option value="0">1 Bed</option>
                                        <option value="1">2 Bed</option>
                                        <option value="2">3 Bed</option>
                                    </select>
                                </div>
                                <div className="date-wrap">
                                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Calendar / Calendar_Days"> <path id="Vector" d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                                    <input class="form-control-input date" onInput={placeholderRemove} onBlur={placeholderRemove} type="date" placeholder="Schedule*" name="move_in_date" required />
                                </div>
                                <textarea id="message_textarea" onChange={()=>{auto_grow()}} name="message" placeholder='Message*' rows="2" required/>
                                <button type="submit" class="button submit" id="send">Send Message</button>
                            </>
                        )
                    }
                    </form>
                    </div>
                    {/* <div className="text-button">
                        <p className="txt" data-aos="fade-left">
                            Looking for a link to apply?
                        </p>
                        <a href="https://www.exrny.com/apply?utm_source=https%3A%2F%2F1946ocean.com%2F&utm_medium=referral&utm_campaign=landing_pages" className="button"> 
                            Click here 
                        </a>
                    </div> */}
                </div>
                <div className="image-wrap">
                    <img src={FormImage} alt="form"/>
                </div>
           </div>
        </section>
    )
}

export default Form