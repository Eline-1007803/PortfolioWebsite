import React from 'react';
import Bg from "../assets/pink-bg.jpg";

function Contact() {
    return (
        <div className='h-screen flex justify-center mb-lg-5' >
            <div>
                <h1 className="mb-lg-5">Contact</h1>

                <form style={{maxWidth: '600px', margin: '0 auto'}} className='text-left'>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor='firstName'>Voornaam *</label>
                            <input style={{padding: "12px", borderRadius: "8px", border: "1px solid lightgray"}} className='rounded w-75 mb-4 p-1' type='text' id='firstName' required/>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor='lastName'>Achternaam *</label>
                            <input style={{padding: "12px", borderRadius: "8px", border: "1px solid lightgray"}} className='rounded w-75 p-1' type='text' id='lastName' required/>
                        </div>

                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor='email'>Email *</label>
                        <input style={{padding: "12px", borderRadius: "8px", border: "1px solid lightgray"}} className='rounded mb-4 p-2' type='text' id='email' required/>

                        <label htmlFor='phoneNumber'>Telefoonnummer</label>
                        <input style={{padding: "12px", borderRadius: "8px", border: "1px solid lightgray"}}  className='rounded mb-4 p-2' type='text' id='phoneNumber'/>

                        <label htmlFor='subject'>Onderwerp *</label>
                        <input style={{padding: "12px", borderRadius: "8px", border: "1px solid lightgray"}} className='rounded mb-4 p-2' type='text' id='subject' required/>

                        <label htmlFor='message'>Bericht *</label>
                        <textarea style={{padding: "12px", borderRadius: "8px", border: "1px solid lightgray"}}  className='rounded w-100 h-2/3' id='message' required/>
                    </div>
                    <div className='mt-5' style={{marginLeft:'90px'}}>
                        <button style={{backgroundColor:'#ffdaec', padding:'10px', borderRadius:'10px', width:'200px', boxShadow: '10px 10px lightgray'}}>Verzenden</button>
                    </div>

                </form>
            </div>


        </div>


    )

}

const styles = {
    form: {
        position: 'relative',
        marginBottom: '1.25rem'
    },
    label: {
        position: 'absolute',
        top: '0',
        left: '0',

    }


}


export default Contact;