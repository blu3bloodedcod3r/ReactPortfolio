import React from 'react';
import grasshopper from '../images/grasshopperImage.jpg';
import codecademy from '../images/codecademy.jpg';

export default function Certificates() {
    return (
        <div className="certifications">
            <h2>Certifications</h2>
            <section className="cert-cont">
                <div className="cert-card">
                    <img className="cert-img" src={grasshopper} alt="grassHopper icon image"/>
                    <h3>GrassHopper</h3>
                    <ul className="cert-descr">
                        <a href="../certifications/GrasshopperCodingFundamentalsCertificate.pdf" target="_blank"><li>Coding Fundamentals</li></a>
                        <a href="../certifications/GrasshopperUsingaCodeEditorCertificate.pdf" target="_blank"><li>Using a Code Editor</li></a>
                        <a href="../certifications/GrasshopperIntrotoWebpagesCertificate.pdf" target="_blank"><li>Intro to Web Pages</li></a>
                        <a href="../certifications/GrasshopperIntrotoInterviewingCertificate.pdf" target="_blank"><li>Intro to Interviewing</li></a>
                        <a href="../certifications/GrasshopperAutomationCertificate.pdf" target="_blank"><li>Automation</li></a>
                        <a href="../certifications/GrasshopperArrayMethodsCertificate.pdf" target="_blank"><li>Array Methods</li></a>
                        <a href="../certifications/GrasshopperAnimationsCertificate.pdf" target="_blank"><li>Animations</li></a>
                        <a href="../certifications/GrasshopperAnimationsIICertificate.pdf" target="_blank"><li>Animations II</li></a>
                    </ul>
                </div>
                <div className="cert-card">
                    <img className="cert-img" src={codecademy} alt="codecademy icon image"/>
                    <h3>Codecademy</h3>
                    <ul className="cert-descr">
                        <a href="../certifications/css_codecademy.pdf" target="_blank"><li>LearnCSS Course</li></a>
                        <a href="../certifications/js _ Codecademy.pdf" target="_blank"><li>LearnJavaScript Course</li></a>
                        <a href="../certifications/python3 _ Codecademy.pdf" target="_blank"><li>LearnPython 3 Course</li></a>
                    </ul>
                </div>
            </section>
        </div>
    );
}