import React from 'react';

function Contact() {
    return (
        <div className="h-screen bg-red-400">
            <h1 className="mb-lg-5">Contact</h1>

            <div className='flex text-right'>
                <p>Laat hier een bericht achter</p>
                <form className=''>
                    <input className='rounded mb-3' type='text' placeholder="Naam"/> <br/>
                    <input className='rounded mb-3' type='text' placeholder="Email"/> <br/>
                    <input className='rounded mb-3' type='text' placeholder="Onderwerp"/> <br/>
                    <textarea className='rounded mb-3 w-25 h-25' placeholder="Bericht"/>
                </form>
            </div>

        </div>

    );
}

export default Contact;