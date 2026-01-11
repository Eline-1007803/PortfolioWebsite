import React from 'react';
import ProfilePicture from "../assets/ProfilePicture.jpg"
function StartPage() {
    return (
        <div className=" vw-100 d-flex align-items-center justify-content-center" style={{marginTop: '4rem'}}>
            <div style={{flex: 1, justifyContent: 'right'}} className="d-flex">
                <div style={{overflow: "hidden", aspectRatio: "1/1", borderRadius: "100%", width: 500}}>
                    <img src={ProfilePicture} alt="" style={{height: 500}}/>
                </div>
            </div>


            <div style={{flex: 1, alignItems: 'start', display: 'flex', flexDirection: 'column'}}>
                <div style={{paddingLeft: '10rem'}}>
                    <h3 style={{fontSize: 35}}>Hallo, ik ben</h3>
                    <h1 style={{fontSize: 80}}>Eline Mol</h1>
                    <span style={{
                        background: "linear-gradient(to right, #FF5CCC, #973DA4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: 35, fontWeight: "bold",
                        display: 'block'
                    }}
                    >Software Developer</span>

                    <button style={{ marginTop: '1.5rem', backgroundColor: 'lightgray'}}>Neem contact op</button>
                </div>
                <div className="d-flex align-items-center justify-content-center">

                </div>

            </div>
        </div>


    );
}

export default StartPage;