import React from 'react';
import selfie from '../images/20220917_191414.jpg';


export default function About() {
    return (
        <div className="mystory">
            <h2> My Story</h2>
                <p>Nice of you to visit! Just a little history on me... I am a former Pharmacy Technician who has crossed over into the tech world. I currently spend my spare time with my dog, reading books and spending time with my nephews and friends. I have a constant need for knowledge and how to improve myself and my skillset so I took it upon myself to learn how to code. I started by teaching my self on a few websites such as Grasshopper and Codecademy. After a few months of being self-taught, I enrolled myself for a Full-Stack Web Development Bootcamp at UCLA extension. I want a position in the ever growing tech industry, so I am looking to gather experience as a Full-Stack Web Developer.</p>
            <img className="selfie" src={selfie} alt="Crystal"/>
        </div>

    );
}