import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "597d428e-f92c-40e8-be79-2a476d477e23");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="contact-tittle">
            <h2>Get in touch</h2>
            <img src={theme} alt="" />
        </div>
        <div className="contact-sections">
            <div className="contact-left" >
                <h1 id="contact-h1">Let's talk</h1>
                <p>Feel free to connect with me to brainstorm and develop innovative ideas together. I'm always open to collaborating on exciting projects and exploring new technologies!</p>
                <div className="contact-details">
                  <div className="contact-detail">
                   <img src={mail_icon} alt="" /> <p>udaykiranponnaganti6@gmail.com</p>
                  </div>
                  <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+91 9063571736</p>
                  </div>
                  <div className="contact-detail">
                        <img src={location_icon} alt="" /><p> ongole ,Andhrapradesh</p>
                  </div>

                </div>
                 
                
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Name:</label>
                <input type="text" name='name' placeholder='Enter name' />
                <label htmlFor="">Enter your Email</label>
                <input type="email" name='email' placeholder='email' />
                <label htmlFor="">Enter your message</label>
                <textarea name="message" rows='4' placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>submit now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact