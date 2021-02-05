import React from 'react'

import './Contact.css'

function Contact () {
    return (
        <section className = 'contact-section' id = "contact-section">
        <h2 className = 'contact-header'>get in touch</h2>
        <div className = 'form-background'>  
        <form name = 'contactForm' id = 'contact-form'>
            <label htmlFor="name">Name</label>
            <input type = 'text' name = 'formName' className = 'input' id = 'name' required/>
            <label htmlFor="email">Email</label>
            <input type = 'email' name = 'formEmail' className = 'input' id = 'email' required/>
            <label htmlFor="comment">Comment</label>
            <input type = 'text' name = 'formComment' className = 'input comment'/>
            <input type = 'submit' value = 'Submit' />
        </form>
        </div>  
        </section>
    )
}

export default Contact