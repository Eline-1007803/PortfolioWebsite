import React from 'react';
import LaptopImage from "../assets/Laptop.jpg"

function About() {
    return (
        <div>
            <div style={{marginTop:'70px'}}>
                <h1>Over Mij</h1>
            </div>
            <div className="h-screen flex items-center gap-xxl-5" >
                <div className="flex h-75 m-xl-5">
                    <img src={LaptopImage} className=' h-auto max-h-96 object-contain'/>
                </div>

                <div className="text-center ">

                    <h2>Wie ben ik?</h2>
                    <div style={styles.section}>
                        <p>
                            Ik ben Eline Mol, een gedreven Software Developer <br/>
                            met een passie voor het bouwen van slimme,
                            gebruiksvriendelijke en efficiënte webapplicaties.
                            Ik houd ervan om complexe problemen op te lossen en mijn code overzichtelijk en schaalbaar
                            te houden. Daarnaast ben ik een echte teamplayer en werk graag in Scrum teams.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

const styles = {
    header: {
        fontWeight: 'bold'
    },
    section: {
        fontSize: '1.25rem',
        color: '#333',
        width: '500px'
    }
}
export default About;