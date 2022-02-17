import React from 'react';

const Contact = () => {
    return ( 
        <section className="my-14 grid grid-cols-2 gap-x-12 col-start-2 col-span-4">
            <div className="address">
                <h2>Addresse</h2>
                <address className='non-italic'>
                    <p className='not-italic'>Prinsesse Charlottes Gade 41, kld <br /> 2200, København N</p>
                </address>
            </div>
            <div className="contact-details">
                <h2>Kontakt</h2>
                <p>+45 53 69 80 60 <br /> info@krutklip.com</p>
            </div>
        </section>
     );
}
 
export default Contact;