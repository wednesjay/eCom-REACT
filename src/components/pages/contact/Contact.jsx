import React from 'react'

import './Contact.css'

function Contact () {

    function validateForm() {
        const x = document.forms['contactForm']['formName'].value;
        if (x === "") {
            alert("Name must be filled out");
            return false;
        }
    }

    return (
        <section className = 'contact-section'>
        <form name = 'contactForm' onSubmit = 'return validateForm()'>
            Name: <input type = 'text' name = 'formName' />
            Email: <input type = 'email' name = 'formEmail' />
            Comment: <input type = 'text' name = 'formComment' />
            <input type = 'submit' value = 'Submit' />
        </form>
        </section>
    )
}

export default Contact