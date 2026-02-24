import React from 'react';
import ProfilePicture from "../assets/ProfilePicture.jpg"
function StartPage() {
    return (
        <div className="d-flex align-items-center justify-content-center" style={styles.background}>
            <div style={{flex: 1, alignItems: 'start', display: 'flex', flexDirection: 'column', margin: '4rem'}}>
                <div style={{paddingRight: '10rem', margin:'2rem'}}>
                    <h3 style={{fontSize: 35}}>Hallo, ik ben</h3>
                    <h1 style={{fontSize: 80}}>Eline Mol</h1>
                    <span style={{
                        background: "linear-gradient(to right, #FF5CCC, #973DA4)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        WebkitTextFillColor: "transparent",
                        fontSize: 35,
                        fontWeight: "bold",
                        display: "inline-block"
                    }}
                    >Software Developer</span>
                    <div>
                        <button style={styles.button}>Neem contact op</button>
                    </div>

                </div>

            </div>
            <div style={{flex: 1, justifyContent: 'right'}} className="d-flex">
                <div style={{overflow: "hidden", aspectRatio: "1/1", borderRadius: "100%", width: 500}}>
                    <img src={ProfilePicture} alt="" style={{height: 500}}/>
                </div>
            </div>
        </div>


    );
}

const styles = {
    background: {
        padding: '4rem',

    },
    button: {
        fontSize: '23px',
        width: '350px',
        borderRadius:'30px',
        marginTop: '50px',
        borderColor: 'purple',
        borderWidth: '3px',
        color: "purple",
        backgroundColor:'transparent'


    }
}
export default StartPage;